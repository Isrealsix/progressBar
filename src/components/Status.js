import { useState, useContext } from 'react';
import Buttons from './Buttons';
import { StatusContext } from './context';
import './Status.scss';

const Status = () => {
	const [status] = useState(['Design', 'Build', 'Lunch']);
	const statusContext = useContext(StatusContext);
	const circleState = statusContext.activeStates();
	return (
		<div>
			{console.log(circleState)}
			<div className="status__container">
				<div
					className="status"
					style={{ width: `${statusContext.progressWidth}%` }}
				></div>
				<div className="circle active">1</div>
				<div
					className={`circle ${
						circleState === 'deploy' || circleState === 'lunch' ? 'active' : ''
					}`}
				>
					2
				</div>
				<div className={`circle ${circleState === 'lunch' ? 'active' : ''}`}>
					3
				</div>
			</div>

			<Buttons status={status} />
		</div>
	);
};

export default Status;
