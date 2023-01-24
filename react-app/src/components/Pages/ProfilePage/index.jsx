import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllTriviasCardsThunk } from "../../../store/triviacard";
import AddTriviaCardModal from "../../Modals/AddTriviaCard/AddTriviaCardModal";

const ProfilePage = () => {
	const { userId } = useParams();
	const id = parseInt(userId);
	const dispatch = useDispatch();

	const sessionUser = useSelector((state) => state.session.user);

	const [isOpenAddTriviaCard, setIsOpenAddTriviaCard] = useState(false);

	console.log(sessionUser.triviaCards.length, "MAAN");
	useEffect(() => {
		dispatch(getAllTriviasCardsThunk());
	}, [dispatch, sessionUser.triviaCards.length]);

	return (
		<div>
			{sessionUser && (
				<div>
					<div className="profilepage-info-container">
						<img src={sessionUser.profileImg} alt="" />
						<p>{sessionUser.username}</p>
						<p>{sessionUser.email}</p>
						<p>average rating</p>
					</div>
					<div className="profilepage-header-container">
						<h1>This is the profile page</h1>
					</div>
					<div className="profilepage-content-container">
						<div>
							{isOpenAddTriviaCard && (
								<AddTriviaCardModal
									setIsOpen={setIsOpenAddTriviaCard}
									sessionUser={sessionUser}
								/>
							)}
							{sessionUser.id === id ? (
								<button
									onClick={() => setIsOpenAddTriviaCard(true)}
								>
									Create Trivia!
								</button>
							) : (
								<></>
							)}
						</div>

						<div className="profilepage-triviacard-menu">
							<h1>
								This is where the trivia cards made by the user
								would go
							</h1>
							{sessionUser.triviaCards.map((triviacard) => (
								<div key={triviacard.name}>
									<img
										src={triviacard.imageUrl}
										alt={triviacard.name}
									/>
									<p>{triviacard.category}</p>
									<p>{triviacard.difficulty}</p>
									{sessionUser.trivias.length < 20 && (
										<button>
											You need more trivia questions!
										</button>
									)}
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

						<div>
							<h1>comments section placeholder</h1>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfilePage;
