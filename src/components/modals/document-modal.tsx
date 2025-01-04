import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export function DocumentModal({ isOpen, onClose, title, content }: DocumentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          <div className="whitespace-pre-wrap">{content}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}