const LOAD_TRIVIAPACKAGES = "/products/getalltriviapackages";
const DELETE_TRIVIAPACKAGE = "/products/deletetrivia";

export const loadTriviaPackages = (payload) => ({
	type: LOAD_TRIVIAPACKAGES,
	payload,
});

export const deleteTriviaPackage = (payload) => {
	return {
		type: DELETE_TRIVIAPACKAGE,
		payload,
	};
};

export const getAllTriviasPackagesThunk = () => async (dispatch) => {
	const res = await fetch("/api/triviapackages");

	if (res.ok) {
		const payload = await res.json();
		dispatch(loadTriviaPackages(payload));
		return payload;
	}
};

export const getTriviaPackageThunk = (id) => async (dispatch) => {
	const res = await fetch(`/api/triviapackages/${id}`);

	if (res.ok) {
		const payload = await res.json();
		dispatch(loadTriviaPackages(payload));
		return payload;
	}
};

export const createTriviaPackageThunk = (data) => async (dispatch) => {
	const newTriviaPackage = JSON.stringify(data);

	const response = await fetch("/api/triviapackages", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: newTriviaPackage,
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(loadTriviaPackages(data));
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

export const editTriviaPackageThunk = (data) => async (dispatch) => {
	const editedTriviaPackage = JSON.stringify(data);

	const res = await fetch(`/api/triviapackages/${data.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: editedTriviaPackage,
	});

	if (res.ok) {
		const data = await res.json();
		dispatch(loadTriviaPackages(data));
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

export const deleteTriviaPackageThunk = (data) => async (dispatch) => {
	const body = JSON.stringify(data);

	const res = await fetch(`/api/triviapackages/${data.id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	});

	if (res.ok) {
		dispatch(deleteTriviaPackage(data.id));
		return data;
	}
};

const triviaPackageReducer = (state = {}, action) => {
	let newState = { ...state };
	switch (action.type) {
		case LOAD_TRIVIAPACKAGES:
			return { ...newState, ...action.payload };
		case DELETE_TRIVIAPACKAGE:
			delete newState[action.payload];
			return newState;
		default:
			return state;
	}
};

export default triviaPackageReducer;
