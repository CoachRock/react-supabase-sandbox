"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function VideoPlayerModal({ isOpen, onClose, videoUrl }: VideoPlayerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Interview Response</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
          <video
            className="w-full h-full"
            controls
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}