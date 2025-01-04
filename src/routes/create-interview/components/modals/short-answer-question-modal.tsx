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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import type { Question } from "../../types";

interface ShortAnswerQuestionModalProps {
  children: React.ReactNode;
  onQuestionAdd: (question: Question) => void;
}

export function ShortAnswerQuestionModal({ children, onQuestionAdd }: ShortAnswerQuestionModalProps) {
  const [question, setQuestion] = useState("");
  const [idealAnswer, setIdealAnswer] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [answerTime, setAnswerTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const newQuestion: Question = {
      id: Date.now(),
      type: 'short-answer',
      text: question
    };

    onQuestionAdd(newQuestion);
    setIsOpen(false);
    
    // Reset form
    setQuestion("");
    setIdealAnswer("");
    setPrepTime("");
    setAnswerTime("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Short Answer / Essay Question</DialogTitle>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-blue-500">Preparation Time</Label>
              <Select value={prepTime} onValueChange={setPrepTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 seconds</SelectItem>
                  <SelectItem value="60">1 minute</SelectItem>
                  <SelectItem value="120">2 minutes</SelectItem>
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
                  <SelectItem value="60">1 minute</SelectItem>
                  <SelectItem value="180">3 minutes</SelectItem>
                  <SelectItem value="300">5 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleSubmit}
              disabled={!question || !prepTime || !answerTime}
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}