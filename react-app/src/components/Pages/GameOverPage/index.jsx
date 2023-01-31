import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AddReviewModal from "../../Modals/AddReview/AddReviewModal";

import "./gameover.css";

const GameOverPage = () => {
	const location = useLocation();
	const history = useHistory();
	const triviaData = location.state.triviaData;
	const winner = location.state.winner;

	const [isOpenAddReview, setIsOpenAddReview] = useState(false);

	console.log(triviaData, "wow");
	console.log(triviaData.results[0].triviaPackageId, "hmm?");
	console.log(winner, "THIS IS THE WINNER DATA");
	const homeSubmit = (e) => {
		e.preventDefault();
		history.push("/");
	};
	return (
		<div className="gameover-main-container">
			<div>
				<h1 className="gameover-title">THANKS FOR PLAYING</h1>
			</div>
			<div>
				<h1 className="gameover-text">GAME OVER</h1>
			</div>
			{winner ? (
				<div>
					<h2 className="winner-text">{`The winner is ${winner?.name}`}</h2>
				</div>
			) : (
				<div>
					<h2 className="winner-text">...Loading...</h2>
				</div>
			)}

			{triviaData && triviaData.results[0]?.triviaPackageId && (
				<div className="gameover-review-container">
					<button
						className="gameover-review-btn"
						onClick={() => setIsOpenAddReview(true)}
					>
						Add Review
					</button>
					{isOpenAddReview && (
						<AddReviewModal
							setIsOpen={setIsOpenAddReview}
							id={triviaData.results[0].triviaPackageId}
						/>
					)}
				</div>
			)}
			<div className="gameover-home-btn-container">
				<button className="gameover-home-btn" onClick={homeSubmit}>
					Return to Home
				</button>
			</div>
		</div>
	);
};

export default GameOverPage;
