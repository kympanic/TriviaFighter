import "./infosection.css";

const InformationSectionTwo = ({ infoTexts }) => {
	return (
		<div className="info-main2">
			<div className="info-content2">
				<h2 className="info-title2">{infoTexts.title}</h2>
				<p className="info-p2">{infoTexts.paragraph}</p>
			</div>
		</div>
	);
};

export default InformationSectionTwo;
