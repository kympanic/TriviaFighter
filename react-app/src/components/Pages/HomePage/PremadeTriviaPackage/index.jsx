import { useState } from "react";
import HomepageGameOptionModal from "../../../Modals/HomepageGameOption/HomepageGameOptionModal";
import PremadeGameName from "./PremadeGameName";
import PremadeGameImg from "./PremadeGameImg";
import "./premadetrivia.css";

const PremadeTriviaPackage = ({ category }) => {
	const [difficulty, setDifficulty] = useState("");
	const [isOpenOption, setIsOpenOption] = useState(false);

	const updateDifficulty = (e) => {
		setDifficulty(e.target.value);
		setIsOpenOption(true);
	};

	return (
		<div className="premade-trivia-card">
			{category && (
				<div>
					<PremadeGameName category={category} />
					<PremadeGameImg category={category} />
					<form className="premade-difficulty-form">
						<label>Difficulty: </label>
						<select value={difficulty} onChange={updateDifficulty}>
							<option value="--">--</option>
							<option value="Easy">EASY</option>
							<option value="Medium">MEDIUM</option>
							<option value="Hard">HARD</option>
						</select>
						{isOpenOption && (
							<HomepageGameOptionModal
								setIsOpen={setIsOpenOption}
								difficulty={difficulty}
								category={category}
								setDifficulty={setDifficulty}
							/>
						)}
					</form>
				</div>
			)}
		</div>
	);
};

export default PremadeTriviaPackage;
