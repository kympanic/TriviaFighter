import { useHistory } from "react-router-dom";
import "../profilepage.css";
const ProfilePlayBtn = ({ trivias }) => {
	const history = useHistory();

	//converting the data to useable data in options page
	const triviaData = { results: trivias.map((trivia) => trivia) };
	triviaData.results.forEach((result) => {
		result.incorrect_answers = [
			result.incorrectAnswer1,
			result.incorrectAnswer2,
			result.incorrectAnswer3,
		];
		result.correct_answer = result.correctAnswer;
	});

	console.log(triviaData, "original data");

	// const randomElement = data.sort(() => Math.random() - 0.5);
	// console.log(randomElement, "this is randomized data");
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push({
			pathname: "/gameoptionstwo",
			state: { triviaData },
		});
	};

	return (
		<div>
			{triviaData && (
				<button className="play-btn" onClick={handleSubmit}>
					PLAY
				</button>
			)}
		</div>
	);
};

export default ProfilePlayBtn;
