import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { createTriviaCardThunk } from "../../../store/triviacard";
import { useDispatch } from "react-redux";

const AddTriviaCardModal = ({ setIsOpen, sessionUser }) => {
	console.log(sessionUser);
	const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const [triviaCardName, setTriviaCardName] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const updateTriviaCardName = (e) => {
		setTriviaCardName(e.target.value);
	};

	const updateCategory = (e) => {
		setCategory(e.target.value);
	};

	const updateDescription = (e) => {
		setDescription(e.target.value);
	};

	const updateDifficulty = (e) => {
		setDifficulty(e.target.value);
	};
	const updateImageUrl = (e) => {
		setImageUrl(e.target.value);
	};

	useEffect(() => {});
	const handleSubmit = async (e) => {
		e.preventDefault();

		const newTriviaCard = {
			user_id: sessionUser.id,
			name: triviaCardName,
			category,
			difficulty,
			description,
			image_url: imageUrl,
		};

		const data = await dispatch(createTriviaCardThunk(newTriviaCard));

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
							Create your Trivia Card!
						</h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.modalContent}>
						<form>
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
									name="name"
									onChange={updateTriviaCardName}
									value={triviaCardName}
									maxLength={30}
								/>
							</div>
							<div>
								<label>Category: </label>
								<select
									value={category}
									onChange={updateCategory}
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
									value={difficulty}
									onChange={updateDifficulty}
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
									onChange={updateDescription}
									value={description}
								></textarea>
							</div>
							<div>
								<label>Card Image Url: </label>
								<input
									type="url"
									name="imageUrl"
									onChange={updateImageUrl}
									value={imageUrl}
									placeholder="https://example.com"
								></input>
							</div>
						</form>
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

export default AddTriviaCardModal;
