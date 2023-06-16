import "./infosection.css";

const InformationSectionTwo = ({ infoTexts }) => {
	return (
		<div className="info-main2">
			<div className="info-img-box2">
				<img
					className="info-img2a"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/videogamefatcat.jpg"
					alt="fatcat-playing-videogames"
				/>
				{/* <div className="info-background-box2"></div> */}
			</div>
			<div className="info-content2">
				<h2 className="info-title2">{infoTexts.title}</h2>
				<p className="info-p2">{infoTexts.paragraph}</p>
			</div>
			<div className="info-img-box2">
				<img
					className="info-img2b"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/fightingkangaroo.jpg"
					alt="fighting-kangaroo"
				/>
				{/* <div className="info-background-boxc"></div> */}
			</div>
		</div>
	);
};

export default InformationSectionTwo;
