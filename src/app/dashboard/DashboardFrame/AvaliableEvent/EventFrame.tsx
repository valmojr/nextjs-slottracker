import { Event } from '@/app/Util/types/entity';

export default function EventFrame({ event }: { event: Event }) {
  return (
    <div>
      <h1>{event.title}</h1>
      <h1>{event.description}</h1>
    </div>
  );
}
