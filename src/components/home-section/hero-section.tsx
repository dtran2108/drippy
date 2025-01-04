import { MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const Testimonial = () => (
    <>
      <hr className="border-t-1 custom-dashed-line border-gray-700 my-6"></hr>
      <h2 className="text-gray-500 text-lg mt-4">
        “I&apos;d like to say that I&apos;ve done countless research and I
        <br className="hidden lg:block" /> believe that you are onto something
        revolutionary!”
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
    </>
  );

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-16">
      <div>
        <h1 className="text-5xl font-semibold leading-relaxed">
          Creating your next <br className="hidden lg:block" />
          collection has <br className="hidden lg:block" />
          <span className="italic font-normal"> never been</span> easier.
        </h1>
        <h2 className="text-gray-500 text-lg mt-4">
          Join thousands of fashion entrepreneurs who&apos;ve cut their design
          time <br className="hidden lg:block" /> by 85% while reducing costs
        </h2>
        <Button className="flex items-center space-x-1 mt-4 p-5 h-[50px]">
          <span className="font-semibold">Get started now</span>
          <span> - It&apos;s FREE</span>
          <span>
            <MoveRight />
          </span>
        </Button>
        <div className="hidden lg:block">
          <Testimonial />
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
      <div className="block lg:hidden">
        <Testimonial />
      </div>
    </section>
  );
}
