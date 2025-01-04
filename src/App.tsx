import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/layouts/dashboard-layout';
import { AuthProvider } from './components/auth/auth-provider';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/sonner';
import Login from './routes/auth/login';
import Home from './routes/home';

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

          {/* Protected Routes */}
          <Route element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;