import React from "react";
import "../profilepage.css";

const ProfileCard = ({ profileUser, triviapackages }) => {
	console.log(triviapackages, "this is from the profile card");
	return (
		<div className="profilepage-info-container">
			<img
				className="profilecard-img"
				src={profileUser.profileImg}
				alt={profileUser.username}
			/>
			<p>{profileUser.username}</p>
			<p>{profileUser.email}</p>
			<p>average rating</p>
		</div>
	);
};

export default ProfileCard;
