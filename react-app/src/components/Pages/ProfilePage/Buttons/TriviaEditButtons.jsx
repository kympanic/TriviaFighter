import { useState } from "react";
import { useHistory } from "react-router-dom";
import EditTriviaPackageModal from "../../../Modals/EditTriviaPackage/EditTriviaPackageModal";
import { useDispatch } from "react-redux";
import { deleteTriviaPackageThunk } from "../../../../store/triviapackage";
const TriviaEditButtons = ({ sessionUser, triviapackage }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteTriviaPackageThunk(triviapackage));
	};
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
				Questions
			</button>
			{/* <button
				className="trivia-edit-btn"
				onClick={() => setIsOpenEditTriviaPackage(true)}
			>
				Info
			</button> */}
			<button className="trivia-delete-btn" onClick={handleDelete}>
				Delete
			</button>
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
