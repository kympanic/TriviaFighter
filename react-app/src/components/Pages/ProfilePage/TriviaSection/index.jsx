import TriviaEditButtons from "../Buttons/TriviaEditButtons";
import ProfilePlayBtn from "../Buttons/ProfilePlayBtn";
import { setDefaultTriviaImage } from "../../../Helpers";
const TriviaSection = ({ triviapackage, sessionUser, id }) => {
	return (
		<div
			key={triviapackage.name}
			className="profilepage-triviapackage-card"
		>
			<img
				className="profilepage-triviapackage-img"
				src={triviapackage.imageUrl}
				alt={triviapackage.name}
				onError={setDefaultTriviaImage}
			/>
			<p>{triviapackage.name}</p>
			<p>Category: {triviapackage.category}</p>
			<p>Difficulty: {triviapackage.difficulty}</p>
			{sessionUser.id === id &&
				triviapackage.trivias.length < 14 &&
				triviapackage.trivias.length >= 1 && (
					<p>
						You need {14 - triviapackage.trivias.length} more trivia
						questions!
					</p>
				)}
			{sessionUser.id === id && (
				<TriviaEditButtons
					triviapackage={triviapackage}
					sessionUser={sessionUser}
				/>
			)}
			{sessionUser.id !== id && triviapackage.trivias.length >= 14 && (
				<ProfilePlayBtn trivias={triviapackage.trivias} />
			)}
		</div>
	);
};

export default TriviaSection;
