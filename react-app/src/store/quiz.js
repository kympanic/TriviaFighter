// src/Reducer.js
const initState = {
	index: 0,
};
const quizReducer = (state = initState, action) => {
	switch (action.type) {
		case "SET_INDEX":
			return {
				...state,
				index: action.index,
			};

		default:
			return state;
	}
};
export default quizReducer;
