import { useState } from "react";
import { useSelector } from "react-redux";
import EditTriviaModal from "../../../Modals/EditTrivia/EditTriviaModal";
import DeleteTriviaModal from "../../../Modals/DeleteTrivia/DeleteTriviaModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./editsection.css";

//Component displays all the trivia questions from the selected trivia package
//User has option to edit and delete trivia, which brings up a edit/delete modal

const EditSection = ({ sessionUser, triviaId }) => {
	const trivia = useSelector((state) => state.trivias[triviaId]);
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		trivia &&
		sessionUser && (
			<div className="question-answer-container">
				<p>{trivia.question}</p>
				<p>Answer: {trivia.correctAnswer}</p>
				{!isOpenMenu && (
					<FontAwesomeIcon
						className="trivia-edit-menu"
						icon={faEllipsisH}
						onClick={() => setIsOpenMenu(true)}
					/>
				)}
				{isOpenMenu && (
					<div className="edit-btns-container">
						<h4
							id="editlink-edit"
							className="edit-question-links"
							onClick={() => setIsOpenEdit(true)}
						>
							EDIT
						</h4>
						<h4
							id="editlink-delete"
							className="edit-question-links"
							onClick={() => setIsOpenDelete(true)}
						>
							DELETE
						</h4>
						{isOpenEdit && (
							<EditTriviaModal
								setIsOpen={setIsOpenEdit}
								trivia={trivia}
								sessionUser={sessionUser}
							/>
						)}
						<h4
							id="editlink-close"
							className="edit-question-links"
							onClick={() => setIsOpenMenu(false)}
						>
							CLOSE
						</h4>
						{isOpenDelete && (
							<DeleteTriviaModal
								setIsOpen={setIsOpenDelete}
								trivia={trivia}
							/>
						)}
					</div>
				)}
			</div>
		)
	);
};

export default EditSection;
