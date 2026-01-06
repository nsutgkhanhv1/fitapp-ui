import type { FC } from 'react';


interface PetLevelCardProps {
  level?: number;
  currentExp?: number;
  maxExp?: number;
  className?: string;
}

const PetLevelCard: FC<PetLevelCardProps> = ({
  level = 5,
  currentExp = 300,
  maxExp = 500,
  className = "",
}) => {
  const progressPercentage = Math.min((currentExp / maxExp) * 100, 100);

  return (
    <div
      className={`relative w-full px-1.5 pt-1 pb-0 rounded-[20px] flex outline outline-[#1DA937] bg-linear-to-r from-green-start to-green-end ${className}`}
      style={{
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.25), inset 0px -5px 1px 0px rgba(32,44,124,0.25), inset 0px 2px 1px 0px rgba(255,255,255,0.29)',
      }}
    >
      <div className='flex w-full flex-col'>
        <div className="h-7 px-3 py-1 flex items-center gap-1 rounded-t-[20px]">
          <img
            src="/paw-icon.png"
            alt=""
            className="w-8 h-8 object-contain"
          />
          <span
            className="text-white text-title-01 font-extrabold font-['Baloo_2']"
            style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.50)' }}
          >
            Pet level {level}
          </span>
        </div>


        {/* Progress Section */}
        <div className="flex-1 px-1.5 flex flex-col items-center justify-center pt-1 pb-3">
          {/* Progress Bar */}
          <div className="relative w-full h-3.5">
            <div className="absolute inset-0 bg-neutral-700 rounded-[30px]" />
            <div
              className="absolute top-0 left-0 h-full rounded-[30px]"
              style={{
                width: `${progressPercentage}%`,
                background: 'linear-gradient(to bottom, #FF9D55, #FF5500)'
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-extrabold font-['Baloo_2']">
              {currentExp}/{maxExp} Exp
            </span>
          </div>
        </div>
      </div>


      <div className='w-20 h-full relative'>
        <img className='w-full object-contain scale-120' src="/mascot-emoji-1.png" />
      </div>
    </div>
  );
};

export default PetLevelCard;
