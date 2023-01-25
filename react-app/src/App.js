import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/Pages/HomePage";
import ProfilePage from "./components/Pages/ProfilePage";
import AddTriviaPage from "./components/Pages/AddTriviaPage";
import OptionsPage from "./components/Pages/OptionsPage";
import BattlePage from "./components/Pages/BattlePage";
import GameOverPage from "./components/Pages/GameOverPage";
import ResultsPage from "./components/Pages/ResultsPage";
import NotFoundPage from "./components/Pages/NotFoundPage";

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavigationBar />
			<Switch>
				<Route path="/login" exact={true}>
					<LoginForm />
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm />
				</Route>
				<ProtectedRoute path="/profile/:userId" exact={true}>
					<ProfilePage />
				</ProtectedRoute>
				<ProtectedRoute path="/triviapackage/:triviapackageId">
					<AddTriviaPage />
				</ProtectedRoute>
				<ProtectedRoute path="/gameoptions">
					<OptionsPage />
				</ProtectedRoute>
				<ProtectedRoute path="/gamebattle" exact={true}>
					<BattlePage />
				</ProtectedRoute>
				<ProtectedRoute path="/gameover" exact={true}>
					<GameOverPage />
				</ProtectedRoute>
				<ProtectedRoute path="/results">
					<ResultsPage />
				</ProtectedRoute>
				<Route path="/" exact={true}>
					<HomePage />
				</Route>
				<Route path="">
					<NotFoundPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
