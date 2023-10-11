import { IconProps } from '@radix-ui/react-icons/dist/types';
import { ComponentProps, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const IconVariables = tv({
  base: 'flex flex-row items-center justify-center bg-red-900',
  variants: {
    border: {
      squaredSmall: 'rounded-none h-8 w-8',
      squaredLarge: 'rounded-none h-16 w-16',
      roundedSmall: 'rounded-xl h-8 w-8',
      roundedLarge: 'rounded-xl h-16 w-16',
      circledSmall: 'rounded-full h-8 w-8',
      circledMedium: 'rounded-full h-12 w-12',
      circledLarge: 'rounded-full h-16 w-16',
    },
  },
});

export default function Icon({
  icon,
  className,
  border,
}: ComponentProps<'img'> & {
  icon: ReactElement<any, any>;
  border:
    | 'squaredSmall'
    | 'squaredLarge'
    | 'roundedSmall'
    | 'roundedLarge'
    | 'circledSmall'
    | 'circledMedium'
    | 'circledLarge';
  }): JSX.Element {
    return (
        <div
          className={twMerge(IconVariables({ border }), className)}
        >{icon}</div>
    )
}
