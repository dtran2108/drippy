import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const questions = [
    {
      question: 'What is Drippy?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'How does it work?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Why 3D design?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Can I use it on the web?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'How does Drippy help to bring my product to life?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Can I just design without making the product?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Can I collaborate with other people using Drippy?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Do you protect my design copyright?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
      <div>
        <h1 className="text-5xl font-semibold leading-relaxed">
          Here&apos;s everything
          <br className="hidden lg:block" />
          <span className="italic font-normal"> you</span> need to know.
        </h1>
        <h2 className="text-gray-500 text-lg mt-4">
          Frequently asked questions (FAQs).
        </h2>
      </div>
      <div>
        <Accordion type="single" collapsible>
          {questions.map((q, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-none my-4 rounded-lg px-4 py-2 bg-black-900"
            >
              <AccordionTrigger className="text-gray-500 text-lg ">
                {i + 1}. {q.question}
              </AccordionTrigger>
              <AccordionContent>{q.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
