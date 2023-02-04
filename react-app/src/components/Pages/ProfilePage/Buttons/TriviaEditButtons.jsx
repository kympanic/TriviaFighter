import { useState } from "react";
import { useHistory } from "react-router-dom";
import DeleteTriviaPackageModal from "../../../Modals/DeleteTriviaPackage/DeleteTriviaPackageModal";
import EditTriviaPackageModal from "../../../Modals/EditTriviaPackage/EditTriviaPackageModal";

const TriviaEditButtons = ({ sessionUser, triviapackage }) => {
	const history = useHistory();

	const [isOpenDeleteTriviaPackage, setIsOpenDeleteTriviaPackage] =
		useState(false);
	const [isOpenEditTriviaPackage, setIsOpenEditTriviaPackage] =
		useState(false);

	return (
		<div className="trivia-editbtns-container">
			<button
				className="trivia-add-btn"
				onClick={() =>
					history.push({
						pathname: `/triviapackage/${triviapackage.id}`,
						state: { triviapackage, sessionUser },
					})
				}
			>
				TRIVIA
			</button>
			<button
				className="trivia-edit-btn"
				onClick={() => setIsOpenEditTriviaPackage(true)}
			>
				EDIT
			</button>
			<button
				className="trivia-delete-btn"
				onClick={() => setIsOpenDeleteTriviaPackage(true)}
			>
				DELETE
			</button>
			{isOpenDeleteTriviaPackage && (
				<DeleteTriviaPackageModal
					setIsOpen={setIsOpenDeleteTriviaPackage}
					triviapackage={triviapackage}
				/>
			)}
			{isOpenEditTriviaPackage && (
				<EditTriviaPackageModal
					setIsOpen={setIsOpenEditTriviaPackage}
					triviapackage={triviapackage}
					sessionUser={sessionUser}
				/>
			)}
		</div>
	);
};

export default TriviaEditButtons;
