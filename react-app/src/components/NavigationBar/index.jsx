import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import { login } from "../../store/session";
import "./navigationbar.css";

const NavigationBar = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const demoUser1 = useSelector((state) => state?.users[1]);

	const demoUser = {
		email: demoUser1?.email,
		password: "password",
	};

	const handleClick = (e) => {
		e.preventDefault();
		return dispatch(login(demoUser.email, demoUser.password));
	};

	return (
		<nav>
			<ul className="navigation-main">
				<li className="navbar-link" id="logo-nav">
					<NavLink to="/" exact={true} activeClassName="active">
						<img
							className="navbar-logo-img"
							src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/logo.jpg"
							alt="trivia-fighter"
						/>
					</NavLink>
				</li>
				<li className="navbar-link">
					<NavLink to="/" exact={true} activeClassName="active">
						HOME
					</NavLink>
				</li>
				<li className="navbar-link">
					<NavLink
						to="/gamefaqs"
						exact={true}
						activeClassName="active"
					>
						GAMEFAQ
					</NavLink>
				</li>
				{sessionUser ? (
					<>
						<li className="navbar-link">
							<NavLink
								to={`/profile/${sessionUser.id}`}
								exact={true}
								activeClassName="active"
							>
								PROFILE
							</NavLink>
						</li>
						<li className="navbar-link" id="logout-btn-container">
							<LogoutButton />
						</li>
					</>
				) : (
					<>
						<li className="navbar-link">
							<NavLink
								to="/login"
								exact={true}
								activeClassName="active"
							>
								LOGIN
							</NavLink>
						</li>
						<li className="navbar-link">
							<NavLink
								to="/sign-up"
								exact={true}
								activeClassName="active"
							>
								SIGNUP
							</NavLink>
						</li>
						<li className="navbar-link" id="demo-btn-container">
							<button
								className="demo-login-btn"
								onClick={handleClick}
							>
								DEMO
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default NavigationBar;
