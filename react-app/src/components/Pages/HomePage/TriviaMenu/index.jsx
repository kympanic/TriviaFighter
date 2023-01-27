import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PremadeTriviaPackage from "../PremadeTriviaPackage";
import UserMadeTriviaPackage from "../UserMadeTriviaPackage";
import { getAllTriviasPackagesThunk } from "../../../../store/triviapackage";

const TriviaMenu = () => {
	const dispatch = useDispatch();
	const allUserTriviaPackages = useSelector((state) =>
		Object.values(state.triviapackages)
	);

	console.log(allUserTriviaPackages, "woah");
	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
	}, [dispatch]);

	//placeholder. Put real categories that are in the external api

	//numbers for the different categories
	//general knowledge - 9
	//television - 14
	//videogame - 15
	//sports - 21
	//history - 23
	//celebrities - 26
	//animals -27

	const premadeCategories = [9, 14, 15, 21, 23, 26, 27];

	return (
		<div>
			<div>
				<h1>PreMade Trivia. Play Right Away!</h1>
			</div>
			<div className="premade-trivia-container">
				{premadeCategories.map((option) => (
					<PremadeTriviaPackage key={option} category={option} />
				))}
			</div>
			<div>
				<h1>Trivia Made by the Community</h1>
			</div>
			{allUserTriviaPackages &&
				allUserTriviaPackages.map((triviapackage) => (
					<UserMadeTriviaPackage
						key={triviapackage.id}
						triviapackage={triviapackage}
					/>
				))}
			{/* <div className="usermade-trivia-container">
				<UserMadeTriviaPackage />
			</div> */}
		</div>
	);
};

export default TriviaMenu;
