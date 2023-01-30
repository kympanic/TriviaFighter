import "../homepage.css";
import ProfilePlayBtn from "../../ProfilePage/ProfilePlayBtn";

const UserMadeTriviaPackage = ({ triviapackage }) => {
	const placeHolderImg =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/defaulttriviaimage.jpg";
	const onImageError = (e) => {
		e.target.src = placeHolderImg;
	};
	return (
		<div className="usermade-trivia-card">
			{triviapackage && (
				<div>
					<img
						className="homepage-usermade-trivia-img"
						src={triviapackage.imageUrl}
						alt="triviapackage.name"
						onError={onImageError}
					/>
					<p>{triviapackage.name}</p>
					<p>{triviapackage.category}</p>
					<p>{triviapackage.difficulty}</p>
					<ProfilePlayBtn trivias={triviapackage.trivias} />
				</div>
			)}
		</div>
	);
};

export default UserMadeTriviaPackage;
