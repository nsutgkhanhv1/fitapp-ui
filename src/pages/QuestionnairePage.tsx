import ButtonWhite from '../components/ButtonWhite';
import ChatBubble from '@/components/ChatBubble';
import ButtonWithIcon from '@/components/ButtonWithIcon';


// Check icon for selected answer
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <path d="M7 8L10.258 10.444C10.677 10.757 11.266 10.696 11.611 10.302L18 3" stroke="#00B521" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 10C19 11.881 18.411 13.714 17.316 15.242C16.22 16.771 14.674 17.918 12.893 18.522C11.112 19.127 9.187 19.158 7.387 18.613C5.588 18.067 4.005 16.971 2.86 15.479C1.715 13.987 1.066 12.174 1.005 10.295C0.943 8.415 1.472 6.563 2.517 5C3.562 3.436 5.07 2.239 6.83 1.577C8.59 0.914 10.513 0.82 12.329 1.307" stroke="#00B521" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const QuestionnairePage = () => {
  // Mock data for the questionnaire
  const questionNumber = "01";
  const questionText = "What is your main fitness goals?";
  const selectedAnswer = 2; // Index of selected answer (0-based, so "C. Get toned")

  const answers = [
    "A. Build muscle",
    "B. Lose weight",
    "C. Get toned",
    "D. Stay healthy",
    "E. Increase stamina"
  ];

  return (
    <div className={`w-full h-full bg-ui-white flex flex-col items-center overflow-hidden`}>
      {/* Question Header */}
      <div className="w-full h-32 py-4 bg-ui-white flex flex-col justify-end items-center overflow-hidden">
        <h1 className="w-72 text-center font-['Baloo_2'] font-extrabold text-2xl text-black leading-tight">
          Let's get started!
        </h1>
        <p className="w-72 text-center text-sm leading-tight">
          <span className="font-['Baloo_2'] font-extrabold text-black">Question {questionNumber}: </span>
          <span className="font-['Baloo_2'] font-normal text-black">{questionText}</span>
        </p>
      </div>

      {/* Answer List */}
      <div className="flex-1 justify-center w-full px-4 flex flex-col gap-2.5">
        {answers.map((answer, index) => (
          <ButtonWhite
            key={index}
            label={answer}
            done={index === selectedAnswer}
            icon={<CheckIcon />}
            className="w-full"
          />
        ))}
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
              className="w-32 h-36 object-contain object-bottom"
            />
          </div>

          {/* Right Side - Hint Bubble and Next Button */}
          <div className="flex-1 p-2 flex flex-col justify-end items-center gap-2.5 h-full">
            <ChatBubble
              message="Choose one answer!"
              className="w-full"
            />

            {/* Next Button */}
            <ButtonWithIcon
              label="Next"
              icon={<img src="/golden-star-icon.png" alt="" className="w-12 h-12 object-contain" />}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;
