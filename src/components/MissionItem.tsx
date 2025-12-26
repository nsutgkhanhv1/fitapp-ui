import type { FC, ReactNode } from 'react';

interface MissionItemProps {
  title?: string;
  icon?: ReactNode;
  done?: boolean;
  doneIcon?: ReactNode;
  expandIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const MissionItem: FC<MissionItemProps> = ({
  title = "Name your mission",
  icon,
  done = false,
  doneIcon,
  expandIcon,
  onClick,
  className = "",
}) => {
  // Default done icon (checkmark)
  const defaultDoneIcon = (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
      <path d="M7 8L10.258 10.444C10.677 10.757 11.266 10.696 11.611 10.302L18 3" stroke="#00B521" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19 10C19 11.881 18.411 13.714 17.316 15.242C16.22 16.771 14.674 17.918 12.893 18.522C11.112 19.127 9.187 19.158 7.387 18.613C5.588 18.067 4.005 16.971 2.86 15.479C1.715 13.987 1.066 12.174 1.005 10.295C0.943 8.415 1.472 6.563 2.517 5C3.562 3.436 5.07 2.239 6.83 1.577C8.59 0.914 10.513 0.82 12.329 1.307" stroke="#00B521" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  
  // Default expand icon (arrow)
  const defaultExpandIcon = (
    <svg viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90 size-full">
      <path d="M6.5 1L12 12H1L6.5 1Z" fill="#5d5856"/>
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className={`flex items-start w-full ${className}`}
    >
      <div 
        className={`relative flex items-center gap-px w-full py-1.5 px-3 rounded-full border border-solid border-card-border ${
          done ? 'bg-success' : 'bg-ui-white'
        }`}
      >
        {/* Icon */}
        {icon && (
          <div className="shrink-0 size-5 flex items-center justify-center">
            {icon}
          </div>
        )}
        
        {/* Title */}
        <span className="flex-1 font-['Baloo_2'] font-extrabold text-xs text-text-muted tracking-tight leading-normal text-left">
          {title}
        </span>
        
        {/* Done icon or expand arrow */}
        {done ? (
          <div className="shrink-0 size-4">
            {doneIcon || defaultDoneIcon}
          </div>
        ) : (
          <div className="flex items-center justify-center shrink-0 size-3">
            {expandIcon || defaultExpandIcon}
          </div>
        )}
        
        {/* Inner shadow */}
        <div className="absolute -inset-px pointer-events-none rounded-full shadow-card-inset" />
      </div>
    </button>
  );
};

export default MissionItem;
