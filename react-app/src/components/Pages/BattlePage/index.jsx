import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Bar from "./bar";
import "./battlepage.css";
import Menu from "./Menu";
import { useSelector } from "react-redux";
const BattlePage = () => {
	const location = useLocation();
	const triviaData = location.state.triviaData;
	const player1Data = location.state.player1Data;
	const player2Data = location.state.player2Data;
	const [player1Health, setPlayer1Health] = useState(player1Data.maxHealth);
	const [player2Health, setPlayer2Health] = useState(player2Data.maxHealth);

	console.log(triviaData, "this is the trivia data");
	const getRandomInt = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	};

	const selectedTriviaData = Object.values(triviaData?.results);
	const arrayOfQuestions = selectedTriviaData.map((trivia) => {
		return {
			question: trivia?.question,
			correct_answer: trivia?.correct_answer,
			incorrect_answers: trivia.incorrect_answers,
			// incorrect_answer2: trivia.incorrect_answers[1],
			// incorrect_answer3: trivia.incorrect_answers[2],
		};
	});

	// console.log(arrayOfQuestions, "these are all the questions");
	// console.log(selectedTriviaData, "this is the trivia data");
	// console.log(player1Data, "this is the player 1 data");
	// console.log(player2Data, "this is the player 2 data");
	// console.log(player1Health, "this is the player 1 health");
	// console.log(player2Health, "this is the player 2 health");
	return (
		<div className="battlepage-main-container">
			<div className="player-container">
				<div className="player1-summary">
					<h2>Player 1</h2>
					<img
						className="battle-player-img"
						src={player1Data.img}
						alt={player1Data.name}
					/>
					<h3>{player1Data.name}</h3>
					<div>
						<Bar
							label="HP"
							maxValue={player1Data.maxHealth}
							value={player1Health}
						/>
					</div>
				</div>
				<div className="player2-summary">
					<h2>Player 2</h2>
					<img
						className="battle-player-img"
						src={player2Data.img}
						alt={player2Data.name}
					/>
					<h3>{player2Data.name}</h3>
					<div>
						<Bar
							label="HP"
							maxValue={player2Data.maxHealth}
							value={player2Health}
						/>
					</div>
				</div>
			</div>
			<div>
				<Menu arrayOfQuestions={arrayOfQuestions} />
			</div>
		</div>
	);
};

export default BattlePage;
