import "./splashpage.css";
import { player1Stats } from "../../Helpers";
import { player2Stats } from "../../Helpers";
import { useHistory } from "react-router-dom";
import { Card } from "../../Carousel/Carousel";
import Carousel from "../../Carousel/Carousel";
const SpashPage = () => {
	const history = useHistory();

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
					<h1 id="trivia-fighter-title">TRIVIA FIGHTER</h1>
					<button onClick={handleSignIn} className="splash-log-btns">
						LOG IN
					</button>
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
					<div className="splashchar-text-container">
						<h1 id="splashchar-header-text">
							CHOOSE YOUR CHARACTER
						</h1>
						<p className="splash-trivia-text">
							IN OPTIONS, TWO PLAYERS CAN EACH SELECT AN AVATAR
							FROM THE CHARACTERS LIST
						</p>
						<p className="splash-trivia-text">
							BATTLE UNTIL ONE OF YOU FALLS
						</p>
					</div>
				</div>
				<div className="splash-trivia-section">
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
				</div>
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
