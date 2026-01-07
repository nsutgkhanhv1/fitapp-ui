import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import PictureCard from '../components/PictureCard';
import MissionItem from '../components/MissionItem';
import ButtonWithIcon from '../components/ButtonWithIcon';
import ChatBubble from '@/components/ChatBubble';



const MissionsIcon = () => (
  <img src="/flame-dumbbell-icon.png" className="w-12 h-11 scale-110 object-contain" style={{ filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))' }} />
);

const SmallCharacterIcon = () => (
  <img
    src="/target-sticker.png"
    alt=""
    className="w-8 h-6 object-cover object-top rounded-sm"
  />
);

const MissionPage = () => {
  return (
    <div className={`w-full h-full max-w-md bg-ui-yellow flex flex-col overflow-hidden`}>
      <Header title="Mission" showBack />

      <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-hidden">
        <div
          style={{
            boxShadow: '0 2px 1px 0 rgba(142, 178, 255, 0.90) inset, 0px 2px 4px 0px rgba(0,0,0,0.25), 0 -5px 1px 0 rgba(32, 44, 124, 0.25) inset',
          }}
          className="relative border border-t-0 border-[#1D65A9] w-full bg-linear-to-r from-section-header-start to-section-header-end px-1.5 py-3 rounded-[20px] flex flex-col gap-1 items-center justify-center"
        >
          <div className='flex gap-2 w-full px-3 py-1'>
            <img src="/mission-icon.png" className='w-9 h-9' />
            <span
              className="text-white text-title-01 font-extrabold font-['Baloo_2']"
              style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.50)' }}
            >
              Daily mission (1/3)
            </span>
            <img src="/golden-star-icon.png" alt="" className="w-9 h-9" />
          </div>
          <div className='flex gap-1 items-start justify-center'>
            <PictureCard
              title={"Upload your meal photo"}
              buttonText="Get snaping!"
              onButtonClick={() => console.log('Upload meal clicked')}
              imageUrl="/upload-meal-sticker.png"
              done={true}
            />

            <PictureCard
              title={"Post Workout\nPic"}
              imageUrl="/upload-workout-sticker.png"
              overlayImageUrl="https://placehold.co/200x200"
              done={false}
            />

            <PictureCard
              title={"Chat with\nYour Buddy"}
              buttonText="Get snaping!"
              onButtonClick={() => console.log('Chat with buddy clicked')}
              imageUrl="/chat-with-pet-sticker.png"
              done={false}
            />
          </div>
        </div>

        <SectionHeader title="Weekly Mission (0/4)" />

        <div className="flex-1 flex flex-col gap-1">
          <MissionItem
            title="Update Body Progress"
            current={0}
            total={1}
            icon={<SmallCharacterIcon />}
            done={false}
          />
          <MissionItem
            title="Upload Your Meal Photo"
            current={5}
            total={5}
            icon={<SmallCharacterIcon />}
            done={true}
          />
          <MissionItem
            title="Upload Your Workout pic"
            current={0}
            total={3}
            icon={<SmallCharacterIcon />}
            done={false}
          />
          <MissionItem
            title="Level Up your Pet"
            current={0}
            total={1}
            icon={<SmallCharacterIcon />}
            done={false}
          />
        </div>
      </div>
      <div className="relative h-fit flex">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col z-0">
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
              message="Tập luyện ngay với tôi nhé!"
              className="w-full"
            />

            <ButtonWithIcon
              label="Create workout"
              icon={<MissionsIcon />}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default MissionPage;
