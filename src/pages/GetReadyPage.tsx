import Header from '../components/Header';
import ChatBubble from '../components/ChatBubble';
import CommonButton from '@/components/common/CommonButton';

const WorkoutIcon = () => (
  <img src="/flame-dumbbell-icon.png" className="w-12 h-11 scale-110 object-contain" style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }} />
);

const GetReadyPage = () => {
  return (
    <div className={`w-full h-full max-w-md bg-ui-white flex flex-col overflow-hidden`}>
      <Header title="Get ready!" showBack />

      <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto relative">
        <div className="flex justify-center flex-1">
          <img
            src="/squat-mannequin.png"
            alt="Workout Mannequin"
            className="w-full h-full object-contain"
          />
        </div>

        <div className='flex absolute p-4 top-0 left-0 flex-col gap-2 w-full h-full justify-end'>
          <div
            style={{
              boxShadow: '0 2px 1px 0 rgba(142, 178, 255, 0.90) inset, 0px 2px 4px 0px rgba(0,0,0,0.25), 0 -5px 1px 0 rgba(32, 44, 124, 0.25) inset',
            }}
            className="relative border border-t-0 border-[#1D65A9] w-full bg-linear-to-r from-section-header-start to-section-header-end px-1.5 pb-3 rounded-[20px] flex flex-col"
          >

            <div className="h-[30px] px-3 flex items-center rounded-t-[20px]">
              <span
                className="text-white text-title-01 font-extrabold font-['Baloo_2']"
                style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.50)' }}
              >
                Full body Blast!
              </span>
            </div>

            <div
              className="bg-ui-white rounded-2xl flex items-center"
              style={{ boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.25), inset 0px 1px 0px 0px rgba(255,255,255,0.50)' }}
            >
              <div className="flex-1 flex items-center">
                <div className='p-1.5 py-3 flex-1 flex items-center justify-center gap-1'>
                  <img className='w-8' src='/green-dumbbell-sticker.png' />
                  <span className="font-['Baloo_2']"><b>10</b> Exercises</span>
                </div>
                <div className='p-1.5 py-3 flex-1 flex items-center justify-center gap-1'>
                  <img className='w-8' src='/time-clock-icon.png' />
                  <span className="font-['Baloo_2']">Est. <b>60 min</b></span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div
              className={`bg-ui-white rounded-2xl overflow-hidden flex flex-col flex-1`}
              style={{
                boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.25), inset 0px -5px 1px 0px rgba(183,133,90,0.25)',
                outline: '1px solid #DAC39B',
              }}
            >
              <div className="px-2.5 pt-2 pb-1 border-b border-[#E6E1D7] flex items-center gap-1 justify-center">
                <img src='/flame-dumbbell-icon.png' className='w-8' />
                <span className="text-center text-black text-title-02 font-extrabold font-['Baloo_2'] leading-5">
                  Calories
                </span>
              </div>

              <div className="px-3 flex flex-col py-1">
                <div className="flex items-center justify-center font-['Baloo_2']">
                  <span className="font-['Baloo_2'] font-extrabold text-title-02 text-button-start">220</span> <span className='text-button-start text-xs'>kcal</span>
                </div>
              </div>
            </div>

            <div
              className={`bg-ui-white rounded-2xl overflow-hidden flex flex-col flex-1`}
              style={{
                boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.25), inset 0px -5px 1px 0px rgba(183,133,90,0.25)',
                outline: '1px solid #DAC39B',
              }}
            >
              <div className="px-2.5 pt-2 pb-1 border-b border-[#E6E1D7] flex items-center gap-1 justify-center">
                <img src='/green-dumbbell-sticker-front.png' className='w-8 h-[29px]' />
                <span className="text-center text-black text-title-02 font-extrabold font-['Baloo_2'] leading-5">
                  Equipment
                </span>
              </div>

              <div className="px-3 flex flex-col py-1">
                <div className="flex items-center justify-center font-['Baloo_2']">
                  <span className="font-['Baloo_2'] font-extrabold text-title-02 text-ui-navy">Mat & Dumbbells</span>
                </div>
              </div>
            </div>
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
              message="Let's crush this workout! Ready to go?"
              className="w-full"
            />

            <CommonButton
              text="Start Workout!!!"
              addon={<WorkoutIcon />}
              onClick={() => {
                // navigate("/exercise")
              }}
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

export default GetReadyPage;
