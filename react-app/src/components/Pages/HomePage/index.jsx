import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TriviaMenu from "./TriviaMenu";
import { getAllUsersThunk } from "../../../store/users";
import SpashPage from "../SplashPage";
import "./homepage.css";

const HomePage = () => {
	const sessionUser = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsersThunk());
	}, [dispatch]);
	return (
		<>
			{sessionUser ? (
				<div className="homepage-main-container">
					<div className="homepage-header-container"></div>
					<div className="homepage-title-text-container">
						<h1 id="homepage-title-text">TRIVIA FIGHTER</h1>
					</div>
					<div className="homepage-headerb-container"></div>
					<div className="homepage-triviacard-container">
						<TriviaMenu />
					</div>
				</div>
			) : (
				<div>
					<SpashPage />
				</div>
			)}
		</>
	);
};

export default HomePage;
