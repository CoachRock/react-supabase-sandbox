import { Candidate } from './types';

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Johnson, Robert',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    initials: 'RJ',
    coverLetter: true,
    resumeScore: '94%',
    interviewScore: '94%',
    humanScore: '90%'
  },
  {
    id: '2',
    name: 'Smith, Emily',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    initials: 'ES',
    coverLetter: true,
    resumeScore: '87%',
    interviewScore: '87%',
    humanScore: '80%'
  },
  {
    id: '3',
    name: 'Williams, Michael',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    initials: 'MW',
    coverLetter: false,
    resumeScore: '79%',
    interviewScore: '79%',
    humanScore: '70%'
  },
  {
    id: '4',
    name: 'Brown, Sarah',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    initials: 'SB',
    coverLetter: false,
    resumeScore: '64%',
    interviewScore: '64%',
    humanScore: '60%'
  }
];