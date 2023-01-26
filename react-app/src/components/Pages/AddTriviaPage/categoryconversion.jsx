export const categoryConversion = (category) => {
	if (category === "General Knowledge") {
		return 9;
	} else if (category === "Entertainment: Television") {
		return 14;
	} else if (category === "Entertainment: Video Games") {
		return 15;
	} else if (category === "Sports") {
		return 21;
	} else if (category === "History") {
		return 23;
	} else if (category === "Celebrities") {
		return 26;
	} else if (category === "Animals") {
		return 27;
	}
};
