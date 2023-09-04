import { Event } from '@/app/Util/types/entity';
import { ComponentProps } from 'react';
import EventFrame from './EventFrame';

export default async function AvaliableEvents() {
  const guilds = await Promise.all([setTimeout(() => fetch(''), 10000)]);
  const events = await Promise.all([setTimeout(() => null, 5000)]);

  return (
    <div>
      <p>AvaliableEvents</p>
    </div>
  );
}
