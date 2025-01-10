'use client';
import DrippyLogo from './drippy-logo';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="mt-24 mx-8 py-8">
      <hr className="border-black-800 mb-16"></hr>
      <div className="flex flex-wrap items-center justify-between">
        <div className="hidden lg:block">
          <div className="flex items-center space-x-8">
            <DrippyLogo />
            <h2 className="text-suvaGrey">Privacy policy</h2>
            <h2 className="text-suvaGrey">Terms of use</h2>
            <h2 className="text-suvaGrey">Cookie policy</h2>
          </div>
          <h2 className="text-suvaGrey mt-4 hidden lg:block">
            @2024 - Launchmart Inc.
          </h2>
        </div>
        <div className="block lg:hidden">
          <div>
            <div className='flex items-center'> 
              <DrippyLogo />
            </div>
            <div className="grid grid-cols-2 gap-4 my-6">
              <h2 className="text-suvaGrey">Privacy policy</h2>
              <h2 className="text-suvaGrey">Terms of use</h2>
              <h2 className="text-suvaGrey">Cookie policy</h2>
            </div>
          </div>
          <h2 className="text-suvaGrey mt-4 hidden lg:block">
            @2024 - Launchmart Inc.
          </h2>
        </div>
        <div>
          <h2 className="text-suvaGrey mb-4">Updates right to your Inbox</h2>
          <div className="flex items-center justify-center space-x-4">
            <Input placeholder="Email" className="p-4" />

            <Button variant="outline" className="p-4">
              Send
            </Button>
          </div>
        </div>
      </div>
      <h2 className="text-suvaGrey mt-4 block lg:hidden">
        @2024 - Launchmart Inc.
      </h2>
    </footer>
  );
}
