import React from "react";

const PremadeGameName = ({ category }) => {
	// console.log(category, "this is the category");

	if (category === 9) {
		return (
			<div>
				<h1>General Knowledge</h1>
			</div>
		);
	} else if (category === 14) {
		return (
			<div>
				<h1>Television</h1>
			</div>
		);
	} else if (category === 15) {
		return (
			<div>
				<h1>Video Games</h1>
			</div>
		);
	} else if (category === 21) {
		return (
			<div>
				<h1>Sports</h1>
			</div>
		);
	} else if (category === 23) {
		return (
			<div>
				<h1>History</h1>
			</div>
		);
	} else if (category === 26) {
		return (
			<div>
				<h1>Celebrities</h1>
			</div>
		);
	} else if (category === 27) {
		return (
			<div>
				<h1>Animals</h1>
			</div>
		);
	}
};

export default PremadeGameName;
