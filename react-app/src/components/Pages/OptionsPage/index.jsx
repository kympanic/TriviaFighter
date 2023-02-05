import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { player1Stats } from "../../Helpers";
import { player2Stats } from "../../Helpers";
import "./options.css";

const OptionsPage = () => {
	const history = useHistory();
	const location = useLocation();
	const category = location.state.category;
	const difficulty = location.state.difficulty;
	const [triviaData, setTriviaData] = useState({});
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

	// renders once and not again unless component changes
	useEffect(() => {
		getTriviaDataFetch();
		// eslint-disable-next-line
	}, []);

	const getTriviaDataFetch = async () => {
		const response = await fetch(
			`https://opentdb.com/api.php?amount=13&category=${category}&difficulty=${difficulty.toLowerCase()}&type=multiple`
		);
		const jsonData = await response.json();
		setTriviaData(jsonData);
	};

	console.log(triviaData.results, "THIS IS THE TRIVIA DATA");
	// console.log(player1Data, "this is the player one data");
	// console.log(player2Data, "this is the player two data");

	return (
		<div className="optionspage-container">
			<h1 className="optionspage-title">CHARACTER SELECT</h1>
			<div className="player-boxes-container">
				<div>
					<h1>Player 1</h1>
					{player1Stats && Object.keys(player1Data).length > 0 ? (
						<div>
							<div className="selected-char-container">
								<p className="selected-char-name">
									{player1Data.name}
								</p>
								<img
									className="selected-char-img"
									src={player1Data.img}
									alt={player1Data.name}
								/>

								<div className="description-box">
									<p>{player1Data.description}</p>
								</div>
							</div>
							<div>
								<button
									className="player1-cancel-char-btn"
									onClick={() => setPlayer1Data({})}
								>
									CANCEL
								</button>
							</div>
						</div>
					) : (
						<div>
							{player1Stats &&
								player1Stats.map((player) => (
									<div
										className="ind-player-info"
										key={player.id}
									>
										<p className="char-player-name">
											{player.name}
										</p>
										<img
											className="optionspage-player-img"
											src={player.img}
											alt={player.name}
										/>
										<button
											className="select-char-btn"
											onClick={() =>
												setPlayer1Data(player)
											}
										>
											Select
										</button>
									</div>
								))}
						</div>
					)}
				</div>
				<div>
					<div className="optionspage-btns-container">
						{Object.keys(player1Data).length === 0 && (
							<p className="player-choose-text">
								Player One Choose a Character
							</p>
						)}
						{Object.keys(player2Data).length === 0 && (
							<p className="player-choose-text">
								Player Two Choose a Character
							</p>
						)}
						{Object.keys(player1Data).length > 0 &&
							Object.keys(player2Data).length > 0 && (
								<div>
									<button
										className="fight-btn"
										onClick={handleSubmit}
									>
										FIGHT
									</button>
								</div>
							)}
					</div>
					<div>
						<button
							className="backtohome-btn"
							onClick={handleCancel}
						>
							BACK TO HOME
						</button>
					</div>
				</div>
				<div>
					<h1>Player 2</h1>
					{player2Stats && Object.keys(player2Data).length > 0 ? (
						<div>
							<div>
								<p>{player2Data.name}</p>
								<img
									className="selected-char-img"
									src={player2Data.img}
									alt={player2Data.name}
								/>
								<div className="player2-description-box">
									<p>{player2Data.description}</p>
								</div>
							</div>
							<div>
								<button
									className="player2-cancel-char-btn"
									onClick={() => setPlayer2Data({})}
								>
									CANCEL
								</button>
							</div>
						</div>
					) : (
						<div>
							{player2Stats &&
								player2Stats.map((player) => (
									<div
										className="ind-player-info"
										key={player.id}
									>
										<p className="char-player-name">
											{player.name}
										</p>
										<img
											className="optionspage-player-img"
											src={player.img}
											alt={player.name}
										/>
										<button
											className="select-char-btn2"
											onClick={() =>
												setPlayer2Data(player)
											}
										>
											Select
										</button>
									</div>
								))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default OptionsPage;
