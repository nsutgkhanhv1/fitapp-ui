import type { FC, ReactNode } from 'react';

interface ButtonWhiteProps {
  label?: string;
  done?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonWhite: FC<ButtonWhiteProps> = ({
  label = "A. Build muscle",
  done = false,
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-start ${className}`}
    >
      <div 
        className={`relative flex items-center justify-center min-w-48 py-2 px-3 rounded-full border border-solid border-card-border shadow-card ${
          done ? 'bg-success' : 'bg-ui-white'
        }`}
      >
        <div className="flex items-center justify-center w-full gap-2.5">
          {done && icon && (
            <div className="shrink-0 size-4">
              {icon}
            </div>
          )}
          <span className="font-['Baloo_2'] font-extrabold text-sm text-dark-text text-center whitespace-nowrap">
            {label}
          </span>
        </div>
        
        {/* Inner shadow */}
        <div className="absolute -inset-px pointer-events-none rounded-full shadow-card-inset" />
      </div>
    </button>
  );
};

export default ButtonWhite;
