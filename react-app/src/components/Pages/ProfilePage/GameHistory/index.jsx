import { useState } from "react";
import "./gamehistory.css";
const GameHistory = ({ gameDatas, profileUser, alltrivia }) => {
	const [isOpen, setIsOpen] = useState(false);

	const selectedDatas = gameDatas.filter((data) => {
		return data.user_id === profileUser.id;
	});

	return (
		<div>
			{selectedDatas.length > 0 && (
				<div className="main-container">
					{!isOpen ? (
						<button
							className="gamedata-open-btn"
							onClick={() => setIsOpen(true)}
						>
							Match History
						</button>
					) : (
						<div>
							<div>
								<h2 className="gamehistory-text">
									Game History
								</h2>
								<div className="gamehistory-data-container">
									{selectedDatas.map((data) => (
										<div className="individual-gamedata-container">
											<p>{data.playdate}</p>
											<p>PlayerOne: {data.player_one}</p>
											<p>PlayerTwo: {data.player_two}</p>
											<p>Winner: {data.winner}</p>
										</div>
									))}
								</div>
							</div>
							<div>
								<button
									className="gamedata-close-btn"
									onClick={() => setIsOpen(false)}
								>
									CLOSE
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default GameHistory;
