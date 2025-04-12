'use client';

import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { APP_PATH } from '@/lib/const';
import Image from 'next/image';

export default function GetStartedSection() {
  const router = useRouter();

  return (
    <section className="mx-4 flex-col rounded-lg bg-black-900 p-[25px] flex items-center justify-center">
      <h1 className="text-5xl font-bold leading-relaxed text-center">
        Start creating <span className="italic font-normal">today.</span>
      </h1>
      <h2 className="text-suvaGrey text-lg mt-4 text-center">
        Generate designs in seconds, not hours.
      </h2>
      <Button
        className="flex items-center space-x-1 mt-4 p-5 h-[50px]"
        onClick={() => router.replace(APP_PATH)}
      >
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
  );
} 