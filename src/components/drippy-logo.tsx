import Image from 'next/image';

export default function DrippyLogo() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Image
        className="dark:invert"
        src="/logos/Drippy-logo.svg"
        alt="Drippy logo"
        width={30}
        height={30}
      />
      <h1 className="font-bold text-3xl font-white">Drippy.</h1>
    </div>
  );
}
