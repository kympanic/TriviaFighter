import "./splashpage.css";
import { useState } from "react";
import { player1Stats } from "../../Helpers";
import { player2Stats } from "../../Helpers";
import { useHistory } from "react-router-dom";
import { Card } from "../../Carousel/Carousel";
import Carousel from "../../Carousel/Carousel";
const SpashPage = () => {
	const history = useHistory();
	const [chooseText, setChooseText] = useState(false);

	const handleSignIn = () => {
		history.push("/login");
	};
	const handleJoin = () => {
		history.push("/sign-up");
	};
	const allPlayers = [...player1Stats, ...player2Stats];

	return (
		<div className="splash-main">
			<div className="splash-content-wrapper">
				<div className="splash-logo-section">
					<h1 id="trivia-fighter-title">TRIVIA FIGHTER v1.0b</h1>
				</div>
				<div className="splash-char-section">
					<div className="char-carousel-container">
						<Carousel>
							{allPlayers.map((player) => (
								<Card
									name={player.name}
									img={player.img}
									description={player.description}
								/>
							))}
						</Carousel>
					</div>
					{chooseText ? (
						<div
							className="splashchar-text-container"
							onClick={() => setChooseText(false)}
						>
							<p className="splashchar-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</p>
						</div>
					) : (
						<div className="splashchar-select-button-wrap">
							<button
								id="splashchar-select-button"
								onClick={() => setChooseText(true)}
							>
								Select your fighter
							</button>
						</div>
					)}
				</div>
				<div className="splash-info-section">
					<div className="section">Section 1</div>
					<div className="section">Section 2</div>
					<div className="section">Section 3</div>
					<div className="section">Section 4</div>
				</div>
				{/* <div className="splash-trivia-section">
					<div className="splash-trivia-text-container">
						<h1 id="splash-trivia-header-text">
							PLAY AGAINST YOUR FRIENDS AND FAMILY
						</h1>

						<p className="splash-trivia-text">
							TRIVIA FIGHTER IS A TURN BASED BATTLE GAME, BUT
							INSTEAD OF FIGHTING WITH YOUR FISTS, YOU ANSWER
							TRIVIA QUESTIONS USING YOUR WITS
						</p>
						<p className="splash-trivia-text">
							CREATE YOUR OWN TRIVIA QUESTIONS OR CHOOSE COMMUNITY
							CREATED GAMES
						</p>
					</div>
					<div className="splash-trivia-img-container">
						<img
							className="splash-trivia-img"
							src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Splash-trivia-img.png"
							alt="splash-trivia"
						/>
					</div>
				</div>

				<div className="splash-battle-section">
					<div className="splashbattle-text-container">
						<h1 id="splashbattle-header-text">Time to Battle</h1>
						<p className="splashbattle-text">
							TAKE TURNS ANSWERING QUESTIONS, DO SOME DAMAGE
						</p>
						<p className="splashbattle-text">
							BE CAREFUL. ANSWER INCORRECTLY AND YOU CAN TAKE
							DAMAGE YOURSELF
						</p>
						<p></p>
					</div>
					<div className="splashbattle-img-container">
						<img
							className="splashbattle-img"
							src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/splash-battle-img.png"
							alt="splash-battle"
						/>
					</div>
				</div> */}
				<div className="splash-join-section">
					<div className="splashjoin-text-container">
						<h1>SIGN UP TODAY</h1>
						<button onClick={handleJoin} id="splash-join-btn">
							JOIN
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpashPage;
