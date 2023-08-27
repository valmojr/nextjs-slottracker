'use client';
import { useContext, useEffect } from 'react';
import { ProfileContext, ProfileContextProps } from '../context/Context';
import { useRouter } from 'next/navigation';
import BackgroundDiv from '../Util/Components/Divs/BackgroundDiv';
import { DarkDarkest, Red } from '../Util/JSONs/colors';
import Frame from '../Util/Components/Divs/Frame';
import Avatar from '../Util/Components/Images/Avatar';
import { User } from '../Util/types/entity';

export default function DashboardPage() {
  const { profile } = useContext(ProfileContext) as ProfileContextProps;
  const router = useRouter();

  useEffect(() => {
    if (!profile) {
      router.push('/');
    }
  }, [profile, router]);

  return (
    <BackgroundDiv backgroundColor={DarkDarkest}>
      <Frame backgroundColor={Red}>
        <h1>{'Nome: ' + profile?.username}</h1>
        {typeof profile != 'undefined' ? (
          <Avatar profile={profile as User} />
        ) : null}
      </Frame>
    </BackgroundDiv>
  );
}
