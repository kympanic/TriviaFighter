import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import AddReviewModal from "../../Modals/AddReview/AddReviewModal";
import { createGameDatasThunk } from "../../../store/gamedatas";
import "./gameover.css";
import ReactHowler from "react-howler";

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
				<img
					className="gameover-img"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/gameoverbackground.png"
					alt=""
				/>
			</div>
			{winner ? (
				<div className="winner-text-container">
					<h1 className="winner-text">{`The winner is ${winner?.name}`}</h1>
				</div>
			) : (
				<div>
					<h2 className="winner-text">...LOADING...</h2>
				</div>
			)}

			{triviaData &&
				triviaData.results[0]?.triviaPackageId &&
				userId !== triviaData.results[0]?.userId && (
					<div className="gameover-review-container">
						{isOpenReviewBtn && (
							<button
								className="gameover-btn"
								onClick={handleReviewClick}
							>
								ADD REVIEW
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
				<button className="gameover-btn" onClick={homeSubmit}>
					LOG DATA
				</button>
			</div>
		</div>
	);
};

export default GameOverPage;
