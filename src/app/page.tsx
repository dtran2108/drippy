import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="py-16 px-8">
      <section className="grid grid-cols-2 gap-16 my-16">
        <div>
          <h1 className="text-5xl font-semibold leading-relaxed">
            Creating your next <br />
            collection has
            <br />
            <span className="italic font-normal">never been</span> easier.
          </h1>
          <h2 className="text-gray-500 text-lg mt-4">
            Join thousands of fashion entrepreneurs who&apos;ve cut their design
            time <br /> by 85% while reducing costs
          </h2>
          <Button className="flex items-center space-x-1 mt-4 p-5 h-[50px]">
            <span className="font-semibold">Get started now</span>
            <span> - It&apos;s FREE</span>
            <span>
              <MoveRight />
            </span>
          </Button>
          <hr className="border-t-1 custom-dashed-line border-gray-700 my-6"></hr>
          <h2 className="text-gray-500 text-lg mt-4">
            “I&apos;d like to say that I&apos;ve done countless research and I
            <br /> believe that you are onto something revolutionary!”
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            <Avatar>
              <AvatarImage
                src="/avatar/Salalcrossley.png"
                alt="@Salalcrossley"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Founder at Vintage Indentity</p>
              <p className="text-gray-500">@Salalcrossley</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 relative">
          <div className="rounded-lg bg-black-900 flex items-center justify-center">
            <Image
              src={`/main-dress-1.png`}
              width={500}
              height={200}
              alt="mockup"
            />
          </div>
          {[2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className={cn(
                'rounded-lg bg-black-900 flex items-center justify-center',
                (i == 0 || i == 3) && 'relative top-4'
              )}
            >
              <Image
                src={`/main-dress-${i + 2}.png`}
                width={200}
                height={200}
                alt="mockup"
              />
            </div>
          ))}
          <div className="absolute bottom-0 h-[150px] bg-[#000] w-full opacity-60 blur-2xl">
            &nbsp;
          </div>
        </div>
      </section>

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
        <Button className="flex items-center space-x-1 mt-4 p-5">
          <span className="font-semibold">Get started now</span>
          <span> - It&apos;s FREE</span>
          <span>
            <MoveRight />
          </span>
        </Button>
        <h2 className="text-gray-500 text-lg mt-8 text-center">
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
