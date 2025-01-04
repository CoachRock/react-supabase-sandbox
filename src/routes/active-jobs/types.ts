export interface Assistant {
  id: string;
  name: string;
  avatar: string;
}

interface HiringManager {
  name: string;
  avatar: string;
}

export interface Job {
  title: string;
  id: string;
  location: { city: string; state: string; };
  tabs: { applicants: number; invitations: number; completed: number; reviewed: number; };
  hiringManager: HiringManager;
  hiringAssistants: Assistant[];
  posted: string;
}