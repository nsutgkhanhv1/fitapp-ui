import { Route, Router, useLocation } from 'wouter';
import DashboardPage from './pages/DashboardPage';
import MissionPage from './pages/MissionPage';
import QuestionnairePage from './pages/QuestionnairePage';
import RecordScreen from './pages/RecordScreen';
import ChatScreen from './pages/ChatScreen';
import SplashPage from './pages/SplashPage';
import SelectionPage from './pages/SelectionPage';
import CreateWorkoutSession from './pages/CreateWorkoutSession';
import Layout from './components/Layout';
import GetReadyPage from './pages/GetReadyPage';
import ExerciseScreen from './pages/ExerciseScreen';

const App = () => {
  const [location] = useLocation();

  //   useEffect(() => {
  //   console.log("init BUILD_DATE", "BUILD_DATE");
  //   const token = getLocalItem("@cali-pt/userToken");
  //   if (!token) {
  //     navigate("/");
  //   } else {
  //     // navigate("/members");
  //   }

  //   return () => {};
  // }, [navigate]);


  return (
    <Layout key={location}>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-0 z-50 overflow-hidden">
        <Router>
          <Route path="/" component={SplashPage} />
          <Route path="/selection" component={SelectionPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/missions" component={MissionPage} />
          <Route path="/questionnaire" component={QuestionnairePage} />
          <Route path="/record" component={RecordScreen} />
          <Route path="/chat" component={ChatScreen} />
          <Route path="/create-session" component={CreateWorkoutSession} />
          <Route path="/get-ready" component={GetReadyPage} />
          <Route path="/exercise" component={ExerciseScreen} />
        </Router>
      </div></Layout>
  );
}

export default App;