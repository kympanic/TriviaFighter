import "./infosection.css";

//component that breaks up each section in the homepage
//that offers info on what the user can do on the page
const InformationSection = () => {
	return (
		<div className="info-main">
			<div className="info-img-box">
				<img
					className="info-img"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/cutehamster.jpg"
					alt="cute-hamster"
				/>
				<div className="info-background-box"></div>
			</div>
			<div className="info-content">
				<h2 className="info-title">
					What are you waiting for? Play right away!
				</h2>
				<p className="info-p">
					Prefer to just get straight into a game? Here you can find
					random trivia questions that were made by Trivia Fighter!
				</p>
				<p className="info-p">
					It's as simple as choosing the difficulty and clicking PLAY!
				</p>
			</div>

			<div className="info-img-box">
				<img
					className="info-img"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/cute-cool-cat-wearing-glasses-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-4268.webp"
					alt="cute-hamster"
				/>
				<div className="info-background-boxb"></div>
			</div>
		</div>
	);
};

export default InformationSection;
