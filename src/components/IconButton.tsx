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
      className={`relative flex items-center justify-center size-9 rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* White highlight behind */}
      <div className="absolute inset-0 bg-white rounded-full" />
      
      {/* Button background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-icon-btn-start to-icon-btn-end rounded-xl overflow-hidden">
        {/* Inner shadow */}
        <div className="absolute inset-0 rounded-xl shadow-[inset_0px_-3px_1px_0px_rgba(0,0,0,0.25)]" />
      </div>
      
      {/* Icon */}
      <div className="relative flex items-center justify-center size-5">
        {icon}
      </div>
    </button>
  );
};

export default IconButton;
