import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Bar from "./Bar/bar";
import Menu from "./Menu";
import Announcer from "./Announcer";
import { useSelector } from "react-redux";
import "./battlepage.css";
import styles from "./styles.module.css";
import { useBattleSequence } from "../../Hooks/useBattleSequence";

const BattlePage = () => {
	const location = useLocation();
	const triviaData = location.state.triviaData;
	const [sequence, setSequence] = useState({});
	const player1Data = location.state.player1Data;
	const player2Data = location.state.player2Data;
	// const [player1Health, setPlayer1Health] = useState(player1Data.maxHealth);
	// const [player2Health, setPlayer2Health] = useState(player2Data.maxHealth);
	const {
		turn,
		inSequence,
		player1Health,
		player2Health,
		announcerMessage,
		player1Animation,
		player2Animation,
	} = useBattleSequence(sequence);

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

				<div className={styles.characters}>
					<div className={styles.gameHeader}>
						{player1Data.name} vs {player2Data.name}
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
			<div className={styles.hud}>
				<div className={styles.hudChild}>
					<Announcer
						message={
							announcerMessage ||
							`Player 1, what is the correct answer?`
						}
					/>
				</div>
				<div className={styles.hudChild}>
					<Menu
						arrayOfQuestions={arrayOfQuestions}
						onCorrect={() =>
							setSequence({ turn, mode: "isCorrect" })
						}
						onIncorrect={() =>
							setSequence({ turn, mode: "isIncorrect" })
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default BattlePage;
