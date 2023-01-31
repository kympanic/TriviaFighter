import "./packageinfo.css";
import { setDefaultTriviaImage } from "../../../Helpers";
const PackageInfoSection = ({ triviapackage }) => {
	return (
		<div>
			{triviapackage && (
				<div>
					<div>
						<img
							className="addtriviapage-triviapackage-img"
							src={triviapackage.imageUrl}
							alt={triviapackage.name}
							onError={setDefaultTriviaImage}
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
