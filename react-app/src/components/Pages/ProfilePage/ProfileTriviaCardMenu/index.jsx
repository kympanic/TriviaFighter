import React from "react";

const ProfileTriviaCardMenu = ({ id, sessionUser }) => {
	const userId = parseInt(id);
	// console.log(sessionUser, "this is the session user stuff");
	// console.log(userId, sessionUser.id);
	return (
		<div className="profilepage-triviacard-menu">
			<h1>This is where the trivia cards made by the user would go</h1>
			{sessionUser.triviaCards.map((triviacard) => (
				<div key={triviacard.name}>
					<img src={triviacard.imageUrl} alt={triviacard.name} />
					<p>{triviacard.category}</p>
					<p>{triviacard.difficulty}</p>
					{sessionUser.id === userId ? (
						<div>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					) : (
						<div>
							<button>Play</button>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ProfileTriviaCardMenu;
