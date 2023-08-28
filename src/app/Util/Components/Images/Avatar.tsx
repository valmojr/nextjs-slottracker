import Image from 'next/image';
import { ComponentProps } from 'react';
import { User } from '../../types/entity';
import AvatarHandler from '../../functions/avatarHandler';
import { twMerge } from 'tailwind-merge';

export default function Avatar({
  profile,
  className,
}: ComponentProps<'img'> & { profile: User }) {
  return (
    <Image
      className={twMerge(className, 'rounded-full h-18 w-18')}
      alt={`${profile.username}'s avatar`}
      src={AvatarHandler(profile)}
      width={'60'}
      height={'60'}
    />
  );
}
