import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTriviaThunk } from "../../../../store/trivia";

const AddTriviaForm = ({ sessionUser, triviapackage }) => {
	const dispatch = useDispatch();
	// console.log(sessionUser, "this is the session user info");
	// console.log(triviapackage, "this is the triviapackage info");

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
			setQuestion("");
			setCorrectAnswer("");
			setIncorrectAnswer1("");
			setIncorrectAnswer2("");
			setIncorrectAnswer3("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Question: </label>
				<input
					type="text"
					name="question"
					value={question}
					onChange={updateQuestion}
				/>
			</div>
			<div>
				<label>Answer: </label>
				<input
					type="text"
					name="correctAnswer"
					value={correctAnswer}
					onChange={updateCorrectAnswer}
				/>
			</div>
			<div>
				<label>Incorrect Answer 1</label>
				<input
					type="text"
					name="incorrectAnswer1"
					value={incorrectAnswer1}
					onChange={updateIncorrectAnswer1}
				/>
				<label>Incorrect Answer 2</label>
				<input
					type="text"
					name="incorrectAnswer2"
					value={incorrectAnswer2}
					onChange={updateIncorrectAnswer2}
				/>
				<label>Incorrect Answer 3</label>
				<input
					type="text"
					name="incorrectAnswer3"
					value={incorrectAnswer3}
					onChange={updateIncorrectAnswer3}
				/>
			</div>
			<div>
				<button onClick={handleSubmit}>Submit Question</button>
				<button>Generate Question</button>
			</div>
		</form>
	);
};

export default AddTriviaForm;
