import Link from 'next/link';
import DrippyLogo from './drippy-logo';
import { MoveUpRight } from 'lucide-react';
import { Button } from './ui/button';
import DarkModeBtn from './darkmode-btn';

export default function NavigationBar() {
  return (
    <div className="flex items-center justify-between w-screen py-4 px-8 font-[family-name:var(--font-poppins)]">
      <div className="flex items-center space-x-24">
        <DrippyLogo />
        <div className="text-gray-500 flex items-center space-x-8">
          <Link href="/">Products</Link>
          <Link href="/">Marketplace</Link>
          <Link href="/">Pricing</Link>
          <Link href="/" className="flex items-center justify-center space-x-4">
            ITF
            <MoveUpRight strokeWidth={1} className="text-gray-500 w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <DarkModeBtn />
        <Button variant="outline" className="font-bold p-5">
          Login
        </Button>
        <Button className="font-bold p-5">Get Started</Button>
      </div>
    </div>
  );
}
