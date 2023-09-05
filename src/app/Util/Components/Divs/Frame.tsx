import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const tailwindvariants = tv({
  base: 'w-[95%] my-4 mx-auto rounded-md h-96 min-h-24 flex flex-col flex-nowrap items-center justify-start',
  variants: {
    color: {
      primary: `bg-DarkLighten`,
      secondary: 'bg-DarkDarken',
      alternativePrimary: `bg-DarkLightest`,
      alternativeSecondary: `bg-DarkDarkest`,
    },
    type: {
      main: 'h-72',
      alternative: 'min-h-24 h-fit',
      top: 'h-16 mt-0 w-screen rounded-none flex-row justify-center px-2 py-2',
      bottom: '',
    },
  },
});

export default function Frame({
  children,
  className,
  color,
  type,
}: ComponentProps<'div'> & {
  color:
    | 'primary'
    | 'secondary'
    | 'alternativePrimary'
    | 'alternativeSecondary';
  type: 'main' | 'alternative' | 'top' | 'bottom';
}) {
  return (
    <div className={twMerge(tailwindvariants({ color, type }), className)}>
      {children}
    </div>
  );
}
