import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TriviaMenu from "./TriviaMenu";
import { getAllUsersThunk } from "../../../store/users";
import "./homepage.css";
const HomePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsersThunk());
	});
	return (
		<div className="homepage-main-container">
			<div className="homepage-header-container">
				<h1>This is the Homepage</h1>
			</div>
			<div className="homepage-triviacard-container">
				<TriviaMenu />
			</div>
		</div>
	);
};

export default HomePage;
