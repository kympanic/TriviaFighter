import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ProfileTriviaCardMenu from "./ProfileTriviaCardMenu";
// import ProfileCreateTrivia from "./ProfileCreateTrivia";
import { getAllTriviasCardsThunk } from "../../../store/triviacard";
import AddTriviaCardModal from "../../Modals/AddTriviaCard/AddTriviaCardModal";

const ProfilePage = () => {
	const { userId } = useParams();
	const id = parseInt(userId);
	const dispatch = useDispatch();

	const sessionUser = useSelector((state) => state.session.user);

	const [isOpenAddTriviaCard, setIsOpenAddTriviaCard] = useState(false);

	useEffect(() => {
		dispatch(getAllTriviasCardsThunk());
	}, [dispatch, isOpenAddTriviaCard]);

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
						<div>
							<ProfileTriviaCardMenu
								id={userId}
								sessionUser={sessionUser}
							/>
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
