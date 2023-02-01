import { useHistory } from "react-router-dom";
import { setDefaultTriviaImage } from "../../../Helpers";
import "./packageinfo.css";

const PackageInfoSection = ({ triviapackage, sessionUser }) => {
	const history = useHistory();

	const handleClick = (e) => {
		history.push(`/profile/${sessionUser.id}`);
	};
	return (
		<div>
			{triviapackage && (
				<div className="triviapackage-content-container">
					<img
						className="addtriviapage-triviapackage-img"
						src={triviapackage.imageUrl}
						alt={triviapackage.name}
						onError={setDefaultTriviaImage}
					/>
					<p>Category: {triviapackage.category}</p>
					<p>Difficulty: {triviapackage.difficulty}</p>
				</div>
			)}
			<div className="triviapackage-btn-container">
				<button
					className="triviapackage-profile-btn"
					onClick={handleClick}
				>
					PROFILE
				</button>
			</div>
		</div>
	);
};

export default PackageInfoSection;
