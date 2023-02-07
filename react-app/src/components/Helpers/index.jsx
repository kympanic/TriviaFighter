//helper functions that are used in multiple components

//timeout
export const wait = (ms) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
		return () => clearTimeout();
	});

//If trivia image is broken, sets a default image
export const setDefaultTriviaImage = (e) => {
	let placeHolderImg =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/defaulttriviaimage.jpg";
	e.target.src = placeHolderImg;
};

//Get random integer up to max
export const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

//Damage calculators (flat damage currently)
export const triviaCorrect = ({ attacker, receiver }) => {
	const receivedDamage = 30;
	const finalDamage = receivedDamage;
	return finalDamage;
};
export const triviaIncorrect = ({ attacker, receiver }) => {
	const receivedDamage = 15;
	const finalDamage = receivedDamage;
	return finalDamage;
};

//Character data for character selection
export const player1Stats = [
	{
		id: 1,
		maxHealth: 100,
		name: "Ninja Shiba",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-ShibaInu.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 2,
		maxHealth: 100,
		name: "Superhero Panda",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-PandaHero.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 3,
		maxHealth: 100,
		name: "Cyborg Mouse",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-CyborgMouse.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];

export const player2Stats = [
	{
		id: 4,
		maxHealth: 100,
		name: "Cool Cat",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/cute-cool-cat-wearing-glasses-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-4268.webp",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 5,
		maxHealth: 100,
		name: "Scrappy Roo",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/fightingkangaroo.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: 6,
		maxHealth: 100,
		name: "Wamster Hamster",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/cutehamster.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];
