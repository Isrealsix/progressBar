import Buttons from './Buttons';
import './Status.scss';

const Status = () => {
	return (
		<div>
			<div className="status__container">
				<div className="status"></div>
				<div class="circle active">1</div>
				<div class="circle">2</div>
				<div class="circle">3</div>
			</div>

			<Buttons />
		</div>
	);
};

export default Status;
