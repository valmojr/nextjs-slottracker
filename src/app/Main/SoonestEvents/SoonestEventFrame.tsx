'use client';
import { Event } from '@/app/Util/types';
import EventFrame from './EventFrame';
import { motion } from 'framer-motion';

export default function SoonestEventFrame({
  assignedEvents,
}: {
  assignedEvents: Event[];
}) {
  return (
    <motion.div className="aspect-video rounded-xl bg-DarkDarken shadow-lg shadow-black flex flex-row justify-center items-center">
      {assignedEvents.map((event, index) => (
        <EventFrame key={index} event={event} />
      ))}
    </motion.div>
  );
}
