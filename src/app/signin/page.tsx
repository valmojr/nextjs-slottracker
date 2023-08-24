'use client';

import { useEffect, useState } from 'react';
import { User } from '../Util/types/entity';
import { redirect } from 'next/navigation';
import TokenHandler from '../Util/functions/tokenHandler';

export default function SignInPage() {
  const [sid, setSID] = useState<string>();
  const [profile, setProfile] = useState<any>();

  useEffect(() => {
    async function fetchProfile(sid: string) {
      const request = await fetch(
        `${process.env.BACKEND_API_URL}/userme/${sid}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: 'false',
        },
      );
      return request;
    }
    let cookies = document.cookie;

    let cookieArray = cookies.split(';');
    let connectSidValue = null;
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf('connect.sid=') === 0) {
        connectSidValue = cookie.substring(
          'connect.sid='.length,
          cookie.length,
        );

        connectSidValue = TokenHandler(connectSidValue);
        setSID(connectSidValue);

        break;
      }
    }

    if (!connectSidValue) {
      redirect('/');
    } else {
      const fetchedProfile = fetchProfile(connectSidValue);
      setProfile(fetchedProfile);
    }
  }, [sid]);

  return (
    <div className="flex flex-col flex-nowrap justify-center items-center">
      <h2>{sid ? `SID: ${sid}` : 'Carregando...'}</h2>

      <div className="bg-emerald-600 h-max w-max flex flex-col flex-nowrap justify-center items-center">
        <h1>{'username: ' + profile?.username}</h1>
        <h1>{'id: ' + profile?.id}</h1>
      </div>
    </div>
  );
}
