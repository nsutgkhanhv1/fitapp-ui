import { Route, Link, Router } from 'wouter';
import DashboardPage from './pages/DashboardPage';
import MissionPage from './pages/MissionPage';
import QuestionnairePage from './pages/QuestionnairePage';
import RecordScreen from './pages/RecordScreen';
import ChatScreen from './pages/ChatScreen';
import SplashPage from './pages/SplashPage';
import CreateWorkoutSession from './pages/CreateWorkoutSession';

// Home page with navigation to all pages
const HomePage = () => (
  <div className="min-h-screen bg-orange-200 p-6">
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">LevelFit App</h1>
      <nav className="space-y-3">
        <Link href="/splash" className="block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-gray-800 font-medium">
          📊 Splash
        </Link>
        <Link href="/dashboard" className="block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-gray-800 font-medium">
          📊 Dashboard
        </Link>
        <Link href="/mission" className="block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-gray-800 font-medium">
          🎯 Mission
        </Link>
        <Link href="/questionnaire" className="block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-gray-800 font-medium">
          📝 Questionnaire
        </Link>
        <Link href="/record" className="block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-gray-800 font-medium">
          🎥 Record
        </Link>
        <Link href="/chat" className="block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-gray-800 font-medium">
          💬 Chat
        </Link>
        <Link href="/create-session" className="block w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-gray-800 font-medium">
          🏋️ Create Workout Session
        </Link>
      </nav>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-0 z-50 overflow-hidden">
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/splash" component={SplashPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/mission" component={MissionPage} />
        <Route path="/questionnaire" component={QuestionnairePage} />
        <Route path="/record" component={RecordScreen} />
        <Route path="/chat" component={ChatScreen} />
        <Route path="/create-session" component={CreateWorkoutSession} />
      </Router>
    </div>
  );
}

export default App;