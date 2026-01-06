import type { FC } from 'react';

interface CurrentTrainingCardProps {
  methodName?: string;
  currentWorkouts?: number;
  maxWorkouts?: number;
  className?: string;
  onClick?: () => void;
}

const CurrentTrainingCard: FC<CurrentTrainingCardProps> = ({
  methodName = "FIIT Mode",
  currentWorkouts = 3,
  maxWorkouts = 5,
  className = "",
  onClick,
}) => {
  const progressPercentage = Math.min((currentWorkouts / maxWorkouts) * 100, 100);

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {/* Blue Gradient Container */}
      <div
        style={{
          boxShadow: '0 2px 1px 0 rgba(142, 178, 255, 0.90) inset, 0px 2px 4px 0px rgba(0,0,0,0.25), 0 -5px 1px 0 rgba(32, 44, 124, 0.25) inset',
        }}
        className="relative border border-t-0 border-[#1D65A9] w-full bg-linear-to-r from-[#1D83E5] to-[#3EA3F7] px-1.5 pb-3 rounded-[20px] flex flex-col"
      >
        {/* Header */}
        <div className="h-[30px] px-3 flex items-center rounded-t-[20px]">
          <span
            className="text-white text-title-01 font-extrabold font-['Baloo_2']"
            style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.50)' }}
          >
            Current training method
          </span>
        </div>

        {/* White Content Area */}
        <div
          className="bg-ui-white rounded-2xl flex items-center"
          style={{ boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 0px rgba(255,255,255,0.50)' }}
        >
          {/* Character */}
          <div className="w-20 h-full relative overflow-visible flex items-center justify-center">
            <img
              src="/mascot-training-method.png"
              alt=""
              className="w-full object-contain absolute -bottom-4 -left-4"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-1.5 flex flex-col items-center">
            {/* Mode Name Row */}
            <div className="w-full flex items-center justify-between">
              <span className="text-zinc-800 text-title-01 font-extrabold font-['Baloo_2']">
                {methodName}
              </span>
              <button onClick={onClick} className="text-zinc-800 text-title-01 font-normal font-['Baloo_2']">
                &gt;
              </button>
            </div>

            {/* Progress Label */}
            <p className="w-full text-zinc-800 text-sm font-normal font-['Baloo_2'] leading-4">
              - This week progress -
            </p>

            {/* Progress Bar */}
            <div className="relative w-full h-3.5 mt-1">
              <div className="absolute inset-0 bg-neutral-700 rounded-[30px]" />
              <div
                className="absolute top-0 left-0 h-full rounded-[30px]"
                style={{
                  width: `${progressPercentage}%`,
                  background: 'linear-gradient(to bottom, #FB923C, #EA580C)'
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-extrabold font-['Baloo_2']">
                {currentWorkouts}/{maxWorkouts} Workouts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTrainingCard;
