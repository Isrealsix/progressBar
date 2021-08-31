import React, { useState, useEffect } from 'react';

export const StatusContext = React.createContext({
	progressWidth: 0,
	widthHandler: type => {},
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

	return (
		<StatusContext.Provider
			value={{
				progressWidth: progressWidth,
				widthHandler,
			}}
		>
			{props.children}
		</StatusContext.Provider>
	);
};

export default StatusContext;
