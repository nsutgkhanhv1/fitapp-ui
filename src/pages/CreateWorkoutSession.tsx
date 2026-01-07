import { useState } from 'react';
import Header from '../components/Header';
import ChatBubble from '../components/ChatBubble';
import ButtonWithIcon from '../components/ButtonWithIcon';
import StepSlider from '@/components/StepSlider';

// Workout Icon for button
const WorkoutIcon = () => (
  <img
    src="/flame-dumbbell-icon.png"
    className="w-12 h-11 scale-110 object-contain"
    style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }}
  />
);

// Timer/Clock icon
const TimerIcon = () => (
  <img
    src="/time-clock-icon.png"
    alt="Duration"
    className="w-8 h-8 object-contain"
  />
);

// Microphone icon for record button
const MicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="currentColor" />
    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="currentColor" />
  </svg>
);

// Keyboard icon
const KeyboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="14" rx="2" stroke="#4F6280" strokeWidth="2" />
    <rect x="5" y="7" width="2" height="2" rx="0.5" fill="#4F6280" />
    <rect x="9" y="7" width="2" height="2" rx="0.5" fill="#4F6280" />
    <rect x="13" y="7" width="2" height="2" rx="0.5" fill="#4F6280" />
    <rect x="17" y="7" width="2" height="2" rx="0.5" fill="#4F6280" />
    <rect x="5" y="11" width="2" height="2" rx="0.5" fill="#4F6280" />
    <rect x="9" y="11" width="2" height="2" rx="0.5" fill="#4F6280" />
    <rect x="13" y="11" width="2" height="2" rx="0.5" fill="#4F6280" />
    <rect x="17" y="11" width="2" height="2" rx="0.5" fill="#4F6280" />
    <rect x="7" y="15" width="10" height="2" rx="0.5" fill="#4F6280" />
  </svg>
);

const CreateWorkoutSession = () => {
  const [duration, setDuration] = useState(60);
  const steps = [0, 15, 30, 45, 60, 75, 90, 105, 120];

  // Calculate the filled percentage
  const fillPercentage = (duration / 120) * 100;


  return (
    <div className="w-full h-full max-w-md bg-ui-yellow flex flex-col overflow-hidden">
      <Header title="Create Your Session" showBack />

      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
        <div
          style={{
            boxShadow: '0 2px 1px 0 rgba(142, 178, 255, 0.90) inset, 0px 2px 4px 0px rgba(0,0,0,0.25), 0 -5px 1px 0 rgba(32, 44, 124, 0.25) inset',
          }}
          className="relative w-full bg-linear-to-r from-section-header-start to-section-header-end px-1 pb-2 rounded-[20px] flex flex-col gap-1"
        >
          <div className="flex items-center justify-between w-full px-3 pt-1">
            <div className="flex items-center gap-2">
              <TimerIcon />
              <span
                className="text-white text-title-01 font-extrabold font-['Baloo_2']"
                style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.50)' }}
              >
                Duration
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span
                className="text-white text-title-01 font-extrabold font-['Baloo_2']"
                style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.50)' }}
              >
                {duration}
              </span>
              <span
                className="text-white text-title-01 font-extrabold font-['Baloo_2']"
                style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.50)' }}
              >
                Mins
              </span>
            </div>
          </div>

          <div className="relative w-full h-6 px-1.5">
            <StepSlider
              steps={steps}
              value={steps.indexOf(duration)}
              onChange={(index) => {
                setDuration(steps[index]);
              }}
            />
          </div>

          <div className="flex items-center justify-between w-full px-0 text-white text-desc-02 font-['Baloo_2']">
            {steps.map((step) => (
              <span key={step} style={{ textShadow: '0px 2px 2px rgba(0,0,0,0.25)' }} className="text-center text-white w-6">{step}</span>
            ))}
          </div>

          <p
            className="text-center text-white text-desc-01 font-extrabold font-['Baloo_2']"
          >
            Swipe to Adjust ...
          </p>
        </div>

        <div
          className="bg-ui-white rounded-[20px] p-4 flex flex-col gap-3"
          style={{
            boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.15), inset 0px -3px 1px 0px rgba(183, 133, 90, 0.15)',
            border: '1px solid #E5DDD0'
          }}
        >
          <h3 className="text-center text-dark-text text-title-02 font-extrabold font-['Baloo_2']">
            Any Issues today?
          </h3>

          <div className="flex items-center justify-center gap-3">
            <ButtonWithIcon
              label="Record"
              icon={<MicIcon />}
            />

            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                border border-gray-200
                shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]
                active:scale-95 active:translate-y-px active:shadow-none
                transition-all duration-100"
            >
              <KeyboardIcon />
            </button>
          </div>

          <div className="w-full h-px bg-gray-200" />

          <div className="flex flex-col gap-1">
            <h4 className="text-center text-dark-text text-desc-01 font-extrabold font-['Baloo_2']">
              Summarize information
            </h4>
            <p className="text-center text-text-muted text-desc-02 font-['Baloo_2'] leading-4">
              Bị đau chân, tập luyện nhẹ vì có vấn đề liên quan tới tim mạch.
            </p>
          </div>
        </div>
      </div>

      <div className="h-fit flex relative">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col">
          <div className="h-[5px] bg-daily-mission" />
        </div>

        <div className="z-10 inset-0 flex">
          <div className="w-32 h-full flex items-end">
            <img
              src="/mascot-dashboard.png"
              alt="Shiba"
              className="w-32 h-28 object-contain"
            />
          </div>

          <div className="flex-1 p-2 flex flex-col justify-end items-center gap-2.5 overflow-hidden">
            <ChatBubble
              message="Tell me if you need any adjustment!"
              className="w-full"
            />

            <ButtonWithIcon
              label="Start Workout!!!"
              icon={<WorkoutIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkoutSession;
