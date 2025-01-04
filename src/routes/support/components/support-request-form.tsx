import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface SupportRequestFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
}

export function SupportRequestForm({ isOpen, onOpenChange, onSubmit }: SupportRequestFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Support Request</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Company Name</Label>
            <div className="mt-1">
              <Label>Steve Rock - Hiring Manager</Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Subject</Label>
            <Input />
          </div>
          <div className="space-y-2">
            <Label>Question</Label>
            <Textarea placeholder="Details" className="min-h-[150px]" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}