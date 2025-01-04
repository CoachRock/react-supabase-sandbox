import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/layouts/dashboard-layout';
import { AuthProvider, useAuth } from './components/auth/auth-provider';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/sonner';
import Login from './routes/auth/login';
import Home from './routes/home';
import ActiveJobs from './routes/active-jobs';
import ArchivedJobs from './routes/archived-jobs';
import IndividualEvaluation from './routes/individual-evaluation';
import ManageJobs from './routes/manage-jobs';
import Support from './routes/support';
import { UserProfile } from './routes/user-profile';

// Protected Route wrapper component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Auth Route wrapper component (redirects to home if already authenticated)
const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

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

          {/* Protected Routes */}
          <Route element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route path="/" element={<Home />} />
            <Route path="/active-jobs" element={<ActiveJobs />} />
            <Route path="/archived-jobs" element={<ArchivedJobs />} />
            <Route path="/individual-evaluation" element={<IndividualEvaluation />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Route>
        </Routes>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;