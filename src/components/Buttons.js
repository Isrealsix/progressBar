import { useState, useEffect, useContext } from 'react';
import { StatusContext } from './context';

import './Buttons.scss';

const Buttons = ({ status }) => {
	const [forward, setForward] = useState(false);
	const [backward, setBackward] = useState(true);
	const [currentState, setCurrentState] = useState(0);
	const statusContext = useContext(StatusContext);

	useEffect(() => {
		if (currentState === status.length - 1) {
			setForward(true);
			setBackward(false);
		}

		if (currentState === 1 || currentState === 0) {
			setBackward(true);
			setForward(false);
		}

		if (currentState > 0 && currentState !== status.length - 1) {
			setBackward(false);
			setForward(false);
		}
	}, [currentState, status.length]);

	const update = type => {
		if (type === 'forward') {
			setCurrentState(prevState => (prevState += 1));
			statusContext.widthHandler('forward');
		} else {
			setCurrentState(prevState => (prevState -= 1));
			statusContext.widthHandler('backward');
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
