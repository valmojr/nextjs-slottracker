import { randomEventsExample } from '@/app/Util/loremipsum';
import { Event } from '@/app/Util/types';
import EventFrame from './EventFrame';

export default function SoonestEventFrame() {
	const assignedEventInOrderOfDate: Event[] = randomEventsExample;

	return (
		<div className="aspect-video bg-red-500">
			<h1 className="">Coming Soon</h1>
			{assignedEventInOrderOfDate.map((event, index) => (
				<EventFrame key={index} event={event} />
			))}
		</div>
	);
}
