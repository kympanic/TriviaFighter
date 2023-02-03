import styles from "./HomeDescriptionModal.module.css";
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
				<div className={styles.homeDescriptionModal}>
					<div className={styles.homeDescriptionModalHeader}>
						<h5 className={styles.heading}></h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.homeDescriptionModalContent}>
						WOULD YOU LIKE TO PLAY THIS GAME?
					</div>
					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.submitBtn}
								onClick={handleSubmit}
							>
								PLAY
							</button>
							<button
								className={styles.cancelBtn}
								onClick={() => setIsOpen(false)}
							>
								CANCEL
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomepageGameOptionModal;
