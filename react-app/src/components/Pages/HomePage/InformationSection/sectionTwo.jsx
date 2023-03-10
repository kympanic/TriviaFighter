import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./infosection.css";

const InformationSectionTwo = () => {
	const sessionUserId = useSelector((state) => state.session.user.id);

	const history = useHistory();
	const handleClick = () => {
		history.push(`/profile/${sessionUserId}`);
	};
	return (
		<div className="info-main2">
			<div className="info-img-box2">
				<img
					className="info-img2a"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/videogamefatcat.jpg"
					alt="fatcat-playing-videogames"
				/>
				<div className="info-background-box2"></div>
			</div>
			<div className="info-content2">
				<h2 className="info-title2">Community Created Trivia</h2>
				<p className="info-p2">
					Here you can find all the trivia games made by fellow users!
					Search by name,category, or difficulty and click PLAY!
				</p>
				<p className="info-p2">
					Feeling smart and creative? Create your own TRIVIA PACKAGE
					for others to PLAY
				</p>
				<button onClick={handleClick} className="info-button2">
					CREATE
				</button>
			</div>
			<div className="info-img-box2">
				<img
					className="info-img2b"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/fightingkangaroo.jpg"
					alt="fighting-kangaroo"
				/>
				<div className="info-background-boxc"></div>
			</div>
		</div>
	);
};

export default InformationSectionTwo;
