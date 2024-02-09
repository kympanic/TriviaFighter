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
								<div className="play-btn-start">
									<ProfilePlayBtn
										trivias={triviapackage.trivias}
									/>
								</div>
							)}
						{sessionUser.id === id && (
							<button
								className="flip-btn"
								onClick={() => setFlip(!flip)}
							>
								MORE
							</button>
						)}
					</div>
				) : (
					<div className="back">
						<div className="back-text-container">
							<p className="back-description">
								{triviapackage.description}
							</p>
						</div>

						{sessionUser.id === id && (
							<TriviaEditButtons
								triviapackage={triviapackage}
								sessionUser={sessionUser}
							/>
						)}
						<button
							className="flip-back-btn"
							onClick={() => setFlip(!flip)}
						>
							BACK
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default TriviaSection;
