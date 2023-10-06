import { Event, User } from '@/app/Util/types/entity';
import Frame from '@/app/Util/Components/Divs/Frame';

export default async function AvaliableEvents({profile}: {profile: User | undefined}) {
  const response = await fetch(`${process.env.BACKEND_API_URL}/event/guildEvents/${profile?.id}`);
  const assignedEvents: Event[] = await response.json();
  if (!profile) {
    <p>Error fetching profile assigned events</p>
  } else {
  return (
    <Frame color="primary" type="alternative">
      <code>
        {JSON.stringify(assignedEvents)}
      </code>
    </Frame>
    );
  }
}
