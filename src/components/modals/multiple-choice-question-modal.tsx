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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface MultipleChoiceQuestionModalProps {
  children: React.ReactNode;
}

export function MultipleChoiceQuestionModal({ children }: MultipleChoiceQuestionModalProps) {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [answerTime, setAnswerTime] = useState("");

  const handleSubmit = () => {
    console.log({
      question,
      options: {
        A: optionA,
        B: optionB,
        C: optionC,
        D: optionD
      },
      correctAnswer,
      prepTime,
      answerTime,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Multiple Choice Question</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="question" className="text-sm font-medium text-blue-500">Question</Label>
            <Input
              id="question"
              placeholder="Enter your multiple choice question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-medium text-blue-500">Answer Choices</Label>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <span className="font-bold w-8">A</span>
                <Input
                  placeholder="Input text"
                  value={optionA}
                  onChange={(e) => setOptionA(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold w-8">B</span>
                <Input
                  placeholder="Input text"
                  value={optionB}
                  onChange={(e) => setOptionB(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold w-8">C</span>
                <Input
                  placeholder="Input text"
                  value={optionC}
                  onChange={(e) => setOptionC(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold w-8">D</span>
                <Input
                  placeholder="Input text"
                  value={optionD}
                  onChange={(e) => setOptionD(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-blue-500">What is the correct answer for this question?</Label>
            <Select value={correctAnswer} onValueChange={setCorrectAnswer}>
              <SelectTrigger>
                <SelectValue placeholder="Select Correct Answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="D">D</SelectItem>
              </SelectContent>
            </Select>
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
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}