import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import EditTriviaForm from "./EditTriviaForm";
import TestAddTriviaForm from "./TestAddTriviaForm";
import { getTriviaPackageThunk } from "../../../store/triviapackage";
import { getAllUsersThunk } from "../../../store/users";

const AddTriviaPage = () => {
	const { triviapackageId } = useParams();
	const trivPackageId = parseInt(triviapackageId);
	const dispatch = useDispatch();
	// const location = useLocation();
	const history = useHistory();
	const sessionUser = useSelector((state) => state.session.user);
	// const sessionUser = location.state?.sessionUser;
	// const triviapackage = location.state?.triviapackage;
	const triviapackage = useSelector((state) =>
		Object.values(state?.triviapackages)
	);
	// console.log(selectedUser, "woah");
	// console.log(triviapackage[0], "this is the trivia");
	// if (sessionUser?.id !== triviapackage[0]?.userId) {
	// 	history.push("/");
	// }
	useEffect(() => {
		dispatch(getTriviaPackageThunk(trivPackageId));
		dispatch(getAllUsersThunk());
	}, [dispatch]);

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
					triviapackage={triviapackage[0]}
				/>
			</div>
			<div className="add-trivia-page-edit-container">
				<EditTriviaForm
					sessionUser={sessionUser}
					triviapackage={triviapackage[0]}
				/>
			</div>
		</div>
	);
};

export default AddTriviaPage;
