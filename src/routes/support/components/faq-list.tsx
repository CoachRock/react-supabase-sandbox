import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from '../data/faqs';

interface FAQListProps {
  searchQuery: string;
}

export function FAQList({ searchQuery }: FAQListProps) {
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Accordion type="multiple" className="space-y-2">
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
  );
}