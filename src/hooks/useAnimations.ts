import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Check if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for staggered appearance animations on page load
 * Returns animation class names for each item based on index
 */
export function useStaggeredAppear(_itemCount: number): {
  getAnimationClass: (index: number) => string;
  isReady: boolean;
} {
  const [isReady, setIsReady] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => setIsReady(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const getAnimationClass = useCallback(
    (index: number): string => {
      if (prefersReducedMotion || !isReady) return '';
      const delayIndex = Math.min(index, 5);
      return `animate-fade-slide-up animation-delay-${delayIndex}`;
    },
    [prefersReducedMotion, isReady]
  );

  return { getAnimationClass, isReady };
}

/**
 * Hook for animated progress bar with shine effect
 * Animates from 0% to target on mount, and shows shine on value increase
 */
export function useProgressBar(
  currentValue: number,
  maxValue: number,
  animationDelay: number = 300
): {
  percentage: number;
  animatedPercentage: number;
  showShine: boolean;
  progressRef: React.RefObject<HTMLDivElement | null>;
} {
  const [showShine, setShowShine] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const previousValue = useRef(currentValue);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasMounted = useRef(false);

  const percentage = Math.min((currentValue / maxValue) * 100, 100);

  // Animate from 0 to percentage on mount
  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimatedPercentage(percentage);
      return;
    }

    // Initial mount animation
    if (!hasMounted.current) {
      hasMounted.current = true;
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
        // Show shine after animation completes
        setTimeout(() => {
          setShowShine(true);
          setTimeout(() => setShowShine(false), 450);
        }, 300);
      }, animationDelay);
      return () => clearTimeout(timer);
    }

    // Subsequent value changes
    setAnimatedPercentage(percentage);
  }, [percentage, prefersReducedMotion, animationDelay]);

  useEffect(() => {
    // Trigger shine when value increases (after mount)
    if (hasMounted.current && currentValue > previousValue.current && !prefersReducedMotion) {
      setShowShine(true);
      const timer = setTimeout(() => setShowShine(false), 450);
      previousValue.current = currentValue;
      return () => clearTimeout(timer);
    }
    previousValue.current = currentValue;
  }, [currentValue, prefersReducedMotion]);

  return { percentage, animatedPercentage, showShine, progressRef };
}

/**
 * Hook for button press animation feedback
 */
export function useButtonPress(): {
  isPressed: boolean;
  pressHandlers: {
    onMouseDown: () => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
  };
} {
  const [isPressed, setIsPressed] = useState(false);

  const pressHandlers = {
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
    onMouseLeave: () => setIsPressed(false),
    onTouchStart: () => setIsPressed(true),
    onTouchEnd: () => setIsPressed(false),
  };

  return { isPressed, pressHandlers };
}

/**
 * Hook for reward/celebration animation
 */
export function useRewardAnimation(): {
  isVisible: boolean;
  showReward: () => void;
  hideReward: () => void;
  sparklePositions: Array<{ id: number; className: string }>;
} {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const sparklePositions = [
    { id: 1, className: 'sparkle sparkle-1' },
    { id: 2, className: 'sparkle sparkle-2' },
    { id: 3, className: 'sparkle sparkle-3' },
    { id: 4, className: 'sparkle sparkle-4' },
    { id: 5, className: 'sparkle sparkle-5' },
  ];

  const showReward = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideReward = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Auto-hide after animation completes
  useEffect(() => {
    if (isVisible && !prefersReducedMotion) {
      const timer = setTimeout(() => setIsVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, prefersReducedMotion]);

  return {
    isVisible,
    showReward,
    hideReward,
    sparklePositions: prefersReducedMotion ? [] : sparklePositions,
  };
}

/**
 * Utility to combine class names conditionally
 */
export function animationClasses(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
