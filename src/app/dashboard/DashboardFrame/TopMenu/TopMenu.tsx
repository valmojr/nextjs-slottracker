'use client';

import Frame from '@/app/Util/Components/Divs/Frame';
import Avatar from '@/app/Util/Components/Images/Avatar';
import Icon from '@/app/Util/Components/Images/Icon';
import { User } from '@/app/Util/types/entity';
import { ProfileContext, ProfileContextProps } from '@/app/context/Context';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

export default function TopMenu() {
  const { profile, logout } = useContext(ProfileContext) as ProfileContextProps;
  const { push } = useRouter();

  useEffect(() => {
    if (typeof profile === 'undefined') push('/');
  }, [profile, push]);

  return (
    <Frame type="top" color="primary">
      <Avatar profile={profile as User} border={'circledLarge'} />
      <Icon
        type={'buttom'}
        icon={'logout'}
        clickCallback={() => logout()}
        color={'dark'}
        size={'small'}
      />
    </Frame>
  );
}
