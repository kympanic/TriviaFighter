import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../profilepage.css";

const ProfileCard = ({ profileUser, triviapackages }) => {
	//getting the average rating of the triviapackages for the user
	const averageRatingsArray = triviapackages?.map((trivia) => {
		return parseInt(trivia.avgRating);
	});
	const averageRatings = (
		averageRatingsArray?.reduce((a, b) => a + b, 0) /
		averageRatingsArray?.length
	).toFixed(2);

	const profilePlaceholderImg =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/kitsunelogoorsplash.jpg";

	const onProfileImgError = (e) => {
		e.target.src = profilePlaceholderImg;
	};
	return (
		<div className="profilepage-profilecard-container">
			<img
				className="profilecard-img"
				src={profileUser.profileImg}
				alt={profileUser.username}
				onError={onProfileImgError}
			/>

			<p className="profilepage-username-text">{profileUser.username}</p>

			<div className="email-section">
				<p className="profilepage-email-text">{profileUser.email}</p>
			</div>
			<div className="average-rating-section">
				{averageRatingsArray.length > 0 ? (
					<p className="profilepage-rating-text">
						Rating: {averageRatings}
					</p>
				) : (
					<p>No Rating Yet</p>
				)}
				<FontAwesomeIcon className="header-star-icon" icon={faStar} />
			</div>
		</div>
	);
};

export default ProfileCard;
