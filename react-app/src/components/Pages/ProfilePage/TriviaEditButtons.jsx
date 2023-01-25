import { useState } from "react";
import { useHistory } from "react-router-dom";
import DeleteTriviaPackageModal from "../../Modals/DeleteTriviaPackage/DeleteTriviaPackageModal";
import EditTriviaPackageModal from "../../Modals/EditTriviaPackage/EditTriviaPackageModal";

const TriviaEditButtons = ({ sessionUser, triviapackage }) => {
	const history = useHistory();

	const [isOpenDeleteTriviaPackage, setIsOpenDeleteTriviaPackage] =
		useState(false);
	const [isOpenEditTriviaPackage, setIsOpenEditTriviaPackage] =
		useState(false);

	return (
		<div>
			<button
				onClick={() =>
					history.push({
						pathname: `/triviapackage/${triviapackage.id}`,
					})
				}
			>
				Add Trivia
			</button>
			<button onClick={() => setIsOpenEditTriviaPackage(true)}>
				Edit
			</button>
			<button onClick={() => setIsOpenDeleteTriviaPackage(true)}>
				Delete
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
