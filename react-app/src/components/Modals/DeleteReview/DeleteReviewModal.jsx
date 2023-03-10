import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../../store/reviews";

const DeleteReviewModal = ({ setIsOpen, review, setIsOpenMenu }) => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(deleteReviewThunk(review));
		setIsOpen(false);
		setIsOpenMenu(false);
	};

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>
							DELETE REVIEW CONFIRMATION
						</h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.modalContent}>
						<p className={styles.reviewText}>{review.body}</p>
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

export default DeleteReviewModal;
