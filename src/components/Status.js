import { useState, useContext } from 'react';
import Buttons from './Buttons';
import { StatusContext } from './context';
import './Status.scss';

const Status = () => {
	const [status] = useState(['Design', 'Build', 'Lunch']);
	const statusContext = useContext(StatusContext);
	return (
		<div>
			<div className="status__container">
				<div
					className="status"
					style={{ width: `${statusContext.progressWidth}%` }}
				></div>
				<div className="circle active">1</div>
				<div className="circle">2</div>
				<div className="circle">3</div>
			</div>

			<Buttons status={status} />
		</div>
	);
};

export default Status;
