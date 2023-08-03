import { randomEventsExample } from '@/app/Util/loremipsum';
import { Event } from '@/app/Util/types';
import EventFrame from './EventFrame';

export default function SoonestEventFrame() {
	const assignedEventInOrderOfDate: Event[] = randomEventsExample;

	return (
		<div className="aspect-video bg-red-500">
			<h1 className="">Cooming Soon</h1>
			{assignedEventInOrderOfDate.map((event) => (
				<EventFrame key={0} event={event} />
			))}
		</div>
	);
}
