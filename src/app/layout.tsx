import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProfileProvider from './context/Context';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Slot Tracker',
  description: 'Web Application for handling slots in any discord based event',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="flex max-h-screen h-screen flex-col items-center justify-center p-0 overflow-hidden"
    >
      <ProfileProvider>
        <body className={inter.className}>{children}</body>
      </ProfileProvider>
    </html>
  );
}
