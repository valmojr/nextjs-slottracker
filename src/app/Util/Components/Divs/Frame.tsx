import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { Blurple, Fuchsia, Green, Red } from '../../JSONs/colors';

const frameoptions = tv({
  base: 'h-24 w-screen flex flex-col flex-nowrap align-center items-center',
  variants: {
    color: {
      none: '',
      primary: `bg-[${Blurple}]`,
      secondary: `bg-[${Fuchsia}]`,
      danger: `bg-[${Red}]`,
      success: `bg-[${Green}]`,
    },
    size: {
      container: '',
      bar: '',
    },
  },
  defaultVariants: {
    color: 'none',
    size: 'container',
  },
});

export default function Frame({
  children,
  className,
  backgroundColor,
  height,
}: ComponentProps<'div'> & { backgroundColor?: string; height?: string }) {
  backgroundColor ? backgroundColor : 'red';
  height ? height : '300px';

  return (
    <motion.div
      initial={{
        opacity: 0,
        height: 0,
        backgroundColor: 'transparent',
      }}
      animate={{
        opacity: 1,
        height,
        backgroundColor,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className={twMerge(frameoptions(), className)}
    >
      {children}
    </motion.div>
  );
}
