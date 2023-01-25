import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const OptionsPage = () => {
	const history = useHistory();
	const location = useLocation();
	const category = location.state.category;
	const difficulty = location.state.difficulty;
	const [triviaData, setTriviaData] = useState({});
	const handleCancel = (e) => {
		e.preventDefault();
		history.push("/");
	};

	// renders once and not again unless component changes
	useEffect(() => {
		getTriviaDataFetch();
		// eslint-disable-next-line
	}, []);

	const getTriviaDataFetch = async () => {
		const response = await fetch(
			`https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty.toLowerCase()}&type=multiple`
		);
		const jsonData = await response.json();
		setTriviaData(jsonData);
	};

	// console.log(triviaData.results, "THIS IS THE TRIVIA DATA");

	return (
		<div>
			<h1>This is the game options page</h1>
			<div>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	);
};

export default OptionsPage;
