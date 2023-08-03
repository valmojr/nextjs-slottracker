import AvaliableEventsFrame from './AvaliableEvents/AvaliableEventsFrame';
import BottonMenuFrame from './Bottom Menu/BottomMenuFrame';
import SoonestEventFrame from './SoonestEvents/SoonestEventFrame';

export default function MainPage() {
	return (
		<div>
			<h1 className='font-bold'>Dashboard</h1>
			<SoonestEventFrame />
			<AvaliableEventsFrame />
			<BottonMenuFrame />
		</div>
	);
}
