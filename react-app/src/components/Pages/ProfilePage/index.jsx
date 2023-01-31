import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllTriviasPackagesThunk } from "../../../store/triviapackage";
import { getAllUsersThunk } from "../../../store/users";
import { getAllReviewsThunk } from "../../../store/reviews";
import AddTriviaButton from "./Buttons/AddTriviaButton";
import ReviewSection from "./ReviewSection";
import TriviaSection from "./TriviaSection";
import ProfileCard from "./ProfileCard";
import "./profilepage.css";

const ProfilePage = () => {
	const { userId } = useParams();
	const id = parseInt(userId);
	const dispatch = useDispatch();
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

	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
		dispatch(getAllUsersThunk());
		dispatch(getAllReviewsThunk());
	}, [dispatch]);

	// console.log(profileReviews.length, "THIS IS THE LENGTH");

	return (
		<div className="profilepage-main-container">
			{sessionUser && profileUser && profileTriviaPackages && (
				<div>
					<div className="profilepage-header-container">
						<h1>This is the profile page</h1>
					</div>
					<ProfileCard
						profileUser={profileUser}
						triviapackages={profileTriviaPackages}
					/>
					<div className="profilepage-content-container">
						{sessionUser.id === id ? (
							<AddTriviaButton sessionUser={sessionUser} />
						) : (
							<></>
						)}
						<h1>My Trivia Packages</h1>
						<div className="profilepage-triviapackage-menu">
							{profileTriviaPackages &&
								profileTriviaPackages.map((triviapackage) => (
									<TriviaSection
										triviapackage={triviapackage}
										id={id}
										sessionUser={sessionUser}
									/>
								))}
						</div>
					</div>
					<div className="profilepage-reviews-title">
						<h1>Reviews</h1>
					</div>
					<div className="profilepage-comments-container">
						{profileReviews &&
							profileReviews.length > 0 &&
							profileReviews.map((review) => (
								<ReviewSection
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
