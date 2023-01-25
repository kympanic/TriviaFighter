import { useLocation } from "react-router-dom";
import AddTriviaForm from "./AddTriviaForm";

const AddTriviaPage = () => {
	const location = useLocation();
	const sessionUser = location.state.sessionUser;
	const triviapackage = location.state.triviapackage;

	return (
		<div>
			{sessionUser && (
				<div className="add-trivia-page-header-container">
					<h1>THIS IS TO ADD TRIVIA PAGE</h1>
				</div>
			)}
			<div className="add-trivia-page-form-container">
				<AddTriviaForm
					sessionUser={sessionUser}
					triviapackage={triviapackage}
				/>
			</div>
		</div>
	);
};

export default AddTriviaPage;
