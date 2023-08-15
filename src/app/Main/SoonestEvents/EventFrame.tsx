import { Event } from '@/app/Util/types';
import { motion } from 'framer-motion';
import { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';
import 'react-slideshow-image/dist/styles.css';

export default function EventFrame({
  event,
  className,
}: ComponentPropsWithRef<'div'> & { event: Event }) {
  !!event.thumbnail
    ? (event.thumbnail = `bg-[url(${event.thumbnail})]`)
    : (event.thumbnail = `bg-grey-800`);

  return (
    <motion.div initial={{}} whileHover={{}} className={`each-slide-effect`}>
      <div
        className={twMerge(
          `flex justify-center bg-cover w-full h-40  ${event.thumbnail}`,
          className,
        )}
      >
        <span>{event.title}</span>
      </div>
    </motion.div>
  );
}
