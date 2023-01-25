import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTriviasThunk } from "../../../../store/trivia";
import { getTriviaPackageThunk } from "../../../../store/triviapackage";
const EditTriviaForm = ({ sessionUser, triviapackage }) => {
	const dispatch = useDispatch();

	const selectedUser = useSelector((state) => state?.users[sessionUser?.id]);

	console.log(triviapackage, "this is the trivia package");

	const selectedTrivias = selectedUser?.trivias.filter((trivia) => {
		return trivia?.triviaPackageId === triviapackage?.id;
	});

	useEffect(() => {
		dispatch(getAllTriviasThunk());
		dispatch(getTriviaPackageThunk());
	}, [dispatch]);

	return (
		<div>
			{selectedTrivias && selectedTrivias.length > 0 ? (
				<div>
					{selectedTrivias.map((trivia) => (
						<div key={trivia.id}>
							<p>Question: {trivia.question}</p>
							<p>Answer: {trivia.correctAnswer}</p>
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

export default EditTriviaForm;
