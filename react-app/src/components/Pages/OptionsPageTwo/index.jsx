import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { player1Stats } from "../OptionsPage/player1characters";
import { player2Stats } from "../OptionsPage/player2characters";
import "../OptionsPage/options.css";

const OptionsPageTwo = () => {
	const history = useHistory();
	const location = useLocation();
	const triviaData = location.state.triviaData;
	const [player1Data, setPlayer1Data] = useState({});
	const [player2Data, setPlayer2Data] = useState({});

	const handleCancel = (e) => {
		e.preventDefault();
		history.push("/");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push({
			pathname: "/gamebattle",
			state: { triviaData, player1Data, player2Data },
		});
	};

	console.log(triviaData.results, "THIS IS THE TRIVIA DATA");
	console.log(player1Data, "this is the player one data");
	console.log(player2Data, "this is the player two data");

	return (
		<div className="optionspage-container">
			<h1 className="optionspage-title">CHARACTER SELECT</h1>
			<div className="player-boxes-container">
				<div>
					<h1>Player 1 Box Info</h1>
					{player1Stats &&
						player1Stats.map((player) => (
							<div className="ind-player-info" key={player.id}>
								<p>{player.name}</p>
								<img
									className="optionspage-player-img"
									src={player.img}
									alt={player.name}
								/>
								<button onClick={() => setPlayer1Data(player)}>
									Select
								</button>
							</div>
						))}
				</div>
				<div>
					<h1>Player 2 Box Info</h1>
					{player2Stats &&
						player2Stats.map((player) => (
							<div key={player.id} className="ind-player-info">
								<p>{player.name}</p>
								<img
									className="optionspage-player-img"
									src={player.img}
									alt={player.name}
								/>
								<button onClick={() => setPlayer2Data(player)}>
									Select
								</button>
							</div>
						))}
				</div>
			</div>
			<div>
				<div className="optionspage-btns-container">
					{Object.keys(player1Data).length === 0 && (
						<p>Player One Choose a Character!</p>
					)}
					{Object.keys(player2Data).length === 0 && (
						<p>Player Two Choose a Character!</p>
					)}
					{Object.keys(player1Data).length > 0 &&
						Object.keys(player2Data).length > 0 && (
							<button onClick={handleSubmit}>PLAY!</button>
						)}
					<button onClick={handleCancel}>Back to Homepage</button>
				</div>
			</div>
		</div>
	);
};

export default OptionsPageTwo;