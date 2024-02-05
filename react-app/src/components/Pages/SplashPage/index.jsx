import "./splashpage.css";
import { useState } from "react";
import { player1Stats } from "../../Helpers";
import { player2Stats } from "../../Helpers";
import { useHistory } from "react-router-dom";
import { Card } from "../../Carousel/Carousel";
import Carousel from "../../Carousel/Carousel";
const SplashPage = () => {
	const history = useHistory();
	const [chooseText, setChooseText] = useState(false);

	const handleJoin = () => {
		history.push("/sign-up");
	};
	const allPlayers = [...player1Stats, ...player2Stats];

	return (
		<main>
			<div className="container grid grid--3-cols margin-t-large">
				<div className="splash-section-1">
					<div className="splash-1-textbox">
						<img src="" alt="" />
						<p>Trivia Fighter</p>
						<h2>Fun-filled Trivia.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Numquam voluptate fuga laborum iure, odio
							deserunt. Ipsum recusandae, aut ea voluptates
							eligendi reprehenderit quo repudiandae velit itaque
							dignissimos nulla ratione architecto?
						</p>
					</div>
					<div className="splash-2-imgbox">
						<img src="" alt="" />
					</div>
				</div>
				<div className="splash-section-2">TEST 2</div>
				<div className="splash-section-3">TEST 3</div>
				<div className="splash-section-4">TEST 4</div>
				<div className="splash-section-5">TEST 5</div>
				<div className="splash-section-6">TEST 6</div>
				<div className="splash-section-7">TEST 7</div>
				<div className="splash-section-8">TEST 8</div>
			</div>
		</main>

		// <div className="splash-main">
		// 	<div className="splash-content-wrapper">
		// 		<div className="splash-logo-section">
		// 			<h1 id="trivia-fighter-title">TRIVIA FIGHTER v1.0b</h1>
		// 		</div>
		// 		<div className="splash-char-section">
		// 			<div className="char-carousel-container">
		// 				<Carousel>
		// 					{allPlayers.map((player) => (
		// 						<Card
		// 							name={player.name}
		// 							img={player.img}
		// 							description={player.description}
		// 						/>
		// 					))}
		// 				</Carousel>
		// 			</div>
		// 			{chooseText ? (
		// 				<div
		// 					className="splashchar-text-container"
		// 					onClick={() => setChooseText(false)}
		// 				>
		// 					<p className="splashchar-text">
		// 						Lorem ipsum dolor sit amet, consectetur
		// 						adipiscing elit, sed do eiusmod tempor
		// 						incididunt ut labore et dolore magna aliqua. Ut
		// 						enim ad minim veniam, quis nostrud exercitation
		// 						ullamco laboris nisi ut aliquip ex ea commodo
		// 						consequat.
		// 					</p>
		// 				</div>
		// 			) : (
		// 				<div className="splashchar-select-button-wrap">
		// 					<button
		// 						id="splashchar-select-button"
		// 						onClick={() => setChooseText(true)}
		// 					>
		// 						Select your fighter
		// 					</button>
		// 				</div>
		// 			)}
		// 		</div>
		// 		<div className="splash-info-section">
		// 			<div className="splash-info-text">
		// 				<h2>Select A Game</h2>
		// 				<p>
		// 					Lorem ipsum dolor sit amet, consectetur adipiscing
		// 					elit, sed do eiusmod tempor incididunt ut labore et
		// 					dolore magna aliqua. Ut enim ad minim veniam, quis
		// 					nostrud exercitation ullamco laboris nisi ut aliquip
		// 					ex ea commodo consequat.Lorem ipsum dolor sit amet,
		// 					consectetur adipiscing elit, sed do eiusmod tempor
		// 					incididunt ut labore et dolore magna aliqua. Ut enim
		// 					ad minim veniam, quis nostrud exercitation ullamco
		// 					laboris nisi ut aliquip ex ea commodo consequat.
		// 				</p>
		// 			</div>
		// 			<div className="splash-info-image">
		// 				<img
		// 					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Splash-trivia-img.png"
		// 					alt="Description"
		// 				/>
		// 				<img
		// 					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/splash-battle-img.png"
		// 					alt="Description"
		// 				/>
		// 			</div>
		// 			<div className="splash-info-text">
		// 				<h2>Go To Battle</h2>
		// 				<p>
		// 					Lorem ipsum dolor sit amet, consectetur adipiscing
		// 					elit, sed do eiusmod tempor incididunt ut labore et
		// 					dolore magna aliqua. Ut enim ad minim veniam, quis
		// 					nostrud exercitation ullamco laboris nisi ut aliquip
		// 					ex ea commodo consequat.Lorem ipsum dolor sit amet,
		// 					consectetur adipiscing elit, sed do eiusmod tempor
		// 					incididunt ut labore et dolore magna aliqua. Ut enim
		// 					ad minim veniam, quis nostrud exercitation ullamco
		// 					laboris nisi ut aliquip ex ea commodo consequat.
		// 				</p>
		// 			</div>
		// 		</div>
		// 		<div className="splash-info-section">
		// 			<div className="splash-info-text">
		// 				<h2>Customize Your Profile</h2>
		// 				<p>
		// 					Lorem ipsum dolor sit amet, consectetur adipiscing
		// 					elit, sed do eiusmod tempor incididunt ut labore et
		// 					dolore magna aliqua. Ut enim ad minim veniam, quis
		// 					nostrud exercitation ullamco laboris nisi ut aliquip
		// 					ex ea commodo consequat.Lorem ipsum dolor sit amet,
		// 					consectetur adipiscing elit, sed do eiusmod tempor
		// 					incididunt ut labore et dolore magna aliqua. Ut enim
		// 					ad minim veniam, quis nostrud exercitation ullamco
		// 					laboris nisi ut aliquip ex ea commodo consequat.
		// 				</p>
		// 			</div>
		// 			<div className="splash-info-image">
		// 				<img
		// 					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Screen+Shot+2023-06-15+at+12.15.27+PM.png"
		// 					alt="Description"
		// 				/>
		// 			</div>
		// 		</div>
		// 		<div className="splash-join-section">
		// 			<div className="splashjoin-text-container">
		// 				<h1>SIGN UP TODAY</h1>
		// 				<button
		// 					onClick={handleJoin}
		// 					className="splash-join-btn"
		// 				>
		// 					JOIN
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default SplashPage;
