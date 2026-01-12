import type { FC } from 'react';

interface RewardOverlayProps {
  isVisible: boolean;
  title?: string;
  description?: string;
  icon?: string;
  onClose?: () => void;
  className?: string;
}

/**
 * Sparkle star SVG component
 */
const SparkleStar: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width="12"
    height="12"
  >
    <path
      className="sparkle-star"
      d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
    />
  </svg>
);

const RewardOverlay: FC<RewardOverlayProps> = ({
  isVisible,
  title = "Reward Unlocked!",
  description = "You earned a special reward",
  icon = "/gift-icon.png",
  onClose,
  className = "",
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 ${className}`}
      onClick={onClose}
    >
      <div
        className="animate-reward-appear relative bg-ui-white rounded-3xl p-6 mx-4 max-w-xs w-full flex flex-col items-center"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 4px rgba(255, 215, 0, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sparkle particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <SparkleStar className="sparkle sparkle-1" />
          <SparkleStar className="sparkle sparkle-2" />
          <SparkleStar className="sparkle sparkle-3" />
          <SparkleStar className="sparkle sparkle-4" />
          <SparkleStar className="sparkle sparkle-5" />
        </div>

        {/* Icon */}
        <div className="relative w-20 h-20 mb-4">
          <img
            src={icon}
            alt=""
            className="w-full h-full object-contain"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))' }}
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-extrabold font-['Baloo_2'] text-zinc-800 text-center mb-1">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm font-['Baloo_2'] text-zinc-600 text-center mb-4">
          {description}
        </p>

        {/* Close button */}
        <button
          onClick={onClose}
          className="relative h-10 px-8 flex items-center justify-center rounded-full overflow-hidden"
          style={{
            background: 'linear-gradient(to right, #fc7512, #f85005)',
            boxShadow: '0px 4px 8px rgba(248, 80, 5, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          }}
        >
          <span
            className="text-white text-base font-extrabold font-['Baloo_2']"
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}
          >
            Collect
          </span>
        </button>
      </div>
    </div>
  );
};

export default RewardOverlay;
