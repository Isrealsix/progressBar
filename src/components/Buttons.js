import { useState, useEffect, useContext } from 'react';
import { StatusContext } from './context';

import './Buttons.scss';

const Buttons = ({ status }) => {
	const [forward, setForward] = useState(false);
	const [backward, setBackward] = useState(true);

	const statusContext = useContext(StatusContext);
	const totalStage = statusContext.totalStage;

	const currentState = statusContext.stage;
	useEffect(() => {
		console.log(totalStage, currentState, 'of buttons');

		if (currentState <= 1) {
			setForward(false);
			setBackward(true);
		}

		if (currentState < totalStage) {
			setForward(false);
		}

		if (currentState === totalStage) {
			setForward(true);
			setBackward(false);
		}
	}, [currentState, totalStage]);

	const update = type => {
		if (type === 'forward') {
			statusContext.widthHandler('forward');
			statusContext.setStage(prevStage => (prevStage += 1));
			statusContext.setPreviousStage(prevStage => (prevStage += 1));
		} else {
			statusContext.widthHandler('backward');
			statusContext.setStage(prevStage => (prevStage -= 1));
			statusContext.setPreviousStage(prevStage => (prevStage -= 1));
		}
	};

	return (
		<>
			<button
				className="btn"
				disabled={backward}
				onClick={update.bind(null, 'backward')}
			>
				Prev
			</button>
			<button
				className="btn"
				disabled={forward}
				onClick={update.bind(null, 'forward')}
			>
				Next
			</button>
		</>
	);
};

export default Buttons;
