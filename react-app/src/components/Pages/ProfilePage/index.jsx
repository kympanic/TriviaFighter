import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllTriviasPackagesThunk } from "../../../store/triviapackage";
import { getAllUsersThunk } from "../../../store/users";
import AddTriviaButton from "./AddTriviaButton";
import TriviaEditButtons from "./TriviaEditButtons";
import ReviewEditButtons from "./ReviewEditButtons";
import { getAllReviewsThunk } from "../../../store/reviews";
import "./profilepage.css";

const ProfilePage = () => {
	const { userId } = useParams();
	const id = parseInt(userId);
	const dispatch = useDispatch();
	const history = useHistory();
	const profileUser = useSelector((state) => state?.users[userId]);
	const sessionUser = useSelector((state) => state.session.user);
	const allTriviaPackages = useSelector((state) =>
		Object.values(state.triviapackages)
	);
	const allReviews = useSelector((state) => Object.values(state.reviews));

	const profileTriviaPackages = allTriviaPackages.filter((triviaPackage) => {
		return triviaPackage.userId === id;
	});
	const profileReviews = allReviews.filter((review) => {
		return review.userId === id;
	});

	console.log(
		profileTriviaPackages,
		"this is the profile trivia packages I need to work with"
	);

	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
		dispatch(getAllUsersThunk());
		dispatch(getAllReviewsThunk());
	}, [dispatch]);

	const placeHolderImg =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/defaulttriviaimage.jpg";
	const onImageError = (e) => {
		e.target.src = placeHolderImg;
	};

	return (
		<div className="profilepage-main-container">
			{sessionUser && profileUser && profileTriviaPackages && (
				<div>
					<div className="profilepage-header-container">
						<h1>This is the profile page</h1>
					</div>
					<div className="profilepage-info-container">
						<img
							className="profilepage-profile-img"
							src={profileUser.profileImg}
							alt={profileUser.username}
						/>
						<p>{profileUser.username}</p>
						<p>{profileUser.email}</p>
						<p>average rating</p>
					</div>
					<div className="profilepage-content-container">
						{sessionUser.id === id ? (
							<AddTriviaButton sessionUser={sessionUser} />
						) : (
							<></>
						)}
						<h1>My Trivia Packages</h1>
						<div className="profilepage-triviapackage-menu">
							{profileTriviaPackages.map((triviapackage) => (
								<div
									key={triviapackage.name}
									className="profilepage-triviapackage-card"
								>
									<img
										className="profilepage-triviapackage-img"
										src={triviapackage.imageUrl}
										alt={triviapackage.name}
										onError={onImageError}
									/>
									<p>{triviapackage.name}</p>
									<p>Category: {triviapackage.category}</p>
									<p>
										Difficulty: {triviapackage.difficulty}
									</p>
									{sessionUser.id === id &&
										triviapackage.trivias.length < 14 &&
										triviapackage.trivias.length >= 1 && (
											<p>
												You need{" "}
												{14 -
													triviapackage.trivias
														.length}{" "}
												more trivia questions!
											</p>
										)}
									{sessionUser.id === id && (
										<TriviaEditButtons
											triviapackage={triviapackage}
											sessionUser={sessionUser}
										/>
									)}
									{sessionUser.id !== id &&
										triviapackage.trivias.length >= 14 && (
											<div>
												<button>Play</button>
											</div>
										)}
								</div>
							))}
						</div>
					</div>
					<div className="profilepage-reviews-title">
						<h1>Reviews</h1>
					</div>
					<div className="profilepage-comments-container">
						{profileReviews.map((review) => (
							<div
								key={review.id}
								className="profilepage-comments-components"
							>
								<div className="profilepage-comments-info">
									<img
										className="review-triviapackage-img"
										src={review.trivia_package.imageUrl}
										alt={review.trivia_package.name}
										onError={onImageError}
										onClick={() =>
											history.push(
												`/profile/${review.trivia_package.userId}`
											)
										}
									/>
									<p>{review.trivia_package.name}</p>
									<p>rating: {review.rating}</p>
								</div>
								<div className="profilepage-comments-body">
									<p id="profilepage-comment">
										{review.body}
									</p>
								</div>
								<div>
									{sessionUser.id === id && (
										<ReviewEditButtons
											review={review}
											sessionUser={sessionUser}
										/>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfilePage;
