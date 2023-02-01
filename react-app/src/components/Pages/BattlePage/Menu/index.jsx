import { useState } from "react";
import { useEffect } from "react";
import { getRandomInt } from "../../../Helpers";
import "./menu.css";
const Menu = ({
	arrayOfQuestions,
	setSequence,
	turn,
	questionIndex,
	setQuestionIndex,
}) => {
	const [questions, setQuestions] = useState([]);
	const [options, setOptions] = useState([]);
	// const [answerSelected, setAnswerSelected] = useState(false);
	// const [selectedAnswer, setSelectedAnswer] = useState(null);
	// const [className, setClassName] = useState("option");

	//decode the questions and answers coming from the api bc it comes out with messy quotes
	const decodeHTML = function (html) {
		const txt = document.createElement("textarea");
		txt.innerHTML = html;
		return txt.value;
	};

	useEffect(() => {
		const decodedQuestions = arrayOfQuestions.map((question) => {
			return {
				...question,
				question: decodeHTML(question.question),
				correct_answer: decodeHTML(question.correct_answer),
				incorrect_answers: question.incorrect_answers.map((q) =>
					decodeHTML(q)
				),
			};
		});
		setQuestions(decodedQuestions);
	}, [arrayOfQuestions]);

	const question = questions[questionIndex];

	//Mixing correct answers and incorrect answers into options
	useEffect(() => {
		if (!question) {
			return;
		}
		let answers = [...question.incorrect_answers];
		answers.splice(
			getRandomInt(question.incorrect_answers.length),
			0,
			question.correct_answer
		);
		setOptions(answers);
	}, [question]);

	// console.log(questionIndex, "this is the index");

	const handleItemClick = (e) => {
		e.preventDefault();
		// setAnswerSelected(true);
		// setSelectedAnswer(e.target.textContent);
		// console.log(e.target.textContent, "AHHHH");
		setQuestionIndex(questionIndex + 1);
		if (e.target.textContent === question.correct_answer) {
			setSequence({ mode: "isCorrect", turn });
		} else {
			setSequence({ mode: "isIncorrect", turn });
		}
	};

	return (
		<div>
			{options.length > 0 && (
				<div className="options-container">
					<div className="question">
						<h2>{question.question}</h2>
					</div>
					<div className="main">
						{options.map((option, i) => (
							<div
								key={i}
								className="option"
								onClick={handleItemClick}
							>
								{option}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Menu;
