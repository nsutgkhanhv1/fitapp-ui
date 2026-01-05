import type { FC } from 'react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  onNotification?: () => void;
  className?: string;
}

const Header: FC<HeaderProps> = ({
  title = "GAME TITLE",
  showBack = false,
  onBack,
  onNotification,
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col items-start justify-end w-full pt-6 pb-3 bg-[#fdf9f0] border border-solid border-[#d9c29a] rounded-b-2xl shadow-card ${className}`}
    >
      <div className="flex items-center justify-center w-full px-6 gap-2.5">
        {showBack && (
          <button
            onClick={onBack}
            className="shrink-0 size-6 flex items-center justify-center font-['Baloo_2'] font-normal text-2xl text-black"
          >
            ‹
          </button>
        )}

        <h1 className="flex-1 font-['Baloo_2'] font-extrabold text-2xl text-black leading-normal">
          {showBack ? title : title}
        </h1>

        <button
          onClick={onNotification}
          className="shrink-0 size-6"
        >
          {/* Notification bell icon */}
          <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
            <path d="M12.5 2.5C9.5 2.5 7 5 7 8V12L5 14V15H20V14L18 12V8C18 5 15.5 2.5 12.5 2.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 18C10.5 19.1 11.4 20 12.5 20C13.6 20 14.5 19.1 14.5 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-b-2xl shadow-card-inset" />
    </div>
  );
};

export default Header;
