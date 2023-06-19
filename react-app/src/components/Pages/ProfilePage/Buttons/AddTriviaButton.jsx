import "../profilepage.css";

import { useHistory } from "react-router-dom";

const AddTriviaButton = ({ sessionUser }) => {
	const history = useHistory();

	return (
		<div className="create-triviabtn-container">
			<button
				className="add-trivia-btn"
				onClick={() =>
					history.push({
						pathname: `/triviapackage/new`,
					})
				}
			>
				Create Trivia Package
			</button>
		</div>
	);
};

export default AddTriviaButton;
