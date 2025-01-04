import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, PenLine } from 'lucide-react';

interface SupportTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  onDialogChange: (open: boolean) => void;
}

export function SupportTabs({ activeTab, onTabChange, onDialogChange }: SupportTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="mb-8">
      <TabsList>
        <TabsTrigger value="faqs" className="gap-2">
          <HelpCircle className="h-4 w-4" />
          FAQs
        </TabsTrigger>
        <TabsTrigger 
          value="support" 
          onClick={(e) => {
            e.preventDefault();
            onDialogChange(true);
          }} 
          className="gap-2"
        >
          <PenLine className="h-4 w-4" />
          Support Request
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}