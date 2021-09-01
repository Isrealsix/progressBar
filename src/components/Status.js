import { useState, useContext, useEffect, useRef } from 'react';
import Buttons from './Buttons';
import { StatusContext } from './context';
import './Status.scss';

const Status = () => {
	const stageRef = useRef();
	const statusContext = useContext(StatusContext);
	const progressCurrentStage = statusContext.stage;
	const setProgressCurrentStage = statusContext.setStage;
	const stage = statusContext.stage;
	const [totalStage, setTotalStage] = useState(2);
	const [stages] = useState([
		{
			label: '2',
			value: '2',
		},
		{ label: '3', value: '3' },
		{ label: '4', value: '4' },
		{ label: '5', value: '5' },
	]);

	const [selectedStages, setSelectedStages] = useState([
		{
			label: '2',
			value: '2',
		},
	]);

	useEffect(() => {
		statusContext.setTotalStage(totalStage);
		if (stage > totalStage) {
			setProgressCurrentStage(totalStage);
		}
	}, [statusContext, totalStage, stage, setProgressCurrentStage]);

	const width = `${((progressCurrentStage - 1) / (totalStage - 1)) * 100}%`;

	const updateStages = ev => {
		ev.preventDefault();
		const value = +ev.target.value;
		const refValue = +stageRef.current.value;
		console.log(value, refValue);
		if (stage > value) {
			setProgressCurrentStage(totalStage);
		}
		setTotalStage(refValue);

		setSelectedStages(add(value));
	};

	const add = value => {
		const allStage = [];
		if (value === 2) allStage.push({ label: value, value: value });

		for (let i = 2; i <= value; i++) {
			if (value === 2) break;
			allStage.push({ label: i, value: i });
		}

		return allStage;
	};

	return (
		<div>
			<div className="status__container">
				<div className="status" style={{ width: `${width}` }}></div>

				<div className="circle active">1</div>

				{selectedStages.map(({ value }, idx, arr) => {
					return (
						<div
							key={idx}
							className={`circle ${
								idx >= progressCurrentStage - 1 ? '' : 'active'
							}`}
						>
							{value}
						</div>
					);
				})}
			</div>

			<Buttons />

			<select onChange={updateStages} ref={stageRef}>
				{stages.map(item => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Status;
