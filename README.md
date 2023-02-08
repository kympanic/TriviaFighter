# Trivia Fighter
## App Academy Capstone Project

By [Daniel Yoo](https://github.com/kympanic)

Play Trivia Fighter! A turn based trivia game where players answer questions until one person falls. [Trivia Fighter](https://trivia-fighter-app.onrender.com/)

## Index

- [API Documentation](https://github.com/kympanic/TriviaFighter/wiki/API-Routes)
- [Database Schema](https://github.com/kympanic/TriviaFighter/wiki/Database-Schema)
- [Frontend Routes](https://github.com/kympanic/TriviaFighter/wiki/Frontend-Routes)
- [Feature List](https://github.com/kympanic/TriviaFighter/wiki/Feature-List)
- [User Stories](https://github.com/kympanic/TriviaFighter/wiki/User-Stories)

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

![Screen Shot 2023-02-07 at 8 13 32 PM](https://user-images.githubusercontent.com/98551224/217431804-d0a01aa5-05e0-4f7f-ba33-d49366860c5a.png)

After signing up, the user is greeted to the homepage where they can see games available for play. Each package has some basic information like name, category, difficulty and description. A logged in user can start any game by pressing play or choosing difficulty.  The search bar can filter any game by category, name, or difficulty

![Screen Shot 2023-02-07 at 8 18 15 PM](https://user-images.githubusercontent.com/98551224/217432404-95ed793c-fec4-41c4-87a7-25bab2a66213.png)

Profile Page

- The owner of the profile page can edit their profile and add/edit/delete games and reviews.
- A user can see all the packages the profile user has created and the reviews the profile user has made on other packages

![Screen Shot 2023-02-07 at 8 17 36 PM](https://user-images.githubusercontent.com/98551224/217432306-9a24821e-5525-4916-bbc2-d39ad5ab6c80.png)


Options Page

- 2 players can choose between 6 avatars to play in the game
- Game will only start after both players have chosen a character
		       
![Screen Shot 2023-02-07 at 8 15 39 PM](https://user-images.githubusercontent.com/98551224/217432088-51383592-d4a3-4086-bfdc-849d34018587.png)

Game Page

- Players take turns answering trivia questions
- Game ends when one players hp falls to 0
- Players do damage by answering correctly but if a question is answered incorrectly, the player takes damage themselves
		       
![Screen Shot 2023-02-07 at 8 16 10 PM](https://user-images.githubusercontent.com/98551224/217432157-e8e1584c-1265-4740-874b-4fcc145c9666.png)

Game Over Page
- User has the option to add a review(If 1. The user is not the creator of the game 2.User hasn't made a review on the package yet)
- User can log game data only one time
- After game data is logged, user can not go back to the results page

Code Snippets:
The section I had the hardest time implementing was the actual game battle page. I knew I needed 3 different components to display on the page. I needed a section for displaying player info, an announcer, and a menu with trivia question options. Every time the user clicked an option, depending on if the answer was correct or incorrect, some action would happen.

The game battle hook is the game logic behind my game. Depending on the mode (incorrect or correct) and turn(player 1 or 2 (0 or 1)) a set of actions were taken that would set state of data I needed like player hp, avatar animation, and announcer message. Player animation would change the class of the image depending on if they character is being attacked or taking damage. Announcer messages are set in state and queued up depending on if the answer was incorrect or correct. Finally, when the action is completed, !turn is set to switch players and the battle sequence is set to false to finish the action. 

<img width="978" alt="Screen Shot 2023-02-07 at 8 12 06 PM" src="https://user-images.githubusercontent.com/98551224/217431594-59bca2ec-48ee-4c90-82e5-d27ad34f3bb2.png">

<img width="960" alt="Screen Shot 2023-02-07 at 8 13 05 PM" src="https://user-images.githubusercontent.com/98551224/217431734-ca166820-7263-4c72-84d7-84178ea41fc6.png">

## My Journey

I wanted to create a fun trivia game that users can play/access easily. The community aspect of adding reviews/ratings will help the app maintain quality trivia questions. Allowing signed up users to create their own games and questions was a fun way to have customizable games that all users can play. The turn based battle is played locally, but I would like to implement multiplayer in the future. 

## Future Features to Implement

- Multiplayer
- Different character abilities
- Flesh out characters more
- In depth game history information
- Tune up CSS


