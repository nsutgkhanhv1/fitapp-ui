import Header from '../components/Header';
import ChatBubble from '../components/ChatBubble';

// Stopwatch icon for timer badge
const StopwatchIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="13" r="8" stroke="#1d4ed8" strokeWidth="2" />
    <path d="M12 9v4l2 2" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 2h4" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 2v3" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 7l1.5-1.5" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Pause icon
const PauseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

const ExerciseScreen = () => {
  const exerciseName = "SQUATS";
  const currentExercise = 2;
  const totalExercises = 10;
  const timer = "00:32";
  const currentSet = 1;
  const totalSets = 3;
  const reps = 12;

  return (
    <div className={`w-full h-full max-w-md bg-ui-yellow flex flex-col overflow-hidden`}>
      {/* Header */}
      <Header title={`${exerciseName} (${currentExercise}/${totalExercises})`} showBack />

      {/* Main Content Area */}
      <div className="flex-1 p-4 flex flex-col items-center justify-center gap-4 overflow-y-auto">
        {/* 3D Mannequin on Platform */}
        <div className="relative flex flex-col items-center">
          {/* Mannequin Image */}
          <img
            src="/workout-mannequin.png"
            alt="Exercise Mannequin"
            className="w-52 h-56 object-contain"
          />

          {/* Platform/Shadow under mannequin */}
          <div
            className="w-32 h-6 rounded-[50%] bg-linear-to-b from-gray-300 to-gray-400 -mt-4"
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
          />
        </div>

        {/* Timer Badge */}
        <div
          className="flex items-center gap-2 px-5 py-2 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #B4D4FF 0%, #9FC5FF 100%)',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.15)',
          }}
        >
          <StopwatchIcon />
          <span className="font-['Baloo_2'] font-extrabold text-xl text-blue-800">
            {timer}
          </span>
        </div>

        {/* Set and Rep Info */}
        <span className="font-['Baloo_2'] font-bold text-base text-gray-600">
          SET {currentSet}/{totalSets} - {reps} reps
        </span>
      </div>

      {/* Footer with mascot and controls */}
      <div className="h-fit flex relative">
        {/* Dark background bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col z-0">
          <div className="h-[5px] bg-orange-300" />
        </div>

        <div className="z-10 inset-0 flex w-full">
          {/* Mascot */}
          <div className="w-28 h-full flex items-end">
            <img
              src="/mascot-dashboard.png"
              alt="Shiba Coach"
              className="w-28 h-24 object-contain"
            />
          </div>

          {/* Chat bubble and controls */}
          <div className="flex-1 p-2 flex flex-col justify-end items-end gap-2 overflow-hidden">
            {/* Speech bubble with counting */}
            <ChatBubble
              message="1, 2, 3 ..."
              className="w-fit max-w-[140px]"
            />

            {/* Control buttons */}
            <div className="flex items-center gap-3 pb-1">
              {/* Pause Button */}
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                  boxShadow: '0px 3px 6px rgba(0,0,0,0.3), inset 0px 1px 1px rgba(255,255,255,0.1)',
                }}
              >
                <PauseIcon />
              </button>

              {/* Skip Button */}
              <button
                className="px-6 py-2.5 rounded-full font-['Baloo_2'] font-bold text-white text-base"
                style={{
                  background: 'linear-gradient(135deg, #FB923C 0%, #F97316 100%)',
                  boxShadow: '0px 3px 6px rgba(0,0,0,0.25), inset 0px 2px 1px rgba(255,255,255,0.3), inset 0px -2px 1px rgba(0,0,0,0.15)',
                }}
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseScreen;
