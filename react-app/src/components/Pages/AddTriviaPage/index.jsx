import EditContainer from "./EditTriviaSection/EditContainer";
import AddTriviaForm from "./AddTriviaSection";
import PackageInfoSection from "./PackageInfoSection";
import "./addtriviapage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTriviaPackageThunk } from "../../../store/triviapackage";
import { useParams } from "react-router-dom";
const AddTriviaPage = () => {
	const sessionUser = useSelector((state) => state.session.user);
	const { triviapackageId } = useParams();
	const id = parseInt(triviapackageId);
	const dispatch = useDispatch();
	const triviapackage = useSelector((state) => state.triviapackages);

	useEffect(() => {
		dispatch(getTriviaPackageThunk(id));
	}, [dispatch, id]);

	return (
		<>
			{triviapackage && (
				<div className="addtriviapage-fullpage-container">
					{sessionUser && triviapackage && (
						<div className="add-trivia-page-header-container">
							<h1 className="add-triviapage-title-text">
								{triviapackage.name}
							</h1>
						</div>
					)}
					<div className="addtriviapage-content-container">
						<div className="add-trivia-page-info-container">
							<PackageInfoSection
								triviapackage={triviapackage}
								sessionUser={sessionUser}
							/>
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
