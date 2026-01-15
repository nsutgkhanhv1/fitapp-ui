import Header from '../components/Header';
import CurrentTrainingCard from '../components/CurrentTrainingCard';
import StatCard from '../components/StatCard';
import PetLevelCard from '../components/PetLevelCard';
import IconButtonRow from '../components/IconButtonRow';
import ChatBubble from '../components/ChatBubble';
import { CommonButton } from '../components/common/CommonButton';
import { useStaggeredAppear } from '../hooks/useAnimations';
import { useLocation } from 'wouter';


// Workout Icon for button
const WorkoutIcon = () => (
  <img src="/flame-dumbbell-icon.png" className="w-12 h-11 scale-110 object-contain" style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }} />
);

const DashboardPage = () => {
  const { getAnimationClass } = useStaggeredAppear(5);
  const [, navigate] = useLocation();

  return (
    <div className={`w-full h-full max-w-md bg-ui-yellow flex flex-col overflow-hidden`}>
      {/* Header */}
      <Header title="LEVELFIT" />

      {/* Main Content Area */}
      <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-y-auto">
        {/* Current Training Method Card */}
        <div className={getAnimationClass(0)}>
          <CurrentTrainingCard
            methodName="FIIT Mode"
            currentWorkouts={3}
            maxWorkouts={5}
          />
        </div>

        {/* Weight and Daily Missions Side by Side */}
        <div className={`flex gap-2.5 ${getAnimationClass(1)}`}>
          <StatCard
            variant="weight"
            value="67.5"
            unit="Kg"
            className="flex-1"
          />
          <StatCard
            variant="missions"
            current={1}
            max={3}
            className="flex-1"
            onButtonClick={() => navigate('/missions')}
          />
        </div>

        {/* Pet Level Card */}
        <div className={getAnimationClass(2)}>
          <PetLevelCard
            level={5}
            currentExp={300}
            maxExp={500}
          />
        </div>

        <div className={getAnimationClass(3)}>
          <IconButtonRow onChatClick={() => navigate('/chat')} />
        </div>
      </div>

      <div className="h-fit flex relative">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-600 flex flex-col">
          <div className="h-[5px] bg-orange-300" />
        </div>

        <div className="z-10 inset-0 flex flex-1">
          <div className="w-32 h-full flex items-end">
            <img
              src="/mascot-dashboard.png"
              alt="Shiba"
              className="w-32 h-28 object-contain animate-mascot-pop"
            />
          </div>

          <div className={`flex-1 p-2 flex flex-col justify-end items-center gap-2.5 overflow-hidden ${getAnimationClass(4)}`}>
            <ChatBubble
              message="Tập luyện ngay với tôi nhé!"
              className="w-full"
            />

            <CommonButton
              text="Create workout"
              addon={<WorkoutIcon />}
              onClick={() => navigate('/create-session')}
              disableDefaultPadding
              className='w-full'
              formButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

