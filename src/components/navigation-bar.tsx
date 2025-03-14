'use client';

// import Link from 'next/link';
import DrippyLogo from './drippy-logo';
// import { MoveUpRight } from 'lucide-react';
import { Button } from './ui/button';
// import DarkModeBtn from './darkmode-btn';
import MobileMenu from './mobile-menu';
import { APP_PATH } from '@/lib/const';
import { useRouter } from 'next/navigation';

export default function NavigationBar() {
  const router = useRouter();

  return (
    <div className="fixed bg-background top-0 flex items-center justify-between w-screen py-4 px-4 lg:px-8 font-[family-name:var(--font-poppins)] z-50">
      <div className="flex items-center space-x-24">
        <DrippyLogo />
        <div className="text-gray-500 hidden lg:flex items-center space-x-8">
          {/* <Link href="/">Products</Link>
          <Link href="/">Marketplace</Link>
          <Link href="/">Pricing</Link>
          <Link href="/" className="flex items-center justify-center space-x-4">
            ITF
            <MoveUpRight
              strokeWidth={1.5}
              className="ml-1 text-gray-500 w-[10px] h-[10px]"
            />
          </Link> */}
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        {/* <DarkModeBtn /> */}
        <Button
          variant="outline"
          className="font-bold p-5 w-[100px] h-[50px]"
          onClick={() => router.replace(APP_PATH)}
        >
          Login
        </Button>
        <Button
          className="font-bold p-5 w-[137px] h-[50px]"
          onClick={() => router.replace(APP_PATH)}
        >
          Get Started
        </Button>
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <MobileMenu />
      </div>
    </div>
  );
}
