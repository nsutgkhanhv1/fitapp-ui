import type { FC } from 'react';

interface SoundWaveProps {
  isActive?: boolean;
  className?: string;
}

const SoundWave: FC<SoundWaveProps> = ({ isActive = true, className = '' }) => {
  const bars = [
    { delay: '0ms', minHeight: 8, maxHeight: 20 },
    { delay: '100ms', minHeight: 12, maxHeight: 28 },
    { delay: '200ms', minHeight: 6, maxHeight: 24 },
    { delay: '150ms', minHeight: 14, maxHeight: 32 },
    { delay: '50ms', minHeight: 8, maxHeight: 20 },
    { delay: '250ms', minHeight: 10, maxHeight: 26 },
    { delay: '180ms', minHeight: 6, maxHeight: 18 },
  ];

  return (
    <div className={`flex items-center justify-center gap-1 h-10 ${className}`}>
      {bars.map((bar, index) => (
        <div
          key={index}
          className="w-1 rounded-full bg-gradient-to-t from-button-start to-button-end"
          style={{
            height: isActive ? `${bar.maxHeight}px` : `${bar.minHeight}px`,
            animation: isActive ? `soundwave 0.5s ease-in-out infinite alternate` : 'none',
            animationDelay: bar.delay,
            transition: 'height 0.2s ease',
          }}
        />
      ))}
      <style>{`
        @keyframes soundwave {
          0% {
            transform: scaleY(0.4);
          }
          100% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SoundWave;
