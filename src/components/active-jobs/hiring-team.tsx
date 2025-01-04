"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Minus } from 'lucide-react';
import { AddAssistantModal } from '@/components/active-jobs/add-assistant-modal';
import { RemoveAssistantModal } from '@/components/active-jobs/remove-assistant-modal';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Assistant } from '@/lib/data/mock-jobs';

interface HiringTeamProps {
  jobId: string;
  assistants: Assistant[];
}

export function HiringTeam({ jobId, assistants }: HiringTeamProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [teamAssistants, setTeamAssistants] = useState<Assistant[]>(assistants);

  const handleAddAssistant = (newAssistant: Assistant) => {
    setTeamAssistants(prev => [...prev, newAssistant]);
  };

  const handleRemoveAssistant = (assistantId: string) => {
    setTeamAssistants(prev => prev.filter(assistant => assistant.id !== assistantId));
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 rounded-full bg-muted hover:bg-muted-foreground/20"
        onClick={() => setIsAddModalOpen(true)}
      >
        <Plus className="h-4 w-4 font-bold" />
      </Button>

      <TooltipProvider>
        {teamAssistants.map((assistant) => (
          <Tooltip key={assistant.id}>
            <TooltipTrigger asChild>
              <Avatar className="h-6 w-6 cursor-pointer">
                <AvatarImage src={assistant.avatar} alt={assistant.name} />
                <AvatarFallback>{assistant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{assistant.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>

      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 rounded-full bg-muted hover:bg-muted-foreground/20"
        onClick={() => setIsRemoveModalOpen(true)}
      >
        <Minus className="h-4 w-4 font-bold" />
      </Button>

      <AddAssistantModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        jobId={jobId}
        onAdd={handleAddAssistant}
        currentAssistants={teamAssistants}
      />

      <RemoveAssistantModal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        assistants={teamAssistants}
        onRemove={handleRemoveAssistant}
      />
    </div>
  );
}