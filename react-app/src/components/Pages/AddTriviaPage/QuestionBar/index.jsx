import styles from "./styles.module.css";

//Component that displays the completion percentage of trivia questions
//by setting a bar width to the (selectedTrivia.length/14 *100)
//Minimum to play is 14 questions
const QuestionBar = ({ selectedTrivia }) => {
	return (
		<div className={styles.main}>
			<div className={styles.label}>Completion</div>
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
