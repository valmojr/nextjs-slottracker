import { User } from '../Util/types';

export default function EventPage({ loggedUser }: { loggedUser: User }) {
	console.log(loggedUser);

	return (
		<div>
			<h1>Event Page</h1>
			<h2>{`Logged User: ${loggedUser.username}`}</h2>
		</div>
	);
}
