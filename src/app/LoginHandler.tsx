'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginHandler() {
  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      router.push(`${process.env.BACKEND_API_URL}/auth/login`);
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

        break;
      }
    }

    connectSidValue ? router.push('/signin') : fetchProfile();
  }, [router]);

  return <></>;
}
