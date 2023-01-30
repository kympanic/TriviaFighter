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

	const {
		turn,
		inSequence,
		player1Health,
		player2Health,
		announcerMessage,
		player1Animation,
		player2Animation,
	} = useBattleSequence(sequence);

	const selectedTriviaData = Object.values(triviaData?.results);
	const arrayOfQuestions = selectedTriviaData.map((trivia) => {
		return {
			question: trivia?.question,
			correct_answer: trivia?.correct_answer,
			incorrect_answers: trivia.incorrect_answers,
		};
	});

	console.log(
		inSequence,
		"this should be constanting going from false to true, true to false"
	);
	// console.log(triviaData, "this is the trivia data");
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
					<div className={styles.player1Sprite}>
						<img
							className={styles[player1Animation]}
							src={player1Data.img}
							alt={player1Data.name}
						/>
					</div>
					<h3>{player1Data.name}</h3>
					<div>
						<Bar
							label="HP"
							maxValue={player1Data.maxHealth}
							value={player1Health}
						/>
					</div>
				</div>

				<div className={styles.gameHeader}>
					{player1Data.name} vs {player2Data.name}
				</div>

				<div className="player2-summary">
					<h2>Player 2</h2>
					<div className={styles.player2Sprite}>
						<img
							className={styles[player2Animation]}
							src={player2Data.img}
							alt={player2Data.name}
						/>
					</div>
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
							`It's Trivia Time! Player One what is the answer to this question?`
						}
					/>
				</div>
				{/* {!inSequence && turn === 0 && ( */}
				<div className={styles.hudChild}>
					<Menu
						arrayOfQuestions={arrayOfQuestions}
						setSequence={setSequence}
						turn={turn}
					/>
				</div>
				{/* )} */}
			</div>
		</div>
	);
};

export default BattlePage;
