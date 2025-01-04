import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { AuthProvider } from '@/components/auth-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Login from '@/routes/auth/login';
import ResetPassword from '@/routes/auth/reset-password';
import UpdatePassword from '@/routes/auth/update-password';
import Home from '@/routes/home';
import CreateJob from '@/routes/create-job';
import ManageJobs from '@/routes/manage-jobs';
import CreateInterview from '@/routes/create-interview';
import ActiveJobs from '@/routes/active-jobs';
import ArchivedJobs from '@/routes/archived-jobs';
import UserManager from '@/routes/user-manager';
import Support from '@/routes/support';
import Settings from '@/routes/settings';
import UserProfile from '@/routes/user-profile';
import ApplicationBuilder from '@/routes/application-builder';
import ApplicationPreview from '@/routes/application-preview';
import Applicants from '@/routes/applicants';
import Invitations from '@/routes/invitations';
import CompletedInterviews from '@/routes/completed-interviews';
import Reviewed from '@/routes/reviewed';
import IndividualEvaluation from '@/routes/individual-evaluation';
import FinalReport from '@/routes/final-report';
import { useAuth } from '@/components/auth-provider';

// Protected Route wrapper component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Auth Route wrapper component (redirects to home if already authenticated)
const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          } />
          <Route path="/reset-password" element={
            <AuthRoute>
              <ResetPassword />
            </AuthRoute>
          } />
          <Route path="/update-password" element={
            <AuthRoute>
              <UpdatePassword />
            </AuthRoute>
          } />

          {/* Protected Routes */}
          <Route element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route path="/" element={<Home />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/create-interview" element={<CreateInterview />} />
            <Route path="/active-jobs" element={<ActiveJobs />} />
            <Route path="/archived-jobs" element={<ArchivedJobs />} />
            <Route path="/user-manager" element={<UserManager />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/application-builder" element={<ApplicationBuilder />} />
            <Route path="/application-preview" element={<ApplicationPreview />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/invitations" element={<Invitations />} />
            <Route path="/completed-interviews" element={<CompletedInterviews />} />
            <Route path="/reviewed" element={<Reviewed />} />
            <Route path="/individual-evaluation" element={<IndividualEvaluation />} />
            <Route path="/final-report" element={<FinalReport />} />
          </Route>
        </Routes>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;