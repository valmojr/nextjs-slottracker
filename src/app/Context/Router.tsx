import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventPage from '../pages/EventPage';
import MainPage from '../pages/MainPage';
import { LoggedUserProvider } from './Context';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';

const Router = () => (
	<BrowserRouter>
		<LoggedUserProvider value={null}>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/dashboard" component={MainPage} />
				<Route exact path="/event/:id" component={EventPage} />
				<Route exact path="*" component={ErrorPage} />
			</Switch>
		</LoggedUserProvider>
	</BrowserRouter>
);

export default Router;
