import React from "react";
import TriviaMenu from "./SubComponents/TriviaMenu";

const HomePage = () => {
	return (
		<div>
			<div className="homepage-header-container">
				<h1>This is the Homepage</h1>
			</div>
			<div>
				<h1>SearchBar place holder</h1>
			</div>
			<div className="homepage-triviacard-container">
				<TriviaMenu />
			</div>
		</div>
	);
};

export default HomePage;
