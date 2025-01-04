import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';
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

function App() {
  return (
    <DashboardLayout>
      <Routes>
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
      </Routes>
    </DashboardLayout>
  );
}

export default App;