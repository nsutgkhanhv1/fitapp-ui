import type { FC } from 'react';
import { CommonButton } from './common/CommonButton';

interface StatCardProps {
  variant: 'weight' | 'missions';
  value?: string;
  unit?: string;
  current?: number;
  max?: number;
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
}

const StatCard: FC<StatCardProps> = ({
  variant,
  value = "67.5",
  unit = "Kg",
  current = 1,
  max = 3,
  buttonLabel,
  onButtonClick,
  className = "",
}) => {
  const isWeight = variant === 'weight';
  const icon = isWeight ? "/time-clock-icon.png" : "/gift-icon.png";
  const title = isWeight ? 'Weight' : 'Daily Missions';
  const defaultButtonLabel = isWeight ? 'Update now' : 'More details ...';

  return (
    <div
      className={`bg-ui-white rounded-2xl overflow-hidden flex flex-col ${className}`}
      style={{
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.25), inset 0px -5px 1px 0px rgba(183,133,90,0.25)',
        outline: '1px solid #DAC39B',
      }}
    >
      {/* Header */}
      <div className="px-2.5 pt-2 pb-1 border-b border-[#E6E1D7] flex items-end justify-center">
        <span className="text-center text-black text-title-02 font-extrabold font-['Baloo_2'] leading-5">
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="px-3 flex flex-col">
        {/* Icon and Value Row */}
        <div className="flex items-center justify-center gap-1">
          <div className="w-10 h-10 scale-110  flex items-center justify-center">
            <img
              src={icon}
              alt=""
              className="w-10 h-10 scale-110 object-contain"
              style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.25))' }}
            />
          </div>
          <div className="flex flex-col justify-center items-center h-11">
            {isWeight ? (
              <>
                <span className="text-zinc-800 text-title-01 font-extrabold font-['Baloo_2']" style={{ lineHeight: '1.25rem' }}>
                  {value}
                </span>
                <span className="text-zinc-800 text-title-02 font-extrabold font-['Baloo_2'] leading-5">
                  {unit}
                </span>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center h-5">
                  <span className="text-orange-500 text-title-01 font-extrabold font-['Baloo_2']" style={{ lineHeight: '1.25rem' }}>
                    {current}/{max}
                  </span>
                  <img src="/golden-star-icon.png" alt="" className="w-7 h-7" />
                </div>
                <span className="text-zinc-800 text-title-02 font-extrabold font-['Baloo_2'] leading-5">
                  Missions
                </span>
              </>
            )}
          </div>
        </div>

        {/* Button Row */}
        <div className="pt-[5px] pb-2.5 border-t border-[#E6E1D7] flex justify-center">
          <CommonButton
            className="relative h-5 px-2.5 flex items-center justify-center text-xs text-white w-fit font-extrabold font-['Baloo_2']"
            text={buttonLabel || defaultButtonLabel}
            onClick={onButtonClick}
            disableDefaultPadding
            formButton
            disableDefaultText
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
