'use client';

import { Menu, MoveUpRight, X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from './ui/button';
import DrippyLogo from './drippy-logo';
import DarkModeBtn from './darkmode-btn';
import Link from 'next/link';

export default function MobileMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="h-screen">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="hidden">Menu</DrawerTitle>
          <DrippyLogo />
          <DrawerClose asChild>
            <Button variant="outline">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <ul className="flex flex-col items-center text-gray-500 justify-center space-y-8 mt-16">
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/">Marketplace</Link>
          </li>
          <li>
            <Link href="/">Pricing</Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center justify-center space-x-4"
            >
              ITF
              <MoveUpRight
                strokeWidth={1.5}
                className="ml-1 text-gray-500 w-[10px] h-[10px]"
              />
            </Link>
          </li>
        </ul>
        <DrawerFooter className="flex items-center justify-center">
          <DarkModeBtn />
          <Button variant="outline" className="font-bold w-full p-5 h-[50px]">
            Login
          </Button>
          <Button className="font-bold p-5 h-[50px] w-full">Get Started</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
