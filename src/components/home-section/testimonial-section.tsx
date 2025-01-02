import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const testimonials = [
  {
    text: 'I am currently teaching a class of 85 fashion students in Rome, from over 20 countries. I noticed the class in general is terrified to work with 3D. It is almost like a mental block for many. When I found Drippy, it was like a lightbulb turning on.',
    name: 'Lecturer at Sapienza.',
    username: '@julianabez',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarAlt: '@shadcn',
  },
  {
    text: "I used to struggle with 3D design software that felt like it took a lifetime to learn. Drippy made it so easy to bring my ideas to life—I can finally design without feeling overwhelmed. It's exactly what I needed.",
    name: 'Freelance designer.',
    username: '@Liamrodriguez',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarAlt: '@shadcn',
  },
  {
    text: "I'm still learning, but Drippy's 3D tools have made a huge difference in my design projects. I can visualize everything instantly and make changes on the spot, which has really helped me grow as a designer. ",
    name: 'Fashion students.',
    username: '@Hannahbailey',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarAlt: '@shadcn',
  },
];

interface TestimonialProps {
  text: string;
  name: string;
  username: string;
  avatarSrc: string;
  avatarAlt: string;
}

function Testimonial({
  text,
  name,
  username,
  avatarSrc,
  avatarAlt,
}: TestimonialProps) {
  return (
    <div className="p-6 rounded-lg bg-black-900 border border-black-800">
      <p className="text-gray-500">{text}</p>
      <div className="flex items-center space-x-4 mt-4">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={avatarAlt} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{username}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="my-24 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold text-center leading-relaxed">
        Here&apos;s what they say about{' '}
        <span className="italic font-normal">us.</span>
      </h2>
      <h3 className="text-gray-500 text-lg mt-4 mb-8 text-center leading-relaxed">
        Fashion entrepreneurs around the worlds love Drippy for <br /> its
        flexibility and ease of use.
      </h3>
      <div className="grid grid-cols-3 gap-8 px-24">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}