import { Link } from "react-router-dom";
import "./NavButtons.css";

const LoginButton = () => {
	return (
		<Link to="sign-up">
			<button className="login-btn">Login</button>
		</Link>
	);
};

export default LoginButton;
