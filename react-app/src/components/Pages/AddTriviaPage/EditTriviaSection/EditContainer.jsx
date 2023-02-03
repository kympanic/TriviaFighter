import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTriviasThunk } from "../../../../store/trivia";
import EditSection from "./EditSection";
import QuestionBar from "../QuestionBar";
import "./editsection.css";

const EditContainer = ({ sessionUser, triviapackage }) => {
	const dispatch = useDispatch();
	const allTrivia = useSelector((state) => Object.values(state.trivias));

	const selectedTrivia = allTrivia?.filter((trivia) => {
		return triviapackage?.id === trivia?.triviaPackageId;
	});

	useEffect(() => {
		dispatch(getAllTriviasThunk());
	}, [dispatch]);
	return (
		<div>
			<h1>Questions</h1>
			<div>
				<QuestionBar
					triviapackage={triviapackage}
					selectedTrivia={selectedTrivia}
				/>
			</div>
			{selectedTrivia && selectedTrivia.length > 0 ? (
				<div className="editsection-container">
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
				<div className="editsection-container">
					<h1>No trivia questions yet!</h1>
				</div>
			)}
		</div>
	);
};

export default EditContainer;
