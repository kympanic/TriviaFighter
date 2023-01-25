import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

const HomepageGameOptionModal = ({ setIsOpen, category, difficulty }) => {
	const history = useHistory();

	// console.log(category, difficulty);

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push({
			pathname: "/gameoptions",
			state: { category, difficulty },
		});
		setIsOpen(false);
	};

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>
							Trivia Package Confirmation
						</h5>
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
