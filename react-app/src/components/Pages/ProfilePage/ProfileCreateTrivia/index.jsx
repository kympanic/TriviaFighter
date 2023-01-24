import { useHistory } from "react-router-dom";

const ProfileCreateTrivia = ({ id, sessionUser }) => {
	const userId = parseInt(id);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push("/");
	};

	return (
		<div>
			{sessionUser.id === userId ? (
				<button onClick={handleSubmit}>Create Trivia!</button>
			) : (
				<></>
			)}
		</div>
	);
};

export default ProfileCreateTrivia;
