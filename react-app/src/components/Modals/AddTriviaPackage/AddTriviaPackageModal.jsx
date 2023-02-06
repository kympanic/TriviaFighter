import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { createTriviaPackageThunk } from "../../../store/triviapackage";
import { useDispatch } from "react-redux";

const AddTriviaPackageModal = ({ setIsOpen, sessionUser }) => {
	const dispatch = useDispatch();

	const [errors, setErrors] = useState([]);
	const [packageName, setPackageName] = useState("");
	const [category, setCategory] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newTriviaPackage = {
			user_id: sessionUser.id,
			name: packageName,
			difficulty: difficulty,
			category: category,
			description: description,
			image_url: image,
		};

		const data = await dispatch(createTriviaPackageThunk(newTriviaPackage));
		if (data) {
			setErrors(data);
		} else {
			setIsOpen(false);
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
						<form
							className={styles.addTriviaPackageForm}
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
								<label>Name: </label>
								<input
									type="text"
									name="packageName"
									onChange={(e) =>
										setPackageName(e.target.value)
									}
									maxLength={30}
								/>
							</div>
							<div className={styles.inputGroup}>
								<label>Description: </label>
								<input
									type="text"
									name="description"
									onChange={(e) =>
										setDescription(e.target.value)
									}
								></input>
							</div>
							<div className={styles.inputGroup}>
								<label>Package Image Url: </label>
								<input
									type="url"
									name="image"
									onChange={(e) => setImage(e.target.value)}
									placeholder="https://example.com"
								></input>
							</div>
							<div className={styles.inputGroup}>
								<label>CATEGORY: </label>
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
									<option value="Animals">Animals</option>
								</select>
							</div>
							<div className={styles.inputGroup}>
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
							<div className={styles.modalActions}>
								<div className={styles.actionsContainer}>
									<button
										type="submit"
										className={styles.submitBtn}
									>
										CREATE
									</button>
									{/* {imageLoading && <p>Loading...</p>} */}
									<button
										className={styles.cancelBtn}
										onClick={() => setIsOpen(false)}
									>
										CANCEL
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

export default AddTriviaPackageModal;
