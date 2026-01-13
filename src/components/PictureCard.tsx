import { useState, type FC } from 'react';
import { CircleCheck } from 'lucide-react'
import { cn } from '@/lib/utils';

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
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <div
      className={`relative flex-1 flex flex-col items-center rounded-2xl border border-solid shadow-card ${done ? 'bg-linear-to-r from-green-start to-green-end border-[#1BFF36]' : 'bg-ui-white border-card-border'
        } ${className}`}
    >
      <div className="flex items-center justify-center w-full px-2.5 pt-1 rounded-t-2xl">
        <p className={cn("font-['Baloo_2'] font-extrabold text-xs  text-center leading-4 whitespace-pre-line", done ? 'text-white' : 'text-black')}>
          {title}
        </p>
      </div>

      <div className="flex flex-col items-start w-full px-3 pb-2">
        <div className="flex items-center justify-center w-full relative">
          <div className={`relative w-full`}>
            <img
              alt=""
              src={imageUrl}
              className="w-full h-20 object-cover"
            />

            {done && (
              <div className="absolute bottom-0 -left-2.5 w-14 h-8 rotate-[10.81deg] border-2 border-white overflow-hidden">
                <img
                  alt=""
                  src={overlayImageUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
          </div>


        </div>

        {done && (
          <div className="flex items-center w-full pt-1 gap-1 justify-center">
            <CircleCheck className='text-white' />
            <span className="font-['Baloo_2'] font-extrabold text-xs text-white text-center leading-4 whitespace-pre-line">Done</span>
          </div>
        )}

        {!done && (
          <div className="flex items-start w-full py-1">
            <button
              type="button"
              style={{ 
                boxShadow: isButtonPressed 
                  ? '0px 1px 1px 0px rgba(0,0,0,0.40), 0 0.99px 0.5px 0 #FFC68F inset, 0 -1.49px 0.5px 0 #00000025 inset'
                  : '0px 2px 2px 0px rgba(0,0,0,0.60), 0 0.99px 0.5px 0 #FFC68F inset, 0 -1.49px 0.5px 0 #00000025 inset',
                transition: 'transform 120ms ease-out, box-shadow 120ms ease-out',
                transform: isButtonPressed ? 'scale(0.96) translateY(1px)' : 'scale(1) translateY(0)',
              }}
              onClick={onButtonClick}
              onMouseDown={() => setIsButtonPressed(true)}
              onMouseUp={() => setIsButtonPressed(false)}
              onMouseLeave={() => setIsButtonPressed(false)}
              onTouchStart={() => setIsButtonPressed(true)}
              onTouchEnd={() => setIsButtonPressed(false)}
              className="flex-1 font-['Baloo_2'] font-extrabold rounded-full text-white py-1 text-xs text-center leading-3  bg-linear-to-r from-button-start to-button-end cursor-pointer"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>



      <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-card-inset" />
    </div>
  );
};

export default PictureCard;

