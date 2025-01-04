"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import type { Question } from "../../types";

interface VideoQuestionModalProps {
  children: React.ReactNode;
  onQuestionAdd: (question: Question) => void;
}

export function VideoQuestionModal({ children, onQuestionAdd }: VideoQuestionModalProps) {
  const [question, setQuestion] = useState("");
  const [idealAnswer, setIdealAnswer] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [attempts, setAttempts] = useState("");
  const [answerTime, setAnswerTime] = useState("");
  const [allowAiFollowUp, setAllowAiFollowUp] = useState(false);
  const [followUpQuestions, setFollowUpQuestions] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const newQuestion: Question = {
      id: Date.now(),
      type: 'video',
      text: question
    };

    onQuestionAdd(newQuestion);

    if (allowAiFollowUp) {
      const numFollowUps = parseInt(followUpQuestions);
      for (let i = 0; i < numFollowUps; i++) {
        onQuestionAdd({
          id: Date.now() + i + 1,
          type: 'ai',
          text: 'AI Follow-Up Question?',
          isAiFollowUp: true
        });
      }
    }

    setIsOpen(false);
    // Reset form
    setQuestion("");
    setIdealAnswer("");
    setPrepTime("");
    setAttempts("");
    setAnswerTime("");
    setAllowAiFollowUp(false);
    setFollowUpQuestions("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Video Question</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="question" className="text-sm font-medium text-blue-500">Question</Label>
            <Input
              id="question"
              placeholder="Enter your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="idealAnswer" className="text-sm font-medium text-blue-500">Ideal Answer</Label>
            <p className="text-[10px] text-red-500 mb-2">
              <strong>IMPORTANT:</strong> What you write below should be an example of the best possible answer a candidate could give, in response to this question. Be sure to include import details you are looking for in the answer. Please keep in mind the candidate has a limited time to answer.
            </p>
            <Textarea
              id="idealAnswer"
              value={idealAnswer}
              onChange={(e) => setIdealAnswer(e.target.value)}
              className="min-h-[150px] resize-none overflow-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-blue-500">Preparation Time</Label>
              <Select value={prepTime} onValueChange={setPrepTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 seconds</SelectItem>
                  <SelectItem value="30">30 seconds</SelectItem>
                  <SelectItem value="60">1 minute</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-blue-500">Answer Attempts</Label>
              <Select value={attempts} onValueChange={setAttempts}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Attempts" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-blue-500">Max Answer Time</Label>
              <Select value={answerTime} onValueChange={setAnswerTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 seconds</SelectItem>
                  <SelectItem value="30">30 seconds</SelectItem>
                  <SelectItem value="60">1 minute</SelectItem>
                  <SelectItem value="120">2 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="aiFollowUp"
                checked={allowAiFollowUp}
                onCheckedChange={(checked) => setAllowAiFollowUp(checked as boolean)}
              />
              <Label htmlFor="aiFollowUp" className="text-sm font-medium text-blue-500">
                Allow AI Follow-Up Questions
              </Label>
            </div>

            {allowAiFollowUp && (
              <div className="flex items-center gap-4">
                <Label className="text-sm font-medium text-blue-500 whitespace-nowrap">
                  How many follow-up questions should the AI ask?
                </Label>
                <Select value={followUpQuestions} onValueChange={setFollowUpQuestions}>
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleSubmit}
              disabled={!question || !prepTime || !attempts || !answerTime}
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}