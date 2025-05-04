import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata = {
  title: 'Outreach Clerk - Cold Email & Link Building Outreach Platform',
  description:
    'Outreach Clerk is your all-in-one solution for email warmup, cold email outreach, and link building campaigns.',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} /> */}
      </body>
    </html>
  );
}
