import { loggedUserExample } from '../Util/loremipsum';
import { Event } from '../Util/types';
import AvaliableEventsFrame from './AvaliableEvents/AvaliableEventsFrame';
import BottonMenuFrame from './Bottom Menu/BottomMenuFrame';
import SoonestEventFrame from './SoonestEvents/SoonestEventFrame';

export default function MainPage() {
  const userInfo = loggedUserExample;
  const userAssignedEvents: Event[] = [];
  const userCreatedEvents: Event[] = [];
  const avaliableEvents: Event[] = [];

  return (
    <div className="flex flex-col flex-nowrap gap-4 w-screen h-screen justify-start px-2 py-2 bg-DarkDarkest">
      <SoonestEventFrame assignedEvents={userAssignedEvents} />
      <AvaliableEventsFrame />
      <BottonMenuFrame user={userInfo} />
    </div>
  );
}
