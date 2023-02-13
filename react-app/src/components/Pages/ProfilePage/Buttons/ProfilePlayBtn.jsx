import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
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

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push({
			pathname: "/gameoptionstwo",
			state: { triviaData },
		});
	};

	return (
		<div className="play-btn-container">
			{triviaData && (
				<FontAwesomeIcon
					onClick={handleSubmit}
					className="profile-play-btn"
					icon={faPlay}
				/>
			)}
		</div>
	);
};

export default ProfilePlayBtn;
