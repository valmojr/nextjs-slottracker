'use client';

import { useEffect, useState } from 'react';
import { User } from '../Util/types/entity';
import { JwtPayload, decode } from 'jsonwebtoken';

export default function SignInPage() {
  const [profile, setProfile] = useState<string>();

  useEffect(() => {
    const token = localStorage.getItem('sid');
    console.log('token:' + token);
    if (token) {
      const decodedToken = decode(token) as string;
      if (decodedToken) {
        setProfile(decodedToken);
      }
    }
  }, []);

  return <h1>{profile}</h1>;
}
