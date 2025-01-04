import { Question } from './types';

export const mockQuestions: Question[] = [
  {
    id: 1,
    type: 'video',
    text: 'Tell us about your career to this point?'
  },
  {
    id: 2,
    type: 'ai',
    text: 'AI Follow-Up Question?',
    isAiFollowUp: true
  },
  {
    id: 3,
    type: 'ai',
    text: 'AI Follow-Up Question?',
    isAiFollowUp: true
  },
  {
    id: 4,
    type: 'true-false',
    text: 'T or F - It\'s important to follow-up with clients on a regular basis for the best chance of closing them?'
  },
  {
    id: 5,
    type: 'multiple-choice',
    text: 'Which best describes your plan to make your customers happy with their experience?',
    options: ['Option 1', 'Option 2', 'Option 3', 'All the above!']
  }
];

export const availableJobs = [
  { value: 'job1', label: 'Senior Software Engineer' },
  { value: 'job2', label: 'Product Manager' },
  { value: 'job3', label: 'UX Designer' }
];