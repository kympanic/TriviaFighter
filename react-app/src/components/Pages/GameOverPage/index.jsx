import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import AddReviewModal from "../../Modals/AddReview/AddReviewModal";
import { createGameDatasThunk } from "../../../store/gamedatas";
import "./gameover.css";

const GameOverPage = () => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.session.user.id);
	const triviaData = location.state.triviaData;
	const winner = location.state.winner;
	const player1Data = location.state.player1Data;
	const player2Data = location.state.player2Data;
	const [isOpenAddReview, setIsOpenAddReview] = useState(false);
	const [isOpenReviewBtn, setIsOpenReviewBtn] = useState(true);
	let today = new Date();
	let date =
		today.getFullYear() +
		"-" +
		(today.getMonth() + 1) +
		"-" +
		today.getDate();

	// console.log(date, "this is the date");
	// console.log(player1Data, player2Data);
	// console.log(triviaData, "wow");
	// console.log(triviaData.results[0].triviaPackageId, "hmm?");
	// console.log(winner, "THIS IS THE WINNER DATA");
	const homeSubmit = async (e) => {
		e.preventDefault();
		const newGameData = {
			player_one: player1Data.name,
			player_two: player2Data.name,
			winner: winner.name,
			playdate: date,
			user_id: userId,
			trivia_package_id: triviaData.results[0].triviaPackageId,
		};

		await dispatch(createGameDatasThunk(newGameData));
		history.push("/");
	};

	const handleReviewClick = () => {
		setIsOpenAddReview(true);
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
					{isOpenReviewBtn && (
						<button
							className="gameover-review-btn"
							onClick={handleReviewClick}
						>
							Add Review
						</button>
					)}
					{isOpenAddReview && (
						<AddReviewModal
							setIsOpen={setIsOpenAddReview}
							setIsOpenReviewBtn={setIsOpenReviewBtn}
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
