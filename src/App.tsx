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
import { useEffect } from 'react';
import { emitter } from './utils/events';

const App = () => {
  const [location] = useLocation();

  useEffect(() => {
    let handleTriggerPWAPrompt = () => { };
    // Capture the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      console.log("beforeinstallprompt fired:", e);

      // setInstallPromptEvent(e);
      handleTriggerPWAPrompt = () => {
        console.log("PWA prompt triggered:", e);

        if (e) {
          console.log("Attempting to prompt PWA installation from App.tsx:", e);
          (e as any).prompt();
        } else {
          console.log("Browser does not support PWA installation or criteria not met.");
          alert("Browser does not support installation or criteria not met.");
        }
      };
      emitter.on("triggerPWAPrompt", handleTriggerPWAPrompt);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      emitter.off("triggerPWAPrompt", handleTriggerPWAPrompt);
    };
  }, []);

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