import "./bar.css";

const Bar = ({ label, value, maxValue }) => {
	console.log(value, "this is the value");
	console.log(maxValue, "this is the max value");
	return (
		<div className="main">
			<div className="label">{label}</div>
			<div className="max">
				<div
					className="value"
					style={{ width: `${(value / maxValue) * 100}%` }}
				></div>
			</div>
		</div>
	);
};

export default Bar;
