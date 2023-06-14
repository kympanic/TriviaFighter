import { Link } from "react-router-dom";
import "./NavButtons.css";

const SignupButton = () => {
	return (
		<Link to="/login">
			<button className="nav-btn">Signup</button>
		</Link>
	);
};

export default SignupButton;
