import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Bar from "./Bar/bar";
import Menu from "./Menu";
import Announcer from "./Announcer";
import ReactHowler from "react-howler";
import { useBattleSequence } from "../../Hooks/useBattleSequence";
import { wait } from "../../Helpers";
import "./battlepage.css";
import styles from "./styles.module.css";

//Battle page where there are three main components. The announcer,
//question menu, and player information
//useBattleSequence is the hook that runs when a user clicks an answer
const BattlePage = () => {
	const history = useHistory();
	const location = useLocation();
	const triviaData = location.state.triviaData;
	const player1Data = location.state.player1Data;
	const player2Data = location.state.player2Data;
	const [sequence, setSequence] = useState({});
	const [winner, setWinner] = useState();
	const [playing, setPlaying] = useState(true);

	const song =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Cute_Background_Music_No_Copyright_(getmp3.pro).mp3";

	//data is being changed through state and sent to main page
	//depending on switch case from useBattleSequence
	const {
		turn,
		inSequence,
		player1Health,
		player2Health,
		announcerMessage,
		player1Animation,
		player2Animation,
	} = useBattleSequence(sequence);

	useEffect(() => {
		if (player1Health === 0 || player2Health === 0) {
			(async () => {
				await wait(2000);
				setPlaying(false);
				setWinner(player1Health === 0 ? player2Data : player1Data);
				history.push({
					pathname: "/gameover",
					state: { triviaData, winner, player1Data, player2Data },
				});
			})();
		}
		// eslint-disable-next-line
	}, [player1Health, player2Health, winner]);

	return (
		<div className="battlepage-main-container">
			<ReactHowler playing={playing} src={[song]} />
			<div className="player-container">
				<div className="player1-summary">
					<h2 className="playertitle-text">Player 1</h2>
					<div className={styles.player1Sprite}>
						<img
							className={styles[player1Animation]}
							src={player1Data.img}
							alt={player1Data.name}
						/>
					</div>
					<h3 className="player-name-text">{player1Data.name}</h3>
					<div className="bar-container">
						<Bar
							label="HP"
							maxValue={player1Data.maxHealth}
							value={player1Health}
						/>
					</div>
				</div>

				<div className={styles.gameHeader}>Fight!</div>

				<div className="player2-summary">
					<h2 className="playertitle-text">Player 2</h2>
					<div className={styles.player2Sprite}>
						<img
							className={styles[player2Animation]}
							src={player2Data.img}
							alt={player2Data.name}
						/>
					</div>
					<h3 className="player-name-text">{player2Data.name}</h3>
					<div className="bar-container">
						<Bar
							label="HP"
							maxValue={player2Data.maxHealth}
							value={player2Health}
						/>
					</div>
				</div>
			</div>
			<div className={styles.hud}>
				{player1Health === 0 || player2Health === 0 ? (
					<div className={styles.hudChild}>
						<Announcer
							message={
								player1Health === 0
									? `${player1Data.name} got knocked out!`
									: `${player2Data.name} got knocked out!`
							}
						/>
					</div>
				) : (
					<div className={styles.hudChild}>
						<Announcer
							message={
								announcerMessage ||
								`Woohoo! It's time for a Trivia Battle! Player One what is the answer to this question?`
							}
						/>
					</div>
				)}
				{!inSequence && (
					<div className={styles.hudChild}>
						<Menu
							setSequence={setSequence}
							turn={turn}
							// setQuestionIndex={setQuestionIndex}
							// questionIndex={questionIndex}
							triviaData={triviaData}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default BattlePage;
