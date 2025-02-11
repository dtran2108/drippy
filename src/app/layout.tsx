import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavigationBar from '@/components/navigation-bar';
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Drippy',
  description: 'Drippy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} antialiased`}>
        <NavigationBar />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID || ''} />
      </body>
    </html>
  );
}
