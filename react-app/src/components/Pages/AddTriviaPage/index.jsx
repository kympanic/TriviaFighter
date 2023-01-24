import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddTriviaCardModal from "../../Modals/AddTriviaCard/AddTriviaCardModal";
const AddTriviaPage = () => {
	const [isOpenAddTriviaCard, setIsOpenAddTriviaCard] = useState(false);
	const sessionUser = useSelector((state) => state.session.user);

	return (
		<div>
			{sessionUser && (
				<div>
					<h1>THIS IS TO ADD TRIVIA PAGE</h1>
					{isOpenAddTriviaCard && (
						<AddTriviaCardModal
							setIsOpen={setIsOpenAddTriviaCard}
							sessionUser={sessionUser}
						/>
					)}
					<button onClick={() => setIsOpenAddTriviaCard(true)}>
						Create Trivia!
					</button>
				</div>
			)}
		</div>
	);
};

export default AddTriviaPage;
