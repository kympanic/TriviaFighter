import { useState } from "react";
import { useSelector } from "react-redux";
import EditTriviaModal from "../../../Modals/EditTrivia/EditTriviaModal";
import DeleteTriviaModal from "../../../Modals/DeleteTrivia/DeleteTriviaModal";
import styles from "../../../Modals/App.module.css";
import "./editsection.css";
const EditSection = ({ sessionUser, triviaId }) => {
	const trivia = useSelector((state) => state.trivias[triviaId]);
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);

	return (
		trivia &&
		sessionUser && (
			<div className="triviaquestion-container">
				<div className="question-answer-container">
					<p>{trivia.question}</p>
					<p>Answer: {trivia.correctAnswer}</p>
				</div>
				<div className="edit-delete-trivia-btns">
					<div className="question-btns-container">
						<button
							className={styles.editBtn}
							onClick={() => setIsOpenEdit(true)}
						>
							EDIT
						</button>
						<button
							onClick={() => setIsOpenDelete(true)}
							className={styles.deleteBtn}
						>
							DELETE
						</button>
						{isOpenEdit && (
							<EditTriviaModal
								setIsOpen={setIsOpenEdit}
								trivia={trivia}
								sessionUser={sessionUser}
							/>
						)}
						{isOpenDelete && (
							<DeleteTriviaModal
								setIsOpen={setIsOpenDelete}
								trivia={trivia}
							/>
						)}
					</div>
				</div>
			</div>
		)
	);
};

export default EditSection;
