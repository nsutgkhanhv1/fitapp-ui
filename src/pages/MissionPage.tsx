import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import PictureCard from '../components/PictureCard';
import MissionItem from '../components/MissionItem';
import ButtonWithIcon from '../components/ButtonWithIcon';



// Missions button icon - using coach character
const MissionsIcon = () => (
  <img src="https://placehold.co/200x200" alt="" className="w-12 h-11 object-cover object-top" />
);

// Small character icon for mission items
const SmallCharacterIcon = () => (
  <img
    src="https://placehold.co/200x200"
    alt=""
    className="size-6 object-cover object-top rounded-sm"
  />
);

const MissionPage = () => {
  return (
    <div className={`w-full h-full bg-ui-yellow flex flex-col overflow-hidden`}>
      <Header title="Mission" showBack />

      <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-hidden">
        <div
          style={{
            boxShadow: '0 2px 1px 0 rgba(142, 178, 255, 0.90) inset, 0px 2px 4px 0px rgba(0,0,0,0.25), 0 -5px 1px 0 rgba(32, 44, 124, 0.25) inset',
          }}
          className="relative border border-t-0 border-[#1D65A9] w-full bg-linear-to-r from-[#1D83E5] to-[#3EA3F7] px-1.5 py-3 rounded-[20px] flex flex-col gap-1 items-center justify-center"
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

        <SectionHeader title="Weekly Mission" variant="navy" />

        <div className="flex-1 flex flex-col gap-1">
          <MissionItem
            title="Name your mission"
            icon={<SmallCharacterIcon />}
            done={false}
          />
          <MissionItem
            title="Name your mission"
            icon={<SmallCharacterIcon />}
            done={true}
          />
          <MissionItem
            title="Name your mission"
            icon={<SmallCharacterIcon />}
            done={false}
          />
        </div>
      </div>
      <div className="relative h-36">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-ui-navy flex flex-col z-0">
          <div className="h-[5px] bg-daily-mission" />
        </div>

        <div className="absolute inset-0 flex items-start z-10">
          <div className="w-32 h-28 flex items-end overflow-hidden">
            <img
              src="https://placehold.co/200x200"
              alt="Coach"
              className="w-32 h-28 object-contain object-bottom"
            />
          </div>

          <div className="flex-1 p-2 flex flex-col justify-end items-center gap-2.5 overflow-hidden h-full">
            <div className="relative w-44 p-3 bg-ui-white rounded-full border border-solid border-reward-border shadow-card">
              <p className="w-32 font-['Baloo_2'] font-extrabold text-sm text-text-muted text-center leading-4">
                Earn your rewards
              </p>
              <div className="absolute -inset-px pointer-events-none rounded-full shadow-card-inset" />
            </div>

            <ButtonWithIcon
              label="Missions"
              icon={<MissionsIcon />}
              className="w-44"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MissionPage;
