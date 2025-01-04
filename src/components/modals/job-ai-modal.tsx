"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface JobAIModalProps {
  title: string;
  description: string;
}

export function JobAIModal({ title, description }: JobAIModalProps) {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    // AI generation logic will be implemented here
    console.log("Generating with prompt:", prompt);
  };

  const handleApply = () => {
    // Apply generated content logic will be implemented here
    console.log("Applying generated content");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-5 w-5 ml-3 text-blue-500 hover:text-blue-600">
          <Sparkles className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Textarea
            placeholder="Enter your requirements or preferences here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[200px]"
          />
        </div>
        <DialogFooter className="flex justify-end space-x-2">
          <Button
            variant="secondary"
            onClick={handleGenerate}
          >
            Generate
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600"
            onClick={handleApply}
          >
            Apply to Job Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}