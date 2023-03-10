const LOAD_TRIVIAS = "/products/getalltrivias";
const DELETE_TRIVIA = "/products/deletetrivia";

const loadTrivias = (payload) => ({
	type: LOAD_TRIVIAS,
	payload,
});

const deleteTrivia = (payload) => {
	return {
		type: DELETE_TRIVIA,
		payload,
	};
};

export const getAllTriviasThunk = () => async (dispatch) => {
	const res = await fetch("/api/trivias");

	if (res.ok) {
		const payload = await res.json();
		dispatch(loadTrivias(payload));
		return payload;
	}
};

export const createTriviaThunk = (data) => async (dispatch) => {
	const newTrivia = JSON.stringify(data);

	const response = await fetch("/api/trivias", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: newTrivia,
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(loadTrivias(data));
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

export const editTriviaThunk = (data) => async (dispatch) => {
	const editedTrivia = JSON.stringify(data);

	const res = await fetch(`/api/trivias/${data.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: editedTrivia,
	});

	if (res.ok) {
		const data = await res.json();
		dispatch(loadTrivias(data));
		return null;
	} else if (res.status < 500) {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const deleteTriviaThunk = (data) => async (dispatch) => {
	const body = JSON.stringify(data);

	const res = await fetch(`/api/trivias/${data.id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	});

	if (res.ok) {
		dispatch(deleteTrivia(data.id));
		return data;
	}
};

const triviaReducer = (state = {}, action) => {
	let newState = { ...state };
	switch (action.type) {
		case LOAD_TRIVIAS:
			return { ...newState, ...action.payload };
		case DELETE_TRIVIA:
			delete newState[action.payload];
			return newState;
		default:
			return state;
	}
};

export default triviaReducer;
