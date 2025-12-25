import MissionCard from './components/MissionCard';
import TitleCard from './components/TitleCard';
import ButtonWithIcon from './components/ButtonWithIcon';
import ButtonNoIcon from './components/ButtonNoIcon';
import ButtonWhite from './components/ButtonWhite';
import PictureCard from './components/PictureCard';
import IconButton from './components/IconButton';
import TextInput from './components/TextInput';
import Header from './components/Header';
import ChatBubble from './components/ChatBubble';
import ChatMessage from './components/ChatMessage';
import MissionItem from './components/MissionItem';
import DashboardPage from './pages/DashboardPage';

// Import actual SVG assets from Figma
import cameraIcon from './assets/7cf99edef5a85ab32ef94cd44170dc757f68580a.svg';
import pauseIcon from './assets/1bf72b7811e404c4c0740d6d5f550b6821dc5332.svg';
import keyboardButtonFull from './assets/053608e14c3756d0420d3fe0a65023a6106935aa.svg';
import characterImage from './assets/bb9ce2750178d81376a972f4236fb7ae5def3d77.png';

// Icon components using actual Figma assets
const CameraIcon = () => (
  <img src={cameraIcon} alt="" className="size-full" style={{ '--fill-0': '#4F6280' } as React.CSSProperties} />
);

const PauseIcon = () => (
  <img src={pauseIcon} alt="" className="size-full" style={{ '--fill-0': '#4F6280' } as React.CSSProperties} />
);

// For keyboard button, we use the full button SVG since it includes the gradient
const KeyboardButtonFull = () => (
  <img src={keyboardButtonFull} alt="" className="size-[2.1875rem]" />
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <path d="M7 8L10.258 10.444C10.677 10.757 11.266 10.696 11.611 10.302L18 3" stroke="#00B521" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 10C19 11.881 18.411 13.714 17.316 15.242C16.22 16.771 14.674 17.918 12.893 18.522C11.112 19.127 9.187 19.158 7.387 18.613C5.588 18.067 4.005 16.971 2.86 15.479C1.715 13.987 1.066 12.174 1.005 10.295C0.943 8.415 1.472 6.563 2.517 5C3.562 3.436 5.07 2.239 6.83 1.577C8.59 0.914 10.513 0.82 12.329 1.307" stroke="#00B521" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CharacterIcon = () => (
  <img
    src={characterImage}
    alt=""
    className="w-12 h-12 object-cover object-center"
  />
);

// Small character icon for mission items
const SmallCharacterIcon = () => (
  <img
    src={characterImage}
    alt=""
    className="size-5 object-cover object-center rounded-full"
  />
);

const App = () => {
  return (
    <div className="min-h-screen bg-orange-200 p-6 overflow-auto">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Dashboard Page Demo */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Dashboard Page</h2>
          <DashboardPage />
        </section>

        {/* Headers Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Headers</h2>
          <div className="flex flex-wrap gap-4">
            <Header title="GAME TITLE" />
            <Header title="Screen name" showBack />
          </div>
        </section>

        {/* Existing Cards Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Cards (Existing)</h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-80">
              <MissionCard
                headerTitle="Title 01"
                missionTitle="Today's Mission!"
                description="- Complete 300 Skips -"
              />
            </div>
            <TitleCard
              headerTitle="Title 02"
              title="Title 02"
              description="Description 02"
            />
          </div>
        </section>

        {/* Buttons Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <ButtonWithIcon label="Button" icon={<CharacterIcon />} />
            <ButtonNoIcon label="Button title 01" />
            <ButtonWhite label="A. Build muscle" />
            <ButtonWhite label="C. Get toned" done icon={<CheckIcon />} />
          </div>
        </section>

        {/* Picture Cards Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Picture Cards</h2>
          <div className="flex flex-wrap gap-4">
            <PictureCard />
            <PictureCard done />
          </div>
        </section>

        {/* Icon Buttons Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Icon Buttons</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <IconButton icon={<CameraIcon />} />
            <KeyboardButtonFull />
            <IconButton icon={<PauseIcon />} />
          </div>
        </section>

        {/* Input Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Text Input</h2>
          <TextInput />
        </section>

        {/* Chat Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Chat Components</h2>
          <div className="space-y-4 bg-gray-100 p-4 rounded-lg">
            <ChatBubble message="Description 02: Lorem Ipsum is simply dummy text" />
            <ChatMessage message="User have good health today" />
            <ChatMessage message="User have good health today" showImage />
            <ChatMessage message="User have good health today" owned />
            <ChatMessage message="User have good health today" owned showImage />
          </div>
        </section>

        {/* Mission Items Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Mission Items</h2>
          <div className="space-y-2">
            <MissionItem title="Name your mission" icon={<SmallCharacterIcon />} />
            <MissionItem title="Name your mission" icon={<SmallCharacterIcon />} done />
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;