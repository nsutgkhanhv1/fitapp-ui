import type { FC } from 'react';
import Header from '../components/Header';
import MissionCard from '../components/MissionCard';
import TitleCard from '../components/TitleCard';
import ChatBubble from '../components/ChatBubble';
import ButtonWithIcon from '../components/ButtonWithIcon';

// Import assets
import characterCropped from '../assets/dashboard_character_final.png';
import starIcon from '../assets/target-icon.svg';
import streakIcon from '../assets/target-icon.svg';
import coachShiba from '../assets/target-icon.svg';

// Star icon component for the button
const MissionsIcon = () => (
  <img src={starIcon} alt="" className="w-10 h-10" />
);

interface DashboardPageProps {
  className?: string;
}

const DashboardPage: FC<DashboardPageProps> = ({ className = "" }) => {
  return (
    <div className={`w-80 min-h-[568px] bg-ui-yellow flex flex-col overflow-hidden ${className}`}>
      {/* Header */}
      <Header title="LEVELFIT" />

      {/* Main Content Area */}
      <div className="flex-1 p-4 flex flex-col gap-2.5">
        {/* Mission Card */}
        <MissionCard
          headerTitle="Title 01"
          missionTitle="Today's Mission!"
          description="- Complete 300 Skips -"
          currentProgress={42}
          maxProgress={300}
          imageUrl={characterCropped}
        />

        {/* Two Title Cards Side by Side */}
        <div className="flex gap-2.5">
          <TitleCard
            headerTitle="Title 02"
            title="Title 02"
            description="Description 02"
            imageUrl={starIcon}
            className="flex-1"
          />
          <TitleCard
            headerTitle="Title 02"
            title="Title 02"
            description="Description 02"
            imageUrl={streakIcon}
            className="flex-1"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative h-[137px]">
        {/* Bottom Navigation Bar - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-ui-navy flex flex-col z-0">
          <div className="h-[5px] bg-[#ffa75a]" />
        </div>

        {/* Content Row - positioned above the nav bar */}
        <div className="absolute inset-0 flex items-start z-10">
          {/* Coach Shiba Character */}
          <div className="w-[126px] h-28 flex items-end overflow-hidden">
            <img
              src={coachShiba}
              alt="Coach Shiba"
              className="w-[126px] h-28 object-contain"
            />
          </div>

          {/* Right Side - Chat Bubble and Button */}
          <div className="flex-1 p-2 flex flex-col gap-2.5 overflow-hidden">
            <ChatBubble
              message="Description 02: Lorem Ipsum is simply dummy text of the printing"
              className="w-full"
            />
            <ButtonWithIcon
              label="Missions"
              icon={<MissionsIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
