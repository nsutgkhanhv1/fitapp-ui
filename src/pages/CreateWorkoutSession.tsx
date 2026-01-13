import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import ChatBubble from '../components/ChatBubble';
import { CommonButton } from '../components/common/CommonButton';
import StepSlider from '@/components/StepSlider';
import IconButton from '@/components/IconButton';
import SoundWave from '@/components/SoundWave';
import { useStaggeredAppear } from '../hooks/useAnimations';

// Recording states
type RecordingState = 'idle' | 'recording' | 'processing';
type InputMode = 'none' | 'recording' | 'typing';

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
  <img src="/mic-sticker.png" alt="Mic" className="w-10 h-10 object-contain" />
);

// Stop icon for recording
const StopIcon = () => (
  <div className="w-8 h-8 flex items-center justify-center">
    <div className="w-5 h-5 bg-white rounded-sm" />
  </div>
);

// Spinner icon for processing
const SpinnerIcon = () => (
  <div className="w-8 h-8 flex items-center justify-center">
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
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

// Close icon
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="#4F6280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CreateWorkoutSession = () => {
  const [duration, setDuration] = useState(60);
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [inputMode, setInputMode] = useState<InputMode>('none');
  const [transcribedText, setTranscribedText] = useState<string | null>(null);
  const [typingText, setTypingText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const steps = [0, 15, 30, 45, 60, 75, 90, 105, 120];
  const { getAnimationClass } = useStaggeredAppear(4);

  // Focus textarea when typing mode is activated
  useEffect(() => {
    if (inputMode === 'typing' && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [inputMode]);

  // Simulated AI processing
  const simulateAIProcess = async () => {
    setRecordingState('processing');

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Fake transcription result
    const fakeTranscription = "I have a slight pain in my left knee today. Also feeling a bit tired, so I'd like to take it easier on cardio exercises.";
    setTranscribedText(fakeTranscription);
    setRecordingState('idle');
    setInputMode('none');
  };

  // Handle record button click
  const handleRecordClick = () => {
    if (recordingState === 'idle') {
      setInputMode('recording');
      setRecordingState('recording');
    } else if (recordingState === 'recording') {
      simulateAIProcess();
    }
  };

  // Handle keyboard button click
  const handleKeyboardClick = () => {
    if (inputMode === 'typing') {
      // Close typing mode
      setInputMode('none');
    } else {
      // Open typing mode
      setInputMode('typing');
      setTypingText(transcribedText || '');
    }
  };

  // Handle typing submit
  const handleTypingSubmit = () => {
    if (typingText.trim()) {
      setTranscribedText(typingText.trim());
    }
    setInputMode('none');
  };

  // Handle cancel typing
  const handleCancelTyping = () => {
    setInputMode('none');
    setTypingText('');
  };

  // Get button text based on state
  const getRecordButtonText = () => {
    switch (recordingState) {
      case 'idle':
        return 'Record';
      case 'recording':
        return 'Stop';
      case 'processing':
        return 'Processing...';
      default:
        return 'Record';
    }
  };

  // Get button icon based on state
  const getRecordButtonIcon = () => {
    switch (recordingState) {
      case 'idle':
        return <MicIcon />;
      case 'recording':
        return <StopIcon />;
      case 'processing':
        return <SpinnerIcon />;
      default:
        return <MicIcon />;
    }
  };

  // Get coach message based on state
  const getCoachMessage = () => {
    if (recordingState === 'recording') {
      return "I'm listening...";
    }
    if (recordingState === 'processing') {
      return "Let me think about that...";
    }
    if (inputMode === 'typing') {
      return "Type away! I'm reading... 📝";
    }
    if (transcribedText) {
      return "Got it! Ready when you are! 💪";
    }
    return "Tell me if you need any adjustment!";
  };

  return (
    <div className="w-full h-full max-w-md bg-ui-yellow flex flex-col overflow-hidden">
      <Header title="Create Your Session" showBack />

      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
        {/* Duration Slider Card */}
        <div
          style={{
            boxShadow: '0 2px 1px 0 rgba(142, 178, 255, 0.90) inset, 0px 2px 4px 0px rgba(0,0,0,0.25), 0 -5px 1px 0 rgba(32, 44, 124, 0.25) inset',
          }}
          className={`relative w-full bg-linear-to-r from-section-header-start to-section-header-end px-1 pb-2 rounded-[20px] flex flex-col gap-1 ${getAnimationClass(0)}`}
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

        {/* Issues Card with Recording/Typing */}
        <div
          className={`bg-ui-white rounded-[20px] flex flex-col gap-3 ${getAnimationClass(1)}`}
          style={{
            boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.15), inset 0px -3px 1px 0px rgba(183, 133, 90, 0.15)',
            border: '1px solid #E5DDD0'
          }}
        >
          <div className="text-center text-ui-navy text-title-02 font-extrabold font-['Baloo_2'] p-4 pb-0 border-b border-card-divider">
            Any Issues today?
          </div>

          {/* Sound Wave during recording */}
          {recordingState === 'recording' && (
            <div className="w-full flex justify-center py-2 animate-fade-in">
              <SoundWave isActive={true} />
            </div>
          )}

          {/* Typing Input */}
          {inputMode === 'typing' && (
            <div className="px-4 py-2 animate-fade-in">
              <div className="relative">
                <textarea
                  ref={textareaRef}
                  value={typingText}
                  onChange={(e) => setTypingText(e.target.value)}
                  placeholder="Type any issues or adjustments you need..."
                  className="w-full h-24 p-3 pr-8 bg-gray-50 rounded-xl border border-card-border font-['Baloo_2'] text-sm text-dark-text resize-none focus:outline-none focus:ring-2 focus:ring-button-start/50"
                />
                <button
                  onClick={handleCancelTyping}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="flex gap-2 mt-2">
                <CommonButton
                  text="Cancel"
                  className="flex-1 py-1.5"
                  secondaryStyle
                  disableDefaultPadding
                  onClick={handleCancelTyping}
                />
                <CommonButton
                  text="Save"
                  className="flex-1 py-1.5"
                  disableDefaultPadding
                  onClick={handleTypingSubmit}
                  disabled={!typingText.trim()}
                />
              </div>
            </div>
          )}

          {/* Record/Keyboard Buttons (hide when typing) */}
          {inputMode !== 'typing' && (
            <div className="flex items-center justify-center gap-3">
              <CommonButton
                text={getRecordButtonText()}
                className={`px-4 py-1.5 transition-all duration-200 ${recordingState === 'recording' ? 'bg-red-500' : ''
                  }`}
                addon={getRecordButtonIcon()}
                disableDefaultPadding
                formButton
                disabled={recordingState === 'processing'}
                onClick={handleRecordClick}
              />

              <IconButton
                icon={<KeyboardIcon />}
                className="size-9"
                onClick={handleKeyboardClick}
              />
            </div>
          )}

          <div className="w-full h-px bg-gray-200" />

          <div className="flex flex-col pb-4 px-4">
            <h4 className="text-center text-text-muted text-title-02 font-extrabold font-['Baloo_2']">
              {transcribedText ? 'Your Notes' : 'Summarize information'}
            </h4>
            {transcribedText ? (
              <div className="flex items-start gap-2 mt-1">
                <span className="text-green-500 text-sm mt-0.5">✓</span>
                <p className="text-left text-green-600 text-desc-02 font-medium font-['Baloo_2'] leading-4">
                  {transcribedText}
                </p>
              </div>
            ) : (
              <p className="text-center text-text-muted text-desc-02 font-medium font-['Baloo_2'] leading-4 italic opacity-60">
                Record or type any issues you want to share...
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section with Coach */}
      <div className="h-fit flex relative">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col">
          <div className="h-[5px] bg-daily-mission" />
        </div>

        <div className="z-10 inset-0 flex flex-1">
          <div className="w-32 h-full flex items-end">
            <img
              src="/mascot-dashboard.png"
              alt="Shiba"
              className="w-32 h-28 object-contain animate-mascot-pop"
            />
          </div>

          <div className={`flex-1 p-2 flex flex-col justify-end items-center gap-2.5 overflow-hidden ${getAnimationClass(2)}`}>
            <ChatBubble
              message={getCoachMessage()}
              className="w-full"
            />

            <CommonButton
              text="Start Workout!!!"
              addon={<WorkoutIcon />}
              className='w-full'
              disableDefaultPadding
              formButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkoutSession;
