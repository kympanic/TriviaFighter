import { useState } from "react";
import HomepageGameOptionModal from "../../../../Modals/HomepageGameOption/HomepageGameOptionModal";
import PremadeGameName from "../PremadeGameName";
const PremadeTriviaCard = ({ category }) => {
	const [difficulty, setDifficulty] = useState("");
	const [isOpenOption, setIsOpenOption] = useState(false);

	const updateDifficulty = (e) => {
		setDifficulty(e.target.value);
		setIsOpenOption(true);
	};
	console.log(category, "this is the category");

	return (
		<div>
			{category && (
				<div>
					<PremadeGameName category={category} />
					<h3>Image Placeholder</h3>
					<form>
						<label>difficulty</label>
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
							/>
						)}
						<>modal here</>
					</form>
				</div>
			)}
		</div>
	);
};

export default PremadeTriviaCard;
