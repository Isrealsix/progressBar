import { useContext, useEffect } from 'react';
import Buttons from './Buttons';
import { StatusContext } from './context';
import './Status.scss';

const Status = () => {
	// const [status] = useState(['Design', 'Build', 'Lunch']);

	const statusContext = useContext(StatusContext);
	const progressCurrentStage = statusContext.stage;
	const totalStage = 5;
	const stage = statusContext.stage;
	const previousStage = statusContext.previousStage;
	const width = `${((progressCurrentStage - 1) / (totalStage - 1)) * 100}%`;
	// console.log(progressCurrentStage, totalStage);

	useEffect(() => {
		statusContext.setTotalStage(5);
	}, [statusContext]);

	return (
		<div>
			<div className="status__container">
				<div className="status" style={{ width: `${width}` }}></div>
				<div className="circle active">1</div>
				<div
					className={`circle ${
						stage >= previousStage && stage >= 2 ? 'active' : ''
					}`}
				>
					2
				</div>
				<div
					className={`circle ${
						stage >= previousStage && stage >= 3 ? 'active' : ''
					}`}
				>
					3
				</div>

				<div
					className={`circle ${
						stage >= previousStage && stage >= 4 ? 'active' : ''
					}`}
				>
					4
				</div>

				<div
					className={`circle ${
						stage >= previousStage && stage >= 5 ? 'active' : ''
					}`}
				>
					5
				</div>
			</div>

			<Buttons />
		</div>
	);
};

export default Status;
