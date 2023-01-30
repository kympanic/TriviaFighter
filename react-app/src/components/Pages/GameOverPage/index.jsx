import React from "react";
import { useLocation } from "react-router-dom";

const GameOverPage = () => {
	const location = useLocation();
	const triviaData = location.state.triviaData;

	console.log(triviaData, "wow");
	return (
		<div>
			<h1>This is the Game Over Page</h1>
		</div>
	);
};

export default GameOverPage;
