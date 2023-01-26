import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import { login } from "../../store/session";

const NavigationBar = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const demoUser1 = useSelector((state) => state.users[1]);

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
			<ul>
				<li className="navbar-link">
					<NavLink to="/" exact={true} activeClassName="active">
						Home
					</NavLink>
				</li>
				{sessionUser ? (
					<>
						<li className="navbar-link">
							<LogoutButton />
						</li>
						<li className="navbar-link">
							<NavLink
								to={`/profile/${sessionUser.id}`}
								exact={true}
							>
								Profile
							</NavLink>
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
								Login
							</NavLink>
						</li>
						<li className="navbar-link">
							<NavLink
								to="/sign-up"
								exact={true}
								activeClassName="active"
							>
								Sign Up
							</NavLink>
						</li>
						<li className="barLink">
							<button
								className="demo-login-btn"
								onClick={handleClick}
							>
								Demo
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default NavigationBar;
