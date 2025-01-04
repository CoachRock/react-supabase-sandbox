export interface Candidate {
  id: string;
  name: string;
  coverLetter: boolean;
  score: string;
  status: 'In Progress' | 'Delivered' | 'Expired';
}