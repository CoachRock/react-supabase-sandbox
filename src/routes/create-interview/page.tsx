"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { JobSelector } from './components/job-selector';
import { QuestionsList } from './components/questions-list';
import { QuestionTypeSelector } from './components/question-type-selector';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VerifyInterviewModal } from './components/verify-interview-modal';
import { Question } from './types';
import { mockQuestions } from './data';

export function CreateInterview() {
  const [selectedJob, setSelectedJob] = useState('');
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Create An Interview" 
        description="Create a new job interview" 
      />

      <Card className="p-6">
        <div className="space-y-8">
          <JobSelector 
            value={selectedJob} 
            onChange={setSelectedJob} 
          />

          <QuestionsList 
            questions={questions} 
            onQuestionsChange={setQuestions} 
          />

          <QuestionTypeSelector 
            onQuestionAdd={(newQuestion) => 
              setQuestions(prev => [...prev, newQuestion])
            } 
          />

          <div className="flex justify-end space-x-4">
            <VerifyInterviewModal>
              <Button variant="outline">
                Verify Interview Setup
              </Button>
            </VerifyInterviewModal>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white dark:text-white"
              disabled={!selectedJob || questions.length === 0}
            >
              Post Interview Live
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}