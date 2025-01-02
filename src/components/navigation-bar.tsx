import Link from 'next/link';
import DrippyLogo from './drippy-logo';
import { MoveUpRight } from 'lucide-react';
import { Button } from './ui/button';
import DarkModeBtn from './darkmode-btn';

export default function NavigationBar() {
  return (
    <div className="fixed bg-background top-0 flex items-center justify-between w-screen py-4 px-8 font-[family-name:var(--font-poppins)] z-50">
      <div className="flex items-center space-x-24">
        <DrippyLogo />
        <div className="text-gray-500 flex items-center space-x-8">
          <Link href="/">Products</Link>
          <Link href="/">Marketplace</Link>
          <Link href="/">Pricing</Link>
          <Link href="/" className="flex items-center justify-center space-x-4">
            ITF
            <MoveUpRight
              strokeWidth={1.5}
              className="ml-1 text-gray-500 w-[10px] h-[10px]"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <DarkModeBtn />
        <Button variant="outline" className="font-bold p-5 w-[100px] h-[50px]">
          Login
        </Button>
        <Button className="font-bold p-5 w-[137px] h-[50px]">Get Started</Button>
      </div>
    </div>
  );
}
