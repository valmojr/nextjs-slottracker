import { createContext } from 'react';
import { User } from '../Util/types';

export const LoggedUserContext = createContext<User | null>(null);

export const LoggedUserProvider = LoggedUserContext.Provider;

export const LoggedUserConsumer = LoggedUserContext.Consumer;

export default LoggedUserContext;
