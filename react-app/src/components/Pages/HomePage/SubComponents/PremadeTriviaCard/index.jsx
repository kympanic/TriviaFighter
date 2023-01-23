import { useState } from "react";

const PremadeTriviaCard = ({ category }) => {
	// const [triviaData, setTriviaData] = useState({});
	const [difficulty, setDifficulty] = useState("");
	//renders once and not again unless component changes
	// useEffect(() => {
	// 	getTriviaDataFetch();
	// }, [triviaData.length]);
	//getting the trivia data. Must do this dynamically. Do i want to save this or just use the data to load a game?
	// const getTriviaDataFetch = async () => {
	// 	const response = await fetch(
	// 		`https://opentdb.com/api.php?amount=20&category=${category}&difficulty=hard&type=multiple`
	// 	);
	// 	const jsonData = await response.json();
	// 	setTriviaData(jsonData);
	// };

	const handleClick = (e) => {
		e.preventDefault();
	};

	const updateDifficulty = (e) => {
		setDifficulty(e.target.value);
	};

	// console.log(triviaData.results, "THIS IS THE TRIVIA DATA");
	return (
		<div>
			<h3>Image Placeholder</h3>
			<form>
				<label>difficulty</label>
				<select value={difficulty} onChange={updateDifficulty}>
					<option value="--">--</option>
					<option value="Easy">EASY</option>
					<option value="Medium">MEDIUM</option>
					<option value="Hard">HARD</option>
				</select>
				{difficulty.length > 3 && (
					<button onClick={handleClick}>PLAY</button>
				)}
				<>modal here</>
			</form>
		</div>
	);
};

export default PremadeTriviaCard;
