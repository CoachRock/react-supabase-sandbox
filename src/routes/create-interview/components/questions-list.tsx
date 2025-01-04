import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Play, Pencil, Trash2, HelpCircle, Share2, FileText, Cpu } from 'lucide-react';
import type { Question } from '../types';

interface QuestionsListProps {
  questions: Question[];
  onQuestionsChange: (questions: Question[]) => void;
}

export function QuestionsList({ questions, onQuestionsChange }: QuestionsListProps) {
  const getQuestionIcons = (type: Question['type']) => {
    const commonIcons = [
      <Pencil key="edit" className="h-5 w-5 transition-colors duration-200" />,
      <Trash2 key="delete" className="h-5 w-5 transition-colors duration-200" />
    ];

    switch (type) {
      case 'video':
        return [<Play key="play" className="h-5 w-5 transition-colors duration-200" />, ...commonIcons];
      case 'true-false':
        return [<HelpCircle key="help" className="h-5 w-5 transition-colors duration-200" />, ...commonIcons];
      case 'multiple-choice':
        return [<Share2 key="share" className="h-5 w-5 transition-colors duration-200" />, ...commonIcons];
      case 'short-answer':
        return [<FileText key="text" className="h-5 w-5 transition-colors duration-200" />, ...commonIcons];
      case 'ai':
        return [
          <Play key="play" className="h-5 w-5 transition-colors duration-200" />,
          <Cpu key="ai" className="h-5 w-5 transition-colors duration-200" />
        ];
      default:
        return commonIcons;
    }
  };

  const handleDelete = (id: number) => {
    onQuestionsChange(questions.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-6">
      <Label className="text-lg font-semibold text-blue-500">Interview Questions</Label>
      
      <div className="space-y-2">
        {questions.map((question) => (
          <Card 
            key={question.id}
            className={cn(
              "p-4",
              question.isAiFollowUp 
                ? "bg-[#ABABAB] dark:bg-[#ABABAB] ml-8" 
                : "bg-[#F3F3F3] dark:bg-[#F3F3F3]",
              "dark:text-black"
            )}
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <span className="font-medium">
                  {question.id}.) {question.text}
                </span>
                {question.options && (
                  <div className="mt-2 ml-4 space-y-1">
                    {question.options.map((option, index) => (
                      <div key={index}>
                        {String.fromCharCode(65 + index)}.) {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-4 ml-4">
                {getQuestionIcons(question.type).map((icon, index) => (
                  <button 
                    key={index} 
                    className="hover:text-blue-500 dark:text-black dark:hover:text-blue-500 transition-colors duration-200"
                    onClick={() => {
                      if (icon.key === 'delete') {
                        handleDelete(question.id);
                      }
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}