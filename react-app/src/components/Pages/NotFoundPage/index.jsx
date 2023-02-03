import { useHistory } from "react-router-dom";
import "./notfoundpage.css";

const NotFoundPage = () => {
	const history = useHistory();

	const handleHome = (e) => {
		e.preventDefault();
		history.push("/");
	};

	return (
		<div className="notfound-container">
			<div className="notfound-content">
				<img
					className="notfound-img"
					src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/monkey+confused.jpg"
					alt=""
				/>
				<h1 className="notfound-txt">PAGE NOT FOUND</h1>
				<button onClick={handleHome} className="notfound-btn">
					HOME
				</button>
			</div>
		</div>
	);
};

export default NotFoundPage;
