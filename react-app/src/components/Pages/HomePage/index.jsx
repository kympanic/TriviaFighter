import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersThunk } from "../../../store/users";
import TriviaMenu from "./TriviaMenu";
import InformationSection from "./InformationSection";
import SpashPage from "../SplashPage";
import "./homepage.css";
import InformationSectionThree from "./InformationSection/sectionThree";

//Page that displays all the trivia games available for play
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
					<div className="homepage-headerb-container">
						<div className="homepage-title-container">
							<h1 id="homepage-title-text">TRIVIA FIGHTER</h1>
						</div>
					</div>
					<InformationSection />
					<div className="homepage-triviacard-container">
						<TriviaMenu />
					</div>
					<InformationSectionThree />
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
