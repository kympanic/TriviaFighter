import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTriviaThunk } from "../../../../store/trivia";
import { categoryConversion } from "../../../Hooks/useCategoryConversion";
import "./addtriviasection.css";

//Displays a user input for creating new Trivia.
//Generate question fetches data from api that is
//saved to state to be used in input form values
const AddTriviaForm = ({ sessionUser, triviapackage }) => {
	const dispatch = useDispatch();

	const [errors, setErrors] = useState([]);
	const [question, setQuestion] = useState("");
	const [correctAnswer, setCorrectAnswer] = useState("");
	const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
	const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
	const [incorrectAnswer3, setIncorrectAnswer3] = useState("");

	const updateQuestion = (e) => {
		setQuestion(e.target.value);
	};

	const updateCorrectAnswer = (e) => {
		setCorrectAnswer(e.target.value);
	};

	const updateIncorrectAnswer1 = (e) => {
		setIncorrectAnswer1(e.target.value);
	};
	const updateIncorrectAnswer2 = (e) => {
		setIncorrectAnswer2(e.target.value);
	};
	const updateIncorrectAnswer3 = (e) => {
		setIncorrectAnswer3(e.target.value);
	};

	//dispatch thunk to send data to backend
	const handleSubmit = async (e) => {
		e.preventDefault();

		const newTrivia = {
			user_id: sessionUser?.id,
			trivia_package_id: triviapackage?.id,
			question,
			correct_answer: correctAnswer,
			incorrect_answer1: incorrectAnswer1,
			incorrect_answer2: incorrectAnswer2,
			incorrect_answer3: incorrectAnswer3,
		};
		const data = await dispatch(createTriviaThunk(newTrivia));

		if (data) {
			setErrors(data);
		} else {
			setErrors([]);
			setQuestion("");
			setCorrectAnswer("");
			setIncorrectAnswer1("");
			setIncorrectAnswer2("");
			setIncorrectAnswer3("");
		}
	};
	//converting the category to a number for the api route to get trivia
	const categoryNum = categoryConversion(triviapackage?.category);

	//fills in form data with the fetched trivia question
	const handleGeneration = async (e) => {
		e.preventDefault();
		setErrors([]);
		const response = await fetch(
			`https://opentdb.com/api.php?amount=1&category=${categoryNum}&difficulty=${triviapackage.difficulty.toLowerCase()}&type=multiple`
		);
		const jsonData = await response.json();
		//saves data from api into state to be used for filling out the inputs of the form
		if (jsonData && jsonData.results && jsonData.results.length > 0) {
			setCorrectAnswer(
				jsonData?.results[0]?.correct_answer.replace(/&amp;/gi, "&")
			);
			setIncorrectAnswer1(
				jsonData?.results[0]?.incorrect_answers[0].replace(
					/&amp;/gi,
					"&"
				)
			);
			setIncorrectAnswer2(
				jsonData?.results[0]?.incorrect_answers[1].replace(
					/&amp;/gi,
					"&"
				)
			);
			setIncorrectAnswer3(
				jsonData?.results[0]?.incorrect_answers[2].replace(
					/&amp;/gi,
					"&"
				)
			);
			setQuestion(
				jsonData?.results[0]?.question.replace(/&#039;|&quot;/gi, "")
			);
		}
	};

	return (
		<div>
			<h1>Add Trivia</h1>
			<form className="addtrivia-form-container" onSubmit={handleSubmit}>
				<div className="errors-section">
					{errors.map((error, ind) => (
						<div className="error-body" key={ind}>
							<ul>
								<li className="error-item">{error}</li>
							</ul>
						</div>
					))}
				</div>
				<div className="form-ind-sections">
					<label className="labels">QUESTION</label>
					<div>
						<textarea
							id="question-input"
							type="text"
							name="question"
							value={question}
							onChange={updateQuestion}
							maxLength={120}
						/>
					</div>
				</div>
				<div className="form-ind-sections">
					<label className="labels">ANSWER</label>
					<div>
						<input
							className="text-input-fields"
							type="text"
							name="correctAnswer"
							value={correctAnswer}
							maxLength={40}
							onChange={updateCorrectAnswer}
						/>
					</div>
				</div>
				<div className="form-ind-sections">
					<label className="labels">INCORRECT ANSWER</label>
					<div>
						<input
							className="text-input-fields"
							type="text"
							name="incorrectAnswer1"
							value={incorrectAnswer1}
							maxLength={40}
							onChange={updateIncorrectAnswer1}
						/>
					</div>
				</div>
				<div className="form-ind-sections">
					<label className="labels">INCORRECT ANSWER</label>
					<div>
						<input
							className="text-input-fields"
							type="text"
							name="incorrectAnswer2"
							value={incorrectAnswer2}
							maxLength={40}
							onChange={updateIncorrectAnswer2}
						/>
					</div>
				</div>
				<div className="form-ind-sections">
					<label className="labels">INCORRECT ANSWER</label>
					<div>
						<input
							className="text-input-fields"
							type="text"
							name="incorrectAnswer3"
							value={incorrectAnswer3}
							maxLength={40}
							onChange={updateIncorrectAnswer3}
						/>
					</div>
				</div>
				<div>
					<div className="generate-button-container">
						<button
							id="addtrivia-generate-btn"
							onClick={handleGeneration}
						>
							Generate Question
						</button>
					</div>
					<div className="submit-button-container">
						<button
							id="addtrivia-submit-btn"
							onClick={handleSubmit}
						>
							Submit Question
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddTriviaForm;
