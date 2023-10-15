'use client';
import Frame from '@/app/Util/Components/Divs/Frame';
import Avatar from '@/app/Util/Components/Images/Avatar';
import Icon from '@/app/Util/Components/Images/Icon';
import { ProfileContext, ProfileContextProps } from '@/app/context/Context';
import { ExitIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function TopMenu() {
  const { profile, logout } = useContext(ProfileContext) as ProfileContextProps;
  const {push, refresh} = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    logout();
    refresh();
    push('/');

    // TODO - Logout not working
  }

  return (
    <Frame type="top" color="primary">
      <Avatar profile={profile} border={'circled'} size={'md'} />
      <h1 className="text-2xl">{profile?.username}</h1>
      <Icon icon={<ExitIcon/>} border={'circledMedium'} color={'red'} onClick={()=>handleLogout()}/>
    </Frame>
  );
}
