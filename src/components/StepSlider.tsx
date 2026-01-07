import { useState, useRef, useCallback, type FC } from 'react';

interface StepSliderProps {
  /** Array of step values (e.g., [0, 15, 30, 45, 60, 75, 90, 105, 120]) */
  steps: number[];
  /** Current selected step index (0-based) */
  value: number;
  /** Callback when step changes */
  onChange?: (index: number) => void;
  /** Optional className for additional styling */
  className?: string;
}

const StepSlider: FC<StepSliderProps> = ({
  steps,
  value,
  onChange,
  className = '',
}) => {
  const totalSteps = steps.length;
  const progressPercent = totalSteps > 1 ? (value / (totalSteps - 1)) * 100 : 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Thumb position: at edges, align to container bounds; in between, center the thumb
  const thumbSize = 20; // w-5 = 20px
  const getThumbLeft = () => {
    if (totalSteps <= 1) return 0;
    // Calculate position based on percentage, accounting for thumb width
    const percent = value / (totalSteps - 1);
    return `calc(${percent * 100}% - ${thumbSize * percent}px)`;
  };

  const calculateIndex = useCallback((clientX: number) => {
    if (!containerRef.current || !onChange) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newIndex = Math.round(percentage * (totalSteps - 1));
    onChange(newIndex);
  }, [onChange, totalSteps]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    calculateIndex(e.clientX);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      calculateIndex(moveEvent.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    calculateIndex(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      calculateIndex(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-5 cursor-pointer touch-none ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background track */}
      <div className="absolute left-0 top-[4px] w-full h-3 bg-neutral-700 rounded-[30px]" />

      {/* Progress fill */}
      <div
        className="absolute left-0 top-[5px] h-2.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-[30px] transition-[width] duration-75"
        style={{ width: `calc(${progressPercent}% + ${progressPercent > 0 ? 4 : 0}px)`, boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)" }}
      />

      {/* Tick marks container - aligned with labels below */}
      <div className="absolute left-0 top-[5px] w-full h-3 flex justify-between items-center">
        {steps.map((_, index) => (
          <span
            key={index}
            className="w-6 text-center text-white text-xs font-medium font-['Baloo_2'] leading-3"
            style={{ textShadow: '0px 1px 1px rgba(0, 0, 0, 0.5)' }}
          >
            I
          </span>
        ))}
      </div>

      {/* Thumb/Handle */}
      <div
        className={`absolute top-0 w-5 h-5 ${isDragging ? '' : 'transition-all duration-100 ease-out'}`}
        style={{ left: getThumbLeft() }}
      >
        {/* Outer circle */}
        <div className="absolute inset-0 bg-orange-50 rounded-full border border-orange-200 shadow-[inset_0px_-3px_1px_0px_rgba(236,220,202,1)]" />
        {/* Inner circle */}
        <div className="absolute left-[5px] top-[5px] w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
      </div>
    </div>
  );
};

export default StepSlider;
