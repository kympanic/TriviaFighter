import { RiCloseLine } from "react-icons/ri";
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
		<div>
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
				<div>
					<label>Name: </label>
					<input
						type="text"
						name="packageName"
						onChange={(e) => setPackageName(e.target.value)}
						maxLength={30}
					/>
				</div>
				<div>
					<label>Description: </label>
					<input
						type="text"
						name="description"
						onChange={(e) => setDescription(e.target.value)}
					></input>
				</div>
				<div>
					<label>Package Image Url: </label>
					<input
						type="url"
						name="image"
						onChange={(e) => setImage(e.target.value)}
						placeholder="https://example.com"
					></input>
				</div>
				<div>
					<label>CATEGORY: </label>
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
						<button type="submit">CREATE</button>
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

export default TriviaAddPage;
