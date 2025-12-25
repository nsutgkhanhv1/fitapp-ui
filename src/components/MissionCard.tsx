import type { FC } from 'react';
import defaultCharacter from '../assets/4bd713e163291403becacdcca0797fbd05a0cf77.png';

interface MissionCardProps {
  headerTitle?: string;
  missionTitle?: string;
  description?: string;
  currentProgress?: number;
  maxProgress?: number;
  imageUrl?: string;
  className?: string;
}

const MissionCard: FC<MissionCardProps> = ({
  headerTitle = "Title 01",
  missionTitle = "Today's Mission!",
  description = "- Complete 300 Skips -",
  currentProgress = 42,
  maxProgress = 300,
  imageUrl = defaultCharacter,
  className = "",
}) => {
  const progressPercentage = Math.min((currentProgress / maxProgress) * 100, 100);

  return (
    <div className={`flex flex-col items-start relative w-full ${className}`}>
      <div className="relative w-full bg-ui-white border border-solid border-card-border rounded-[20px] shadow-card">
        {/* Header */}
        <div className="bg-ui-navy h-7.5 w-full rounded-t-[20px] flex items-center justify-center">
          <span
            className="text-white text-title-01 font-extrabold text-center leading-none font-['Baloo_2']"
            style={{ textShadow: 'var(--shadow-text)' }}
          >
            {headerTitle}
          </span>
        </div>

        <div className="flex items-start w-full relative p-3 pb-4">
          <div className="flex-1 flex flex-col items-start">
            <h3 className="text-black text-title-01 font-extrabold text-center leading-normal w-full font-['Baloo_2']">
              {missionTitle}
            </h3>
            <p className="text-black text-desc-01 font-extrabold text-center leading-4 w-full font-['Baloo_2']">
              {description}
            </p>

            <div className="relative w-full mt-0.5">
              <div className="bg-progress-track h-4.5 rounded-full w-full" />
              <div
                className="absolute top-0 left-0 h-4.5 rounded-full"
                style={{
                  width: `${progressPercentage}%`,
                  background: 'linear-gradient(to bottom, var(--color-button-start), var(--color-button-end))'
                }}
              />

              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-desc-01 font-extrabold text-center font-['Baloo_2']">
                {currentProgress}/{maxProgress}
              </span>
            </div>

            <img
              alt="Mission character"
              src={imageUrl}
              className="absolute max-w-none w-52 object-contain scale-x-[-1] -bottom-6 -right-12 z-10"
            />
          </div>

          <div className='w-20' />
        </div>

        <div className="absolute -inset-px pointer-events-none rounded-[20px] shadow-card-inset" />
      </div>
    </div>
  );
};

export default MissionCard;
