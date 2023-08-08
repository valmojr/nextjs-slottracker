'use client';
import { ButtonProps } from './PrimaryButton';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';
import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons';

export default function DiscordButton({
  success,
  className,
  children,
}: ButtonProps) {
  const [child, setChild] = useState<ReactNode>(children);

  useEffect(() => {
    switch (success) {
      case undefined:
        setChild(children);
        break;
      case true:
        setChild(<CheckCircledIcon className="w-8 h-8" />);
        break;
      case false:
        setChild(<CrossCircledIcon className="w-8 h-8" />);
        break;
      default:
        setChild(children);
        break;
    }
  }, [success, children]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      data-success={success}
      className={twMerge(
        'flex flex-row flex-nowrap rounded-xl bg-Blurple w-fit px-5 h-14 items-center justify-center data-[success=true]:bg-Green data-[success=false]:bg-Red',
        className,
      )}
    >
      {child}
    </motion.button>
  );
}
