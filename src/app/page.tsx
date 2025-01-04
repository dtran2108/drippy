import { Button } from '@/components/ui/button';
import { MoveRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import ClothesSection from '@/components/home-section/clothes-section';
import FAQSection from '@/components/home-section/faq-section';
import Footer from '@/components/footer';
import TrustSection from '@/components/home-section/trust-section';
import WorkflowSection from '@/components/home-section/workflow-section';
import TestimonialSection from '@/components/home-section/testimonial-section';
import TechnologyBenefitSection from '@/components/home-section/technology-benefit-section';
import AIExpSection from '@/components/home-section/ai-exp-section';
import HeroSection from '@/components/home-section/hero-section';

export default function Home() {
  return (
    <main className="py-16 px-8">
      <HeroSection />

      <TrustSection />

      <section className="my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-center leading-relaxed">
          A <span className="italic font-normal">much</span> better way to
          design,
          <br /> prototype and produce your products.
        </h2>
        <h3 className="text-gray-500 text-lg mt-4 text-center leading-relaxed">
          Everything you need to get you from concept to production. <br />A
          platform made for entrepreneurs, by entrepreneurs.
        </h3>
        <Image
          className="mt-8"
          src="/design-platform.png"
          alt="design-platform"
          width={1200}
          height={800}
        />
      </section>

      <section className="my-[20px] flex flex-col items-center justify-center">
        <WorkflowSection />
      </section>

      <TechnologyBenefitSection />

      <AIExpSection />

      <section className="my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-center leading-relaxed">
          Create everything you can{' '}
          <span className="italic font-normal">imagine.</span>
        </h2>
        <h3 className="text-gray-500 text-lg mt-4 text-center leading-relaxed">
          Access the largest library of design templates and downloadable
          <br />
          assets, including sewing patterns, 3D files, and more
        </h3>
        <ClothesSection />
      </section>

      <section className="my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-center leading-relaxed">
          And bring your product to life,{' '}
          <span className="italic font-normal">effortlessly.</span>
        </h2>
        <h3 className="text-gray-500 text-lg mt-4 text-center leading-relaxed">
          Seamlessly turn your designs into reality in 6-7 weeks
          <br /> with our expert manufacturing support
        </h3>
        <Image
          className="mt-8"
          src="/kanban-flow.png"
          alt="kanban-flow"
          width={1200}
          height={500}
        />
        <Button
          variant="outline"
          className="font-semibold p-5  flex items-center justify-center space-x-1 rounded-full mt-8"
        >
          <span className="text-gray-500">Learn how it works</span>
          <MoveUpRight strokeWidth={1} className="text-gray-500 w-5 h-5" />
        </Button>
      </section>

      <TestimonialSection />

      <FAQSection />

      <section className="mx-4 flex-col rounded-lg bg-black-900 p-[25px] flex items-center justify-center">
        <h1 className="text-5xl font-semibold leading-relaxed text-center">
          Start creating <span className="italic font-normal">today.</span>
        </h1>
        <h2 className="text-gray-500 text-lg mt-4 text-center">
          Generate designs in seconds, not hours.
        </h2>
        <Button className="flex items-center space-x-1 mt-4 p-5 h-[50px]">
          <span className="font-semibold">Get started now</span>
          <span> - It&apos;s FREE</span>
          <span>
            <MoveRight />
          </span>
        </Button>
        <div className="border-t-1 custom-dashed-line border-grey my-5 h-[1px] w-[400px]">
          &nbsp;
        </div>
        <h2 className="text-gray-500 text-lg text-center">
          And join our communities:
        </h2>
        <div className="flex items-center space-x-4 mt-4">
          <Image
            src={'/logos/discord-logo.svg'}
            width={30}
            height={30}
            alt="discord-logo"
          />
          <Image
            src={'/logos/reddit-logo.svg'}
            width={30}
            height={30}
            alt="reddit-logo"
          />
          <Image
            src={'/logos/instagram-logo.svg'}
            width={30}
            height={30}
            alt="instagram-logo"
          />
          <Image
            src={'/logos/x-logo.svg'}
            width={30}
            height={30}
            alt="x-logo"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
