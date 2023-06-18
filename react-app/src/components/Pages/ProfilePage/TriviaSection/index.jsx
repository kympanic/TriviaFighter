import { useState } from "react";
import TriviaEditButtons from "../Buttons/TriviaEditButtons";
import ProfilePlayBtn from "../Buttons/ProfilePlayBtn";
import { setDefaultTriviaImage } from "../../../Helpers";

import "./triviasection.css";
const TriviaSection = ({ triviapackage, sessionUser, id }) => {
	const [flip, setFlip] = useState(false);
	return (
		<>
			<div className={`triviacard ${flip ? "flip" : ""}`}>
				{!flip ? (
					<div className="front">
						<div>
							<img
								className="profilepage-triviapackage-img"
								src={triviapackage.imageUrl}
								alt={triviapackage.name}
								onError={setDefaultTriviaImage}
							/>
						</div>

						<p className="triviacard-title-text">
							{triviapackage.name}
						</p>
						<p className="triviacard-text">
							Category: {triviapackage.category}
						</p>
						<p className="triviacard-text">
							Difficulty: {triviapackage.difficulty}
						</p>
						<p className="triviacard-text">
							Rating: {triviapackage.avgRating}
						</p>
						{sessionUser.id !== id &&
							triviapackage.trivias.length >= 14 && (
								<ProfilePlayBtn
									trivias={triviapackage.trivias}
								/>
							)}
						{sessionUser.id === id && (
							<button onClick={() => setFlip(!flip)}>More</button>
						)}
					</div>
				) : (
					<div className="back">
						<p>{triviapackage.description}</p>
						{sessionUser.id === id && (
							<TriviaEditButtons
								triviapackage={triviapackage}
								sessionUser={sessionUser}
							/>
						)}
						<button onClick={() => setFlip(!flip)}>back</button>
					</div>
				)}
			</div>
		</>
	);
};

export default TriviaSection;
