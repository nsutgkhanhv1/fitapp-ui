import type { FC, ReactNode } from 'react';

interface ButtonWithIconProps {
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  label = "Button",
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center justify-center py-2 px-5 h-11
        rounded-full transition-transform active:scale-95
        shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] 
        ${className}
      `}
      style={{ transform: 'translateZ(0)' }}
    >
      {/* 
        Main background layer: Gradient + Inner Shadow combined 
        to avoid layering artifacts causing aliasing 
      */}
      <div className="
        absolute inset-0 rounded-full 
        bg-gradient-to-r from-button-start to-button-end
        shadow-[inset_0px_2px_1px_0px_rgba(255,255,255,0.4),inset_0px_-3px_1px_0px_rgba(0,0,0,0.2)]
      " />
      
      {/* 
        Top highlight layer using blur for smoother appearance 
      */}
      <div className="absolute top-[1px] left-[10%] right-[10%] h-[40%] bg-white/20 blur-[1px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-1">
        {icon && (
          <div className="shrink-0 flex items-center justify-center">
            {icon}
          </div>
        )}
        <span 
          className="font-['Baloo_2'] font-extrabold text-lg text-white text-center"
          style={{ textShadow: '0px 2px 2px rgba(0,0,0,0.4)' }}
        >
          {label}
        </span>
      </div>
    </button>
  );
};

export default ButtonWithIcon;
