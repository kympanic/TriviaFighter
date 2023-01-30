import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PremadeTriviaPackage from "../PremadeTriviaPackage";
import UserMadeTriviaPackage from "../UserMadeTriviaPackage";
import { getAllTriviasPackagesThunk } from "../../../../store/triviapackage";

const TriviaMenu = () => {
	const dispatch = useDispatch();
	const allUserTriviaPackages = useSelector((state) =>
		Object.values(state.triviapackages)
	);
	const completedTriviaPackages = allUserTriviaPackages.filter(
		(triviapackage) => {
			return triviapackage.trivias.length >= 14;
		}
	);
	const [query, setQuery] = useState("");

	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
	}, [dispatch]);

	console.log(completedTriviaPackages, "this is the completed trivias");

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
			<div>
				<input
					placeholder="Enter Post Title"
					onChange={(event) => setQuery(event.target.value)}
				/>
			</div>
			<div className="usermade-trivia-container">
				{completedTriviaPackages &&
					completedTriviaPackages
						.filter((triviapackage) => {
							if (query === "") {
								return triviapackage;
							} else if (
								triviapackage.name
									.toLowerCase()
									.includes(query.toLowerCase())
							) {
								return triviapackage;
							} else if (
								triviapackage.difficulty
									.toLowerCase()
									.includes(query.toLowerCase())
							) {
								return triviapackage;
							} else if (
								triviapackage.category
									.toLowerCase()
									.includes(query.toLowerCase())
							) {
								return triviapackage;
							}
						})
						.map((triviapackage, index) => (
							<UserMadeTriviaPackage
								key={triviapackage.id}
								triviapackage={triviapackage}
							/>
						))}
			</div>
		</div>
	);
};

export default TriviaMenu;
