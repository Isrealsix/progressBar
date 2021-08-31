import { useState } from 'react';

import './Buttons.scss';

const Buttons = () => {
	const [first, setFirst] = useState(true);
	const [last, setLast] = useState(false);

	return (
		<>
			<button class="btn" id="prev" disabled={first}>
				Prev
			</button>
			<button class="btn" id="next" disabled={last}>
				Next
			</button>
		</>
	);
};

export default Buttons;
