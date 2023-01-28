import EditContainer from "./EditTriviaSection/EditContainer";
import AddTriviaForm from "./AddTriviaSection";
import PackageInfoSection from "./PackageInfoSection";
import { useLocation } from "react-router-dom";
import "./addtriviapage.css";

const AddTriviaPage = () => {
	// const { triviapackageId } = useParams();
	const location = useLocation();
	const sessionUser = location.state?.sessionUser;
	const triviapackage = location.state?.triviapackage;

	return (
		<>
			{triviapackage && (
				<div className="addtriviapage-fullpage-container">
					{sessionUser && triviapackage && (
						<div className="add-trivia-page-header-container">
							<h1>{triviapackage.name}</h1>
						</div>
					)}
					<div className="addtriviapage-content-container">
						<div className="add-trivia-page-info-container">
							<PackageInfoSection triviapackage={triviapackage} />
						</div>
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
				</div>
			)}
		</>
	);
};

export default AddTriviaPage;
