'use client';

import { Button } from '../ui/button';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { APP_PATH } from '@/lib/const';

export default function LearnHowItWorksSection() {
  const router = useRouter();

  return (
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
      <div
        className="w-full overflow-x-scroll [&::-webkit-scrollbar]:h-[10px]
                  lg:[&::-webkit-scrollbar]:h-0
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-track]:bg-black-900
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-scarabaeusSacer
                  dark:[&::-webkit-scrollbar-track]:bg-black-900
                  dark:[&::-webkit-scrollbar-thumb]:bg-scarabaeusSacer"
      >
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
        className="font-bold p-5 flex items-center justify-center space-x-1 rounded-full mt-8"
        onClick={() => router.replace(APP_PATH)}
      >
        <span className="text-suvaGrey">Learn how it works</span>
        <MoveUpRight strokeWidth={1} className="text-suvaGrey w-5 h-5" />
      </Button>
    </section>
  );
} 