import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTriviaPackageThunk } from "../../../store/triviapackage";
import { useDispatch, useSelector } from "react-redux";
import "./triviaaddpage.css";

const TriviaAddPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const sessionUser = useSelector((state) => state.session.user);

	const [errors, setErrors] = useState([]);
	const [packageName, setPackageName] = useState("");
	const [category, setCategory] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newTriviaPackage = {
			user_id: sessionUser.id,
			name: packageName,
			difficulty: difficulty,
			category: category,
			description: description,
			image_url: image,
		};

		const data = await dispatch(createTriviaPackageThunk(newTriviaPackage));
		if (data) {
			setErrors(data);
		} else {
			history.push(`/profile/${sessionUser.id}`);
		}
	};
	return (
		<div className="createtrivia-body">
			<div className="createtrivia-container">
				<header>Create Trivia Package</header>
				<form onSubmit={handleSubmit} className="createtrivia-form">
					<div>
						{errors.map((error, ind) => (
							<div key={ind}>
								<ul>
									<li className="error-item">{error}</li>
								</ul>
							</div>
						))}
					</div>
					<div className="createtrivia-input-box">
						<label>Name </label>
						<input
							type="text"
							name="packageName"
							onChange={(e) => setPackageName(e.target.value)}
							maxLength={30}
							placeholder="Enter full package name"
						/>
					</div>
					<div className="createtrivia-input-box">
						<label>Description </label>
						<input
							type="text"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Leave short description here"
						/>
					</div>
					<div className="createtrivia-input-box">
						<label>Package Image Url </label>
						<input
							type="url"
							name="image"
							onChange={(e) => setImage(e.target.value)}
							placeholder="https://example.com"
						></input>
					</div>
					<div className="createtrivia-column">
						<div className="createtrivia-select-box">
							<select
								onChange={(e) => setCategory(e.target.value)}
								name="category"
							>
								<option hidden>Category</option>
								<option value="General Knowledge">
									General Knowledge
								</option>
								<option value="Entertainment: Television">
									Television
								</option>
								<option value="Entertainment: Video Games">
									Video Games
								</option>
								<option value="Sports">Sports</option>
								<option value="History">History</option>
								<option value="Animals">Animals</option>
							</select>
						</div>
						<div className="createtrivia-select-box">
							<select
								onChange={(e) => setDifficulty(e.target.value)}
								name="difficulty"
							>
								<option hidden>Difficulty</option>
								<option value="easy">EASY</option>
								<option value="medium">MEDIUM</option>
								<option value="hard">HARD</option>
							</select>
						</div>
					</div>
					<div className="createtrivia-column">
						<button className="createtrivia-button" type="submit">
							Submit
						</button>
						<button
							className="createtrivia-button"
							onClick={() =>
								history.push(`/profile/${sessionUser.id}`)
							}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TriviaAddPage;
