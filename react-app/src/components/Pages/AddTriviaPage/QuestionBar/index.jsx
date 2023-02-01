import styles from "./styles.module.css";

const QuestionBar = ({ selectedTrivia }) => {
	return (
		<div className={styles.main}>
			<div className={styles.label}>Completion%</div>
			<div className={styles.max}>
				<div
					className={styles.value}
					style={{
						width: `${(selectedTrivia.length / 14) * 100}%`,
					}}
				></div>
			</div>
		</div>
	);
};

export default QuestionBar;
