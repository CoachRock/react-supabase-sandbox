"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PreviewJobModalProps {
  children: React.ReactNode;
}

export function PreviewJobModal({ children }: PreviewJobModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Job Post Preview</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Job Details</h3>
              <div className="grid gap-4">
                <div>
                  <h4 className="font-semibold">Job Title</h4>
                  <p className="text-muted-foreground">[Job title will appear here]</p>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">[Location will appear here]</p>
                </div>
                <div>
                  <h4 className="font-semibold">Salary</h4>
                  <p className="text-muted-foreground">[Salary will appear here]</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Job Description</h3>
              <div>
                <h4 className="font-semibold">Summary</h4>
                <p className="text-muted-foreground">[Job summary will appear here]</p>
              </div>
              <div>
                <h4 className="font-semibold">Key Responsibilities</h4>
                <p className="text-muted-foreground">[Responsibilities will appear here]</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Application Process</h3>
              <p className="text-muted-foreground">[Application type and process details will appear here]</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}