import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./menu.css";
const Menu = ({
	arrayOfQuestions,
	setSequence,
	turn,
	questionIndex,
	setQuestionIndex,
}) => {
	// const [answerSelected, setAnswerSelected] = useState(false);
	// const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [questions, setQuestions] = useState([]);
	const [options, setOptions] = useState([]);
	// const [className, setClassName] = useState("option");

	// console.log(arrayOfQuestions, "this is being passed to the menu componet");
	//function to get the answers and correct answers in an array mixed up
	const getRandomInt = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	};

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

	console.log(questionIndex, "this is the index");

	const handleItemClick = (e) => {
		e.preventDefault();
		// setAnswerSelected(true);
		// setSelectedAnswer(e.target.textContent);
		// console.log(e.target.textContent, "AHHHH");
		setQuestionIndex(questionIndex + 1);
		if (e.target.textContent === question.correct_answer) {
			setSequence({ mode: "isCorrect", turn });
			// if (questionIndex + 1 <= arrayOfQuestions.length) {
			// 	setQuestionIndex(questionIndex + 1);
			// }
		} else {
			setSequence({ mode: "isIncorrect", turn });
			// if (questionIndex + 1 <= arrayOfQuestions.length) {
			// 	setQuestionIndex(questionIndex + 1);
			// }
		}
	};

	return (
		<div>
			{options.length > 0 && (
				<div>
					<div>
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
