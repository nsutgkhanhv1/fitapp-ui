import MissionCard from './components/MissionCard';
import TitleCard from './components/TitleCard';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-6 p-4 bg-orange-200">
      <div className="w-96">
        <MissionCard
          headerTitle="Title 01"
          missionTitle="Today's Mission!"
          description="- Complete 300 Skips -"
        />
      </div>
      <div className="w-96">
        <TitleCard
          headerTitle="Title 02"
          title="Title 02"
          description="Description 02"
        />
      </div>
    </div>
  );
}

export default App;