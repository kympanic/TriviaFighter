import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editReviewThunk } from "../../../store/reviews";
const EditReviewModal = ({ setIsOpen, review, sessionUser }) => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const [body, setBody] = useState(review.body);
	const [rating, setRating] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const editedReview = {
			id: review.id,
			user_id: review.userId,
			trivia_package_id: review.triviaPackageId,
			body,
			rating,
		};
		const data = await dispatch(editReviewThunk(editedReview));

		if (data) {
			setErrors(data);
		} else {
			setIsOpen(false);
		}
	};

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>EDIT REVIEW</h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.modalContent}>
						<form
							className={styles.editReviewForm}
							onSubmit={handleSubmit}
						>
							<div className={styles.errors}>
								{errors.map((error, ind) => (
									<div className="error-body" key={ind}>
										<ul>
											<li className="error-item">
												{error}
											</li>
										</ul>
									</div>
								))}
							</div>
							<div className={styles.inputGroup}>
								<label>Comment: </label>
								<input
									type="text"
									name="body"
									onChange={(e) => setBody(e.target.value)}
									maxLength={200}
									value={body}
								/>
							</div>
							<div className={styles.inputGroup}>
								<label>Rating: </label>
								<select
									value={rating}
									onChange={(e) => setRating(e.target.value)}
								>
									<option value="--">--</option>
									<option value="1.0">1.0</option>
									<option value="1.5">1.5</option>
									<option value="2.0">2.0</option>
									<option value="2.5">2.5</option>
									<option value="3.0">3.0</option>
									<option value="3.5">3.5</option>
									<option value="4.0">4.0</option>
									<option value="4.5">4.5</option>
									<option value="5.0">5.0</option>
								</select>
							</div>
							<div className={styles.modalActions}>
								<div className={styles.actionsContainer}>
									<button
										type="submit"
										className={styles.submitBtn}
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
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditReviewModal;
