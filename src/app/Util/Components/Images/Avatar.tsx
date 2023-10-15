import { User } from '../../types/entity';
import AvatarHandler from '../../functions/avatarHandler';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { ReactElement } from 'react';

interface AvatarProps {
  profile: User | undefined;
  border: 'squared' | 'rounded' | 'circled';
  size: 'sm' | 'md' | 'lg';
  className?: string;
}

interface IconProps {
  icon: ReactElement<any, any>;
  border: 'squared' | 'rounded' | 'circled';
  size: 'sm' | 'md' | 'lg';
  className?: string;
}

const AvatarVariants = tv({
  base: 'inline-flex items-center justify-center align-middle overflow-hidden select-none bg-[var(--black-a3)]',
  variants: {
    border: {
      squared: 'rounded-none',
      rounded: 'rounded-10',
      circled: 'rounded-full',
      internal: 'object-cover border-r-inherit',
    },
    size: {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
      internal: 'w-full h-full flex bg-[white]'
    },
  }
})

export default function Avatar({profile, border, size, className}: AvatarProps) {
  const image = (profile ? AvatarHandler(profile) : '');

  return <>
    <RadixAvatar.Root
      className={twMerge(AvatarVariants({border, size}), className)}
    >
        <RadixAvatar.Image src={image} className={AvatarVariants({border: 'internal', size: 'internal'})} />
      <RadixAvatar.Fallback className={twMerge(AvatarVariants({border: 'internal', size: 'internal'}),'bg-white color-[var(--violet-11)] font-medium leading-[1] text-[15px]')} />
      </RadixAvatar.Root>
    </>
}

export function Icon({
  icon,
  className,
  border,
  size,
}: IconProps) {
    return (
        <div
          className={twMerge(AvatarVariants({ border, size }), className)}
        >{icon}</div>
    )
}