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
		maxHealth: 50,
		name: "Ninja Shiba",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-ShibaInu.jpg",
	},
	{
		id: 2,
		maxHealth: 50,
		name: "Superhero Panda",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-PandaHero.jpg",
	},
	{
		id: 3,
		maxHealth: 50,
		name: "Cyborg Mouse",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-CyborgMouse.jpg",
	},
];

export const player2Stats = [
	{
		id: 4,
		maxHealth: 50,
		name: "Ninja Shiba",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-ShibaInu.jpg",
	},
	{
		id: 5,
		maxHealth: 50,
		name: "Superhero Panda",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-PandaHero.jpg",
	},
	{
		id: 6,
		maxHealth: 50,
		name: "Cyborg Mouse",
		img: "https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/Fighter-CyborgMouse.jpg",
	},
];
