export type QuestionType = 'video' | 'ai' | 'true-false' | 'multiple-choice' | 'short-answer';

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: string[];
  isAiFollowUp?: boolean;
}