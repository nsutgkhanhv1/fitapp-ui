import type { FC } from 'react';
import ButtonNoIcon from '../components/ButtonNoIcon';
import ChatBubble from '@/components/ChatBubble';
import ButtonWithIcon from '@/components/ButtonWithIcon';

// Import assets

interface QuestionCardProps {
  question: string;
  example: string;
  imageUrl?: string;
  imageFlipped?: boolean;
  onClick?: () => void;
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  example,
  imageUrl,
  imageFlipped = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full bg-ui-white rounded-2xl border border-solid border-card-border overflow-hidden"
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
          <p className="font-['Baloo_2'] font-normal text-xs text-dark-text text-left leading-tight opacity-80">
            {example}
          </p>
        </div>
      </div>

      <div className="absolute -inset-px pointer-events-none rounded-2xl shadow-card-inset" />
    </button>
  );
};

const RecordScreen = () => {
  const questionNumber = "01";
  const questionText = "What is your main fitness goals?";

  const questions = [
    {
      question: "1. What is your current life style now?",
      example: "Ex: I always have fitness 3, 4 times each weeks. Hard work !...",
      imageUrl: "/shiba-eating-sticker.png",
      imageFlipped: true,
    },
    {
      question: "1. What is your current life style now?",
      example: "Ex: I always have fitness 3, 4 times each weeks. Hard work !...",
      imageUrl: "/shiba-workout-sticker.png",
      imageFlipped: false,
    },
    {
      question: "1. What is your current life style now?",
      example: "Ex: I always have fitness 3, 4 times each weeks. Hard work !...",
      imageUrl: "/shiba-admiring-sticker.png",
      imageFlipped: false,
    },
  ];

  return (
    <div className={`w-full h-full bg-ui-white flex flex-col items-center overflow-hidden`}>
      {/* Question Header */}
      <div className="w-full py-4 gap-2 bg-ui-white flex flex-col justify-center items-center overflow-hidden">
        <h1 className="w-72 text-center font-['Baloo_2'] font-extrabold text-2xl text-black leading-tight">
          Tell me about you!
        </h1>
        <p className="text-center text-sm leading-tight">
          <span className="font-['Baloo_2'] font-extrabold text-black">Question {questionNumber}: </span>
          <span className="font-['Baloo_2'] font-normal text-black">{questionText}</span>
        </p>
      </div>

      {/* Question Cards List */}
      <div className="flex-1 w-full px-4 flex flex-col gap-2.5">
        {questions.map((q, index) => (
          <QuestionCard
            key={index}
            question={q.question}
            example={q.example}
            imageUrl={q.imageUrl}
            imageFlipped={q.imageFlipped}
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="relative w-full h-36">
        {/* Bottom Navigation Bar */}
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

          <div className="flex-1 p-2 flex flex-col justify-end items-center gap-2.5 h-full">
            <ChatBubble
              message="Tell me your answer"
              className="w-full"
            />
            <ButtonWithIcon
              label="Record"
              icon={<img src="/mic-sticker.png" alt="Mic" className="w-12 h-12 object-contain" />}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordScreen;
