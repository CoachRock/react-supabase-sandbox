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
import { availableAssistants, Assistant } from '../data';

interface AddAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
  onAdd: (assistant: Assistant) => void;
  currentAssistants: Assistant[];
}

export function AddAssistantModal({ isOpen, onClose, jobId, onAdd, currentAssistants }: AddAssistantModalProps) {
  const availableToAdd = availableAssistants.filter(
    assistant => !currentAssistants.some(current => current.id === assistant.id)
  );

  const handleAddAssistant = (assistant: Assistant) => {
    onAdd(assistant);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] h-[75vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Add Hiring Assistant</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {availableToAdd.map((assistant) => (
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
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() => handleAddAssistant(assistant)}
                >
                  Add
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}