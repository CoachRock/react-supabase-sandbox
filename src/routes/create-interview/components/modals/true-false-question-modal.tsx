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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import type { Question } from "../../types";

interface TrueFalseQuestionModalProps {
  children: React.ReactNode;
  onQuestionAdd: (question: Question) => void;
}

export function TrueFalseQuestionModal({ children, onQuestionAdd }: TrueFalseQuestionModalProps) {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState<"true" | "false" | "">("");
  const [prepTime, setPrepTime] = useState("");
  const [answerTime, setAnswerTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    const newQuestion: Question = {
      id: Date.now(),
      type: 'true-false',
      text: question
    };

    onQuestionAdd(newQuestion);
    setIsOpen(false);
    
    // Reset form
    setQuestion("");
    setCorrectAnswer("");
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
          <DialogTitle className="text-2xl font-bold">True or False Question</DialogTitle>
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
            <Label className="text-sm font-medium text-blue-500">What is the correct answer for this question?</Label>
            <div className="flex items-center space-x-4">
              <RadioGroup
                value={correctAnswer}
                onValueChange={(value) => setCorrectAnswer(value as "true" | "false")}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="true" />
                  <Label htmlFor="true">True</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="false" />
                  <Label htmlFor="false">False</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-blue-500">Preparation Time</Label>
              <Select value={prepTime} onValueChange={setPrepTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 seconds</SelectItem>
                  <SelectItem value="30">30 seconds</SelectItem>
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
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleSubmit}
              disabled={!question || !correctAnswer || !prepTime || !answerTime}
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}