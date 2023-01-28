import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import trivias from "./trivia";
import triviapackages from "./triviapackage";
import users from "./users";
import reviews from "./reviews";
import quiz from "./quiz";
const rootReducer = combineReducers({
	session,
	trivias,
	triviapackages,
	users,
	reviews,
	quiz,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require("redux-logger").default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
