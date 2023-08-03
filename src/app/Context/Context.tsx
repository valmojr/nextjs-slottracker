import { createContext } from 'react';
import { User } from '../Util/types';
import { loggedUserExample } from '../Util/loremipsum';

export const LoggedUserContext = createContext<User | null>(null);

export const LoggedUserProvider = LoggedUserContext.Provider({
	value: loggedUserExample,
});

export const LoggedUserConsumer = LoggedUserContext.Consumer;

export default LoggedUserContext;
