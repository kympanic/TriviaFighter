import "./gamefaqs.css";
import { useState } from "react";
const GameFaqsPage = () => {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	};

	return (
		<div className="main-wrapper">
			<h1 className="gamefaq-title">GAMEFAQS</h1>
			<div className="accordion">
				{data.map((item, i) => (
					<div key={i} className="item">
						<div className="title" onClick={() => toggle(i)}>
							<h3>{item.question}</h3>
							<span className="span-icon">
								{selected === i ? "-" : "+"}
							</span>
						</div>
						<div
							className={
								selected === i ? "content show" : "content"
							}
						>
							{item.answer}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const data = [
	{
		question: "What is Trivia Fighter?",
		answer: "Trivia Fighter is an app where you can create trivia questions and challenge your friends in a battle of wits. After you choose your trivia package, 2 players will be prompted to choose an avatar that will display in the trivia battle. Once in the game, two players will take turns and answer questions to lower the opposing players hp. Be careful! If you get the question wrong, you also do damage to yourself! The person with remaining hp wins!",
	},
	{
		question: "How can I play a game?",
		answer: "Easy! Just sign up/login to your account and any games that are available to play are displayed on the home screen If you want to play an ai generated trivia game, just choose the difficulty and follow the prompts! Otherwise, just choose play and start your game. You can also play games directly off of other users profile pages!",
	},
	{
		question: "I want to play online with friends",
		answer: "Unfortunately the app does not offer online play at this time. The team is actively working on getting this feature up and running as soon as possible!",
	},
	{
		question: "What can I do in my profile page?",
		answer: "Every user has their own profile page which shows their information(username,email, etc). The average rating for each profile is the average rating from other users reviews on their trivia packages. You can see your reviews of games you've played and edit/delete them accordingly. There is also a trivia section where you can create your own trivia questions! Finally, you can see your match history from previous matches",
	},
	{
		question: "How can I create my own trivia?",
		answer: "First start by clicking the create trivia package button and enter the options for your trivia package. Once created, the game will show up in your list of trivia packages. Here you can add trivia questions to your game, or edit/delete your trivia package if you made a mistake. Once you're trivia package has a minimum of 14 questions, it will show up on the homescreen for you to play! ",
	},
	{
		question: "I don't want to create all those questions",
		answer: "No worries! If you run out of questions to add, you can generate some sample questions, depending on your category and difficulty. Or, you can always come back later and complete it. If you want to change your questions, you can always edit/delete in the add trivia page",
	},
	{
		question: "How many more questions do I need for my trivia package?",
		answer: "In the add trivia page, you can see a completion bar in your list of questions. Once it fills up all the way, you're ready,set, PLAY!",
	},
	{
		question: "My trivia package isn't showing up to play",
		answer: "Remember, you need a minimum of 14 questions in your trivia game for it to be available to play",
	},
	{
		question: "How do I add a review?",
		answer: "A user can only add a review after playing a user made trivia game. (You can not add a review for a ai generated trivia package) Once a game is completed, you can add one review to the game you played. Help the community by answering honestly of what you thought of the game! ",
	},
];
export default GameFaqsPage;
