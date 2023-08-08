'use client';
import BottomButton from './BottomButton';
import {
  CheckCircledIcon,
  ListBulletIcon,
  PlusCircledIcon,
  PersonIcon,
  ExitIcon,
} from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BottonMenuFrame(props: any) {
  return (
    <motion.div
      whileHover={{ backgroundColor: '#26282b' }}
      className="fixed bottom-0 left-0 w-screen h-16 flex flex-row items-center justify-center gap-3 bg-DarkDarken shadow-black shadow-lg"
    >
      <h1></h1>
      <BottomButton icon={<CheckCircledIcon />} />
      <BottomButton icon={<ListBulletIcon />} />
      <BottomButton icon={<PlusCircledIcon />} backgroundColor="#57F287" />
      <BottomButton icon={<PersonIcon />} />
      <Link href="/Login">
        <BottomButton icon={<ExitIcon />} backgroundColor="#ED4245" />
      </Link>
    </motion.div>
  );
}
