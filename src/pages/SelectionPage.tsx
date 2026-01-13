import { useLocation } from 'wouter';
import { CommonButton } from '../components/common/CommonButton';
import { useStaggeredAppear } from '../hooks/useAnimations';

// Clipboard/Questionnaire icon
const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Microphone/Voice icon
const MicrophoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 19V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 23H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface SelectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  onClick: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({ title, description, icon, imageUrl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full bg-ui-white rounded-3xl border border-solid border-card-border overflow-hidden transition-all duration-200 active:scale-[0.98] hover:shadow-lg"
    >
      <div className="flex items-center p-4 gap-4">
        {/* Left side - Icon and text */}
        <div className="flex-1 flex flex-col items-start gap-2">
          <div className="w-14 h-14 bg-linear-to-br from-button-start to-button-end rounded-2xl flex items-center justify-center text-white shadow-md">
            {icon}
          </div>
          <div className="text-left">
            <h3 className="font-['Baloo_2'] font-extrabold text-lg text-dark-text leading-tight">
              {title}
            </h3>
            <p className="font-['Baloo_2'] font-normal text-sm text-text-muted leading-tight">
              {description}
            </p>
          </div>
        </div>

        {/* Right side - Character image */}
        <div className="w-24 h-24 flex items-center justify-center">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Inset shadow for card feel */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-card-inset" />
    </button>
  );
};

const SelectionPage = () => {
  const [, navigate] = useLocation();
  const { getAnimationClass } = useStaggeredAppear(5);

  return (
    <div className="w-full h-full bg-ui-yellow flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className={`w-full pt-12 pb-6 flex flex-col items-center gap-2 ${getAnimationClass(0)}`}>
        <img
          src="/logo.png"
          alt="LevelFit"
          className="w-48 h-auto object-contain"
        />
        <h1 className="font-['Baloo_2'] font-extrabold text-2xl text-dark-text text-center">
          How would you like to start?
        </h1>
        <p className="font-['Baloo_2'] font-normal text-sm text-text-muted text-center px-8">
          Choose your preferred method to tell us about yourself
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex-1 px-4 flex flex-col gap-4 justify-center">
        <div className={getAnimationClass(1)}>
          <SelectionCard
            title="Answer Questions"
            description="Quick multiple choice survey"
            icon={<ClipboardIcon />}
            imageUrl="/shiba-workout-sticker.png"
            onClick={() => navigate('/questionnaire')}
          />
        </div>

        <div className={getAnimationClass(2)}>
          <SelectionCard
            title="Voice Recording"
            description="Tell us in your own words"
            icon={<MicrophoneIcon />}
            imageUrl="/shiba-admiring-sticker.png"
            onClick={() => navigate('/record')}
          />
        </div>
      </div>

      {/* Bottom Section with Mascot */}
      <div className="relative h-36">
        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col z-0">
          <div className="h-[5px] bg-daily-mission" />
        </div>

        <div className="absolute inset-0 flex items-start z-10">
          <div className="w-32 h-full flex items-end overflow-hidden">
            <img
              src="/coach-shiba.png"
              alt="Coach"
              className="w-32 h-36 object-contain object-bottom animate-mascot-pop"
            />
          </div>

          <div className={`flex-1 p-2 flex flex-col justify-end items-center gap-2.5 h-full ${getAnimationClass(3)}`}>
            <div className="w-full bg-ui-white rounded-2xl p-3 shadow-md">
              <p className="font-['Baloo_2'] font-medium text-sm text-dark-text text-center">
                Pick one to get started! 🎯
              </p>
            </div>

            <CommonButton
              text="Skip for now"
              className="w-full opacity-70"
              disableDefaultPadding
              formButton
              onClick={() => navigate('/dashboard')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
