"use client";

import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface EvaluationSummaryProps {
  scores: {
    question1: string;
    question2: string;
    question5: string;
  };
  finalScore: string;
  finalThoughts: string;
  onFinalThoughtsChange: (value: string) => void;
  isFormComplete: boolean;
  candidateName: string;
}

export function EvaluationSummary({
  scores,
  finalScore,
  finalThoughts,
  onFinalThoughtsChange,
  isFormComplete,
  candidateName
}: EvaluationSummaryProps) {
  const questionScores = [
    { num: 1, score: Number(scores.question1) || 0 },
    { num: 2, score: Number(scores.question2) || 0 },
    { num: 3, score: 100 },
    { num: 4, score: 0 },
    { num: 5, score: Number(scores.question5) || 0 }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="Evaluator" />
          <AvatarFallback>EV</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">Evaluation Summary for {candidateName}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4">
        <Card className="p-4">
          <h4 className="font-bold mb-6">Score Summary</h4>
          <div className="space-y-4">
            {questionScores.map((q) => (
              <div key={q.num} className="flex items-center gap-3">
                <div className="w-6 text-right">{q.num}.)</div>
                <div className="flex-1 h-4 bg-gray-200 rounded">
                  <div 
                    className="h-full bg-blue-500 rounded transition-all duration-300"
                    style={{ width: `${q.score}%` }}
                  />
                </div>
                <div className="w-12 text-black dark:text-white font-medium">{q.score}%</div>
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex items-center gap-3">
                <div className="w-6" />
                <div className="flex-1 text-right font-bold">Final Score:</div>
                <div className="w-12 text-black dark:text-white font-bold">{finalScore}%</div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <h4 className="font-bold mb-4">Final Thoughts</h4>
          <Textarea 
            placeholder="Leave your written evaluation summary here"
            className="min-h-[200px]"
            value={finalThoughts}
            onChange={(e) => onFinalThoughtsChange(e.target.value)}
            required
          />
        </Card>
      </div>

      <div className="flex justify-end">
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto"
          disabled={!isFormComplete}
        >
          Submit My Evaluation
        </Button>
      </div>
    </div>
  );
}