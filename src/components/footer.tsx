'use client';
import DrippyLogo from './drippy-logo';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="mt-24 mx-8 py-8">
      <hr className="border-black-800 mb-16"></hr>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-8">
            <DrippyLogo />
            <h2 className="text-gray-500">Privacy policy</h2>
            <h2 className="text-gray-500">Terms of use</h2>
            <h2 className="text-gray-500">Cookie policy</h2>
          </div>
          <h2 className="text-gray-500 mt-4">@2024 - Launchmart Inc.</h2>
        </div>
        <div>
          <h2 className="text-gray-500 mb-4">Updates right to your Inbox</h2>
          <div className="flex items-center justify-center space-x-4">
            <Input placeholder="Email" className="p-4" />

            <Button variant="outline" className="p-4">
              Send
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
