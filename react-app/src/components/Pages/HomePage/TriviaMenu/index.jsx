import React from "react";
import PremadeTriviaPackage from "../SubComponents/PremadeTriviaPackage";
import UserMadeTriviaPackage from "../UserMadeTriviaPackage";

const TriviaMenu = () => {
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
			<div className="premade-trivia-container">
				{premadeCategories.map((option) => (
					<PremadeTriviaPackage key={option} category={option} />
				))}
			</div>
			<div className="usermade-trivia-container">
				<UserMadeTriviaPackage />
			</div>
		</div>
	);
};

export default TriviaMenu;
