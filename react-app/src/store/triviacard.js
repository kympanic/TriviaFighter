const LOAD_TRIVIACARDS = "/products/getalltriviacards";
const DELETE_TRIVIACARD = "/products/deletetrivia";

const loadTriviaCards = (payload) => ({
	type: LOAD_TRIVIACARDS,
	payload,
});

// const deleteTrivia = (payload) => {
// 	return {
// 		type: DELETE_TRIVIA,
// 		payload,
// 	};
// };

export const getAllTriviasCardsThunk = () => async (dispatch) => {
	const res = await fetch("/api/triviacards");

	if (res.ok) {
		const payload = await res.json();
		dispatch(loadTriviaCards(payload));
		return payload;
	}
};

export const createTriviaCardThunk = (data) => async (dispatch) => {
	const newTriviaCard = JSON.stringify(data);

	const response = await fetch("/api/triviacards", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: newTriviaCard,
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(loadTriviaCards(data));
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

// export const editProductThunk = (data) => async (dispatch) => {
// 	const editedProduct = JSON.stringify(data);

// 	const res = await fetch(`/api/products/${data.id}`, {
// 		method: "PUT",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: editedProduct,
// 	});

// 	if (res.ok) {
// 		const data = await res.json();
// 		dispatch(loadProducts(data));
// 		return null;
// 	} else if (res.status < 500) {
// 		const data = await res.json();
// 		if (data.errors) {
// 			return data.errors;
// 		}
// 	} else {
// 		return ["An error occurred. Please try again."];
// 	}
// };

// export const deleteProductThunk = (data) => async (dispatch) => {
// 	const body = JSON.stringify(data);

// 	const res = await fetch(`/api/products/${data.id}`, {
// 		method: "DELETE",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body,
// 	});

// 	if (res.ok) {
// 		dispatch(deleteProduct(data.id));
// 		return data;
// 	}
// };

const triviaCardReducer = (state = {}, action) => {
	let newState = { ...state };
	switch (action.type) {
		case LOAD_TRIVIACARDS:
			return { ...newState, ...action.payload };
		case DELETE_TRIVIACARD:
			delete newState[action.payload];
			return newState;
		default:
			return state;
	}
};

export default triviaCardReducer;
