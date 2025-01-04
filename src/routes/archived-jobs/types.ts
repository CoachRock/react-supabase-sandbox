export interface ArchivedJob {
  title: string;
  id: string;
  location: { city: string; state: string; };
  tabs: { applicants: number; invitations: number; completed: number; reviewed: number; };
  hiringManager: string;
  posted: string;
  finalThoughts: {
    candidateName: string;
    feedback: string;
    position: string;
  };
}