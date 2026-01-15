import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

const SplashPage = () => {
  const [progress, setProgress] = useState(0);
  const [showShine, setShowShine] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for natural feel
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Show shine effect when progress updates
  useEffect(() => {
    if (progress > 0 && progress < 100) {
      setShowShine(true);
      const timer = setTimeout(() => setShowShine(false), 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Navigate when loading completes
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        navigate('/selection');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, navigate]);

  return (
    <div className="w-full h-full max-w-[768px] flex flex-col overflow-hidden relative">
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="/splash-bg.png" alt="Splash" />
      <img className="w-full z-10 pt-10 px-5" src="/logo.png" alt="Logo" />

      <div className="absolute bottom-0 h-[50%] w-full bg-linear-to-t from-black/80 to-gray z-20"></div>

      <div className="flex-1 flex items-end pb-10 z-30 w-full">
        <div className="w-full flex flex-col justify-center items-center gap-1">
          {/* Progress Bar */}
          <div className="w-full h-5 border border-white bg-ui-navy rounded-full max-w-64 overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-button-start to-button-end relative transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Shine effect */}
              {showShine && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"
                />
              )}
            </div>
          </div>

          {/* Progress percentage */}
          <div className="flex items-center gap-1 font-['Baloo_2'] text-sm text-white">
            <span className="font-bold">
              {Math.round(progress)}%
            </span>
            <span>
              Loading...
            </span>
          </div>

          <div className="flex items-center gap-1 font-['Baloo_2'] text-sm text-white">
            <span className="font-bold">
              Tips:
            </span>
            <span>
              Training everyday good for your health
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
