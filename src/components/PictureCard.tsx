import type { FC } from 'react';

interface PictureCardProps {
  title?: string;
  caption?: string;
  imageUrl?: string;
  done?: boolean;
  overlayImageUrl?: string;
  className?: string;
}

const PictureCard: FC<PictureCardProps> = ({
  title = "Upload Meal\nPhoto",
  caption = "Get snaping!",
  imageUrl = "https://placehold.co/280x200",
  done = false,
  overlayImageUrl = "https://placehold.co/280x200",
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col items-center w-24 rounded-2xl border border-solid border-card-border shadow-card ${done ? 'bg-success' : 'bg-ui-white'
        } ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-center w-full px-2.5 pt-2 pb-0.5 border-b border-card-divider rounded-t-2xl">
        <p className="font-['Baloo_2'] font-extrabold text-sm text-black text-center leading-4 whitespace-pre-line">
          {title}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col items-start w-full px-3">
        <div className="flex items-center justify-center w-full relative">
          <div className={`relative w-20 ${done ? 'pb-5' : 'h-20'}`}>
            <img
              alt=""
              src={imageUrl}
              className="w-full h-20 object-cover"
            />

            {/* Overlay image for done state */}
            {done && (
              <div className="absolute -bottom-2.5 -left-2.5 w-14 h-8 rotate-[10.81deg] border-2 border-white overflow-hidden">
                <img
                  alt=""
                  src={overlayImageUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Caption - only show when not done */}
        {!done && (
          <div className="flex items-start w-full pt-0.5 pb-1 border-t border-card-divider">
            <p className="flex-1 font-['Baloo_2'] font-medium text-xs text-text-muted text-center leading-3">
              {caption}
            </p>
          </div>
        )}

        {/* Spacer for done state */}
        {done && <div className="h-5 w-full" />}
      </div>

      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-card-inset" />
    </div>
  );
};

export default PictureCard;
