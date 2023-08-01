import { LoggedUserProvider } from './Context/Context';
import MainPage from './pages/MainPage';

const Home = () => (
	<LoggedUserProvider value={null}>
		<MainPage />
	</LoggedUserProvider>
);

export default Home;
