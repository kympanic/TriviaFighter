import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { triviaCorrect } from "../Helpers";
import { triviaIncorrect } from "../Helpers";
import { wait } from "../Helpers";

export const useBattleSequence = (sequence) => {
	const location = useLocation();
	const [turn, setTurn] = useState(0);
	const [inSequence, setInSequence] = useState(false);
	const [announcerMessage, setAnnouncerMessage] = useState("");
	const [player1Animation, setPlayer1Animation] = useState("static");
	const [player2Animation, setPlayer2Animation] = useState("static");
	const player1Data = location.state.player1Data;
	const player2Data = location.state.player2Data;
	const [player1Health, setPlayer1Health] = useState(player1Data.maxHealth);
	const [player2Health, setPlayer2Health] = useState(player2Data.maxHealth);

	useEffect(() => {
		const { mode, turn } = sequence;

		if (mode) {
			const attacker = turn === 0 ? player1Data : player2Data;
			const receiver = turn === 0 ? player2Data : player1Data;

			switch (mode) {
				case "isCorrect": {
					const damage = triviaCorrect({ attacker, receiver });

					(async () => {
						setInSequence(true);
						setAnnouncerMessage(
							`${attacker.name} has gotten the answer correct!`
						);
						await wait(1000);

						turn === 0
							? setPlayer1Animation("attack")
							: setPlayer2Animation("attack");
						await wait(100);

						turn === 0
							? setPlayer1Animation("static")
							: setPlayer2Animation("static");
						await wait(500);

						turn === 0
							? setPlayer2Animation("damage")
							: setPlayer1Animation("damage");
						await wait(750);

						turn === 0
							? setPlayer2Animation("static")
							: setPlayer1Animation("static");

						setAnnouncerMessage(
							`${receiver.name} was much wowed by your knowledge!`
						);
						await wait(1000);

						turn === 0
							? setPlayer2Health((health) =>
									health - damage > 0 ? health - damage : 0
							  )
							: setPlayer1Health((health) =>
									health - damage > 0 ? health - damage : 0
							  );
						await wait(500);

						setAnnouncerMessage(
							`Now it's ${receiver.name}'s turn!`
						);
						await wait(1000);

						setTurn(turn === 0 ? 1 : 0);
						setInSequence(false);
					})();

					break;
				}

				case "isIncorrect": {
					const damage = triviaIncorrect({ attacker, receiver });

					(async () => {
						setInSequence(true);
						setAnnouncerMessage(
							`${attacker.name} got the question wrong! Oh no!`
						);
						await wait(1000);

						turn === 0
							? setPlayer1Animation("damage")
							: setPlayer2Animation("damage");
						await wait(750);

						turn === 0
							? setPlayer1Animation("static")
							: setPlayer2Animation("static");
						setAnnouncerMessage(
							`${attacker.name} hurt itself in its confusion!`
						);
						turn === 0
							? setPlayer1Health((health) =>
									health - damage > 0 ? health - damage : 0
							  )
							: setPlayer2Health((health) =>
									health - damage > 0 ? health - damage : 0
							  );
						await wait(2000);

						setAnnouncerMessage(
							`Now it's ${receiver.name}'s turn!`
						);
						await wait(1500);

						setTurn(turn === 0 ? 1 : 0);
						setInSequence(false);
					})();

					break;
				}
				default:
					break;
			}
		}
		// eslint-disable-next-line
	}, [sequence]);

	return {
		turn,
		inSequence,
		announcerMessage,
		player1Animation,
		player2Animation,
		player1Health,
		player2Health,
	};
};
