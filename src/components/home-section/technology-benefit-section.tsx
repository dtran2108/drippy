import { Button } from '../ui/button';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';

export default function TechnologyBenefitSection() {
  const content = [
    {
      title: 'Speed',
      icon: 'clock.svg',
      description:
        'What took 6 months now takes just 4 weeks. Accelerate time-to-market by 6.5X with real-time iteration for faster, smarter decision-making.',
    },
    {
      title: 'Cost',
      icon: 'database.svg',
      description:
        'Save up to $10,000 per collection. Cut your cost by 50% by eliminating the need for the never-ending samplingloop.',
    },
    {
      title: 'Sustainability',
      icon: 'drop.svg',
      description:
        'Slash material waste, energy use, and overall pre and post-production waste by 60%.',
    },
    {
      title: 'Collaboration',
      icon: 'connect.svg',
      description:
        'Enables seamless and real-time collaboration across teams to reduce errors by up to 90%.',
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-16">
      <div>
        <h1 className="text-5xl font-bold leading-relaxed">
          Enjoy the full power of
          <br className="hidden lg:block" />
          <span className="italic font-normal"> 3D technology</span> —minus{' '}
          <br className="hidden lg:block" /> the complexity.
        </h1>
        <h2 className="text-gray-500 text-lg mt-4">
          3D design should be a solution, not a burden.
        </h2>
        <Button
          variant="outline"
          className="font-bold p-5 hidden lg:flex items-center justify-center space-x-1 rounded-full mt-4 "
        >
          <span className="text-gray-500">Learn more</span>
          <MoveUpRight strokeWidth={1} className="text-gray-500 w-5 h-5" />
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {content.slice(0, 2).map((c, i) => (
            <div key={i}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-grey w-[45px] h-[45px] rounded-lg flex items-center justify-center">
                  <Image
                    src={`/icons/${c.icon}`}
                    width={20}
                    height={20}
                    alt="clock-icon"
                  />
                </div>
                <h3 className="text-xl font-bold">{c.title}</h3>
              </div>

              <p className="leading-relaxed text-lg">{c.description}</p>
            </div>
          ))}
        </div>
        <hr className="hidden lg:block border-t-1 custom-dashed-line border-[#2A2C31] my-6"></hr>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8 lg:mt-0">
          {content.slice(2).map((c, i) => (
            <div key={i}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-grey w-[45px] h-[45px] rounded-lg flex items-center justify-center">
                  <Image
                    src={`/icons/${c.icon}`}
                    width={20}
                    height={20}
                    alt="clock-icon"
                  />
                </div>
                <h3 className="text-xl font-bold">{c.title}</h3>
              </div>

              <p className="leading-relaxed text-lg">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="block lg:hidden">
        <Button
          variant="outline"
          className="font-bold p-5 flex items-center justify-center space-x-1 rounded-full mt-4 "
        >
          <span className="text-gray-500">Learn more</span>
          <MoveUpRight strokeWidth={1} className="text-gray-500 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
