import { useState } from "react";
import AddTriviaPackageModal from "../../../Modals/AddTriviaPackage/AddTriviaPackageModal";

const AddTriviaButton = ({ sessionUser }) => {
	const [isOpenAddTriviaPackage, setIsOpenAddTriviaPackage] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpenAddTriviaPackage(true)}>
				Create Trivia!
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
