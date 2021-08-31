import React, { useState, useEffect } from 'react';

export const StatusContext = React.createContext({
	progressWidth: 0,
	widthHandler: type => {},
	activeStates: () => {},
});

export const StatusContextProvider = props => {
	const [progressWidth, setProgressWidth] = useState(0);

	useEffect(() => {}, []);

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
			}}
		>
			{props.children}
		</StatusContext.Provider>
	);
};

export default StatusContext;
