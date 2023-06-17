import { useState } from "react";
import AddTriviaPackageModal from "../../../Modals/AddTriviaPackage/AddTriviaPackageModal";
import "../profilepage.css";

import { useHistory } from "react-router-dom";

const AddTriviaButton = ({ sessionUser }) => {
	// const [isOpenAddTriviaPackage, setIsOpenAddTriviaPackage] = useState(false);
	const history = useHistory();

	console.log(sessionUser, "before we send it over");
	return (
		<div className="create-triviabtn-container">
			<button
				className="add-trivia-btn"
				onClick={() =>
					history.push({
						pathname: `/triviapackage/new`,
					})
				}
				// onClick={() => setIsOpenAddTriviaPackage(true)}
			>
				Create Trivia Package
			</button>
			{/* {isOpenAddTriviaPackage && (
				<AddTriviaPackageModal
					setIsOpen={setIsOpenAddTriviaPackage}
					sessionUser={sessionUser}
				/>
			)} */}
		</div>
	);
};

export default AddTriviaButton;
