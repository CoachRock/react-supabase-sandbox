"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { Assistant } from '../types';

interface RemoveAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  assistants: Assistant[];
  onRemove: (assistantId: string) => void;
}

export function RemoveAssistantModal({
  isOpen,
  onClose,
  assistants,
  onRemove
}: RemoveAssistantModalProps) {
  const handleRemoveAssistant = (assistantId: string) => {
    onRemove(assistantId);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] h-[50vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Remove Hiring Assistant</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {assistants.map((assistant) => (
              <div
                key={assistant.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={assistant.avatar} alt={assistant.name} />
                    <AvatarFallback>{assistant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span>{assistant.name}</span>
                </div>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleRemoveAssistant(assistant.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}