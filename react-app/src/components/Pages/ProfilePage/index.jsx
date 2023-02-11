import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllTriviasPackagesThunk } from "../../../store/triviapackage";
import { getAllUsersThunk } from "../../../store/users";
import { getAllReviewsThunk } from "../../../store/reviews";
import { getAllGameDatasThunk } from "../../../store/gamedatas";
import AddTriviaButton from "./Buttons/AddTriviaButton";
import ReviewSection from "./ReviewSection";
import TriviaSection from "./TriviaSection";
import ProfileCard from "./ProfileCard";
import GameHistory from "./GameHistory";
import InformationSection from "./InformationSection";
import "./profilepage.css";

const ProfilePage = () => {
	const { userId } = useParams();
	const id = parseInt(userId);
	const dispatch = useDispatch();
	const profileUser = useSelector((state) => state?.users[userId]);
	const sessionUser = useSelector((state) => state.session.user);
	const gameDatas = useSelector((state) => Object.values(state.gamedatas));
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

	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
		dispatch(getAllUsersThunk());
		dispatch(getAllReviewsThunk());
		dispatch(getAllGameDatasThunk());
	}, [dispatch]);

	return (
		<div className="profilepage-main-container">
			{sessionUser && profileUser && profileTriviaPackages && (
				<div>
					<div className="profilepage-header-container">
						<ProfileCard
							profileUser={profileUser}
							triviapackages={profileTriviaPackages}
							sessionUser={sessionUser}
						/>
						<GameHistory
							gameDatas={gameDatas}
							profileUser={profileUser}
							alltrivia={allTriviaPackages}
						/>
					</div>
					<div className="profilepage-content-container">
						{sessionUser.id === id ? (
							<AddTriviaButton sessionUser={sessionUser} />
						) : (
							<div className="create-triviabtn-container"></div>
						)}
						<h1 id="triviapackage-title-txt">
							FEATURED TRIVIA GAMES
						</h1>
						{profileTriviaPackages.length > 0 ? (
							<div className="profilepage-triviapackage-menu">
								{profileTriviaPackages &&
									profileTriviaPackages.map(
										(triviapackage) => (
											<TriviaSection
												key={triviapackage.name}
												triviapackage={triviapackage}
												id={id}
												sessionUser={sessionUser}
											/>
										)
									)}
							</div>
						) : (
							<div className="no-packages-container">
								<h1 className="no-packages-text">
									NO TRIVIA PACKAGES YET
								</h1>
							</div>
						)}
					</div>
					<div className="profilepage-reviews-title">
						{profileReviews.length > 0 ? (
							<InformationSection userId={userId} />
						) : (
							<h1>NO REVIEWS</h1>
						)}
					</div>
					<div className="profilepage-comments-container">
						{profileReviews &&
							profileReviews &&
							profileReviews.map((review) => (
								<ReviewSection
									key={review.id}
									review={review}
									sessionUser={sessionUser}
									id={id}
								/>
							))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfilePage;
