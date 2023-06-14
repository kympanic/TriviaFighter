import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../store/session";
import { logout } from "../../store/session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const demoUser1 = useSelector((state) => state?.users[1]);
	const [menuClick, setMenuClick] = useState(false);

	const demoUser = {
		email: demoUser1?.email,
		password: "password",
	};

	const handleMenuClick = () => setMenuClick(!menuClick);
	const closeMobileMenu = () => setMenuClick(false);

	const handleClick = () => {
		closeMobileMenu();
		return dispatch(login(demoUser.email, demoUser.password));
	};

	const onLogout = async (e) => {
		closeMobileMenu();
		await dispatch(logout());
	};

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img
						className="navbar-logo-img"
						src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/logo.jpg"
						alt="trivia-fighter"
					/>
				</Link>
				<div className="menu-icon" onClick={handleMenuClick}>
					{menuClick ? (
						<FontAwesomeIcon
							className="nav-x-icon"
							icon={faXmark}
						/>
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</div>
				<ul className={menuClick ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link
							to="/"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/gamefaqs"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Gamefaq
						</Link>
					</li>
					{sessionUser ? (
						<>
							<li className="nav-item">
								<Link
									to={`/profile/${sessionUser.id}`}
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Profile
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/"
									className="nav-links"
									onClick={onLogout}
								>
									Logout
								</Link>
							</li>
						</>
					) : (
						<>
							<li className="nav-item">
								<Link
									to="/login"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/sign-up"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Signup
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/"
									className="nav-links"
									onClick={handleClick}
								>
									Demo
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
