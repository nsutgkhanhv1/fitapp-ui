import type { FC } from 'react';

interface ButtonNoIconProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

const ButtonNoIcon: FC<ButtonNoIconProps> = ({
  label = "Button",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-center overflow-hidden justify-center py-2 px-6 
        rounded-full transition-all duration-100 
        active:scale-95 active:translate-y-[2px]
        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] active:shadow-none
        ${className}
      `}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="
        absolute inset-0 rounded-full transition-shadow duration-100
        bg-gradient-to-r from-button-start to-button-end
        shadow-[inset_0px_2px_1px_0px_rgba(255,255,255,0.4),inset_0px_-3px_1px_0px_rgba(0,0,0,0.2)]
        group-active:shadow-none
      " />
      <div className="absolute top-[-6px] w-[90%] h-[40%] bg-white/10 blur-[1px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex items-center justify-center">
        <span
          className="font-['Baloo_2'] font-extrabold text-lg text-white text-center whitespace-nowrap"
          style={{ textShadow: '0px 2px 2px rgba(0,0,0,0.4)' }}
        >
          {label}
        </span>
      </div>
    </button>
  );
};

export default ButtonNoIcon;
