import type { FC } from 'react';

interface SectionHeaderProps {
  title?: string;
  variant?: 'orange' | 'navy';
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title = "Section Title",
  className = "",
}) => {

  return (
    <div className={`flex flex-col items-start w-full ${className}`}>
      <div
        className={`relative flex gap-2 items-center justify-start w-full h-8 min-w-48 bg-linear-to-r from-section-header-start to-section-header-end rounded-full border border-solid border-card-border shadow-card`}
      >
        <img src="/mission-icon.png" className="w-9 h-9" />
        <span
          className="font-['Baloo_2'] font-extrabold text-base text-white text-center leading-none"
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
