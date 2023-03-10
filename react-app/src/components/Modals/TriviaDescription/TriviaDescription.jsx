import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const TriviaDescription = ({ setIsOpen, triviapackage }) => {
	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h1 className={styles.heading}>{triviapackage.name}</h1>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.modalContent}>
						<div>
							<h3 className={styles.descriptionText}>
								{triviapackage.description}
							</h3>
							<h3 className={styles.descriptionText}>
								Rating: {triviapackage.avgRating}
							</h3>
							<h3 className={styles.descriptionLink}>
								Created By: {triviapackage.user.username}
							</h3>
						</div>
					</div>
					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.cancelBtn}
								onClick={() => setIsOpen(false)}
							>
								CLOSE
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TriviaDescription;
