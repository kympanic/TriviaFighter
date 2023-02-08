# Trivia Fighter
## App Academy Capstone Project

By [Daniel Yoo](https://github.com/kympanic)

Play Trivia Fighter! A turn based trivia game where players answer questions until one person falls. [Trivia Fighter](https://trivia-fighter-app.onrender.com/)

## Index

- [API Documentation](https://github.com/kympanic/TriviaFighter/wiki/API-Routes)
- [Database Schema](https://github.com/kympanic/TriviaFighter/wiki/Database-Schema)
- [Frontend Routes](https://github.com/kympanic/TriviaFighter/wiki/Frontend-Routes)
- [Feature List](https://github.com/kympanic/TriviaFighter/wiki/Feature-List)
- [https://github.com/kympanic/TriviaFighter/wiki/User-Stories)

##

- Javascript
- React/Redux
- Python
- CSS
- Flask/SQLAlchemy
- [FontAwesome](https://fontawesome.com/icons?d=gallery&m=free)
- [Howler](https://www.npmjs.com/package/howler)
- [React Icons](https://react-icons.github.io/react-icons/)

## Overview
A full stack application that purports to the theme of a trivia game site, with a focus on three main features: trivia packages, questions, and reviews. Several partial CRUD features include Search, the game itself, and game data history. When the user first accesses the site, they are brought to a splash page, greeting the user and prompting them to sign up. Attempting to access any page on the site without login/signup will redirect them to login.

![Screen Shot 2023-01-17 at 11 00 30 AM](https://user-images.githubusercontent.com/98551224/212987885-5951b00f-e8a2-4014-bdc8-78a0c56df239.png)

After signing up, the user is greeted to the homepage where they can see games available for play. Each package has some basic information like name, category, difficulty and description. A logged in user can start any game by pressing play or choosing difficulty.  The search bar can filter any game by category, name, or difficulty

<img width="1596" alt="Screen Shot 2023-01-17 at 11 07 20 AM" src="https://user-images.githubusercontent.com/98551224/212989131-71d69152-23b6-4903-843e-29d9a3c5d877.png">

Profile Page

- The owner of the profile page can edit their profile and add/edit/delete games and reviews.
- A user can see all the packages the profile user has created and the reviews the profile user has made on other packages

![Screen Shot 2023-01-17 at 11 13 38 AM](https://user-images.githubusercontent.com/98551224/212990949-dc675567-9440-462f-91a5-7e4b8b79b220.png)

Options Page

- 2 players can choose between 6 avatars to play in the game
- Game will only start after both players have chosen a character

![Screen Shot 2023-01-17 at 11 26 41 AM](https://user-images.githubusercontent.com/98551224/212993694-6b4bb6b6-4c6c-4aec-923f-266beef5bbae.png)

Game Page

- Players take turns answering trivia questions
- Game ends when one players hp falls to 0
- Players do damage by answering correctly but if a question is answered incorrectly, the player takes damage themselves

![Screen Shot 2023-01-17 at 11 30 01 AM](https://user-images.githubusercontent.com/98551224/212994294-ce4f27da-67b6-4020-923e-47a9674b1411.png)

Game Over Page
- User has the option to add a review(If 1. The user is not the creator of the game 2.User hasn't made a review on the package yet)
- User can log game data only one time
- After game data is logged, user can not go back to the results page

![Screen Shot 2023-01-17 at 11 34 32 AM](https://user-images.githubusercontent.com/98551224/212994984-8639def8-f29d-4a3a-9744-c10ad5400d30.png)

Code Snippets:
The section I had the hardest time implementing was the actual game battle page. I knew I needed 3 different components to display on the page. I needed a section for displaying player info, an announcer, and a menu with trivia question options. Every time the user clicked an option, depending on if the answer was correct or incorrect, some action would happen.

The game battle hook is the game logic behind my game. Depending on the mode (incorrect or correct) and turn(player 1 or 2 (0 or 1)) a set of actions were taken that would set state of data I needed like player hp, avatar animation, and announcer message. Player animation would change the class of the image depending on if they character is being attacked or taking damage. Announcer messages are set in state and queued up depending on if the answer was incorrect or correct. Finally, when the action is completed, !turn is set to switch players and the battle sequence is set to false to finish the action. 

useEffect(() => {
		const { mode, turn } = sequence;

		if (mode) {
			const attacker = turn === 0 ? player1Data : player2Data;
			const receiver = turn === 0 ? player2Data : player1Data;

			switch (mode) {
				case "isCorrect": {
					const damage = triviaCorrect({ attacker, receiver });

					(async () => {
						setInSequence(true);
						setAnnouncerMessage(
							`${attacker.name} has gotten the answer correct!`
						);
						await wait(1000);

						turn === 0
							? setPlayer1Animation("attack")
							: setPlayer2Animation("attack");
						await wait(100);

						turn === 0
							? setPlayer1Animation("static")
							: setPlayer2Animation("static");
						await wait(500);

						turn === 0
							? setPlayer2Animation("damage")
							: setPlayer1Animation("damage");
						await wait(750);

						turn === 0
							? setPlayer2Animation("static")
							: setPlayer1Animation("static");

						setAnnouncerMessage(
							`${receiver.name} was much wowed by your knowledge!`
						);
						await wait(1000);

						turn === 0
							? setPlayer2Health((health) =>
									health - damage > 0 ? health - damage : 0
							  )
							: setPlayer1Health((health) =>
									health - damage > 0 ? health - damage : 0
							  );
						await wait(500);

						setAnnouncerMessage(
							`Now it's ${receiver.name}'s turn!`
						);
						await wait(1000);

						setTurn(turn === 0 ? 1 : 0);
						setInSequence(false);
					})();

					break;
				}

				case "isIncorrect": {
					const damage = triviaIncorrect({ attacker, receiver });

					(async () => {
						setInSequence(true);
						setAnnouncerMessage(
							`${attacker.name} got the question wrong! Oh no!`
						);
						await wait(1000);

						turn === 0
							? setPlayer1Animation("damage")
							: setPlayer2Animation("damage");
						await wait(750);

						turn === 0
							? setPlayer1Animation("static")
							: setPlayer2Animation("static");
						setAnnouncerMessage(
							`${attacker.name} hurt itself in its confusion!`
						);
						await wait(1000);
						turn === 0
							? setPlayer1Health((health) =>
									health - damage > 0 ? health - damage : 0
							  )
							: setPlayer2Health((health) =>
									health - damage > 0 ? health - damage : 0
							  );
						await wait(2000);

						setAnnouncerMessage(
							`Now it's ${receiver.name}'s turn!`
						);
						await wait(1500);

						setTurn(turn === 0 ? 1 : 0);
						setInSequence(false);
					})();

					break;
				}
				default:
					break;
			}
		}
		// eslint-disable-next-line
	}, [sequence]);


## My Journey

I wanted to create a fun trivia game that users can play/access easily. The community aspect of adding reviews/ratings will help the app maintain quality trivia questions. Allowing signed up users to create their own games and questions was a fun way to have customizable games that all users can play. The turn based battle is played locally, but I would like to implement multiplayer in the future. 

## Future Features to Implement

- Multiplayer
- Different character abilities
- Flesh out characters more
- In depth game history information
- Tune up CSS


