import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavigationBar from '@/components/navigation-bar';
import Script from 'next/script';
import { GOOGLE_ANALYTICS_ID } from '@/lib/const';

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
      <Script
        id="next"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script id="next">
        {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GOOGLE_ANALYTICS_ID}');`}
      </Script>
      <body className={`${poppins.variable} antialiased`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
