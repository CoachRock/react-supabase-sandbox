"use client";

import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Play, Cpu, HelpCircle, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { VideoPlayerModal } from '@/components/modals/video-player-modal';

const evaluatorAvatar = {
  image: "https://github.com/shadcn.png",
  name: "UsersFN UsersLN"
};

interface QuestionEvaluationProps {
  scores: {
    question1: string;
    question2: string;
    question5: string;
  };
  setScores: (scores: any) => void;
  feedback: {
    question1: string;
    question2: string;
    question5: string;
    finalThoughts: string;
  };
  setFeedback: (feedback: any) => void;
  scoreOptions: { value: string; label: string; }[];
}

export function QuestionEvaluation({
  scores,
  setScores,
  feedback,
  setFeedback,
  scoreOptions
}: QuestionEvaluationProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>();

  const handlePlayVideo = (videoUrl?: string) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const EvaluatorLabel = () => (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={evaluatorAvatar.image} alt={evaluatorAvatar.name} />
        <AvatarFallback>
          {evaluatorAvatar.name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <span className="font-medium">Feedback</span>
    </div>
  );

  const EvaluatorScore = () => (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={evaluatorAvatar.image} alt={evaluatorAvatar.name} />
        <AvatarFallback>
          {evaluatorAvatar.name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <div className="font-medium flex items-center gap-1">
        Score
        <span className="text-red-500">*</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Video Question 1 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-blue-500">
            1.) Tell us about your career to this point
          </span>
          <div className="flex gap-4">
            <Play 
              className="h-6 w-6 text-blue-500 hover:underline cursor-pointer" 
              onClick={() => handlePlayVideo("/video1.mp4")}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="font-medium">Answer Transcript</div>
          <div className="text-sm text-muted-foreground p-4 bg-muted rounded-md">
            [Video transcript content would appear here]
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-medium">AI Evaluation</div>
          <div className="text-sm text-muted-foreground p-4 bg-muted rounded-md">
            [AI evaluation content would appear here]
          </div>
        </div>

        <div className="space-y-2">
          <EvaluatorLabel />
          <Textarea 
            placeholder="Leave your feedback here" 
            value={feedback.question1}
            onChange={(e) => setFeedback(prev => ({ ...prev, question1: e.target.value }))}
            className="min-h-[100px]" 
          />
        </div>

        <div className="flex items-center gap-2">
          <EvaluatorScore />
          <Select 
            value={scores.question1}
            onValueChange={(value) => setScores(prev => ({ ...prev, question1: value }))}
            required
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Score" />
            </SelectTrigger>
            <SelectContent>
              {scoreOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator className="border-black border-2" />

      {/* AI Follow-up Question */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-blue-500">
            2.) AI Follow-Up Question - Display the AI question here.
          </span>
          <div className="flex gap-4">
            <Cpu className="h-6 w-6 text-blue-500" />
            <Play 
              className="h-6 w-6 text-blue-500 hover:underline cursor-pointer"
              onClick={() => handlePlayVideo("/video2.mp4")}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="font-medium">Answer Transcript</div>
          <div className="text-sm text-muted-foreground p-4 bg-muted rounded-md">
            [Video transcript content would appear here]
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-medium">AI Evaluation</div>
          <div className="text-sm text-muted-foreground p-4 bg-muted rounded-md">
            [AI evaluation content would appear here]
          </div>
        </div>

        <div className="space-y-2">
          <EvaluatorLabel />
          <Textarea 
            placeholder="Leave your feedback here"
            value={feedback.question2}
            onChange={(e) => setFeedback(prev => ({ ...prev, question2: e.target.value }))}
            className="min-h-[100px]"
          />
        </div>

        <div className="flex items-center gap-2">
          <EvaluatorScore />
          <Select 
            value={scores.question2}
            onValueChange={(value) => setScores(prev => ({ ...prev, question2: value }))}
            required
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Score" />
            </SelectTrigger>
            <SelectContent>
              {scoreOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator className="border-black border-2" />

      {/* True/False Question */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-blue-500">
            3.) T or F Question - Display the question here.
          </span>
          <div className="flex gap-4">
            <HelpCircle className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="font-bold">
            Answer: <span className="dark:text-white">True</span> <span className="font-bold text-green-500">- Correct - 100%</span>
          </div>
          <div className="space-y-2">
            <EvaluatorLabel />
            <Textarea placeholder="Leave your feedback here" />
          </div>
        </div>
      </div>

      <Separator className="border-black border-2" />

      {/* Multiple Choice Question */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-blue-500">
            4.) Multiple Choice Question - Display the question here.
          </span>
          <div className="flex gap-4">
            <Share2 className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="font-bold">
            Answer: <span className="dark:text-white">B</span> <span className="font-bold text-red-500">- Wrong - 0%</span>
          </div>
          <div className="ml-8 space-y-1">
            <div>A - First possible answer</div>
            <div className="font-bold text-red-500">B - Second possible answer</div>
            <div className="font-bold text-green-500">C - Third possible answer (Correct)</div>
            <div>D - Fourth possible answer</div>
          </div>
          <div className="space-y-2">
            <EvaluatorLabel />
            <Textarea placeholder="Leave your feedback here" />
          </div>
        </div>
      </div>

      <Separator className="border-black border-2" />

      {/* Short Answer Question */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-blue-500">
            5.) Short Answer / Essay Question - Display the question here.
          </span>
          <div className="flex gap-4">
            <FileText className="h-6 w-6 text-blue-500" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-medium">Answer Text</div>
          <div className="text-sm text-muted-foreground p-4 bg-muted rounded-md">
            [Answer text would appear here]
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-medium">AI Evaluation</div>
          <div className="text-sm text-muted-foreground p-4 bg-muted rounded-md">
            [AI evaluation content would appear here]
          </div>
        </div>

        <div className="space-y-2">
          <EvaluatorLabel />
          <Textarea 
            placeholder="Leave your feedback here"
            value={feedback.question5}
            onChange={(e) => setFeedback(prev => ({ ...prev, question5: e.target.value }))}
          />
        </div>

        <div className="flex items-center gap-2">
          <EvaluatorScore />
          <Select 
            value={scores.question5}
            onValueChange={(value) => setScores(prev => ({ ...prev, question5: value }))}
            required
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Score" />
            </SelectTrigger>
            <SelectContent>
              {scoreOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator className="border-black border-2" />

      <VideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={currentVideoUrl}
      />
    </div>
  );
}