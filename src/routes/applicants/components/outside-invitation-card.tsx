import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { OutsideInvitationModal } from '@/components/modals/outside-invitation-modal';

export function OutsideInvitationCard() {
  return (
    <Card className="bg-[#F3F3F3] p-4">
      <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
        <span className="text-base text-black dark:text-black">
          Send an Alpha Interview Invitation to an Outside Candidate
        </span>
        <OutsideInvitationModal>
          <Button 
            className="bg-[#B4B4B4] hover:bg-blue-500 text-black hover:text-white transition-colors"
          >
            Send Outside Invitation
          </Button>
        </OutsideInvitationModal>
      </div>
    </Card>
  );
}