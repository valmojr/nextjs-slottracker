import type { Metadata } from 'next';
import TopMenu from './TopMenu/TopMenu';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Web Application for handling slots in any discord based event',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <TopMenu/>
        {children}
    </>
  );
}
