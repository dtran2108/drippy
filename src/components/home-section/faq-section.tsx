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
      answer:
        'Drippy is a free online 3D design software with real-time collaboration, designed to help entrepreneurs create and produce fashion effortlessly.',
    },
    {
      question: 'How does it work?',
      answer:
        'Log in and create your first design with our intuitive 3D builder. Then share collaborate with your team and your manufacturers in real-time or export your sewing patterns or 3D files to get started. Finally, connect with a vetted manufacturer to get your sample delivered to your doorstep. Learn more about a process here.',
    },
    {
      question: 'Why 3D design?',
      answer:
        "It cuts out the need for endless samples, slashes costs, and even helps save the planet by reducing waste. It's faster, smarter, and lets designers play around with ideas without burning a hole in their wallets (or the environment). Pretty cool, right?",
    },
    {
      question: 'Can I use it on the web?',
      answer: 'Yes, definitely! It is 100% browser-based.',
    },
    {
      question: 'How does Drippy help to bring my product to life?',
      answer:
        'Drippy uses AI to generate precise 2D patterns and even helps you streamline the production process with our network of vetted manufacturers.',
    },
    {
      question: 'Can I just design without making the product?',
      answer: "Totally! You can use Drippy just to design if that's your vibe.",
    },
    {
      question: 'Can I collaborate with other people using Drippy?',
      answer:
        'Totally, that is why we bring it on the web so everyone can co-create in a same canvas in real-time.',
    },
    {
      question: 'Do you protect my design copyright?',
      answer:
        'Absolutely. Your designs are yours, and we make sure they stay that way. Drippy uses secure cloud storage and encryption to protect your files, ensuring that only you have access to your creations. We also give you full control over who can view or edit your designs, so you can collaborate without worrying about unauthorized use.',
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
      <div>
        <h1 className="text-5xl font-bold leading-relaxed">
          Here&apos;s everything
          <br className="hidden lg:block" />
          <span className="italic font-normal"> you</span> need to know.
        </h1>
        <h2 className="text-suvaGrey text-lg mt-4">
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
              <AccordionTrigger className="text-suvaGrey text-lg ">
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
