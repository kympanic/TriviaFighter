import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PremadeTriviaPackage from "../PremadeTriviaPackage";
import UserMadeTriviaPackage from "../UserMadeTriviaPackage";
import { getAllTriviasPackagesThunk } from "../../../../store/triviapackage";
import InformationSectionTwo from "../InformationSection/sectionTwo";
import "../homepage.css";
import Carousel from "../../../Carousel/Carousel";

const TriviaMenu = () => {
	const dispatch = useDispatch();
	const allUserTriviaPackages = useSelector((state) =>
		Object.values(state.triviapackages)
	);
	const [query, setQuery] = useState("");
	const [premade, setPremade] = useState(true);

	const premadeCategories = [9, 14, 15, 21, 23, 27];
	const infoTexts1 = {
		title: "User Created Trivia",
		paragraph:
			"Here you can find all the trivia games made by fellow users! Search by name,category, or difficulty and click PLAY! Feeling smart and creative? Create your own TRIVIA PACKAGE for others to PLAY",
	};
	const infoTexts2 = {
		title: "Premade Trivia",
		paragraph:
			"Prefer to just get straight into a game? Here you can find random trivia questions that were made by Trivia Fighter! It's as simple as choosing the difficulty and clicking PLAY!",
	};

	const completedTriviaPackages = allUserTriviaPackages.filter(
		(triviapackage) => {
			return triviapackage?.trivias?.length >= 14;
		}
	);

	const filterTriviaPackages = (completedTriviaPackages, query) => {
		return completedTriviaPackages.filter((triviaPackage) => {
			const lowerCaseQuery = query.toLowerCase();
			const lowerCaseName = triviaPackage.name.toLowerCase();
			const lowerCaseDifficulty = triviaPackage.difficulty.toLowerCase();
			const lowerCaseCategory = triviaPackage.category.toLowerCase();

			return (
				lowerCaseName.includes(lowerCaseQuery) ||
				lowerCaseDifficulty.includes(lowerCaseQuery) ||
				lowerCaseCategory.includes(lowerCaseQuery)
			);
		});
	};

	const filteredPackages = filterTriviaPackages(
		completedTriviaPackages,
		query
	);

	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
	}, [dispatch]);

	const handleButtonClick = (e) => {
		e.preventDefault();
		setPremade(!premade);
	};
	//numbers for the different categories
	//general knowledge - 9
	//television - 14
	//videogame - 15
	//sports - 21
	//history - 23
	//celebrities - 26
	//animals -27

	return (
		<div className="main-trivia-container">
			<div className="home-trivia-btn-container">
				{premade ? (
					<button className="" onClick={handleButtonClick}>
						Play User Games
					</button>
				) : (
					<button onClick={handleButtonClick}>
						Play Premade Games
					</button>
				)}
			</div>
			{premade ? (
				<>
					<InformationSectionTwo infoTexts={infoTexts2} />
					<div className="carousel-container">
						<Carousel>
							{premadeCategories.map((option) => (
								<PremadeTriviaPackage
									key={option}
									category={option}
								/>
							))}
						</Carousel>
					</div>
				</>
			) : (
				<>
					<InformationSectionTwo infoTexts={infoTexts1} />
					<div className="usermade-trivia-container">
						<div className="homepage-search-container">
							<input
								className="homepage-searchbar"
								placeholder="Search by name, category, or difficulty"
								onChange={(event) =>
									setQuery(event.target.value)
								}
							/>
						</div>
						<Carousel>
							{filteredPackages.map((triviaPackage) => (
								<UserMadeTriviaPackage
									key={triviaPackage.id}
									triviapackage={triviaPackage}
								/>
							))}
						</Carousel>
					</div>
				</>
			)}
		</div>
	);
};

export default TriviaMenu;
