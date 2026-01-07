import type { FC } from 'react';

interface PictureCardProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageUrl?: string;
  done?: boolean;
  overlayImageUrl?: string;
  className?: string;
}

const PictureCard: FC<PictureCardProps> = ({
  title = "Upload your meal photo",
  buttonText = "Get snaping!",
  onButtonClick,
  imageUrl = "https://placehold.co/280x200",
  done = false,
  overlayImageUrl = "https://placehold.co/280x200",
  className = "",
}) => {
  return (
    <div
      className={`relative flex-1 flex flex-col items-center rounded-2xl border border-solid border-card-border shadow-card ${done ? 'bg-success' : 'bg-ui-white'
        } ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-center w-full px-2.5 pt-1 rounded-t-2xl">
        <p className="font-['Baloo_2'] font-extrabold text-xs text-black text-center leading-4 whitespace-pre-line">
          {title}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col items-start w-full px-3 pb-2">
        <div className="flex items-center justify-center w-full relative">
          <div className={`relative w-20 ${done ? 'pb-5' : 'h-20'}`}>
            <img
              alt=""
              src={imageUrl}
              className="w-full h-20 object-cover"
            />

            {/* Overlay image for done state */}
            {done && (
              <div className="absolute bottom-5 -left-2.5 w-14 h-8 rotate-[10.81deg] border-2 border-white overflow-hidden">
                <img
                  alt=""
                  src={overlayImageUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Button - only show when not done */}
        {!done && (
          <div className="flex items-start w-full py-1">
            <button
              type="button"
              style={{ boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.60), 0 0.99px 0.5px 0 #FFC68F inset, 0 -1.49px 0.5px 0 #00000025 inset' }}
              onClick={onButtonClick}
              className="flex-1 font-['Baloo_2'] rounded-full font-medium text-white py-1 text-xs text-center leading-3  bg-linear-to-r from-button-start to-button-end cursor-pointer"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>

      {done && (
        <div className="flex items-center w-full py-1 gap-1">
          
        </div>
      )}

      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-card-inset" />
    </div>
  );
};

export default PictureCard;
