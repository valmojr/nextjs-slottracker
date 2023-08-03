import AvaliableEventsFrame from './AvaliableEvents/AvaliableEventsFrame';
import BottonMenuFrame from './Bottom Menu/BottomMenuFrame';
import SoonestEventFrame from './SoonestEvents/SoonestEventFrame';

export default function MainPage() {
	return (
		<div>
			<SoonestEventFrame />
			<AvaliableEventsFrame />
			<BottonMenuFrame />
		</div>
	);
}
