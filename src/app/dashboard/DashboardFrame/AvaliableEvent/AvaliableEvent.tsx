import { Event } from '@/app/Util/types/entity';
import Frame from '@/app/Util/Components/Divs/Frame';

export default async function AvaliableEvents() {
  const avaliableEvents: Event[] = [];

  return (
    <Frame type={'alternative'} color="secondary">
      <p>AvaliableEvents</p>
    </Frame>
  );
}
