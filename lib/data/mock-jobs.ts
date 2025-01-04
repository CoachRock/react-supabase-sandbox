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
  {
    id: 'a3',
    name: 'Davis, Emily',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'a4',
    name: 'Anderson, James',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'a5',
    name: 'Martinez, Lisa',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'a6',
    name: 'Taylor, Robert',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'a7',
    name: 'Brown, Jennifer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'a8',
    name: 'Garcia, David',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'a9',
    name: 'Miller, Rachel',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 'a10',
    name: 'Lee, Daniel',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
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
      availableAssistants[1],
      availableAssistants[2]
    ],
    posted: "12/15/24 - 02:45PM"
  },
  {
    title: "Product Marketing Manager",
    id: "WNPS456",
    location: { city: "Seattle", state: "WA" },
    tabs: { applicants: 634, invitations: 89, completed: 28, reviewed: 9 },
    hiringManager: {
      name: "Sarah Anderson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[3],
      availableAssistants[4],
      availableAssistants[5],
      availableAssistants[6]
    ],
    posted: "12/15/24 - 11:30AM"
  },
  {
    title: "Full Stack Developer",
    id: "KPTR123",
    location: { city: "San Francisco", state: "CA" },
    tabs: { applicants: 756, invitations: 124, completed: 38, reviewed: 15 },
    hiringManager: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[7],
      availableAssistants[8],
      availableAssistants[9]
    ],
    posted: "12/14/24 - 03:15PM"
  },
  {
    title: "UX/UI Designer",
    id: "MNBV789",
    location: { city: "New York", state: "NY" },
    tabs: { applicants: 542, invitations: 98, completed: 32, reviewed: 11 },
    hiringManager: {
      name: "Emily Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[1],
      availableAssistants[3],
      availableAssistants[5]
    ],
    posted: "12/14/24 - 01:30PM"
  },
  {
    title: "DevOps Engineer",
    id: "QWER456",
    location: { city: "Chicago", state: "IL" },
    tabs: { applicants: 423, invitations: 76, completed: 25, reviewed: 8 },
    hiringManager: {
      name: "Robert Taylor",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[2],
      availableAssistants[4],
      availableAssistants[6],
      availableAssistants[8]
    ],
    posted: "12/14/24 - 11:45AM"
  },
  {
    title: "Data Scientist",
    id: "ASDF789",
    location: { city: "Boston", state: "MA" },
    tabs: { applicants: 678, invitations: 112, completed: 35, reviewed: 13 },
    hiringManager: {
      name: "Jennifer Brown",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[0],
      availableAssistants[2],
      availableAssistants[4]
    ],
    posted: "12/13/24 - 04:20PM"
  },
  {
    title: "Product Manager",
    id: "ZXCV123",
    location: { city: "Denver", state: "CO" },
    tabs: { applicants: 489, invitations: 82, completed: 27, reviewed: 9 },
    hiringManager: {
      name: "Daniel Lee",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[1],
      availableAssistants[3],
      availableAssistants[5],
      availableAssistants[7]
    ],
    posted: "12/13/24 - 02:10PM"
  },
  {
    title: "Cloud Architect",
    id: "TYUI456",
    location: { city: "Portland", state: "OR" },
    tabs: { applicants: 345, invitations: 65, completed: 22, reviewed: 7 },
    hiringManager: {
      name: "Rachel Miller",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[2],
      availableAssistants[4],
      availableAssistants[6]
    ],
    posted: "12/13/24 - 11:30AM"
  },
  {
    title: "Frontend Developer",
    id: "GHJK789",
    location: { city: "Los Angeles", state: "CA" },
    tabs: { applicants: 567, invitations: 94, completed: 31, reviewed: 10 },
    hiringManager: {
      name: "James Anderson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[3],
      availableAssistants[5],
      availableAssistants[7],
      availableAssistants[9]
    ],
    posted: "12/12/24 - 03:45PM"
  },
  {
    title: "Machine Learning Engineer",
    id: "VBNM123",
    location: { city: "Seattle", state: "WA" },
    tabs: { applicants: 432, invitations: 78, completed: 26, reviewed: 8 },
    hiringManager: {
      name: "Lisa Martinez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[0],
      availableAssistants[3],
      availableAssistants[6]
    ],
    posted: "12/12/24 - 01:15PM"
  },
  {
    title: "Technical Lead",
    id: "POIU456",
    location: { city: "Austin", state: "TX" },
    tabs: { applicants: 623, invitations: 103, completed: 34, reviewed: 12 },
    hiringManager: {
      name: "David Garcia",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[1],
      availableAssistants[4],
      availableAssistants[7]
    ],
    posted: "12/12/24 - 10:30AM"
  },
  {
    title: "Backend Developer",
    id: "LKJH789",
    location: { city: "Miami", state: "FL" },
    tabs: { applicants: 378, invitations: 67, completed: 23, reviewed: 7 },
    hiringManager: {
      name: "Sarah Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    hiringAssistants: [
      availableAssistants[2],
      availableAssistants[5],
      availableAssistants[8]
    ],
    posted: "12/11/24 - 04:20PM"
  }
];