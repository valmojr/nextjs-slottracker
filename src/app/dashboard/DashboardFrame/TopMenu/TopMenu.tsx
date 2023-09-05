'use client';
import Frame from '@/app/Util/Components/Divs/Frame';
import Avatar from '@/app/Util/Components/Images/Avatar';
import { User } from '@/app/Util/types/entity';
import { ProfileContext, ProfileContextProps } from '@/app/context/Context';
import { ExitIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';

export default function TopMenu() {
  const { profile, logout } = useContext(ProfileContext) as ProfileContextProps;
  return (
    <Frame type="top" color="primary">
      <Avatar profile={profile as User} border={'circledLarge'} />
      <h1 className="text-3xl">{profile?.username}</h1>
      <ExitIcon onClick={() => logout()} />
    </Frame>
  );
}
