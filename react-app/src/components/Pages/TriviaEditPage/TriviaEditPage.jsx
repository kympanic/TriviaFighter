import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { editTriviaPackageThunk } from "../../../store/triviapackage";
import { useState } from "react";
import "./TriviaEditPage.css";

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
	const [imageUrl, setImageUrl] = useState("");

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
		<div className="triviaedit-main">
			<form onSubmit={handleSubmit}>
				<div>
					{errors.map((error, ind) => (
						<div className="error-body" key={ind}>
							<ul>
								<li className="error-item">{error}</li>
							</ul>
						</div>
					))}
				</div>
				<div>
					<label>Name: </label>
					<input
						type="text"
						name="packageName"
						placeholder="Package Name"
						onChange={(e) => setPackageName(e.target.value)}
						maxLength={30}
						value={packageName}
					/>
				</div>
				<div>
					<label>Description: </label>
					<input
						type="text"
						name="description"
						onChange={(e) => setDescription(e.target.value)}
						value={description}
					></input>
				</div>
				<div>
					<label>Package Image Url: </label>
					<input
						type="url"
						name="imageUrl"
						onChange={(e) => setImageUrl(e.target.value)}
						placeholder="https://example.com"
					></input>
				</div>
				<div>
					<label>Category: </label>
					<select
						onChange={(e) => setCategory(e.target.value)}
						name="category"
					>
						<option value="--">--</option>
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
				<div>
					<label>Difficulty: </label>
					<select
						onChange={(e) => setDifficulty(e.target.value)}
						name="difficulty"
					>
						<option value="--">--</option>
						<option value="easy">EASY</option>
						<option value="medium">MEDIUM</option>
						<option value="hard">HARD</option>
					</select>
				</div>
				<div>
					<div>
						<button type="submit">EDIT</button>
						<button
							onClick={() =>
								history.push(`/profile/${sessionUser.id}`)
							}
						>
							CANCEL
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TriviaEditPage;
