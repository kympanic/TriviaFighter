import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTriviaThunk } from "../../../store/trivia";
const EditTriviaModal = ({ setIsOpen, trivia, sessionUser }) => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const [question, setQuestion] = useState(trivia.question);
	const [correctAnswer, setCorrectAnswer] = useState(trivia.correctAnswer);
	const [incorrectAnswer1, setIncorrectAnswer1] = useState(
		trivia.incorrectAnswer1
	);
	const [incorrectAnswer2, setIncorrectAnswer2] = useState(
		trivia.incorrectAnswer2
	);
	const [incorrectAnswer3, setIncorrectAnswer3] = useState(
		trivia.incorrectAnswer3
	);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const editedTrivia = {
			id: trivia.id,
			user_id: sessionUser.id,
			trivia_package_id: trivia.triviaPackageId,
			question,
			correct_answer: correctAnswer,
			incorrect_answer1: incorrectAnswer1,
			incorrect_answer2: incorrectAnswer2,
			incorrect_answer3: incorrectAnswer3,
		};
		const data = await dispatch(editTriviaThunk(editedTrivia));

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
							Edit Your Trivia Question!
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
							className={styles.editTriviaForm}
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
								<label>Question: </label>
								<input
									type="text"
									name="question"
									onChange={(e) =>
										setQuestion(e.target.value)
									}
									maxLength={200}
									value={question}
								/>
							</div>
							<div className={styles.inputGroup}>
								<label>Correct Answer: </label>
								<input
									type="text"
									name="correctAnswer"
									onChange={(e) =>
										setCorrectAnswer(e.target.value)
									}
									maxLength={100}
									value={correctAnswer}
								/>
							</div>
							<div className={styles.inputGroup}>
								<label>Incorrect Answer 1</label>
								<input
									type="text"
									name="incorrectAnswer1"
									value={incorrectAnswer1}
									onChange={(e) =>
										setIncorrectAnswer1(e.target.value)
									}
								/>
							</div>
							<div className={styles.inputGroup}>
								<label>Incorrect Answer 2</label>
								<input
									type="text"
									name="incorrectAnswer2"
									value={incorrectAnswer2}
									onChange={(e) =>
										setIncorrectAnswer2(e.target.value)
									}
								/>
							</div>
							<div className={styles.inputGroup}>
								<label>Incorrect Answer 3</label>
								<input
									type="text"
									name="incorrectAnswer3"
									value={incorrectAnswer3}
									onChange={(e) =>
										setIncorrectAnswer3(e.target.value)
									}
								/>
							</div>
							<div className={styles.modalActions}>
								<div className={styles.actionsContainer}>
									<button
										type="submit"
										className={styles.submitBtn}
									>
										EDIT
									</button>
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

export default EditTriviaModal;
