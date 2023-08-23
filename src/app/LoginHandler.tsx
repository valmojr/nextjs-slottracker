'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginHandler() {
  const [profile, setProfile] = useState();
  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      router.push('http://localhost:8080/api/auth/login');
    }

    function logout() {
      localStorage.removeItem('token');
      router.push('/');
    }

    fetchProfile();
  }, [router]);

  return <></>;
}
