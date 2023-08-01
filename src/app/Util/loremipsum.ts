import { User, Event, Group, Role } from './types';

export const loggedUser: User = {
	id: '272187905240203266',
	username: 'valmo',
	avatar: 'd1a29185016efba4946c004108c9fc35',
};

export const randomUsers: User[] = [
	loggedUser,
	{
		id: '258018732364922880',
		username: 'ludwigdemba',
		avatar: '3e0fb64c959bbca98af32e677af1ee11',
	},
	{
		id: '735566217884205109',
		username: '_pardal.',
		avatar: '308e3c6fc9e85ca96a97c9eae5abf83f',
	},
];

export const randomEvents: Event[] = [
	{
		id: '1',
		title: 'Event 1',
		description: 'Description 1',
		starts_at: '2023-08-01T19:00:00.000Z',
		ends_at: '2023-08-01T22:00:00.000Z',
		created_at: '2021-01-01T00:00:00.000Z',
		updated_at: '2021-01-01T00:00:00.000Z',
		ownerId: '272187905240203266',
	},
	{
		id: '2',
		title: 'Event 2',
		description: 'Description 2',
		starts_at: '2023-09-01T19:00:00.000Z',
		ends_at: '2023-09-01T22:00:00.000Z',
		created_at: '2021-01-01T00:00:00.000Z',
		updated_at: '2021-01-01T00:00:00.000Z',
		ownerId: '272187905240203266',
	},
];
// create 2 groups that are related to the event 1, and 3 groups that are related to the event 2, they are all groups in a arma 3 operation as example
export const randomGroups: Group[] = [
	{
		id: '1',
		name: 'Group 1',
		eventId: '1',
	},
	{
		id: '2',
		name: 'Group 2',
		eventId: '1',
	},
	{
		id: '3',
		name: 'Group 1',
		eventId: '2',
	},
	{
		id: '4',
		name: 'Group 2',
		eventId: '2',
	},
	{
		id: '5',
		name: 'Group 3',
		eventId: '2',
	},
];
// now create the roles, remember that the roles are related to the groups, so the first 2 roles are related to the first group of the event 1, and the last 3 roles are related to the last 3 groups of the event 2, and its all related to a arma 3 operation as example
export const randomRoles: Role[] = [
	// transform the id to be uuid generated with 12 random characters
	// q: why cant you generated a hash with 12 caracters?

	{
		id: '1qwdqw',
		name: 'Group Leader',
		groupId: '1',
		userId: '',
	},
	{
		id: 'qdefrer2',
		name: 'Men',
		groupId: '1',
		userId: '',
	},
	{
		id: 'qwdfre3',
		name: 'Men',
		groupId: '1',
		userId: '',
	},
	{
		id: '4',
		name: 'Role 1',
		groupId: '3',
		userId: '272187905240203266',
	},
	{
		id: '5',
		name: 'Role 2',
		groupId: '4',
		userId: '272187905240203266',
	},
	{
		id: '6',
		name: 'Role 3',
		groupId: '5',
		userId: '',
	},
];
