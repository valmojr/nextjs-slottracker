'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { User } from '../Util/types/entity';
import CookieHandler from '../Util/functions/cookieHandler';

export default function SignInPage() {
  const [sid, setSID] = useState<string>();
  const [profile, setProfile] = useState<User>();

  useEffect(() => {
    async function fetchProfile(sid: string) {
      const request = await fetch(
        `${process.env.BACKEND_API_URL}/userme/${sid}`,
      );

      const profile: User = await request.json();

      return profile;
    }

    const connectSidValue = CookieHandler(document.cookie, setSID);

    if (!connectSidValue) {
      redirect('/');
    } else {
      fetchProfile(connectSidValue).then((profile) => setProfile(profile));
    }
  }, [sid]);

  return (
    <div className="flex flex-col flex-nowrap justify-center items-center">
      <h2>{sid ? `${sid}` : 'Loading...'}</h2>
      <p>{profile?.id}</p>
      <p>{profile?.username}</p>
      <p>{profile?.avatar}</p>
      <p>{profile?.accessToken}</p>
      <p>{profile?.refreshToken}</p>
    </div>
  );
}
