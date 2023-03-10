import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PremadeTriviaPackage from "../PremadeTriviaPackage";
import UserMadeTriviaPackage from "../UserMadeTriviaPackage";
import { getAllTriviasPackagesThunk } from "../../../../store/triviapackage";
import InformationSectionTwo from "../InformationSection/sectionTwo";
import "../homepage.css";

const TriviaMenu = () => {
	const dispatch = useDispatch();
	const allUserTriviaPackages = useSelector((state) =>
		Object.values(state.triviapackages)
	);
	const [query, setQuery] = useState("");

	const completedTriviaPackages = allUserTriviaPackages.filter(
		(triviapackage) => {
			return triviapackage?.trivias?.length >= 14;
		}
	);
	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
	}, [dispatch]);

	//numbers for the different categories
	//general knowledge - 9
	//television - 14
	//videogame - 15
	//sports - 21
	//history - 23
	//celebrities - 26
	//animals -27

	const premadeCategories = [9, 14, 15, 21, 23, 27];

	return (
		<div className="main-trivia-container">
			<div className="premade-trivia-container">
				{premadeCategories.map((option) => (
					<PremadeTriviaPackage key={option} category={option} />
				))}
			</div>
			<InformationSectionTwo />
			<div className="homepage-search-container">
				<input
					className="homepage-searchbar"
					placeholder="Search by name, category, or difficulty"
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
