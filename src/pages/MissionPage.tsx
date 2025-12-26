import type { FC } from 'react';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import PictureCard from '../components/PictureCard';
import MissionItem from '../components/MissionItem';
import ButtonWithIcon from '../components/ButtonWithIcon';

// Import assets
import coachCharacter from '../assets/4bd713e163291403becacdcca0797fbd05a0cf77.png';
import mealImage from '../assets/0b356c9062007aa825feed84ba333aae6217c988.png';
import workoutOverlay from '../assets/8fc1973011e6a9034d6f383a11abe8156c53c0dd.png';
import chatBuddyImage from '../assets/bb9ce2750178d81376a972f4236fb7ae5def3d77.png';


// Missions button icon - using coach character
const MissionsIcon = () => (
  <img src={coachCharacter} alt="" className="w-12 h-11 object-cover object-top" />
);

// Small character icon for mission items
const SmallCharacterIcon = () => (
  <img
    src={chatBuddyImage}
    alt=""
    className="size-6 object-cover object-top rounded-sm"
  />
);

interface MissionPageProps {
  className?: string;
}

const MissionPage: FC<MissionPageProps> = ({ className = "" }) => {
  return (
    <div className={`w-80 min-h-[568px] bg-ui-yellow flex flex-col overflow-hidden ${className}`}>
      {/* Header */}
      <Header title="Mission" showBack />

      {/* Main Content Area */}
      <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-hidden">
        {/* Daily Mission Section */}
        <SectionHeader title="Daily Mission" variant="orange" />
        
        {/* Picture Cards Row */}
        <div className="flex justify-center items-center gap-2 overflow-hidden">
          {/* Upload Meal Photo - Not done */}
          <PictureCard
            title={"Upload Meal\nPhoto"}
            caption="Get snaping!"
            imageUrl={mealImage}
            done={false}
          />
          
          {/* Post Workout Pic - Done */}
          <PictureCard
            title={"Post Workout\nPic"}
            imageUrl={mealImage}
            overlayImageUrl={workoutOverlay}
            done={true}
          />
          
          {/* Chat with Your Buddy - Not done */}
          <PictureCard
            title={"Chat with\nYour Buddy"}
            caption="Get snaping!"
            imageUrl={chatBuddyImage}
            done={false}
          />
        </div>

        {/* Weekly Mission Section */}
        <SectionHeader title="Weekly Mission" variant="navy" />
        
        {/* Mission Items */}
        <div className="flex-1 flex flex-col gap-1">
          <MissionItem
            title="Name your mission"
            icon={<SmallCharacterIcon />}
            done={false}
          />
          <MissionItem
            title="Name your mission"
            icon={<SmallCharacterIcon />}
            done={true}
          />
          <MissionItem
            title="Name your mission"
            icon={<SmallCharacterIcon />}
            done={false}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative h-36">
        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col z-0">
          <div className="h-[5px] bg-daily-mission" />
        </div>

        {/* Content Row */}
        <div className="absolute inset-0 flex items-start z-10">
          {/* Coach Character */}
          <div className="w-32 h-28 flex items-end overflow-hidden">
            <img
              src={coachCharacter}
              alt="Coach"
              className="w-32 h-28 object-contain object-bottom"
            />
          </div>

          {/* Right Side - Reward Bubble and Button */}
          <div className="flex-1 p-2 flex flex-col justify-end items-center gap-2.5 overflow-hidden h-full">
            {/* Earn your rewards bubble */}
            <div className="relative w-44 p-3 bg-ui-white rounded-full border border-solid border-reward-border shadow-card">
              <p className="w-32 font-['Baloo_2'] font-extrabold text-sm text-text-muted text-center leading-4">
                Earn your rewards
              </p>
              {/* Inner shadow */}
              <div className="absolute -inset-px pointer-events-none rounded-full shadow-card-inset" />
            </div>
            
            {/* Missions Button */}
            <ButtonWithIcon
              label="Missions"
              icon={<MissionsIcon />}
              className="w-44"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
