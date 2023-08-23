'use client';
import { motion } from 'framer-motion';
import { ButtonProps } from './../../types/props';

export default function Button(props: ButtonProps) {
  return (
    <motion.button
      initial={{
        borderRadius: '10px',
      }}
      animate={{}}
      whileHover={{
        borderRadius: '15px',
      }}
      whileTap={{
        y: 8,
        boxShadow: 'none',
      }}
      className="bg-Blurple text-white px-8 py-4 rounded-xl shadow-md shadow-black select-none"
    >
      {props.children}
    </motion.button>
  );
}
