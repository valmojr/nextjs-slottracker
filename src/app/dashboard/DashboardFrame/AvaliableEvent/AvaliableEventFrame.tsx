import { Event } from '@/app/Util/types/entity';
import { ComponentProps } from 'react';
import EventFrame from './EventFrame';

export default function AvaliableEventFrame({
  events,
}: ComponentProps<'div'> & { events: Event[] }) {
  return (
    <div>
      {events.map((event, index) => (
        <EventFrame key={index} event={event} />
      ))}
    </div>
  );
}
