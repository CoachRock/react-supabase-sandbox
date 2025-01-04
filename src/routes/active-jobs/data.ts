import type { Assistant, Job } from './types';

export const availableAssistants: Assistant[] = [
  {
    id: 'a1',
    name: 'Thompson, Sarah',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'a2',
    name: 'Wilson, Michael',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  // Add more assistants as needed
];

export const mockJobs: Job[] = [
  {
    title: "Senior Software Engineer",
    id: "XKTR789",
    location: { city: "Austin", state: "TX" },
    tabs: { applicants: 892, invitations: 156, completed: 43, reviewed: 12 },
    hiringManager: {
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[0],
      availableAssistants[1]
    ],
    posted: "12/15/24 - 02:45PM"
  },
  // Add more jobs as needed
];