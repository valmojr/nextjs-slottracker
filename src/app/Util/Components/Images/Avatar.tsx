import Image from 'next/image';
import { ComponentProps } from 'react';
import { User } from '../../types/entity';
import AvatarHandler from '../../functions/avatarHandler';

export default function Avatar({
  profile,
}: ComponentProps<'img'> & { profile: User }) {
  return (
    <Image
      className="rounded-full"
      alt={``}
      src={AvatarHandler(profile)}
      width={'80'}
      height={'80'}
    />
  );
}
