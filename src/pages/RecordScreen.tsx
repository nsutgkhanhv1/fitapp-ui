import { FC, useState } from 'react';
import { useLocation } from 'wouter';
import { CommonButton } from '../components/common/CommonButton';
import ChatBubble from '@/components/ChatBubble';
import SoundWave from '@/components/SoundWave';
import { useStaggeredAppear } from '../hooks/useAnimations';

// Recording states
type RecordingState = 'idle' | 'recording' | 'processing' | 'completed';

interface Question {
  question: string;
  example: string;
  imageUrl: string;
  imageFlipped: boolean;
}

interface QuestionCardProps {
  question: string;
  example: string;
  answer?: string;
  isAnswered?: boolean;
  imageUrl?: string;
  imageFlipped?: boolean;
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  example,
  answer,
  isAnswered = false,
  imageUrl,
  imageFlipped = false,
}) => {
  return (
    <div
      className={`relative w-full bg-ui-white rounded-2xl border border-solid overflow-hidden transition-all duration-300 ${isAnswered ? 'border-green-400 bg-green-50/30' : 'border-card-border'
        }`}
    >
      <div className="flex items-start h-24">
        {imageUrl && (
          <div className="w-20 px-2 h-full flex items-center justify-center overflow-hidden">
            <img
              src={imageUrl}
              alt=""
              className={`w-20 h-20 object-contain ${imageFlipped ? 'scale-x-[-1]' : ''}`}
            />
          </div>
        )}
        <div className="flex-1 px-3 flex flex-col justify-center h-full">
          <p className="font-['Baloo_2'] font-extrabold text-sm text-dark-text text-left leading-tight">
            {question}
          </p>
          {isAnswered && answer ? (
            <div className="flex items-start gap-1.5">
              <span className="text-green-500 text-xs mt-0.5">✓</span>
              <p className="font-['Baloo_2'] font-medium text-xs text-green-600 text-left leading-tight line-clamp-2">
                {answer}
              </p>
            </div>
          ) : (
            <p className="font-['Baloo_2'] font-normal text-xs text-dark-text text-left leading-tight opacity-60 italic">
              {example}
            </p>
          )}
        </div>
      </div>

      <div className="absolute -inset-px pointer-events-none rounded-2xl shadow-card-inset" />
    </div>
  );
};

const ALL_QUESTIONS: Question[] = [
  {
    question: "1. What is your current lifestyle now?",
    example: "Ex: I work from home and sit most of the day...",
    imageUrl: "/shiba-eating-sticker.png",
    imageFlipped: true,
  },
  {
    question: "2. How often do you exercise currently?",
    example: "Ex: I go to the gym 2-3 times a week...",
    imageUrl: "/shiba-workout-sticker.png",
    imageFlipped: false,
  },
  {
    question: "3. What's your typical daily routine?",
    example: "Ex: I wake up at 7am, work until 6pm...",
    imageUrl: "/shiba-admiring-sticker.png",
    imageFlipped: false,
  },
  // Batch 2: Goals & Motivation
  {
    question: "4. What are your main fitness goals?",
    example: "Ex: I want to lose weight and build muscle...",
    imageUrl: "/shiba-eating-sticker.png",
    imageFlipped: true,
  },
  {
    question: "5. What motivates you to stay fit?",
    example: "Ex: I want to feel healthier and more energetic...",
    imageUrl: "/shiba-workout-sticker.png",
    imageFlipped: false,
  },
  {
    question: "6. Have you tried fitness programs before?",
    example: "Ex: Yes, I tried a few apps but couldn't stick with them...",
    imageUrl: "/shiba-admiring-sticker.png",
    imageFlipped: false,
  },
  // Batch 3: Preferences
  {
    question: "7. What types of exercises do you enjoy?",
    example: "Ex: I prefer cardio like running and cycling...",
    imageUrl: "/shiba-eating-sticker.png",
    imageFlipped: true,
  },
  {
    question: "8. How much time can you dedicate daily?",
    example: "Ex: I can spare about 30-45 minutes...",
    imageUrl: "/shiba-workout-sticker.png",
    imageFlipped: false,
  },
  {
    question: "9. Any injuries or limitations to consider?",
    example: "Ex: I have a bad knee from an old injury...",
    imageUrl: "/shiba-admiring-sticker.png",
    imageFlipped: false,
  },
];

