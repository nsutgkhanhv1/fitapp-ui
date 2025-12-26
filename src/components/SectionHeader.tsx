import type { FC } from 'react';

interface SectionHeaderProps {
  title?: string;
  variant?: 'orange' | 'navy';
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title = "Section Title",
  variant = 'orange',
  className = "",
}) => {
  const bgColor = variant === 'orange' 
    ? 'bg-daily-mission' 
    : 'bg-ui-navy';

  return (
    <div className={`flex flex-col items-start w-full ${className}`}>
      <div 
        className={`relative flex items-center justify-center w-full h-8 min-w-48 ${bgColor} rounded-full border border-solid border-card-border shadow-card`}
      >
        <span 
          className="font-['Baloo_2'] font-extrabold text-sm text-white text-center leading-none"
          style={{ textShadow: 'var(--shadow-text)' }}
        >
          {title}
        </span>
        
        {/* Inner shadow */}
        <div className="absolute -inset-px pointer-events-none rounded-full shadow-card-inset" />
      </div>
    </div>
  );
};

export default SectionHeader;
