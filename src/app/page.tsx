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
    <main className="py-16 px-[15px] lg:px-8">
      <HeroSection />

      <TrustSection />

      <section className="mt-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center leading-relaxed">
          A <span className="italic font-normal">much</span> better way to
          design,
          <br className="hidden lg:block" /> prototype and produce your
          products.
        </h2>
        <h3 className="text-suvaGrey text-lg mt-4 text-center leading-relaxed">
          Everything you need to get you from concept to production.{' '}
          <br className="hidden lg:block" />A platform made for entrepreneurs,
          by entrepreneurs.
        </h3>
        <Image
          className="mt-8"
          src="/design-platform.png"
          alt="design-platform"
          width={1200}
          height={800}
        />
      </section>

      <section className="my-6 flex flex-col items-center justify-center">
        <WorkflowSection />
      </section>

      <TechnologyBenefitSection />

      <AIExpSection />

      <section className="my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center leading-relaxed">
          Create everything you can{' '}
          <span className="italic font-normal">imagine.</span>
        </h2>
        <h3 className="text-suvaGrey text-lg mt-4 text-center leading-relaxed">
          Access the largest library of design templates and downloadable
          <br className="hidden lg:block" />
          assets, including sewing patterns, 3D files, and more
        </h3>
        <ClothesSection />
      </section>

      <section className="my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center leading-relaxed">
          And bring your product to life,{' '}
          <span className="italic font-normal">effortlessly.</span>
        </h2>
        <h3 className="text-suvaGrey text-lg mt-4 text-center leading-relaxed">
          Seamlessly turn your designs into reality in 6-7 weeks
          <br className="hidden lg:block" /> with our expert manufacturing
          support
        </h3>
        <div className="w-full overflow-x-scroll">
          <div className="w-[1200px] lg:w-full mt-8 flex items-center justify-center">
            <Image
              className="mt-8"
              src="/kanban-flow.png"
              alt="kanban-flow"
              width={1200}
              height={600}
            />
          </div>
        </div>
        <Button
          variant="outline"
          className="font-bold p-5  flex items-center justify-center space-x-1 rounded-full mt-8"
        >
          <span className="text-suvaGrey">Learn how it works</span>
          <MoveUpRight strokeWidth={1} className="text-suvaGrey w-5 h-5" />
        </Button>
      </section>

      <TestimonialSection />

      <FAQSection />

      <section className="mx-4 flex-col rounded-lg bg-black-900 p-[25px] flex items-center justify-center">
        <h1 className="text-5xl font-bold leading-relaxed text-center">
          Start creating <span className="italic font-normal">today.</span>
        </h1>
        <h2 className="text-suvaGrey text-lg mt-4 text-center">
          Generate designs in seconds, not hours.
        </h2>
        <Button className="flex items-center space-x-1 mt-4 p-5 h-[50px]">
          <span className="font-bold">Get started now</span>
          <span> - It&apos;s FREE</span>
          <span>
            <MoveRight />
          </span>
        </Button>
        <div className="border-t-1 custom-dashed-line border-grey my-5 h-[1px] w-[90%] lg:w-[400px]">
          &nbsp;
        </div>
        <h2 className="text-suvaGrey text-lg text-center">
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
