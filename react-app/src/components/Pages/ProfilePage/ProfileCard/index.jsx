import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
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

	return (
		<div className="profilepage-profilecard-container">
			<img
				className="profilecard-img"
				src={profileUser.profileImg}
				alt={profileUser.username}
			/>

			<p className="profilepage-username-text">{profileUser.username}</p>

			<div className="email-section">
				<p className="profilepage-email-text">{profileUser.email}</p>
			</div>
			<div className="average-rating-section">
				<p className="profilepage-rating-text">
					Rating: {averageRatings}
				</p>
				<FontAwesomeIcon className="header-star-icon" icon={faStar} />
			</div>
		</div>
	);
};

export default ProfileCard;
