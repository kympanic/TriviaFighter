import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTriviasThunk } from "../../../../store/trivia";
import EditSection from "./EditSection";

const EditContainer = ({ sessionUser, triviapackage }) => {
	const dispatch = useDispatch();
	const allTrivia = useSelector((state) => Object.values(state.trivias));

	const selectedTrivia = allTrivia?.filter((trivia) => {
		return triviapackage?.id === trivia?.triviaPackageId;
	});

	useEffect(() => {
		dispatch(getAllTriviasThunk());
	}, [dispatch]);

	console.log(selectedTrivia, "THIS IS THE TRIVIA BEING MAPPED");
	return (
		<div>
			{selectedTrivia && selectedTrivia.length > 0 ? (
				<div>
					{selectedTrivia.map((trivia) => (
						<div key={trivia.id}>
							<EditSection
								triviaId={trivia.id}
								sessionUser={sessionUser}
							/>
						</div>
					))}
				</div>
			) : (
				<div>
					<h1>No trivia questions yet!</h1>
				</div>
			)}
		</div>
	);
};

{
	/* <div key={trivia.id}>
							<div>
								<p>Question: {trivia.question}</p>
								<p>Answer: {trivia.correctAnswer}</p>
							</div>
							<div>
								<button onClick={() => setIsOpenEdit(true)}>
									Edit
								</button>
								<button>Delete</button>
							</div>
							{isOpenEdit && (
								<EditTriviaModal
									setIsOpen={setIsOpenEdit}
									trivia={trivia}
									sessionUser={sessionUser}
								/>
							)}
						</div> */
}
export default EditContainer;
