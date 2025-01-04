import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VideoQuestionModal } from './modals/video-question-modal';
import { TrueFalseQuestionModal } from './modals/true-false-question-modal';
import { MultipleChoiceQuestionModal } from './modals/multiple-choice-question-modal';
import { ShortAnswerQuestionModal } from './modals/short-answer-question-modal';
import type { Question } from '../types';

interface QuestionTypeSelectorProps {
  onQuestionAdd: (question: Question) => void;
}

export function QuestionTypeSelector({ onQuestionAdd }: QuestionTypeSelectorProps) {
  return (
    <div className="space-y-4">
      <Label className="text-lg font-semibold text-blue-500">Question Type</Label>
      <Card className="p-8 bg-[#EBEBEB] dark:bg-[#EBEBEB]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <VideoQuestionModal onQuestionAdd={onQuestionAdd}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
              Video
            </Button>
          </VideoQuestionModal>

          <TrueFalseQuestionModal onQuestionAdd={onQuestionAdd}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
              True or False
            </Button>
          </TrueFalseQuestionModal>

          <MultipleChoiceQuestionModal onQuestionAdd={onQuestionAdd}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
              Multiple Choice
            </Button>
          </MultipleChoiceQuestionModal>

          <ShortAnswerQuestionModal onQuestionAdd={onQuestionAdd}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
              Short Answer
            </Button>
          </ShortAnswerQuestionModal>
        </div>
      </Card>
    </div>
  );
}