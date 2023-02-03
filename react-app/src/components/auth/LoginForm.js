import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import "./auth.css";
const LoginForm = () => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
			setErrors(data);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<div className="login-signup-main">
			<img
				className="login-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/7-01.jpg"
				alt="gorillavsgodzilla"
			/>
			<form className="login-signup-form" onSubmit={onLogin}>
				<div>
					{errors.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input
						name="email"
						type="text"
						placeholder="Email"
						value={email}
						onChange={updateEmail}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input
						name="password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={updatePassword}
					/>
				</div>
				<div>
					<button className="login-signup-btn" type="submit">
						LOGIN
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
