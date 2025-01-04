"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FileText, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DocumentModal } from '@/components/modals/document-modal';
import { useState } from 'react';

interface Evaluator {
  name: string;
  role: string;
  avatar: string;
  feedback: string;
  score: number;
}

const evaluators: Evaluator[] = [
  {
    name: "James Johnson",
    role: "Hiring Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    feedback: "Et voluptate eu magna amet et clium enim fugiat anim sit aute. Culpa velit mollit voluptate exercitation dolor exercitation voluptate deserunt voluptate dolor labore deserunt est labore. Sit aliqua in sint reprehenderit consectetur ut elit non culpa clium ipsum. Commodo dolore ut mollit consectetur mollit ut quis aliqua velit et euismod utrisma magna nulla excepteur mollit ut.",
    score: 94
  },
  {
    name: "Laura Hanson",
    role: "Hiring Assistant",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    feedback: "Et voluptate eu magna amet et clium enim fugiat anim sit aute. Culpa velit mollit voluptate exercitation dolor exercitation voluptate deserunt voluptate dolor labore deserunt est labore. Sit aliqua in sint reprehenderit consectetur ut elit non culpa clium ipsum. Commodo dolore ut mollit consectetur mollit ut quis aliqua velit et euismod.",
    score: 91
  },
  {
    name: "Marcus Kline",
    role: "Hiring Assistant",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    feedback: "Et voluptate eu magna amet et clium enim fugiat anim sit aute. Culpa velit mollit voluptate exercitation dolor exercitation voluptate deserunt voluptate dolor labore deserunt est labore. Sit aliqua in sint reprehenderit consectetur ut elit non culpa clium ipsum. Commodo dolore ut mollit consectetur mollit ut quis aliqua velit et euismod.",
    score: 89
  },
  {
    name: "Racheal Bernard",
    role: "Hiring Assistant",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    feedback: "Et voluptate eu magna amet et clium enim fugiat anim sit aute. Culpa velit mollit voluptate exercitation dolor exercitation voluptate deserunt voluptate dolor labore deserunt est labore. Sit aliqua in sint reprehenderit consectetur ut elit non culpa clium ipsum. Commodo dolore ut mollit consectetur mollit ut quis aliqua velit et euismod.",
    score: 95
  }
];

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

export default function FinalReport() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCoverLetterOpen, setIsCoverLetterOpen] = useState(false);
  const [finalThoughts, setFinalThoughts] = useState("");

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
        {/* Candidate Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <Avatar className="h-28 w-28">
            <AvatarImage src={candidate.avatar} alt={candidate.name} />
            <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{candidate.name}</h2>
            <div className="text-sm">
              <div><span className="font-bold dark:text-white">E-Mail Address:</span> {candidate.email}</div>
              <div><span className="font-bold dark:text-white">Cell Number:</span> {candidate.phone}</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="flex gap-2 justify-center"
              onClick={() => setIsCoverLetterOpen(true)}
            >
              <FileText className="h-4 w-4" />
              Cover Letter
            </Button>
            <Button 
              variant="outline" 
              className="flex gap-2 justify-center"
              onClick={() => setIsResumeOpen(true)}
            >
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>

        {/* Score Summary */}
        <div className="flex justify-between mb-8">
          <Card className="p-4 text-center w-[200px] h-[200px] flex flex-col items-center justify-center">
            <h3 className="text-sm font-medium mb-2 text-blue-500">AI Resume Score</h3>
            <div className="text-4xl font-bold">{candidate.scores.resume}%</div>
          </Card>
          <Card className="p-4 text-center w-[200px] h-[200px] flex flex-col items-center justify-center">
            <h3 className="text-sm font-medium mb-2 text-blue-500">AI Interview Score</h3>
            <div className="text-4xl font-bold">{candidate.scores.interview}%</div>
          </Card>
          <Card className="p-4 text-center w-[200px] h-[200px] flex flex-col items-center justify-center">
            <h3 className="text-sm font-medium mb-2 text-blue-500">Human Score Average</h3>
            <div className="text-4xl font-bold">{candidate.scores.human}%</div>
          </Card>
        </div>

        {/* Evaluation Summary */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-blue-500">Evaluation Summary</h3>
          
          {evaluators.map((evaluator, index) => (
            <div key={index} className="border-b-2 border-black pb-6 last:border-b-0">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={evaluator.avatar} alt={evaluator.name} />
                  <AvatarFallback>{evaluator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-bold">{evaluator.name}</h4>
                  <p className="text-sm text-muted-foreground">{evaluator.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Human Score:</span>
                  <span className="text-xl font-bold">{evaluator.score}%</span>
                </div>
              </div>
              <div className="pl-16 space-y-4">
                <p className="text-muted-foreground">{evaluator.feedback}</p>
                <div className="flex justify-end">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <span className="text-white">
                      See {evaluator.name}'s evaluation of {candidate.name}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Group Final Thoughts */}
        <div className="space-y-4 mt-8">
          <h3 className="text-xl font-bold text-blue-500">Hiring Group - Final Thoughts</h3>
          <Textarea
            placeholder="Enter the overall evaluation feedback"
            className="min-h-[150px]"
            value={finalThoughts}
            onChange={(e) => setFinalThoughts(e.target.value)}
          />
          <div className="flex justify-end">
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white"
              disabled={!finalThoughts.trim()}
            >
              Finalize Evaluation
            </Button>
          </div>
        </div>

        {/* Document Modals */}
        <DocumentModal
          isOpen={isCoverLetterOpen}
          onClose={() => setIsCoverLetterOpen(false)}
          title="Cover Letter"
          content="[Cover letter content would appear here]"
        />
        <DocumentModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          title="Resume"
          content="[Resume content would appear here]"
        />
      </Card>
    </div>
  );
}