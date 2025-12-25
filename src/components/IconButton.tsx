import type { FC, ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-center justify-center size-9 rounded-xl 
        transition-all duration-100 
        active:scale-95 active:translate-y-[2px]
        shadow-[0px_2px_2px_0px_rgba(0,0,0,0.6)] active:shadow-none 
        ${className}
      `}
    >
      {/* White highlight behind */}
      <div className="absolute inset-0 bg-white rounded-full" />

      {/* Button background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-icon-btn-start to-icon-btn-end rounded-xl overflow-hidden">
        {/* Inner shadow */}
        <div className="absolute inset-0 rounded-xl transition-shadow duration-100 shadow-[inset_0px_-3px_1px_0px_rgba(0,0,0,0.25)] group-active:shadow-none" />
      </div>

      {/* Icon */}
      <div className="relative flex items-center justify-center size-5">
        {icon}
      </div>
    </button>
  );
};

export default IconButton;
