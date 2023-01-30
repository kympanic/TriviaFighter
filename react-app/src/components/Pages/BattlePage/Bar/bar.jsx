import styles from "./styles.module.css";

const Bar = ({ label, value, maxValue }) => {
	// console.log(value, "this is the value");
	// console.log(maxValue, "this is the max value");
	return (
		<div className={styles.main}>
			<div className={styles.label}>{label}</div>
			<div className={styles.max}>
				<div
					className={styles.value}
					style={{ width: `${(value / maxValue) * 100}%` }}
				></div>
			</div>
		</div>
	);
};

export default Bar;
