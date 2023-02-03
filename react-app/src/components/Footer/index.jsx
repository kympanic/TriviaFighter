import "./footer.css";

const Footer = () => {
	return (
		<div className="main">
			<div className="links-container">
				<a
					className="footer-link"
					href="https://github.com/kympanic/TriviaFighter"
				>
					ABOUT
				</a>
				<a className="footer-link" href="https://github.com/kympanic">
					CREATOR
				</a>
				<a
					className="footer-link"
					href="https://github.com/kympanic/TriviaFighter/blob/main/README.md"
				>
					README
				</a>
			</div>
			<div className="footer-text">© 2023, Trivia Fighter, Inc.</div>
		</div>
	);
};

export default Footer;
