import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { editTriviaPackageThunk } from "../../../store/triviapackage";
import { useState } from "react";
import "../TriviaAddPage/triviaaddpage.css";

const TriviaEditPage = () => {
	const location = useLocation();
	const history = useHistory();
	const triviapackage = location.state.triviapackage;
	const sessionUser = location.state.sessionUser;
	const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const [packageName, setPackageName] = useState(triviapackage.name);
	const [category, setCategory] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [description, setDescription] = useState(triviapackage.description);
	const [imageUrl, setImageUrl] = useState(triviapackage.imageUrl);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const editTriviaPackage = {
			id: triviapackage.id,
			user_id: sessionUser.id,
			name: packageName,
			difficulty,
			category,
			description,
			image_url: imageUrl,
		};
		const data = await dispatch(editTriviaPackageThunk(editTriviaPackage));

		if (data) {
			setErrors(data);
		} else {
			history.push(`/profile/${sessionUser.id}`);
		}
	};
	return (
		<div className="createtrivia-body">
			<div className="createtrivia-container">
				<header>Edit Trivia Package</header>
				<form onSubmit={handleSubmit} className="createtrivia-form">
					<div>
						{errors.map((error, ind) => (
							<div className="error-body" key={ind}>
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
							placeholder="Package Name"
							onChange={(e) => setPackageName(e.target.value)}
							maxLength={30}
							value={packageName}
						/>
					</div>
					<div className="createtrivia-input-box">
						<label>Description </label>
						<input
							type="text"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						></input>
					</div>
					<div className="createtrivia-input-box">
						<label>Package Image Url </label>
						<input
							type="url"
							name="imageUrl"
							onChange={(e) => setImageUrl(e.target.value)}
							value={imageUrl}
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

export default TriviaEditPage;
