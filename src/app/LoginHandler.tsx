'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CookieHandler from './Util/functions/cookieHandler';

export default function LoginHandler() {
  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      router.push(`${process.env.BACKEND_API_URL}/auth/login`);
    }

    const connectSidValue = CookieHandler(document.cookie);

    connectSidValue ? router.push('/signin') : fetchProfile();
  }, [router]);

  return <></>;
}
