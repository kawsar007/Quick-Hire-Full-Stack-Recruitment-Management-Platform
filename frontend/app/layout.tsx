import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QuickHire — Find Your Next Job',
  description: 'Browse and apply for the latest job opportunities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
        {/* © {new Date().getFullYear()} QuickHire. All rights reserved. */}
        <Footer />
      </body>
    </html>
  );
}