import { useSelector } from "react-redux";

const AddTriviaPage = () => {
	const sessionUser = useSelector((state) => state.session.user);

	return (
		<div>
			{sessionUser && (
				<div>
					<h1>THIS IS TO ADD TRIVIA PAGE</h1>
				</div>
			)}
		</div>
	);
};

export default AddTriviaPage;
