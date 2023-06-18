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
			<div
				onClick={() =>
					history.push({
						pathname: `/triviapackage/${triviapackage.id}`,
					})
				}
				className="triviaadd-bar"
			>
				<div className="progress-triviaadd">Delete</div>
			</div>
			<div
				onClick={() =>
					history.push({
						pathname: `/triviapackage/${triviapackage.id}/edit`,
						state: { triviapackage, sessionUser },
					})
				}
				className="edit-bar"
			>
				<div className="progress-edit">Edit</div>
			</div>
			<div onClick={handleDelete} className="delete-bar">
				<div className="progress-delete">Delete</div>
			</div>
		</div>
	);
};

export default TriviaEditButtons;
