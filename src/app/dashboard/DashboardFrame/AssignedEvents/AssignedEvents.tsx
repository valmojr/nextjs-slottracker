import Frame from '@/app/Util/Components/Divs/Frame';
import { Event } from '@/app/Util/types/entity';

export default async function AssignedEvents() {
  const assignedEvents: Event[] = [];
  return (
    <Frame color="primary" type="main">
      <p>AssignedEvents</p>
    </Frame>
  );
}
