import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
	const [errors, setErrors] = useState([]);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [profileImg, setProfileImg] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const onSignUp = async (e) => {
		e.preventDefault();
		if (password === repeatPassword) {
			setProfileImg(
				"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/defaulttriviaimage.jpg"
			);

			const data = await dispatch(
				signUp(username, email, password, profileImg)
			);
			if (data) {
				setErrors(data);
			}
		} else {
			setErrors(["Passwords do not match"]);
		}
	};

	const updateUsername = (e) => {
		setUsername(e.target.value);
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<div className="login-signup-main">
			<img
				className="signup-img"
				src="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/sushifight.jpg"
				alt="gorillavsgodzilla"
			/>
			<form className="login-signup-form" onSubmit={onSignUp}>
				<div className="errors-section">
					{errors.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
				<div className="input-group">
					<label>User Name</label>
					<input
						type="text"
						name="username"
						onChange={updateUsername}
						value={username}
					></input>
				</div>
				<div className="input-group">
					<label>Email</label>
					<input
						type="email"
						name="email"
						onChange={updateEmail}
						value={email}
					></input>
				</div>
				<div className="input-group">
					<label>Password</label>
					<input
						type="password"
						name="password"
						onChange={updatePassword}
						value={password}
					></input>
				</div>
				<div className="input-group">
					<label>Repeat Password</label>
					<input
						type="password"
						name="repeat_password"
						onChange={updateRepeatPassword}
						value={repeatPassword}
						required={true}
					></input>
				</div>
				<div>
					<button className="login-signup-btn" type="submit">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
