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
import GetStartedSection from '@/components/home-section/get-started-section';
import LearnHowItWorksSection from '@/components/home-section/learn-how-it-works-section';

export default function Home() {
  return (
    <main className="py-16 px-[15px] lg:px-8">
      <HeroSection />

      <TrustSection />

      <section className="mt-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-center leading-relaxed">
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

      <LearnHowItWorksSection />

      <TestimonialSection />

      <FAQSection />

      <GetStartedSection />

      <Footer />
    </main>
  );
}
