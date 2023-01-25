import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTriviasThunk } from "../../../../store/trivia";

const EditTriviaForm = ({ sessionUser, triviapackage }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const selectedUser = useSelector((state) => state?.users[sessionUser?.id]);

	const selectedTrivias = selectedUser?.trivias.filter((trivia) => {
		return trivia.triviaPackageId === triviapackage.id;
	});

	//need to make sure only the user that owns the triviapackage can use this page
	if (sessionUser?.id !== triviapackage?.userId) {
		history.push("/");
	}
	console.log(
		sessionUser?.id,
		triviapackage?.userId,
		"these should not match"
	);

	useEffect(() => {
		dispatch(getAllTriviasThunk());
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
