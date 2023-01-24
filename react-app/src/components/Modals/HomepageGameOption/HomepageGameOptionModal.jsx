import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const HomepageGameOptionModal = ({ setIsOpen, category, difficulty }) => {
	const history = useHistory();

	console.log(category, difficulty);

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push({
			pathname: "/gameoptions",
			state: { category, difficulty },
		});
		setIsOpen(false);
	};

	//renders once and not again unless component changes
	// useEffect(() => {
	// 	getTriviaDataFetch();
	// }, []);
	// getting the trivia data. Must do this dynamically. Do i want to save this or just use the data to load a game?

	// const [triviaData, setTriviaData] = useState({});

	// const getTriviaDataFetch = async () => {
	// 	const response = await fetch(
	// 		`https://opentdb.com/api.php?amount=20&category=${category}&difficulty=hard&type=multiple`
	// 	);
	// 	const jsonData = await response.json();
	// 	setTriviaData(jsonData);
	// };

	// console.log(triviaData.results, "THIS IS THE TRIVIA DATA");

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>Delete Confirmation</h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.modalContent}>
						Would you like to play this game?
					</div>
					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.submitBtn}
								onClick={handleSubmit}
							>
								Yes
							</button>
							<button
								className={styles.cancelBtn}
								onClick={() => setIsOpen(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomepageGameOptionModal;
