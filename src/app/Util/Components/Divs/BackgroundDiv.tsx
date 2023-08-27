import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const div = tv({
  base: 'overflow-hidden flex flex-col flex-nowrap items-center align-center',
  variants: {
    size: {
      fullscreen: 'w-screen h-screen',
      max: 'w-max h-max',
      medium: 'h-48 w-48',
      small: 'w-12 h-12',
    },
  },
  compoundVariants: [
    {
      size: ['fullscreen', 'max'],
      class: '',
    },
  ],
  defaultVariants: {
    size: 'fullscreen',
  },
});

export default function BackgroundDiv({
  children,
  className,
  backgroundColor,
}: ComponentProps<'div'> & { backgroundColor?: string }) {
  if (!backgroundColor) {
    backgroundColor = '#000';
  }

  return (
    <motion.div
      initial={{
        backgroundColor: '#000',
      }}
      animate={{
        backgroundColor,
      }}
      transition={{
        duration: 1,
      }}
      className={twMerge(div({ size: 'fullscreen' }), className)}
    >
      {children}
    </motion.div>
  );
}
