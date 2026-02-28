// DESIGN: Dark Forge — Main App Router
// All routes and global context setup
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppProvider, useApp } from "./contexts/AppContext";
import { AdminProvider } from "./contexts/AdminContext";
import BottomNav from "./components/BottomNav";

// Pages
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Devotional from "./pages/Devotional";
import Journey from "./pages/Journey";
import WeekDetail from "./pages/WeekDetail";
import Achievements from "./pages/Achievements";
import Challenges from "./pages/Challenges";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Activities from "./pages/Activities";
import NotFound from "./pages/NotFound";

function Router() {
  const { user } = useApp();

  // Show onboarding if not completed
  if (!user.onboarded) {
    return <Onboarding />;
  }

  return (
    <>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/devocional/:week/:day" component={Devotional} />
        <Route path="/jornada" component={Journey} />
        <Route path="/semana/:week" component={WeekDetail} />
        <Route path="/medalhas" component={Achievements} />
        <Route path="/desafios" component={Challenges} />
        <Route path="/perfil" component={Profile} />
        <Route path="/atividades" component={Activities} />
        <Route path="/admin" component={Admin} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <BottomNav />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <AdminProvider>
          <AppProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </AppProvider>
        </AdminProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
