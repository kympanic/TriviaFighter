import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import AddReviewModal from "../../Modals/AddReview/AddReviewModal";
import {
	createGameDatasThunk,
	getAllGameDatasThunk,
} from "../../../store/gamedatas";
import { getAllReviewsThunk } from "../../../store/reviews";
import "./gameover.css";

const GameOverPage = () => {
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.session.user.id);
	const reviews = useSelector((state) => Object.values(state.reviews));
	// const triviaData = location.state.triviaData;
	// const winner = location.state.winner;
	// const player1Data = location.state.player1Data;
	// const player2Data = location.state.player2Data;
	const [isOpenAddReview, setIsOpenAddReview] = useState(false);
	const [isOpenReviewBtn, setIsOpenReviewBtn] = useState(true);

	let triviaData;
	let winner;
	let player1Data;
	let player2Data;
	if (!location.state) {
		history.push("/");
	} else {
		triviaData = location.state.triviaData;
		winner = location.state.winner;
		player1Data = location.state.player1Data;
		player2Data = location.state.player2Data;
	}

	const userReviews = reviews?.filter((review) => {
		return review.userId === userId;
	});

	let existingReviews = [];
	if (userReviews) {
		existingReviews = userReviews?.filter((review) => {
			return (
				review.triviaPackageId ===
				triviaData?.results[0].triviaPackageId
			);
		});
	}
	let today = new Date();
	let date =
		today.getFullYear() +
		"-" +
		(today.getMonth() + 1) +
		"-" +
		today.getDate();

	useEffect(() => {
		dispatch(getAllReviewsThunk());
		dispatch(getAllGameDatasThunk());
	}, [dispatch]);

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
		window.history.replaceState({}, document.title);
		history.push("/");
	};

	const handleReviewClick = () => {
		setIsOpenAddReview(true);
	};
	// console.log(logData);
	// console.log(triviaData);
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
				existingReviews.length === 0 &&
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
				{winner ? (
					<button className="gameover-btn" onClick={homeSubmit}>
						LOG DATA
					</button>
				) : (
					<div>
						<h2 className="btn-load-text">...LOADING...</h2>
						{/* <button
							className="gameover-btn"
							onClick={() => history.push("/")}
						>
							HOME
						</button> */}
					</div>
				)}
			</div>
		</div>
	);
};

export default GameOverPage;
