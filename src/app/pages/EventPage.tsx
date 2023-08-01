import { useState } from 'react';
import { User } from '../Util/types';

const EventPage = ({ loggedUser }: { loggedUser: User }) => {
	const eventId = useState('id');

	console.log(loggedUser);

	return (
		<div>
			<h1>Event Page</h1>
		</div>
	);
};

export default EventPage;
