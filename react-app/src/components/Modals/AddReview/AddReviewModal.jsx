import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk } from "../../../store/reviews";

const AddReviewModal = ({ setIsOpen, id }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const sessionUserId = useSelector((state) => state.session.user.id);

	// const [imageLoading, setImageLoading] = useState(false);
	const [errors, setErrors] = useState([]);
	const [body, setBody] = useState("");
	const [rating, setRating] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newReview = {
			user_id: sessionUserId,
			body,
			rating,
			trivia_package_id: id,
		};

		const data = await dispatch(createReviewThunk(newReview));
		if (data) {
			setErrors(data);
		} else {
			setIsOpen(false);
			history.push("/");
		}
	};

	// const updateImage = (e) => {
	// 	const file = e.target.files[0];
	// 	setImage(file);
	// 	console.log(image, "did this update");
	// };

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>
							Create your Trivia Package!
						</h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.modalContent}>
						<form onSubmit={handleSubmit}>
							<div className="errors-section">
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
							<div>
								<label>Comment: </label>
								<input
									type="text"
									name="body"
									onChange={(e) => setBody(e.target.value)}
									maxLength={200}
									value={body}
								/>
							</div>
							<div>
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
									{/* {imageLoading && <p>Loading...</p>} */}
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

export default AddReviewModal;
