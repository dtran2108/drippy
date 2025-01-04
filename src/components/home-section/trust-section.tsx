import Image from 'next/image';

const TrustSection = () => {
  const logos = [
    { name: 'la-french-tech', width: 150, height: 50 },
    { name: 'beyond-form', width: 100, height: 50 },
    { name: 'creative-valley', width: 100, height: 50 },
    { name: 'global-startups', width: 100, height: 50 },
    { name: 'ifa-paris', width: 130, height: 50 },
  ];

  return (
    <section className="my-24 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold mb-8">
        They <span className="italic font-normal">trust</span> us
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:flex items-center justify-center space-x-4 mt-4">
        <div className="w-[180px] h-[100px] bg-black-900 rounded-lg flex items-center justify-center space-x-2">
          <Image
            src={`/logos/french-ministry-of-economics.png`}
            alt="french-ministry-of-economics"
            width={50}
            height={50}
          />
          <span className="text-sm font-semibold">
            The French
            <br /> ministry of
            <br /> economic.
          </span>
        </div>
        {logos.map((logo, i) => (
          <div
            key={i}
            className="w-[180px] h-[100px] bg-black-900 rounded-lg flex items-center justify-center"
          >
            <Image
              src={`/logos/${logo.name}.png`}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
