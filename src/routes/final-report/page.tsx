"use client";

import { useState } from 'react';
import { FinalReportHeader } from './components/final-report-header';
import { ScoreSummary } from './components/score-summary';
import { EvaluationSummary } from './components/evaluation-summary';
import { Card } from '@/components/ui/card';

export function FinalReport() {
  const [finalThoughts, setFinalThoughts] = useState("");

  const candidate = {
    name: "Janet Johnson",
    email: "janet.johnson@gmail.com",
    phone: "317-555-1212",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    scores: {
      resume: 92,
      interview: 90,
      human: 94
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8 underline">FINAL REPORT</h1>

      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">VP of Client Retention - FXGZ123</div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 text-black dark:text-white" />
          <span>Indianapolis, IN</span>
        </div>
      </div>

      <Card className="p-6">
        <FinalReportHeader candidate={candidate} />
        <ScoreSummary scores={candidate.scores} />
        <EvaluationSummary 
          finalThoughts={finalThoughts}
          onFinalThoughtsChange={setFinalThoughts}
        />
      </Card>
    </div>
  );
}