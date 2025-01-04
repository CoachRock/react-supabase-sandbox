"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { CandidateHeader } from '@/components/evaluation/candidate-header';
import { EvaluationSummary } from '@/components/evaluation/evaluation-summary';
import { QuestionEvaluation } from '@/components/evaluation/question-evaluation';
import { Separator } from '@/components/ui/separator';

const scoreOptions = Array.from({ length: 101 }, (_, i) => ({
  value: String(100 - i),
  label: `${100 - i}%`
}));

interface Feedback {
  question1: string;
  question2: string;
  question5: string;
  finalThoughts: string;
}

interface Scores {
  question1: string;
  question2: string;
  question5: string;
}

export function IndividualEvaluation() {
  const [scores, setScores] = useState<Scores>({
    question1: '',
    question2: '',
    question5: ''
  });

  const [feedback, setFeedback] = useState<Feedback>({
    question1: '',
    question2: '',
    question5: '',
    finalThoughts: ''
  });

  const [finalScore, setFinalScore] = useState('0');

  useEffect(() => {
    const calculateFinalScore = () => {
      const scoreValues = [
        Number(scores.question1) || 0,
        Number(scores.question2) || 0,
        100, // Question 3 (T/F)
        0,   // Question 4 (Multiple Choice)
        Number(scores.question5) || 0
      ];
      
      const average = scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length;
      setFinalScore(average.toFixed(1));
    };

    calculateFinalScore();
  }, [scores]);

  const isFormComplete = () => {
    return (
      scores.question1 !== '' &&
      scores.question2 !== '' &&
      scores.question5 !== '' &&
      feedback.finalThoughts !== ''
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">VP of Client Retention - FXGZ123</div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 text-black dark:text-white" />
          <span>Indianapolis, IN</span>
        </div>
      </div>

      <Card className="p-4 sm:p-6">
        <CandidateHeader 
          name="Johnson, Janet"
          email="janet.johnson@gmail.com"
          phone="317-555-1212"
          avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          jobTitle=""
          location=""
        />

        <div className="space-y-8">
          <h3 className="text-xl font-bold">Candidate Evaluation</h3>

          <QuestionEvaluation 
            scores={scores}
            setScores={setScores}
            feedback={feedback}
            setFeedback={setFeedback}
            scoreOptions={scoreOptions}
          />

          <Separator className="border-black border-2" />

          <EvaluationSummary 
            scores={scores}
            finalScore={finalScore}
            finalThoughts={feedback.finalThoughts}
            onFinalThoughtsChange={(value) => setFeedback(prev => ({ ...prev, finalThoughts: value }))}
            isFormComplete={isFormComplete()}
            candidateName="Johnson, Janet"
          />
        </div>
      </Card>
    </div>
  );
}