import { LoggedUserProvider } from './Context/Context';
import MainPage from './Main/page';

const Home = () => (
	<LoggedUserProvider value={null}>
		<MainPage />
	</LoggedUserProvider>
);

export default Home;