const BATCH_SIZE = 3;
const TOTAL_BATCHES = Math.ceil(ALL_QUESTIONS.length / BATCH_SIZE);

const BATCH_TITLES = [
  { number: "01", title: "Tell me about your current lifestyle" },
  { number: "02", title: "What are your fitness goals?" },
  { number: "03", title: "What are your preferences?" },
];

const RecordScreen = () => {
  const [, navigate] = useLocation();
  const { getAnimationClass } = useStaggeredAppear(6);

  // Recording state management
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [currentBatch, setCurrentBatch] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // Get questions for current batch
  const currentBatchQuestions = ALL_QUESTIONS.slice(
    currentBatch * BATCH_SIZE,
    (currentBatch + 1) * BATCH_SIZE
  );

  const batchInfo = BATCH_TITLES[currentBatch] || { number: "01", title: "Tell me about you" };

  // Check if current batch is completed
  const isBatchCompleted = currentBatchQuestions.every((_, idx) => {
    const globalIndex = currentBatch * BATCH_SIZE + idx;
    return !!answers[globalIndex];
  });

  // Simulated AI processing - parses one recording into multiple answers
  const simulateAIProcess = async () => {
    setRecordingState('processing');

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Fake AI-parsed answers for each question in the batch
    const fakeAnswersByBatch = [
      // Batch 1 answers
      [
        "I work from home as a software developer, spend 8+ hours sitting.",
        "Currently working out 2-3 times a week, mostly running.",
        "Wake up at 8am, work until 6pm, sometimes go for evening walks.",
      ],
      // Batch 2 answers
      [
        "My goal is to build lean muscle and improve overall stamina.",
        "Health and energy - I want to feel better every day.",
        "Tried gym memberships before but lost motivation after 2 months.",
      ],
      // Batch 3 answers
      [
        "I enjoy a mix of weight training and HIIT workouts.",
        "Can dedicate about 45 minutes to 1 hour daily.",
        "No major injuries, just occasional lower back stiffness.",
      ],
    ];

    const batchAnswers = fakeAnswersByBatch[currentBatch] || [];

    // Set answers for all questions in this batch
    const newAnswers: Record<number, string> = {};
    currentBatchQuestions.forEach((_, idx) => {
      const globalIndex = currentBatch * BATCH_SIZE + idx;
      newAnswers[globalIndex] = batchAnswers[idx] || "Answer recorded.";
    });

    setAnswers(prev => ({ ...prev, ...newAnswers }));
    setRecordingState('completed');
  };

  // Handle record button click
  const handleRecordClick = () => {
    if (recordingState === 'idle') {
      setRecordingState('recording');
    } else if (recordingState === 'recording') {
      simulateAIProcess();
    }
  };

  // Handle moving to next batch
  const handleNextBatch = () => {
    if (currentBatch < TOTAL_BATCHES - 1) {
      setCurrentBatch(prev => prev + 1);
      setRecordingState('idle');
    } else {
      // All batches completed - navigate to next screen
      // TODO: Navigate to results/dashboard
      navigate('/selection');
    }
  };

  // Get button text based on state
  const getButtonText = () => {
    switch (recordingState) {
      case 'idle':
        return 'Record Answers';
      case 'recording':
        return 'Stop Recording';
      case 'processing':
        return 'AI Analyzing...';
      case 'completed':
        return currentBatch < TOTAL_BATCHES - 1 ? 'Next Questions' : 'Finish';
      default:
        return 'Record';
    }
  };

  // Get button icon based on state
  const getButtonIcon = () => {
    switch (recordingState) {
      case 'idle':
        return <img src="/mic-sticker.png" alt="Mic" className="w-12 h-12 object-contain" />;
      case 'recording':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-sm" />
          </div>
        );
      case 'processing':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        );
      case 'completed':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        );
      default:
        return <img src="/mic-sticker.png" alt="Mic" className="w-12 h-12 object-contain" />;
    }
  };

  // Get chat message based on state
  const getChatMessage = () => {
    switch (recordingState) {
      case 'idle':
        return 'Answer all 3 questions in one go!';
      case 'recording':
        return "I'm listening to your answers...";
      case 'processing':
        return 'Analyzing your responses...';
      case 'completed':
        return isBatchCompleted ? 'Great answers! 🎉' : 'Got it!';
      default:
        return 'Tell me your answers';
    }
  };

  return (
    <div className={`w-full h-full bg-ui-white flex flex-col items-center overflow-hidden`}>
      {/* Header section */}
      <div className={`w-full py-4 pt-12 gap-2 bg-ui-white flex flex-col justify-center items-center overflow-hidden ${getAnimationClass(0)}`}>
        <h1 className="w-full text-center font-['Baloo_2'] font-extrabold text-2xl text-black leading-tight">
          Tell me about you!
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-center text-sm leading-tight">
            <span className="font-['Baloo_2'] font-extrabold text-black">Part {batchInfo.number}: </span>
            <span className="font-['Baloo_2'] font-normal text-black">{batchInfo.title}</span>
          </p>
        </div>
        {/* Progress indicator */}
        <div className="flex items-center gap-2 mt-1">
          {Array.from({ length: TOTAL_BATCHES }).map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx < currentBatch
                ? 'w-8 bg-green-400'
                : idx === currentBatch
                  ? 'w-8 bg-button-start'
                  : 'w-4 bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Questions list */}
      <div className="flex-1 w-full px-4 flex flex-col gap-2.5 overflow-auto">
        {currentBatchQuestions.map((q, idx) => {
          const globalIndex = currentBatch * BATCH_SIZE + idx;
          return (
            <div
              key={globalIndex}
              className={`${getAnimationClass(idx + 1)} ${recordingState === 'recording'
                ? 'ring-2 ring-button-start/50 ring-offset-1 rounded-2xl'
                : ''
                }`}
            >
              <QuestionCard
                question={q.question}
                example={q.example}
                answer={answers[globalIndex]}
                isAnswered={!!answers[globalIndex]}
                imageUrl={q.imageUrl}
                imageFlipped={q.imageFlipped}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom section with coach and button */}
      <div className="relative w-full h-40">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col z-0">
          <div className="h-[5px] bg-daily-mission" />
        </div>

        <div className="absolute inset-0 flex items-start z-10">
          <div className="w-32 h-full flex items-end overflow-hidden">
            <img
              src="/coach-shiba.png"
              alt="Coach"
              className="w-32 h-36 object-contain object-bottom"
            />
          </div>

          <div className={`flex-1 p-2 flex flex-col justify-end items-center gap-2 h-full ${getAnimationClass(4)}`}>
            {/* Sound wave visualization */}
            {recordingState === 'recording' && (
              <div className="w-full flex justify-center animate-fade-in">
                <SoundWave isActive={true} />
              </div>
            )}

            <ChatBubble
              message={getChatMessage()}
              className="w-full"
            />

            <CommonButton
              text={getButtonText()}
              addon={getButtonIcon()}
              className={`w-full transition-all duration-200 ${recordingState === 'recording' ? 'bg-red-500' : ''
                }`}
              disableDefaultPadding
              formButton
              disabled={recordingState === 'processing'}
              onClick={recordingState === 'completed' ? handleNextBatch : handleRecordClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordScreen;
