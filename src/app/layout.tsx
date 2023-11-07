import './globals.css';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProfileProvider from './context/Context';
import { Theme } from '@radix-ui/themes';
import { twMerge } from 'tailwind-merge';
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
    <html  suppressHydrationWarning
      lang="en"
      className="flex h-screen flex-col flex-nowrap items-center justify-start p-0 bg-DarkDarkest"
    >
      <ProfileProvider>
          <body className={twMerge(inter.className, 'bg-white flex flex-col w-full h-full items-center justify-start')}>
              {children}
          </body>
      </ProfileProvider>
    </html>
  );
}
