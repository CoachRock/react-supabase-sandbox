"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Input } from '@/components/ui/input';
import { Search, HelpCircle, PenLine } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';

const faqs = [
  {
    question: "How do I schedule an interview?",
    answer: "To schedule an interview, navigate to the 'Create An Interview' section from the main dashboard. Select the job position, candidate, and preferred time slots. The system will automatically send invitations to all participants once confirmed."
  },
  {
    question: "Can I reschedule an existing interview?",
    answer: "Yes, you can reschedule an interview by accessing the interview details from your dashboard. Click on the interview you wish to reschedule and select 'Modify Schedule'. Make sure to provide a reason for rescheduling, and all participants will be notified automatically."
  },
  {
    question: "How do I add feedback after an interview?",
    answer: "After completing an interview, you'll receive a notification to provide feedback. Alternatively, you can navigate to the interview details and click 'Add Feedback'. Use the structured feedback form to rate different aspects and provide detailed comments."
  },
  {
    question: "What happens if a candidate cancels?",
    answer: "If a candidate cancels an interview, all participants will be automatically notified. The interview status will be updated to 'Cancelled', and you'll have the option to either reschedule or mark the candidate as withdrawn from the process."
  },
  {
    question: "How do I create a new job posting?",
    answer: "To create a new job posting, go to the 'Create A Job' section. Fill in the required details including job title, description, requirements, and other relevant information. You can save it as a draft or publish it immediately."
  },
  {
    question: "Can I export interview data?",
    answer: "Yes, you can export interview data by going to the Reports section. Select the date range and specific data points you want to export. The system supports exports in various formats including CSV, Excel, and PDF."
  },
  {
    question: "How do I manage interview panel members?",
    answer: "Interview panel members can be managed from the 'User Manager' section. You can add or remove panel members, set their roles, and define their access levels. Each panel member will receive appropriate notifications for their assigned interviews."
  },
  {
    question: "What's the process for archiving old job postings?",
    answer: "Job postings can be archived from the 'Active Jobs' section. Select the job posting you want to archive and click the 'Archive' button. Archived jobs can be viewed in the 'Archived Jobs' section and can be reactivated if needed."
  },
  {
    question: "How do I set up automated reminders?",
    answer: "Automated reminders can be configured in the Settings section under 'Notifications'. You can customize when reminders are sent, who receives them, and what information they include. The system supports both email and in-app notifications."
  },
  {
    question: "Can I integrate with calendar applications?",
    answer: "Yes, Alpha Interview supports integration with major calendar applications including Google Calendar, Outlook, and iCal. Go to Settings > Integrations to set up your preferred calendar integration. Once connected, all interviews will automatically sync with your calendar."
  }
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("faqs");

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setExpandedItems(
        filteredFaqs
          .map((_, index) => `item-${index}`)
          .filter((_, index) => 
            filteredFaqs[index].question.toLowerCase().includes(query.toLowerCase()) ||
            filteredFaqs[index].answer.toLowerCase().includes(query.toLowerCase())
          )
      );
    } else {
      setExpandedItems([]);
    }
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setActiveTab("faqs");
    }
  };

  const handleSubmit = () => {
    setIsDialogOpen(false);
    setActiveTab("faqs");
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        heading="Support" 
        description="Get help and support" 
      />

      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="faqs" className="gap-2">
              <HelpCircle className="h-4 w-4" />
              FAQs
            </TabsTrigger>
            <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
              <DialogTrigger asChild>
                <TabsTrigger value="support" onClick={(e) => {
                  e.preventDefault();
                  setIsDialogOpen(true);
                }} className="gap-2">
                  <PenLine className="h-4 w-4" />
                  Support Request
                </TabsTrigger>
              </DialogTrigger>
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
                  <Button onClick={handleSubmit}>Submit</Button>
                </div>
              </DialogContent>
            </Dialog>
          </TabsList>
        </Tabs>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for help..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <Accordion 
          type="multiple" 
          value={expandedItems}
          onValueChange={setExpandedItems}
          className="space-y-2"
        >
          {filteredFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-blue-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}