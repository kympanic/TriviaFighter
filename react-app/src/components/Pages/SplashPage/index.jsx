import { useDispatch, useSelector } from "react-redux";
import "./splashpage.css";
import { useHistory } from "react-router-dom";
import { login } from "../../../store/session";

const SplashPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const demoUser1 = useSelector((state) => state?.users[1]);

	const handleJoin = () => {
		history.push("/sign-up");
	};
	const handleLogin = () => {
		history.push("/login");
	};

	const demoUser = {
		email: demoUser1?.email,
		password: "password",
	};

	const handleClick = () => {
		return dispatch(login(demoUser.email, demoUser.password));
	};
	return (
		<main>
			<div className="container grid grid--3-cols splash-main margin-t-large">
				<div className="splash splash-section-1">
					<div className="splash-1-textbox">
						<p className="splash-1-title">Trivia Fighter</p>
						<h2>Fun-filled Trivia.</h2>
						<p className="splash-1-text">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Numquam voluptate fuga laborum iure, odio
							deserunt. Ipsum recusandae, aut ea voluptates
							eligendi reprehenderit quo repudiandae velit itaque
							dignissimos nulla ratione architecto?
						</p>
						<button onClick={handleLogin} className="section-1-btn">
							Play now
						</button>
					</div>
					<div className="splash-1-imgbox">
						<img
							className="section1-img"
							src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/generalknowledgelog.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="splash splash-section-2">
					<img
						className="section2-img"
						src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/2054.jpg"
						alt=""
					/>
					<h3>An entertaining experience for the whole family</h3>
					<p>Play Together!</p>
				</div>
				<div className="splash splash-section-3">
					<p className="splash-3-title">create</p>
					<h3 className="splash-subtitle">Custom Questions</h3>
					<p className="splash-text">
						Tired of answering the same questions? Use our intuitive
						question generator.
					</p>
				</div>
				<div className="splash splash-section-4">
					<div className="splash-img-container">
						<img
							className="splash-fun-img"
							src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/sushifight.jpg"
							alt=""
						/>
					</div>

					<h3 className="splash-subtitle">Knowledge Battle</h3>
					<p className="splash-text">
						Play locally with your friends and answer correctly to
						become the champion.
					</p>
				</div>
				<div className="splash splash-section-5">
					<div className="splash-img-container">
						<img
							className="splash-fun-img"
							src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/unicornwithballoon.jpg"
							alt=""
						/>
					</div>
					<h3 className="splash-subtitle">Character Select</h3>
					<p className="splash-text">
						Choose among different unique avatars to battle
						alongside you.
					</p>
				</div>

				<div className="splash splash-section-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 splash-6-icon"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
						/>
					</svg>
					<h3 className="splash-subtitle">
						Choose between player and AI created games
					</h3>
				</div>
				<div className="splash splash-section-7">
					<button className="btn-splash7" onClick={handleClick}>
						DEMO
					</button>
				</div>
				<div className="splash splash-section-8">
					<h2>Trivia Fighter</h2>
					<p>Don't waste another second. Join today!</p>
					<div className="splash-btn-section">
						<button>Sign up</button>
						<button>Login</button>
					</div>
				</div>
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
