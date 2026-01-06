import Header from '../components/Header';
import CurrentTrainingCard from '../components/CurrentTrainingCard';
import StatCard from '../components/StatCard';
import PetLevelCard from '../components/PetLevelCard';
import IconButtonRow from '../components/IconButtonRow';
import ChatBubble from '../components/ChatBubble';
import ButtonWithIcon from '../components/ButtonWithIcon';

// Import assets - using existing project Shiba assets
import bottomShiba from '../assets/coach_shiba.png';
import workoutIcon from '../assets/shiba_v1.png';

// Workout Icon for button
const WorkoutIcon = () => (
  <img src={workoutIcon} alt="" className="w-12 h-11 object-contain" style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }} />
);

const DashboardPage = () => {
  return (
    <div className={`w-full h-full max-w-md bg-ui-yellow flex flex-col overflow-hidden`}>
      {/* Header */}
      <Header title="LEVELFIT" />

      {/* Main Content Area */}
      <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-y-auto">
        {/* Current Training Method Card */}
        <CurrentTrainingCard
          methodName="FIIT Mode"
          currentWorkouts={3}
          maxWorkouts={5}
        />

        {/* Weight and Daily Missions Side by Side */}
        <div className="flex gap-2.5">
          <StatCard
            variant="weight"
            value="67.5"
            unit="Kg"
            className="w-28"
          />
          <StatCard
            variant="missions"
            current={1}
            max={3}
            className="flex-1"
          />
        </div>

        {/* Pet Level Card */}
        <PetLevelCard
          level={5}
          currentExp={300}
          maxExp={500}
        />

        {/* Icon Button Row */}
        <IconButtonRow />
      </div>

      {/* Bottom Section */}
      <div className="h-fit flex relative">
        {/* Navy Background Bar */}
        <div className=" absolute bottom-0 left-0 right-0 h-16 bg-slate-600 flex flex-col">
          <div className="h-[5px] bg-orange-300" />
        </div>

        {/* Content */}
        <div className="z-10 inset-0 flex">
          {/* Shiba Character */}
          <div className="w-32 h-full flex items-end">
            <img
              src={bottomShiba}
              alt="Shiba"
              className="w-32 h-28 object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 p-2 flex flex-col justify-end items-center gap-2.5 overflow-hidden">
            {/* Chat Bubble */}
            <ChatBubble
              message="Tập luyện ngay với tôi nhé!"
              className="w-full"
            />

            {/* Create Workout Button */}
            <ButtonWithIcon
              label="Create workout"
              icon={<WorkoutIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
