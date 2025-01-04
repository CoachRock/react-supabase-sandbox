export interface Job {
  id: string;
  title: string;
  location: string;
  posted: string;
  status: 'active' | 'draft';
}