import Image from 'next/image';

export default function DrippyLogo() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Image
        src="/logos/Drippy-full-logo.svg"
        alt="Drippy logo"
        width={150}
        height={50}
      />
      {/* <h1 className="font-bold text-3xl text-black dark:text-white">Drippy.</h1> */}
    </div>
  );
}
