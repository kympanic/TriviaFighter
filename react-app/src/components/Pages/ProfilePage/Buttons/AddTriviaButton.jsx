import { useState } from "react";
import AddTriviaPackageModal from "../../../Modals/AddTriviaPackage/AddTriviaPackageModal";
import "../profilepage.css";

const AddTriviaButton = ({ sessionUser }) => {
	const [isOpenAddTriviaPackage, setIsOpenAddTriviaPackage] = useState(false);

	return (
		<div className="create-triviabtn-container">
			<button
				className="add-trivia-btn"
				onClick={() => setIsOpenAddTriviaPackage(true)}
			>
				Create Trivia Package
			</button>
			{isOpenAddTriviaPackage && (
				<AddTriviaPackageModal
					setIsOpen={setIsOpenAddTriviaPackage}
					sessionUser={sessionUser}
				/>
			)}
		</div>
	);
};

export default AddTriviaButton;
