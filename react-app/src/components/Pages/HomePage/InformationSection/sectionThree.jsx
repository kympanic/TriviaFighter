import { useHistory } from "react-router-dom";
import "./infosection.css";

const InformationSectionThree = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push(`/gamefaqs`);
	};
	return (
		<div className="info-main3">
			<div className="info-background-box3"></div>
			<div className="info-img-box3">
				<img
					className="info-img3"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/monkey+confused.jpg"
					alt="fatcat-playing-videogames"
				/>
			</div>
			<div className="info-content3 bubble3">
				<h2 className="info-title3">
					Lost? Don't know where to start?
				</h2>
				<p className="info-p3">
					Its OK! Life can get confusing. We could all use a little
					help sometimes
				</p>
				<p className="info-p3">
					Go to our GAMEFAQS page for answers to any commonly asked
					questions!
				</p>
				<button className="info-button3" onClick={handleClick}>
					GAMEFAQ
				</button>
			</div>
		</div>
	);
};

export default InformationSectionThree;
