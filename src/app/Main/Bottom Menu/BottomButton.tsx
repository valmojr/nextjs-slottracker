'use client';
import { motion } from 'framer-motion';

export default function BottomButton({
  icon,
  backgroundColor,
}: {
  icon: JSX.Element;
  backgroundColor?: string;
}) {
  backgroundColor ??= '#5865F2';
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, backgroundColor }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-row justify-center items-center w-12 h-12 bg-DarkLightest rounded-full transition-opacity duration-300 hover:opacity-80 cursor-pointer"
    >
      {icon}
    </motion.div>
  );
}
