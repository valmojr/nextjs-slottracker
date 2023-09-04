import { Guild } from '@/app/Util/types/entity';
import { ComponentProps } from 'react';

export default async function AssignedEvents() {
  const guilds = await Promise.all([setTimeout(() => null, 5000)]);
  const events = await Promise.all([setTimeout(() => null, 5000)]);

  return (
    <div>
      <p>AssignedEvents</p>
    </div>
  );
}
