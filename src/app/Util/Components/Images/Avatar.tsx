import Image from 'next/image';
import { ComponentProps } from 'react';
import { User } from '../../types/entity';
import AvatarHandler from '../../functions/avatarHandler';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const AvatarVariables = tv({
  base: '',
  variants: {
    border: {
      squaredSmall: 'rounded-none h-8 w-8',
      squaredLarge: 'rounded-none h-16 w-16',
      roundedSmall: 'rounded-xl h-8 w-8',
      roundedLarge: 'rounded-xl h-16 w-16',
      circledSmall: 'rounded-full h-8 w-8',
      circledLarge: 'rounded-full h-16 w-16',
    },
  },
});

export default function Avatar({
  profile,
  className,
  border,
}: ComponentProps<'img'> & {
  profile: User;
  border:
    | 'squaredSmall'
    | 'squaredLarge'
    | 'roundedSmall'
    | 'roundedLarge'
    | 'circledSmall'
    | 'circledLarge';
}): JSX.Element {
  return profile.avatar ? (
    <Image
      className={twMerge(AvatarVariables({ border }), className)}
      alt={`${profile.username}'s avatar`}
      src={AvatarHandler(profile)}
      width={'60'}
      height={'60'}
    />
  ) : (
    <Image
      className={twMerge(AvatarVariables({ border }), className)}
      alt={`Username avatar`}
      src={''}
      width={'60'}
      height={'60'}
    />
  );
}
