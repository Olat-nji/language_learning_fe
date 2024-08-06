import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { faqData } from "./constants";

export function FaqAccordions() {
  return (
    <Accordion type="single" collapsible className="w-full py-8">
      {faqData.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{faq.title}</AccordionTrigger>
          <AccordionContent>{faq.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
