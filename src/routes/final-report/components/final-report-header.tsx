import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useState } from 'react';
import { DocumentModal } from '@/components/modals/document-modal';

interface FinalReportHeaderProps {
  candidate: {
    name: string;
    email: string;
    phone: string;
    avatar: string;
  };
}

export function FinalReportHeader({ candidate }: FinalReportHeaderProps) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCoverLetterOpen, setIsCoverLetterOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <Avatar className="h-28 w-28">
          <AvatarImage src={candidate.avatar} alt={candidate.name} />
          <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-xl font-bold">{candidate.name}</h2>
          <div className="text-sm">
            <div><span className="font-bold dark:text-white">E-Mail Address:</span> {candidate.email}</div>
            <div><span className="font-bold dark:text-white">Cell Number:</span> {candidate.phone}</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <Button 
            variant="outline" 
            className="flex gap-2 justify-center"
            onClick={() => setIsCoverLetterOpen(true)}
          >
            <FileText className="h-4 w-4" />
            Cover Letter
          </Button>
          <Button 
            variant="outline" 
            className="flex gap-2 justify-center"
            onClick={() => setIsResumeOpen(true)}
          >
            <FileText className="h-4 w-4" />
            Resume
          </Button>
        </div>
      </div>

      <DocumentModal
        isOpen={isCoverLetterOpen}
        onClose={() => setIsCoverLetterOpen(false)}
        title="Cover Letter"
        content="[Cover letter content would appear here]"
      />

      <DocumentModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        title="Resume"
        content="[Resume content would appear here]"
      />
    </>
  );
}