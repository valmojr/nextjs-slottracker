'use client';

import { User } from '@/app/Util/types/entity';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';
import { ReactNode } from 'react';

export interface ProfileContextProps {
  profile: User | undefined;
  login: (user: User) => void;
  logout: () => void;
}

export interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined,
);

export default function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<User>();

  const router = useRouter();

  function login(user: User) {
    setProfile(user);
  }

  function logout() {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
    router.push('/');
    setProfile(undefined);
  }

  return (
    <ProfileContext.Provider value={{ profile, login, logout }}>
      {children}
    </ProfileContext.Provider>
  );
}
