import { useSelector } from "react-redux";
import "./profilereviewinfo.css";

const InformationSection = ({ userId }) => {
	const profileUser = useSelector((state) => state?.users[userId]);

	const profilePlaceholderImg =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/kitsunelogoorsplash.jpg";

	const onProfileImgError = (e) => {
		e.target.src = profilePlaceholderImg;
	};
	return (
		<div className="info-main4">
			<div className="info-background-box4"></div>
			<div className="info-img-box4">
				<img
					className="info-img4"
					src={profileUser.profileImg}
					alt="profile-user"
					onError={onProfileImgError}
				/>
			</div>
			<div className="info-content4 bubble4">
				<h2 className="info-title4">Comments</h2>
				<p className="info-p4">
					{`This is what ${profileUser.username} thought of the games they've played so far`}
				</p>
			</div>
		</div>
	);
};

export default InformationSection;
