import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './components/auth/auth-provider';
import { DashboardLayout } from './components/layouts/dashboard-layout';
import Home from './routes/home';
import ActiveJobs from './routes/active-jobs';
import ArchivedJobs from './routes/archived-jobs';
import IndividualEvaluation from './routes/individual-evaluation';
import FinalReport from './routes/final-report';
import ManageJobs from './routes/manage-jobs';
import Support from './routes/support';
import UserProfile from './routes/user-profile';
import CreateInterview from './routes/create-interview';
import CreateJob from './routes/create-job';
import { Applicants } from './routes/applicants';

// Protected Route wrapper component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <div>Login Page</div>
          }
        />
        <Route
          path="/reset-password"
          element={
            <div>Reset Password Page</div>
          }
        />
        <Route
          path="/update-password"
          element={
            <div>Update Password Page</div>
          }
        />
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/active-jobs" element={<ActiveJobs />} />
          <Route path="/archived-jobs" element={<ArchivedJobs />} />
          <Route path="/individual-evaluation" element={<IndividualEvaluation />} />
          <Route path="/final-report" element={<FinalReport />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/create-interview" element={<CreateInterview />} />
          <Route path="/applicants" element={<Applicants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;