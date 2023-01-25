import { useState } from "react";

const AddTriviaForm = ({ sessionUser, triviapackage }) => {
	console.log(sessionUser, "this is the session user info");
	console.log(triviapackage, "this is the triviapackage info");

	const [inputFields, setInputFields] = useState([
		{
			question: "",
			correctAnswer: "",
			incorrectAnswer1: "",
			incorrectAnswer2: "",
			incorrectAnswer3: "",
		},
	]);

	const handleChangeInput = (index, event) => {
		const values = [...inputFields];
		values[index][event.target.name] = event.target.value;
		setInputFields(values);
		console.log(inputFields);
	};

	const handleAddFields = () => {
		setInputFields([
			...inputFields,
			{
				question: "",
				correctAnswer: "",
				incorrectAnswer1: "",
				incorrectAnswer2: "",
				incorrectAnswer3: "",
			},
		]);
	};

	const handleRemoveFields = (index) => {
		const values = [...inputFields];
		values.splice(index, 1);
		setInputFields(values);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Input Fields", inputFields);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				{inputFields.map((inputField, index) => (
					<div key={index}>
						<div>
							<label>Question: </label>
							<input
								type="text"
								name="question"
								value={inputField.question}
								onChange={(event) =>
									handleChangeInput(index, event)
								}
							/>
						</div>
						<div>
							<label>Answer: </label>
							<input
								type="text"
								name="correctAnswer"
								value={inputField.correctAnswer}
								onChange={(event) =>
									handleChangeInput(index, event)
								}
							/>
						</div>
						<div>
							<label>Incorrect Answer 1</label>
							<input
								type="text"
								name="incorrectAnswer1"
								value={inputField.incorrectAnswer1}
								onChange={(event) =>
									handleChangeInput(index, event)
								}
							/>
							<label>Incorrect Answer 2</label>
							<input
								type="text"
								name="incorrectAnswer2"
								value={inputField.incorrectAnswer2}
								onChange={(event) =>
									handleChangeInput(index, event)
								}
							/>
							<label>Incorrect Answer 3</label>
							<input
								type="text"
								name="incorrectAnswer3"
								value={inputField.incorrectAnswer3}
								onChange={(event) =>
									handleChangeInput(index, event)
								}
							/>
						</div>
						<div>
							<button onClick={handleAddFields}>Add</button>
							<button onClick={handleRemoveFields}>Remove</button>
						</div>
					</div>
				))}
			</form>
			<div>
				<button onClick={handleSubmit}>Submit Questions</button>
			</div>
		</div>
	);
};

export default AddTriviaForm;
