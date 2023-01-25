import { useLocation } from "react-router-dom";
import EditTriviaForm from "./EditTriviaForm";
// import AddTriviaForm from "./AddTriviaForm";
import TestAddTriviaForm from "./TestAddTriviaForm";

const AddTriviaPage = () => {
	const location = useLocation();
	const sessionUser = location.state?.sessionUser;
	const triviapackage = location.state?.triviapackage;

	return (
		<div>
			{sessionUser && (
				<div className="add-trivia-page-header-container">
					<h1>THIS IS TO ADD TRIVIA PAGE</h1>
				</div>
			)}
			<div className="add-trivia-page-form-container">
				<TestAddTriviaForm
					sessionUser={sessionUser}
					triviapackage={triviapackage}
				/>
			</div>
			<div className="add-trivia-page-edit-container">
				<EditTriviaForm
					sessionUser={sessionUser}
					triviapackage={triviapackage}
				/>
			</div>
		</div>
	);
};

export default AddTriviaPage;
