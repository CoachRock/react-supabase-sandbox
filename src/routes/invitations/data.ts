import { Candidate } from './types';

export const mockCandidates: Candidate[] = [
  { 
    id: '1', 
    name: 'Johnson, Robert', 
    coverLetter: true, 
    score: '94%',
    status: 'In Progress'
  },
  { 
    id: '2', 
    name: 'Smith, Emily', 
    coverLetter: true, 
    score: '87%',
    status: 'Delivered'
  },
  { 
    id: '3', 
    name: 'Williams, Michael', 
    coverLetter: false, 
    score: '79%',
    status: 'Expired'
  },
  { 
    id: '4', 
    name: 'Brown, Sarah', 
    coverLetter: false, 
    score: '64%',
    status: 'Delivered'
  }
];