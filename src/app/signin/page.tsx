'use client';

import { useContext, useEffect } from 'react';
import { redirect } from 'next/navigation';
import CookieHandler from '../Util/functions/cookieHandler';
import { useRouter } from 'next/navigation';
import fetchProfile from '../Util/functions/fetchProfile';
import LoadingFrame from '../Util/Components/Loading';
import { ProfileContext, ProfileContextProps } from '../context/Context';

export default function SignInPage() {
  const router = useRouter();

  const { login } = useContext(ProfileContext) as ProfileContextProps;

  useEffect(() => {
    const connectSidValue = CookieHandler(document.cookie);

    if (!connectSidValue) {
      redirect('/');
    } else {
      fetchProfile(connectSidValue).then((profile) => {
        login(profile);

        router.push('/dashboard');
      });
    }
  }, [router, login]);

  return (
    <div className="flex flex-col flex-nowrap justify-center items-center">
      <LoadingFrame />
    </div>
  );
}
