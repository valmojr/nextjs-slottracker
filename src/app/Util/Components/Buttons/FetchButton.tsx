import { motion } from 'framer-motion';
import { ButtonProps } from '../../types/props';
import { twMerge } from 'tailwind-merge';

export default function FetchButton({
  success = false,
  children,
  className,
}: ButtonProps) {
  return (
    <motion.button className={twMerge('', className)}>{children}</motion.button>
  );
}
