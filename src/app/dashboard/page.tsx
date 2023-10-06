'use client';
import { useContext, useEffect, Suspense } from 'react';
import { ProfileContext, ProfileContextProps } from '../context/Context';
import { useRouter } from 'next/navigation';
import AssignedEvents from './DashboardFrame/AssignedEvents/AssignedEvents';
import AvaliableEvents from './DashboardFrame/AvaliableEvent/AvaliableEvent';
import LoadingAssignedEvents from './DashboardFrame/AssignedEvents/LoadingAssignedEvents';
import LoadingAvaliableEvents from './DashboardFrame/AvaliableEvent/LoadingAvaliableEvents';
import TopMenu from './DashboardFrame/TopMenu/TopMenu';

export default function DashboardPage() {
  const { profile } = useContext(ProfileContext) as ProfileContextProps;
  const router = useRouter();

  useEffect(() => {
    if (!profile) {
      router.push('/');
    }
  }, [profile, router]);

  return (
    <>
      <TopMenu />
      <Suspense fallback={<LoadingAssignedEvents />}>
        <AssignedEvents profile={ profile } />
      </Suspense>
      <Suspense fallback={<LoadingAvaliableEvents />}>
        <AvaliableEvents profile={profile} />
      </Suspense>
    </>
  );
}
