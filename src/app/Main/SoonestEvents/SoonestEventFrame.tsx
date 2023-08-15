'use client';
import { Event } from '@/app/Util/types';
import EventFrame from './EventFrame';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

export default function SoonestEventFrame({
  assignedEvents,
}: {
  assignedEvents: Event[];
}) {
  return (
    <div className="aspect-video rounded-xl bg-DarkDarken shadow-lg shadow-black flex flex-row justify-center items-center">
      <Slide>
        {assignedEvents.map((event, index) => (
          <EventFrame key={index} event={event} className="each-slide-effect" />
        ))}
      </Slide>
    </div>
  );
}
