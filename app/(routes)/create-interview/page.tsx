"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { VideoQuestionModal } from '@/components/modals/video-question-modal';
import { TrueFalseQuestionModal } from '@/components/modals/true-false-question-modal';
import { MultipleChoiceQuestionModal } from '@/components/modals/multiple-choice-question-modal';
import { ShortAnswerQuestionModal } from '@/components/modals/short-answer-question-modal';
import { VerifyInterviewModal } from '@/components/modals/verify-interview-modal';
import { Play, Pencil, Trash2, HelpCircle, Share2, FileText, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Question {
  id: number;
  type: 'video' | 'ai' | 'true-false' | 'multiple-choice' | 'short-answer';
  text: string;
  options?: string[];
  isAiFollowUp?: boolean;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    type: 'video',
    text: 'Tell us about your career to this point?'
  },
  {
    id: 2,
    type: 'ai',
    text: 'Ai Follow-Up Question?',
    isAiFollowUp: true
  },
  {
    id: 3,
    type: 'ai',
    text: 'Ai Follow-Up Question?',
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
  },
  {
    id: 6,
    type: 'short-answer',
    text: 'Please explain in a short paragraph the most important part of your job as a sales manager?'
  },
  {
    id: 7,
    type: 'video',
    text: 'Tell us about your the greatest challenge you\'ve faced?'
  },
  {
    id: 8,
    type: 'ai',
    text: 'Ai Follow-Up Question?',
    isAiFollowUp: true
  },
  {
    id: 9,
    type: 'ai',
    text: 'Ai Follow-Up Question?',
    isAiFollowUp: true
  },
  {
    id: 10,
    type: 'short-answer',
    text: 'Please explain why you are the best candidate for this position?'
  }
];

export default function CreateInterview() {
  const [selectedJob, setSelectedJob] = useState('');

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

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Create An Interview" 
        description="Create a new job interview" 
      />

      <Card className="p-6">
        <div className="space-y-8">
          {/* Job Selection */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-blue-500">Select A Job</Label>
            <Select value={selectedJob} onValueChange={setSelectedJob}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select A Job from this List to Create An Interview" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="job1">Senior Software Engineer</SelectItem>
                <SelectItem value="job2">Product Manager</SelectItem>
                <SelectItem value="job3">UX Designer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Interview Questions Section */}
          <div className="space-y-6">
            <Label className="text-lg font-semibold text-blue-500">Add Interview Questions</Label>
            
            {/* Questions List */}
            <div className="space-y-2">
              {mockQuestions.map((question) => (
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
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Question Type Section */}
            <div className="space-y-4 mt-8">
              <Label className="text-lg font-semibold text-blue-500">Question Type</Label>
              <Card className="p-8 bg-[#EBEBEB] dark:bg-[#EBEBEB]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <VideoQuestionModal>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
                      Video
                    </Button>
                  </VideoQuestionModal>

                  <TrueFalseQuestionModal>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
                      True or False
                    </Button>
                  </TrueFalseQuestionModal>

                  <MultipleChoiceQuestionModal>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
                      Multiple Choice
                    </Button>
                  </MultipleChoiceQuestionModal>

                  <ShortAnswerQuestionModal>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
                      Short Answer
                    </Button>
                  </ShortAnswerQuestionModal>
                </div>
              </Card>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <VerifyInterviewModal>
              <Button variant="outline">
                Verify Interview Setup
              </Button>
            </VerifyInterviewModal>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:text-white">
              Post Interview Live
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}