import EditContainer from "./EditTriviaSection/EditContainer";
import AddTriviaForm from "./AddTriviaSection";
import { useLocation } from "react-router-dom";
const AddTriviaPage = () => {
	// const { triviapackageId } = useParams();
	const location = useLocation();
	const sessionUser = location.state?.sessionUser;
	const triviapackage = location.state?.triviapackage;

	return (
		<div>
			{sessionUser && triviapackage && (
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
			<div className="add-trivia-page-edit-container">
				<EditContainer
					sessionUser={sessionUser}
					triviapackage={triviapackage}
				/>
			</div>
		</div>
	);
};

export default AddTriviaPage;
