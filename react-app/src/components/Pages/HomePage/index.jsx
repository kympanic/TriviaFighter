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
			<div className="homepage-header-container"></div>
			<div className="homepage-title-text-container">
				<h1 id="homepage-title-text">TRIVIA FIGHTER</h1>
			</div>
			<div className="homepage-triviacard-container">
				<TriviaMenu />
			</div>
		</div>
	);
};

export default HomePage;
