import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTriviaCardThunk } from "../../../store/triviacard";

const EditTriviaCardModal = ({ setIsOpen, triviacard, sessionUser }) => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const [cardName, setCardName] = useState(triviacard.name);
	const [category, setCategory] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [description, setDescription] = useState(triviacard.description);
	const [imageUrl, setImageUrl] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const editTriviaCard = {
			id: triviacard.id,
			user_id: sessionUser.id,
			name: cardName,
			difficulty,
			category,
			description,
			image_url: imageUrl,
		};
		const data = await dispatch(editTriviaCardThunk(editTriviaCard));

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
						<h5 className={styles.heading}>
							Edit Your Trivia Package!
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
								<label>Name: </label>
								<input
									type="text"
									name="cardName"
									placeholder="Package Name"
									onChange={(e) =>
										setCardName(e.target.value)
									}
									maxLength={30}
									value={cardName}
								/>
							</div>
							<div>
								<label>Category: </label>
								<select
									onChange={(e) =>
										setCategory(e.target.value)
									}
									name="category"
								>
									<option value="--">--</option>
									<option value="General Knowledge">
										General Knowledge
									</option>
									<option value="Entertainment: Television">
										Television
									</option>
									<option value="Entertainment: Video Games">
										Video Games
									</option>
									<option value="Sports">Sports</option>
									<option value="History">History</option>
									<option value="Celebrities">
										Celebrities
									</option>
									<option value="Animals">Animals</option>
								</select>
							</div>
							<div>
								<label>Difficulty: </label>
								<select
									onChange={(e) =>
										setDifficulty(e.target.value)
									}
									name="difficulty"
								>
									<option value="--">--</option>
									<option value="easy">EASY</option>
									<option value="medium">MEDIUM</option>
									<option value="hard">HARD</option>
								</select>
							</div>
							<div>
								<label>Description: </label>
								<textarea
									name="description"
									rows="4"
									cols="50"
									onChange={(e) =>
										setDescription(e.target.value)
									}
									value={description}
								></textarea>
							</div>
							<div>
								<label>Card Image Url: </label>
								<input
									type="url"
									name="imageUrl"
									onChange={(e) =>
										setImageUrl(e.target.value)
									}
									placeholder="https://example.com"
								></input>
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

export default EditTriviaCardModal;
