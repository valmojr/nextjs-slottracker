'use client';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
      duration: 4,
    },
  },
};

export function LoadingItem() {
  return (
    <motion.div
      className="item max-w-12 w-60 h-8 bg-DarkLightest mx-5 rounded-2xl"
      variants={item}
    />
  );
}

export default function LoadingFrame(props: ComponentProps<'button'>) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{
        repeat: Infinity,
        delay: 0.5,
        duration: 1,
      }}
      className="flex flex-col flex-nowrap items-center justify-between w-fit h-fit py-6 bg-DarkDarkest gap-8 rounded-xl"
    >
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </motion.div>
  );
}
