import { Event } from '@/app/Util/types';
import { motion } from 'framer-motion';

export default function EventFrame({ event }: { event: Event }) {
  return (
    <motion.div className="w-full h-16 bg-gray-500">
      <h1>{event.title}</h1>
      <h3>{event.description}</h3>
    </motion.div>
  );
}
