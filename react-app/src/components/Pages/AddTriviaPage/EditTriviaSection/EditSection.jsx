import { useState } from "react";
import { useSelector } from "react-redux";
import EditTriviaModal from "../../../Modals/EditTrivia/EditTriviaModal";
import DeleteTriviaModal from "../../../Modals/DeleteTrivia/DeleteTriviaModal";
import styles from "../../../Modals/App.module.css";
const EditSection = ({ sessionUser, triviaId }) => {
	// console.log(triviaId, "this is the id");
	const trivia = useSelector((state) => state.trivias[triviaId]);
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);

	// console.log(trivia, "this is the trivia");

	return (
		trivia &&
		sessionUser && (
			<div>
				<div>
					<p>Question:{trivia.question}</p>
					<p>Answer: {trivia.correctAnswer}</p>
				</div>
				<div className="edit-delete-trivia-btns">
					<div>
						<button
							className={styles.primaryBtn}
							onClick={() => setIsOpenEdit(true)}
						>
							Edit
						</button>
						<button
							onClick={() => setIsOpenDelete(true)}
							className={styles.primaryBtn}
						>
							Delete
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
