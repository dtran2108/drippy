import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import Image from 'next/image';

export default function AIExpSection() {
  const content = [
    {
      title: 'Custom-fit patterns',
      image: 'custom-fit-patterns.png',
      badge: 'Beta',
      description:
        "Generate made-to-measure (MTM) patterns tailored to your avatar's exact body measurements.",
    },
    {
      title: 'AI materials',
      image: 'AI-materials.png',
      badge: 'Beta',
      description:
        'Generate custom prints, graphics and materials instantly with just a single text or image prompt.',
    },
    {
      title: 'AI photoshoot',
      image: 'photoshoot.png',
      badge: 'Soon',
      description:
        'Create photo-realistic images to showcase your designs on any model, including yourself, in any setting.',
    },
  ];

  return (
    <section className="my-24 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold text-center leading-relaxed">
        Enhance <span className="italic font-normal">your experience</span> with
        AI.
      </h2>
      <h3 className="text-gray-500 text-lg mt-4 text-center leading-relaxed">
        3D+AI is here to reshape the future of fashion design.
      </h3>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {content.map((c, i) => (
          <div key={i} className="rounded-lg bg-black-900 p-4 w-[440px]">
            <div className="rounded-lg bg-black-800 h-[300px] w-full flex items-center justify-center">
              <Image
                src={`/${c.image}`}
                width={400}
                height={400}
                alt={c.title}
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold mt-4 text-center flex items-center justify-center">
                {c.title}{' '}
                <span className="ml-2">
                  <Badge
                    className={cn(
                      'rounded-full',
                      c.badge == 'Beta' ? 'bg-[#B897FD]' : 'bg-[#FF4C54]'
                    )}
                  >
                    {c.badge}
                  </Badge>
                </span>
              </h3>
              <p className="mt-4 leading-relaxed text-center max-w-[350px]">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
