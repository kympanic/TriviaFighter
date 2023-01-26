import "./premadetrivia.css";
const PremadeGameImg = ({ category }) => {
	// console.log(category, "this is the category");

	if (category === 9) {
		return (
			<img
				className="premade-triviapackage-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/generalknowledgelog.jpg"
				alt="General Knowledge"
			/>
		);
	} else if (category === 14) {
		return (
			<img
				className="premade-triviapackage-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/televisionlog.jpg"
				alt="Television"
			/>
		);
	} else if (category === 15) {
		return (
			<img
				className="premade-triviapackage-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/videogametrivialog.jpg"
				alt="Video Games"
			/>
		);
	} else if (category === 21) {
		return (
			<img
				className="premade-triviapackage-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/sportslog.jpg"
				alt="Sports"
			/>
		);
	} else if (category === 23) {
		return (
			<img
				className="premade-triviapackage-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/historylog.jpg"
				alt="History"
			/>
		);
	} else if (category === 26) {
		return (
			<img
				className="premade-triviapackage-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/unicorncelebrity.jpg"
				alt="Celebrities"
			/>
		);
	} else if (category === 27) {
		return (
			<img
				className="premade-triviapackage-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/animalslog.jpg"
				alt="Animals"
			/>
		);
	}
};

export default PremadeGameImg;
