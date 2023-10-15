'use client';
import { useContext, useEffect, Suspense, useState } from 'react';
import { ProfileContext, ProfileContextProps } from '../context/Context';
import { useRouter } from 'next/navigation';
import AssignedEvents from './DashboardFrame/AssignedEvents/AssignedEvents';
import AvaliableEvents from './DashboardFrame/AvaliableEvent/AvaliableEvent';
import LoadingAssignedEvents from './DashboardFrame/AssignedEvents/LoadingAssignedEvents';
import LoadingAvaliableEvents from './DashboardFrame/AvaliableEvent/LoadingAvaliableEvents';
import { Dialog } from '@radix-ui/themes';
import CreateEvent from './create/createEvent';
import { Guild } from '../Util/types/entity';
import { Button } from '@radix-ui/themes';

export default function DashboardPage() {
  const { profile } = useContext(ProfileContext) as ProfileContextProps;
  const [userGuilds, setUserGuilds] = useState<Guild[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!profile) {
      localStorage.clear();
      router.push('/');
    }

    fetch(`${process.env.BACKEND_API_URL}/guild/user/${profile?.id}`)
      .then(res => res.json()
      .then(data => setUserGuilds(data)))
  }, [profile, router]);

  return <Dialog.Root>
    <Suspense fallback={<LoadingAssignedEvents />}>
      <AssignedEvents profile={ profile } />
    </Suspense>
    <Suspense fallback={<LoadingAvaliableEvents />}>
      <AvaliableEvents profile={profile} />
    </Suspense>
    <Dialog.Trigger>
        <Button variant={'classic'} color="cyan">Create Event</Button>
    </Dialog.Trigger>
    <CreateEvent avaliableGuilds={userGuilds} />
    </Dialog.Root>
}
