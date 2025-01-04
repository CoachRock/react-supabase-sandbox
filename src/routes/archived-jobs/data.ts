import { ArchivedJob } from './types';

export const mockArchivedJobs: ArchivedJob[] = [
  {
    title: "Barista - Shift Manager",
    id: "FKLS345",
    location: { city: "Indianapolis", state: "IN" },
    tabs: { applicants: 72, invitations: 24, completed: 14, reviewed: 7 },
    hiringManager: "Michael Johnson",
    posted: "11/22/24 - 11:14AM",
    finalThoughts: {
      candidateName: "Sandra Hanson",
      feedback: "demonstrated strong customer service skills and extensive coffee preparation knowledge. Their previous barista and shift management experience highlights their ability to handle high-pressure situations and lead a team. While they need to improve inventory management skills, they expressed a strong willingness to learn. Based on their experience and enthusiasm, we have decided to hire",
      position: "Barista - Shift Manager"
    }
  },
  // Add more archived jobs as needed
];