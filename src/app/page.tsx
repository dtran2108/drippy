import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoveRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import ClothesSection from '@/components/home-section/clothes-section';
import FAQSection from '@/components/home-section/faq-section';
import Footer from '@/components/footer';
import TrustSection from '@/components/home-section/trust-section';
import WorkflowSection from '@/components/home-section/workflow-section';
import TestimonialSection from '@/components/home-section/testimonial-section';

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
          <Button className="flex items-center space-x-1 mt-4 p-5">
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
              <AvatarImage src="/avatar/Salalcrossley.png" alt="@Salalcrossley" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Founder at Vintage Indentity</p>
              <p className="text-gray-500">@Salalcrossley</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className="rounded-lg bg-black-900"></div>
          ))}
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

      <section className="my-24 flex flex-col items-center justify-center">
        <WorkflowSection />
      </section>

      <section className="grid grid-cols-2 gap-16 my-16">
        <div>
          <h1 className="text-5xl font-semibold leading-relaxed">
            Enjoy the full power of
            <br />
            <span className="italic font-normal">
              3D technology
            </span> —minus <br /> the complexity.
          </h1>
          <h2 className="text-gray-500 text-lg mt-4">
            3D design should be a solution, not a burden.
          </h2>
          <Button
            variant="outline"
            className="font-semibold p-5  flex items-center justify-center space-x-1 rounded-full mt-4"
          >
            <span className="text-gray-500">Learn more</span>
            <MoveUpRight strokeWidth={1} className="text-gray-500 w-5 h-5" />
          </Button>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Speed</h3>
              <p className="leading-relaxed">
                Accelerate time-to-market by 6.5X with real-time iteration for
                faster, smarter decision-making.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Cost</h3>
              <p className="leading-relaxed">
                Cut your cost by 50% by eliminating the need for the
                never-ending samplingloop.
              </p>
            </div>
          </div>
          <hr className="border-t-1 border-dashed border-gray-700 my-6"></hr>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Sustainability</h3>
              <p className="leading-relaxed">
                Slash material waste, energy use, and overall pre and
                post-production waste by 60%.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Collaboration</h3>
              <p className="leading-relaxed">
                Enables seamless and real-time collaboration across teams to
                reduce errors by up to 90%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-center leading-relaxed">
          Enhance <span className="italic font-normal">your experience</span>{' '}
          with AI.
        </h2>
        <h3 className="text-gray-500 text-lg mt-4 text-center leading-relaxed">
          3D+AI is here to reshape the future of fashion design.
        </h3>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="rounded-lg bg-black-900 p-4">
              <div className="rounded-lg bg-black-800 h-[300px] w-full"></div>
              <div>
                <h3 className="text-lg font-semibold mt-4 text-center flex items-center justify-center">
                  Custom-fit patterns{' '}
                  <span className="ml-2">
                    <Badge className="bg-[#B897FD] rounded-full">Beta</Badge>
                  </span>
                </h3>
                <p className="mt-4 leading-relaxed text-center">
                  Generate made-to-measure (MTM) patterns tailored to your
                  avatar&apos;s exact body measurements.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-center leading-relaxed">
          Create everything you can{' '}
          <span className="italic font-normal">imagine.</span>
        </h2>
        <h3 className="text-gray-500 text-lg mt-4 text-center leading-relaxed">
          Access the largest library of design templates and downloadable
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

      <section className="mx-4 flex-col rounded-lg bg-black-900 p-4 flex items-center justify-center">
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
