import { useParams } from "react-router-dom";
import EditTriviaForm from "./EditTriviaSection";
import AddTriviaForm from "./AddTriviaSection";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTriviasThunk } from "../../../store/trivia";
const AddTriviaPage = () => {
	const { triviapackageId } = useParams();
	const trivPackageId = parseInt(triviapackageId);
	const dispatch = useDispatch();
	const location = useLocation();
	const sessionUser = location.state?.sessionUser;
	const triviapackage = location.state?.triviapackage;
	const allTrivias = useSelector((state) => Object.values(state.trivias));
	const selectedTrivias = allTrivias.filter((trivia) => {
		return trivia.triviaPackageId === trivPackageId;
	});
	console.log(selectedTrivias, "these are all the selected Trivias");

	useEffect(() => {
		getAllTriviasThunk();
	}, []);
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
			<div id="add-trivia-page-edit-container">
				{selectedTrivias &&
					selectedTrivias.map((trivia) => (
						<div id={trivia.id}>
							<EditTriviaForm
								// vendor={vendor}
								triviaId={trivia.id}
								sessionUser={sessionUser}
							/>
						</div>
					))}
			</div>

			{/* <div className="add-trivia-page-edit-container">
				<EditTriviaForm
					sessionUser={sessionUser}
					triviapackage={triviapackage}
				/>
			</div> */}
		</div>
	);
};

export default AddTriviaPage;
