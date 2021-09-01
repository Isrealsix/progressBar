import React, { useState, useEffect } from 'react';

export const StatusContext = React.createContext({
	progressWidth: 0,
	widthHandler: type => {},
	activeStates: () => {},
	stage: 1,
	previousStage: 0,
	setPreviousStage: prevState => {},
	totalStage: 0,
	setTotalStage: total => {},
	setStage: prevStage => {},
});

export const StatusContextProvider = props => {
	const [progressWidth, setProgressWidth] = useState(0);
	const [stage, setStage] = useState(1);
	const [totalStage, setTotalStage] = useState(0);
	const [previousStage, setPreviousStage] = useState(0);

	const widthHandler = type => {
		if (type === 'forward') {
			setProgressWidth(prevState => (prevState += 50));
		} else {
			setProgressWidth(prevState => (prevState -= 50));
		}
	};

	const activeStates = () => {
		let status = null;
		if (progressWidth === 0) {
			status = 'design';
		}

		if (progressWidth === 50) {
			status = 'deploy';
		}

		if (progressWidth === 100) {
			status = 'lunch';
		}

		return status;
	};

	return (
		<StatusContext.Provider
			value={{
				progressWidth,
				widthHandler,
				activeStates,
				stage,
				setStage,
				totalStage,
				setTotalStage,
				previousStage,
				setPreviousStage,
			}}
		>
			{props.children}
		</StatusContext.Provider>
	);
};

export default StatusContext;
