import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileTriviaCardMenu from "./ProfileTriviaCardMenu";
import ProfileCreateTrivia from "./ProfileCreateTrivia";
import { getAllTriviasThunk } from "../../../store/trivia";

const ProfilePage = () => {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(getAllTriviasThunk());
	}, [dispatch]);

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
							<ProfileCreateTrivia
								id={userId}
								sessionUser={sessionUser}
							/>
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
