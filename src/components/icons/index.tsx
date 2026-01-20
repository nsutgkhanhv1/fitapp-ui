import type { FC } from 'react';

interface IconProps {
  className?: string;
}

// Workout/Flame Dumbbell Icon - used in DashboardPage, MissionPage, CreateWorkoutSession
export const WorkoutIcon: FC<IconProps> = ({ className = "w-12 h-11" }) => (
  <img
    src="/flame-dumbbell-icon.png"
    className={`${className} scale-110 object-contain`}
    style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }}
    alt="Workout"
  />
);

// Timer/Clock icon - used in CreateWorkoutSession
export const TimerIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <img
    src="/time-clock-icon.png"
    alt="Duration"
    className={`${className} object-contain`}
  />
);

// Microphone icon for record button - used in CreateWorkoutSession, RecordScreen
export const MicIcon: FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <img src="/mic-sticker.png" alt="Mic" className={`${className} object-contain`} />
);

// Stop icon for recording - used in CreateWorkoutSession, RecordScreen
export const StopIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="w-5 h-5 bg-white rounded-sm" />
  </div>
);

// Spinner icon for processing - used in CreateWorkoutSession, RecordScreen
export const SpinnerIcon: FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

// Keyboard icon - used in CreateWorkoutSession
export const KeyboardIcon: FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
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

// Close icon - used in CreateWorkoutSession
export const CloseIcon: FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18 6L6 18M6 6L18 18" stroke="#4F6280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Check icon for selected answer - used in QuestionnairePage
export const CheckIcon: FC<IconProps> = ({ className = "size-full" }) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M7 8L10.258 10.444C10.677 10.757 11.266 10.696 11.611 10.302L18 3" stroke="#00B521" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 10C19 11.881 18.411 13.714 17.316 15.242C16.22 16.771 14.674 17.918 12.893 18.522C11.112 19.127 9.187 19.158 7.387 18.613C5.588 18.067 4.005 16.971 2.86 15.479C1.715 13.987 1.066 12.174 1.005 10.295C0.943 8.415 1.472 6.563 2.517 5C3.562 3.436 5.07 2.239 6.83 1.577C8.59 0.914 10.513 0.82 12.329 1.307" stroke="#00B521" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Arrow left icon for previous button - used in QuestionnairePage
export const ArrowLeftIcon: FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Arrow right icon - used in RecordScreen
export const ArrowRightIcon: FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={`${className} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
  </svg>
);

// Golden star icon - used in multiple places
export const GoldenStarIcon: FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <img src="/golden-star-icon.png" alt="" className={`${className} object-contain`} />
);

// Camera icon - used in Convo.tsx
export const CameraIcon: FC<IconProps> = ({ className = "size-full" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#4f6280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#4f6280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Target icon - used in MissionPage for mission items
export const TargetIcon: FC<IconProps> = ({ className = "w-8 h-6" }) => (
  <img
    src="/target-sticker.png"
    alt=""
    className={`${className} object-cover object-top rounded-sm`}
  />
);

// Mission icon - used in MissionPage
export const MissionIcon: FC<IconProps> = ({ className = "w-9 h-9" }) => (
  <img src="/mission-icon.png" className={className} alt="Mission" />
);
