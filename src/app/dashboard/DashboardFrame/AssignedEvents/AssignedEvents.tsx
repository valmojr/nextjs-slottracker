import Frame from '@/app/Util/Components/Divs/Frame';
import { User } from '@/app/Util/types/entity';

export default async function AssignedEvents({profile}: {profile: User | undefined}) {
  const response = await fetch(`${process.env.BACKEND_API_URL}/event/user/${profile?.id}`);
  const assignedEvents: Event[] = await response.json();

  return (
    <Frame color="primary" type="main">
      <code>
        {JSON.stringify(assignedEvents)}
      </code>
    </Frame>
  );
}
