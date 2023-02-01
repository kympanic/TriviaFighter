import { useState } from "react";
import TriviaEditButtons from "../Buttons/TriviaEditButtons";
import ProfilePlayBtn from "../Buttons/ProfilePlayBtn";
import TriviaDescription from "../../../Modals/TriviaDescription/TriviaDescription";
import { setDefaultTriviaImage } from "../../../Helpers";
import "../profilepage.css";
const TriviaSection = ({ triviapackage, sessionUser, id }) => {
	const [isOpenDescription, setIsOpenDescription] = useState(false);

	return (
		<div className="profilepage-triviapackage-card">
			<img
				className="profilepage-triviapackage-img"
				src={triviapackage.imageUrl}
				alt={triviapackage.name}
				onError={setDefaultTriviaImage}
				onClick={() => setIsOpenDescription(true)}
			/>
			<p className="triviacard-title-text">{triviapackage.name}</p>
			<p className="triviacard-text">
				Category: {triviapackage.category}
			</p>
			<p className="triviacard-text">
				Difficulty: {triviapackage.difficulty}
			</p>
			<p className="triviacard-text">Rating: {triviapackage.avgRating}</p>
			{sessionUser.id === id && (
				<TriviaEditButtons
					triviapackage={triviapackage}
					sessionUser={sessionUser}
				/>
			)}
			{sessionUser.id !== id && triviapackage.trivias.length >= 14 && (
				<ProfilePlayBtn trivias={triviapackage.trivias} />
			)}
			{isOpenDescription && (
				<TriviaDescription
					setIsOpen={setIsOpenDescription}
					triviapackage={triviapackage}
				/>
			)}
		</div>
	);
};

export default TriviaSection;
