import './Select.scss';

const Select = ({ updateStages, stageRef, stages }) => {
	return (
		<select onChange={updateStages} ref={stageRef} className="select">
			{stages.map(item => (
				<option key={item.value} value={item.value}>
					{item.label}
				</option>
			))}
		</select>
	);
};

export default Select;
