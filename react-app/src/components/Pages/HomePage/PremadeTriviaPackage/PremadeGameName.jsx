const PremadeGameName = ({ category }) => {
	// console.log(category, "this is the category");

	if (category === 9) {
		return <h2>General Knowledge</h2>;
	} else if (category === 14) {
		return <h2>Television</h2>;
	} else if (category === 15) {
		return <h2>Video Games</h2>;
	} else if (category === 21) {
		return <h2>Sports</h2>;
	} else if (category === 23) {
		return <h2>History</h2>;
	} else if (category === 26) {
		return <h2>Celebrities</h2>;
	} else if (category === 27) {
		return <h2>Animals</h2>;
	}
};

export default PremadeGameName;
