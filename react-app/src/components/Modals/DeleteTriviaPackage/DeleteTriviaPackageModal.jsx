import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTriviaPackageThunk } from "../../../store/triviapackage";

const DeleteTriviaPackageModal = ({ setIsOpen, triviapackage }) => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsOpen(false);
		dispatch(deleteTriviaPackageThunk(triviapackage));
	};

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>
							DELETE PACKAGE CONFIRMATION
						</h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.modalContent}>
						<p className={styles.triviaText}>
							{triviapackage.name}
						</p>
					</div>
					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.submitBtn}
								onClick={handleSubmit}
							>
								DELETE
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

export default DeleteTriviaPackageModal;
