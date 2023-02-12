import { useState } from "react";
import { useEffect } from "react";
import { getRandomInt } from "../../../Helpers";
import "./menu.css";

//Component that controls the questions/options that the
//user can select
const Menu = ({ setSequence, turn, triviaData }) => {
	const [questions, setQuestions] = useState([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [options, setOptions] = useState([]);

	//Turn the data into array so I can map through the results and
	//get the only data I need into an array of objects
	const selectedTriviaData = Object?.values(triviaData?.results);
	const arrayOfQuestions = selectedTriviaData?.map((trivia) => {
		return {
			question: trivia?.question,
			correct_answer: trivia?.correct_answer,
			incorrect_answers: trivia.incorrect_answers,
		};
	});
	//randomize the questions
	arrayOfQuestions?.sort(() => Math.random() - 0.5);
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
	}, []);

	console.log(questionIndex, "this needs to go up everytime i click");
	// questionIndex+1 after every question is answered to correctly display
	// next questions data
	const question = questions[questionIndex];

	//Mixing correct answers and incorrect answers into options
	useEffect(() => {
		if (!question) {
			return;
		}
		//taking incorrect answers and spreading them all into an array
		let answers = [...question.incorrect_answers];
		//example answers.splice(2,0,question.correct_answer)
		//inserts the correct answer at index 2.
		//this will make the correct answer show in random spots when I map
		//out the buttons
		answers.splice(
			getRandomInt(question.incorrect_answers.length),
			0,
			question.correct_answer
		);
		setOptions(answers);
	}, [question]);

	//Once user clicks an answer, depending on if its incorrect or correct
	//the battle sequence is triggered with the switch case incorrect or correct
	const handleItemClick = (e) => {
		e.preventDefault();
		setQuestionIndex(questionIndex + 1);
		if (e.target.textContent === question.correct_answer) {
			setSequence({
				mode: "isCorrect",
				turn,
			});
		} else {
			setSequence({
				mode: "isIncorrect",
				turn,
				correct_answer: `${question?.correct_answer}`,
			});
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
