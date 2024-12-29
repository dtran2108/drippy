import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="py-4 px-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-5xl font-bold leading-relaxed">
            Creating your next <br />
            collection has
            <br />
            <span className="italic font-normal">never been</span> easier.
          </h1>
          <h2 className="text-gray-500 text-lg mt-4">
            Accelerate and simplify your process with our AI-powered 3D <br />
            fashion design platform that works on your browser.
          </h2>
          <Button className="flex items-center space-x-1 mt-4 p-5">
            <span className="font-bold">Get started now</span>
            <span> - It&apos;s FREE</span>
            <span>
              <MoveRight />
            </span>
          </Button>
          <hr className="border-t-1 border-dashed border-gray-700 my-6"></hr>
          <h2 className="text-gray-500 text-lg mt-4">
            “I&apos;d like to say that I&apos;ve done countless research and I
            <br /> believe that you are onto something revolutionary!”
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">Founder at Vintage Indentity</p>
              <p className="text-gray-500">@Salalcrossley</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
