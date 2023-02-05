import ProfilePlayBtn from "../../ProfilePage/Buttons/ProfilePlayBtn";
import { useState } from "react";
import TriviaDescription from "../../../Modals/TriviaDescription/TriviaDescription";
import { useHistory } from "react-router-dom";
import "../homepage.css";

const UserMadeTriviaPackage = ({ triviapackage }) => {
	const history = useHistory();

	const [isOpenDescription, setIsOpenDescription] = useState(false);
	const placeHolderImg =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/defaulttriviaimage.jpg";
	const onImageError = (e) => {
		e.target.src = placeHolderImg;
	};

	const handleClick = () => {
		history.push(`/profile/${triviapackage?.userId}`);
	};

	return (
		<div className="usermade-trivia-card">
			{triviapackage && (
				<div>
					<img
						onClick={() => setIsOpenDescription(true)}
						className="homepage-usermade-trivia-img"
						src={triviapackage.imageUrl}
						alt="triviapackage.name"
						onError={onImageError}
					/>
					<p onClick={handleClick} className="usermade-trivia-title">
						{triviapackage.name}
					</p>
					<p className="usermade-trivia-text">
						{triviapackage.category}
					</p>
					<p className="usermade-trivia-text">
						{triviapackage.difficulty}
					</p>
					<ProfilePlayBtn trivias={triviapackage.trivias} />
					{isOpenDescription && (
						<TriviaDescription
							setIsOpen={setIsOpenDescription}
							triviapackage={triviapackage}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default UserMadeTriviaPackage;
