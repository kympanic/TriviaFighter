const LOAD_GAMEDATAS = "reviews/LOAD_GAMEDATAS";

const loadGameDatas = (payload) => {
	return {
		type: LOAD_GAMEDATAS,
		payload,
	};
};

//THUNKS

// GET all gamedatas
export const getAllGameDatasThunk = () => async (dispatch) => {
	const response = await fetch(`/api/gamedatas`);
	if (response.ok) {
		const data = await response.json();
		dispatch(loadGameDatas(data));
		return data;
	}
};

//CREATE Game Data
export const createGameDatasThunk = (data) => async (dispatch) => {
	const newGameData = JSON.stringify(data);

	const response = await fetch(`/api/gamedatas`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: newGameData,
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(loadGameDatas(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

//REDUCER
const initialState = {};
const gamedataReducer = (state = initialState, action) => {
	let newState = { ...state };
	switch (action.type) {
		case LOAD_GAMEDATAS:
			return { ...newState, ...action.payload };
		default:
			return state;
	}
};

export default gamedataReducer;
