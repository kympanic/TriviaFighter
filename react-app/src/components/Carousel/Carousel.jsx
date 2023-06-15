import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./carousel.css";

const MAX_VISIBILITY = 3;

export const Card = ({ name, img, description }) => (
	<div className="card">
		<h2>{name}</h2>
		<div className="char-img-container">
			<img className="splash-char-img" src={img} alt={name} />
		</div>
	</div>
);

const Carousel = ({ children }) => {
	const [active, setActive] = useState(2);
	const count = React.Children.count(children);

	return (
		<div className="carousel">
			{active > 0 && (
				<button
					className="nav left"
					onClick={() => setActive((i) => i - 1)}
				>
					<FontAwesomeIcon
						className="chevron-left"
						icon={faChevronLeft}
					/>
				</button>
			)}
			{React.Children.map(children, (child, i) => (
				<div
					className="carousel-card-container"
					style={{
						"--active": i === active ? 1 : 0,
						"--offset": (active - i) / 3,
						"--direction": Math.sign(active - i),
						"--abs-offset": Math.abs(active - i) / 3,
						"pointer-events": active === i ? "auto" : "none",
						opacity:
							Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
						display:
							Math.abs(active - i) > MAX_VISIBILITY
								? "none"
								: "block",
					}}
				>
					{child}
				</div>
			))}
			{active < count - 1 && (
				<button
					className="nav right"
					onClick={() => setActive((i) => i + 1)}
				>
					<FontAwesomeIcon
						className="chevron-right"
						icon={faChevronRight}
					/>
				</button>
			)}
		</div>
	);
};

export default Carousel;
