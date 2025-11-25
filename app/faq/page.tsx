import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What exactly does 'Map Optimization' include?",
      answer:
        "We take full control of establishing your digital presence. This involves claiming your business profile on Google Maps and Apple Maps, verifying ownership, uploading high-quality photos we take, setting up accurate operating hours, adding contact details, and digitizing your menu or service list.",
    },
    {
      id: 2,
      question: "Where do you operate? Do you charge for travel?",
      answer:
        "Our primary service areas are Anuradhapura and Malabe. For businesses located within these areas, there are no travel fees. If your business is outside these zones, we are happy to visit you, but a travel fee will be calculated based on the distance from our nearest hub.",
    },
    {
      id: 3,
      question: "What is the 'Microsite' service?",
      answer:
        "A microsite is a streamlined, mobile-first website for your business hosted on a subdomain (e.g., 'cafe-kandy.mapped.lk'). It allows you to showcase your menu, prices, services, and accept bookings without the high cost of developing a custom website. You can choose from several themes to match your brand.",
    },
    {
      id: 4,
      question: "Can I cancel the monthly subscriptions?",
      answer:
        "Yes, you can cancel the Monthly Management (999 LKR) or Microsite subscription (499 LKR) at any time. However, if you cancel the Management service, we will no longer post updates or manage reviews for you. You retain ownership of the Map profile we claimed for you.",
    },
    {
      id: 5,
      question: "How do I pay?",
      answer:
        "We accept bank transfers and cash payments upon visiting your location for the initial setup. Monthly subscriptions can be paid via bank transfer or set up as a recurring payment.",
    },
  ];
  return (
    <div className="bg-brand-950 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-center mb-16">
          Everything you need to know about getting Mapped.
        </p>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faqs.map((faq) => {
            return (
              <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                <AccordionTrigger className="font-mono">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-gray-400">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
