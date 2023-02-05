import { useSelector } from "react-redux";
import "./profilereviewinfo.css";

const InformationSection = ({ userId }) => {
	const profileUser = useSelector((state) => state?.users[userId]);
	return (
		<div className="info-main3">
			<div className="info-background-box3"></div>
			<div className="info-img-box3">
				<img
					className="info-img3"
					src={profileUser.profileImg}
					alt="profile-user"
				/>
			</div>
			<div className="info-content3 bubble3">
				<h2 className="info-title3">Comments</h2>
				<p className="info-p3">
					{`This is what ${profileUser.username} thought of the games they've played so far`}
				</p>
			</div>
		</div>
	);
};

export default InformationSection;
