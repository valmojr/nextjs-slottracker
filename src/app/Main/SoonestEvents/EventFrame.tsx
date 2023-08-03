import { Event } from '@/app/Util/types';

export default function EventFrame({ event }: { event: Event }) {
	return (
		<div className="w-full h-16 bg-gray-500">
			<h1>{event.title}</h1>
			<h3>{event.description}</h3>
		</div>
	);
}
