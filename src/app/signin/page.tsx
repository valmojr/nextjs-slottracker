'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { User } from '../Util/types/entity';
import CookieHandler from '../Util/functions/cookieHandler';
import { useRouter } from 'next/navigation';
import fetchProfile from '../Util/functions/fetchProfile';
import LoadingFrame from '../Util/Components/Loading';

export default function SignInPage() {
  const [sid, setSID] = useState<string>();
  const [profile, setProfile] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const connectSidValue = CookieHandler(document.cookie, setSID);

    if (!connectSidValue) {
      redirect('/');
    } else {
      fetchProfile(connectSidValue).then((fetchedProfile) => {
        setProfile(fetchedProfile);

        router.push('/dashboard');
      });
    }
  }, [sid, router]);

  return (
    <div className="flex flex-col flex-nowrap justify-center items-center">
      <h2>{sid ? `` : <LoadingFrame />}</h2>
    </div>
  );
}
