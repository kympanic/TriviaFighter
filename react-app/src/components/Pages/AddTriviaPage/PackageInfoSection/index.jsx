import "./packageinfo.css";

const PackageInfoSection = ({ triviapackage }) => {
	const placeHolderImg =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/defaulttriviaimage.jpg";
	const onImageError = (e) => {
		e.target.src = placeHolderImg;
	};

	return (
		<div>
			{triviapackage && (
				<div>
					<div>
						<img
							className="addtriviapage-triviapackage-img"
							src={triviapackage.imageUrl}
							alt={triviapackage.name}
							onError={onImageError}
						/>
						<p>{triviapackage.name}</p>
						<p>Category: {triviapackage.category}</p>
						<p>Difficulty: {triviapackage.difficulty}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default PackageInfoSection;
