import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Is this a physical book or a digital download?",
    a: "This is a fully digital experience for immediate access. Upon purchase, you will receive an email with your access credentials to download the Silent Language Dictionary and stream the Anxiety Decoder video lessons on any device. No waiting for shipping—you can start understanding your dog today."
  },
  {
    q: "How soon will I see results?",
    a: "While every dog is unique, the biological protocols are designed for immediate cognitive shifts. Most owners report a noticeable change in how they perceive their dog’s stress signals within the first 48 hours. The full 30-Day Behavior Reset provides the roadmap for lasting, long-term transformation."
  },
  {
    q: "My dog is already 8 years old. Is it too late?",
    a: "Absolutely not. Behavioral biology and ethology prove that a dog’s nervous system can be \"recalibrated\" at any age. Because we focus on communication and energy rather than just repetitive commands, older dogs often respond faster because they are finally being \"heard\" by their owners."
  },
  {
    q: "What if I'm not tech-savvy?",
    a: "We’ve kept it simple. The protocol follows a \"One-Idea-Per-Page\" philosophy—no fluff, no complex jargon, and no difficult software. If you can open an email and click a link, you can master the Silent Language Protocol."
  },
  {
    q: "Is there a monthly subscription?",
    a: "No. Whether you choose the Short Guide or the Complete Mastery System, your payment is a one-time investment. You will have lifetime access to the materials and any future updates to the protocol at no extra cost."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-primary text-center mb-16 font-headline">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-muted/50">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted/50 last:border-0">
                <AccordionTrigger className="text-left text-xl font-black text-primary hover:text-secondary no-underline py-8 font-headline transition-all hover:translate-x-1">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-md leading-relaxed pb-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
