'use client';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { EnterIcon, ExitIcon } from '@radix-ui/react-icons';

const IconVariables = tv({
  base: 'rounded-full flex flex-row flex-nowrap justify-center items-center',
  variants: {
    size: {
      small: 'w-12 h-12',
      large: 'w-16 h-16',
    },
    type: {
      icon: 'cursor-none',
      buttom: 'cursor-pointer',
    },
    color: {
      dark: 'bg-DarkDarken hover:bg-DarkDarkest',
      darker: 'bg-DarkDarkest hover:bg-DarkDarken',
      light: 'bg-DarkLighten',
      lighter: 'bg-DarkLightest',
      red: 'bg-Red',
      yellow: 'bg-Yellow',
      blurple: 'bg-Blurpe',
    },
  },
});

export const FetchIcon = (radixIcon: 'logout' | 'login') => {
  switch (radixIcon) {
    case 'logout':
      return <ExitIcon />;
    case 'login':
      return <EnterIcon />;
  }
};

export default function Icon({
  className,
  clickCallback,
  type,
  icon,
  size,
  color,
}: ComponentProps<'div'> & {
  type: 'icon' | 'buttom';
  size: 'small' | 'large';
  color: 'dark' | 'darker' | 'light' | 'lighter' | 'red' | 'yellow' | 'blurple';
  icon: 'logout' | 'login';
  clickCallback: () => void;
}) {
  return (
    <div
      className={twMerge(
        IconVariables({ type, size, color }),
        className,
        'cursor-pointer',
      )}
      onClick={clickCallback}
    >
      {FetchIcon(icon)}
    </div>
  );
}
