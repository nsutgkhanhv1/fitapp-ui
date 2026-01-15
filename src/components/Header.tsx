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
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      history.back();
    }
  };

  return (
    <div
      className={`relative flex flex-col items-start justify-end w-full pt-6 pb-3 bg-[#fdf9f0] border border-solid border-[#d9c29a] rounded-b-2xl shadow-card ${className}`}
    >
      <div className="flex items-center justify-center w-full px-6 gap-2.5">
        {showBack && (
          <button
            onClick={handleBack}
            className="shrink-0 size-6 flex items-center justify-center font-['Baloo_2'] font-normal text-2xl text-black"
          >
            ‹
          </button>
        )}

        <h1 className="flex-1 font-['Baloo_2'] font-extrabold text-2xl text-black leading-normal text-center">
          {showBack ? title : title}
        </h1>

        <img onClick={onNotification} src="/bell-icon.png" className='w-10 h-10 shrink-0' />
      </div>

      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-b-2xl shadow-card-inset" />
    </div>
  );
};

export default Header;
