import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import ButtonWhite from '../components/ButtonWhite';
import ChatBubble from '@/components/ChatBubble';
import { CommonButton } from '@/components/common/CommonButton';
import { useStaggeredAppear } from '../hooks/useAnimations';
import { CheckIcon, ArrowLeftIcon, GoldenStarIcon } from '@/components/icons';

// Questions data
const questions = [
  {
    id: 1,
    text: "What is your main fitness goals?",
    answers: [
      "A. Build muscle",
      "B. Lose weight",
      "C. Get toned",
      "D. Stay healthy",
      "E. Increase stamina"
    ]
  },
  {
    id: 2,
    text: "How often do you currently exercise?",
    answers: [
      "A. Never",
      "B. 1-2 times a week",
      "C. 3-4 times a week",
      "D. 5+ times a week"
    ]
  },
  {
    id: 3,
    text: "What is your current fitness level?",
    answers: [
      "A. Beginner",
      "B. Intermediate",
      "C. Advanced",
      "D. Expert"
    ]
  },
  {
    id: 4,
    text: "How much time can you dedicate per workout?",
    answers: [
      "A. 15-30 minutes",
      "B. 30-45 minutes",
      "C. 45-60 minutes",
      "D. More than 60 minutes"
    ]
  },
  {
    id: 5,
    text: "Do you have any equipment at home?",
    answers: [
      "A. No equipment",
      "B. Basic (dumbbells, resistance bands)",
      "C. Moderate (bench, barbell)",
      "D. Full home gym"
    ]
  }
];

const QuestionnairePage = () => {
  const [, navigate] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [animationKey, setAnimationKey] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = String(currentQuestionIndex + 1).padStart(2, '0');
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasAnsweredCurrent = selectedAnswers[currentQuestionIndex] !== null;
  const hasAnsweredAll = selectedAnswers.every(answer => answer !== null);

  // Trigger animation reset when question changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [currentQuestionIndex]);

  const { getAnimationClass } = useStaggeredAppear(currentQuestion.answers.length + 3);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = answerIndex;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (!hasAnsweredCurrent) return;

    if (isLastQuestion) {
      // Navigate to dashboard when finished
      navigate('/dashboard');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (isFirstQuestion) {
      navigate('/selection');
    } else {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const getButtonText = () => {
    if (isLastQuestion && hasAnsweredCurrent) {
      return "Finish";
    }
    return "Next";
  };

  const getHintMessage = () => {
    if (!hasAnsweredCurrent) {
      return "Choose one answer!";
    }
    if (isLastQuestion) {
      return hasAnsweredAll ? "Great job! Let's go!" : "Almost done!";
    }
    return "Good choice! Next?";
  };

  return (
    <div className={`w-full h-full bg-ui-white flex flex-col items-center overflow-hidden`}>
      {/* Animated Content Section */}
      <div key={animationKey} className="flex-1 w-full flex flex-col overflow-hidden">
        {/* Question Header */}
        <div className={`w-full h-32 py-4 bg-ui-white flex flex-col justify-end items-center overflow-hidden ${getAnimationClass(0)}`}>
          <h1 className="w-72 text-center font-['Baloo_2'] font-extrabold text-2xl text-black leading-tight">
            Let's get started!
          </h1>
          <p className="w-72 text-center text-sm leading-tight">
            <span className="font-['Baloo_2'] font-extrabold text-black">Question {questionNumber}: </span>
            <span className="font-['Baloo_2'] font-normal text-black">{currentQuestion.text}</span>
          </p>
        </div>

        {/* Answer List */}
        <div className="flex-1 justify-center w-full px-4 flex flex-col gap-2.5">
          {currentQuestion.answers.map((answer, index) => (
            <div key={index} className={getAnimationClass(index + 1)}>
              <ButtonWhite
                label={answer}
                done={index === selectedAnswers[currentQuestionIndex]}
                icon={<CheckIcon />}
                className="w-full"
                onClick={() => handleAnswerSelect(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative w-full h-36">
        {/* Bottom Navigation Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col z-0">
          <div className="h-[5px] bg-daily-mission" />
        </div>

        {/* Content Row */}
        <div className="absolute inset-0 flex items-start z-10">
          {/* Coach Character */}
          <div className="w-32 h-full flex items-end overflow-hidden">
            <img
              src="/coach-shiba.png"
              alt="Coach"
              className="w-32 h-36 object-contain object-bottom animate-mascot-pop"
            />
          </div>

          {/* Right Side - Hint Bubble and Navigation Buttons */}
          <div className={`flex-1 p-2 flex flex-col justify-end items-center gap-2.5 h-full ${getAnimationClass(currentQuestion.answers.length + 1)}`}>
            <ChatBubble
              message={getHintMessage()}
              className="w-full"
            />

            {/* Navigation Buttons Row */}
            <div className="w-full flex gap-2">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="h-12 px-4 bg-ui-white border-2 border-ui-navy rounded-xl flex items-center justify-center gap-1 font-['Baloo_2'] font-bold text-ui-navy transition-all active:scale-95"
              >
                <ArrowLeftIcon />
                <span>Back</span>
              </button>

              {/* Next/Finish Button */}
              <CommonButton
                text={getButtonText()}
                addon={<GoldenStarIcon className="w-12 h-12" />}
                className={`flex-1 ${!hasAnsweredCurrent ? 'opacity-50' : ''}`}
                disableDefaultPadding
                formButton
                onClick={handleNext}
                disabled={!hasAnsweredCurrent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;
