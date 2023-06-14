import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavbarButton, Dropdown } from "./index.jsx";
import { NavLink, Link } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { login } from "../../store/session";
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

	const handleClick = (e) => {
		e.preventDefault();
		return dispatch(login(demoUser.email, demoUser.password));
	};

	const handleMenuClick = () => setMenuClick(!menuClick);
	const closeMobileMenu = () => setMenuClick(false);

	return (
		<>
			<nav className="navbar">
				{/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					EPIC
					<i class="fab fa-firstdraft" />
				</Link> */}
				<div className="menu-icon" onClick={handleMenuClick}>
					{menuClick ? (
						<FontAwesomeIcon
							className="nav-x-icon"
							icon={faXmark}
						/>
					) : (
						<FontAwesomeIcon
							className="nav-hamburger-icon"
							icon={faBars}
						/>
					)}
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
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
							to="/products"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/contact-us"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Contact Us
						</Link>
					</li>
					<li>
						<Link
							to="/sign-up"
							className="nav-links-mobile"
							onClick={closeMobileMenu}
						>
							Sign Up
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
