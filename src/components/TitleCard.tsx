import type { FC } from 'react';
import defaultImage from '../assets/bb9ce2750178d81376a972f4236fb7ae5def3d77.png';

interface TitleCardProps {
  headerTitle?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  className?: string;
}

const TitleCard: FC<TitleCardProps> = ({
  headerTitle = "Title 02",
  title = "Title 02",
  description = "Description 02",
  imageUrl = defaultImage,
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col items-center overflow-clip w-42 bg-ui-white border border-card-border rounded-tl-[20px] rounded-tr-[25px] rounded-bl-[15px] rounded-br-[15px] shadow-card ${className}`}
    >
      {/* Header */}
      <div className="flex items-end justify-center w-full px-2.5 py-2 border-b border-card-divider rounded-t-[20px]">
        <p className="text-title-02 text-black text-center leading-normal flex-1 font-extrabold font-['Baloo_2']">
          {headerTitle}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col items-start w-full">
        {/* Image and Title Row */}
        <div className="flex items-center justify-center gap-2.5 w-full px-0 py-1">
          {/* Image Container */}
          <div className="relative w-12 h-12">
            <img
              alt=""
              src={imageUrl}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <p className="w-14 text-title-02 text-black leading-normal font-extrabold font-['Baloo_2']">
            {title}
          </p>
        </div>

        {/* Description Row */}
        <div className="flex items-center justify-center w-full px-2.5 pt-1.5 pb-2.5 border-t border-card-divider">
          <p className="text-desc-02 text-text-muted text-center leading-3 flex-1 font-medium font-['Baloo_2']">
            {description}
          </p>
        </div>
      </div>

      {/* Inner shadow overlay for depth effect */}
      <div className="absolute inset-0 pointer-events-none shadow-card-inset" />
    </div>
  );
};

export default TitleCard;
