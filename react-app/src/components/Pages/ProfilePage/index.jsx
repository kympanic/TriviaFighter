import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllTriviasPackagesThunk } from "../../../store/triviapackage";
import { getAllUsersThunk } from "../../../store/users";
import AddTriviaButton from "./AddTriviaButton";
import TriviaEditButtons from "./TriviaEditButtons";
import "./profilepage.css";

const ProfilePage = () => {
	const { userId } = useParams();
	const id = parseInt(userId);
	const dispatch = useDispatch();
	const profileUser = useSelector((state) => state?.users[userId]);
	const sessionUser = useSelector((state) => state.session.user);
	const allTriviaPackages = useSelector((state) =>
		Object.values(state.triviapackages)
	);

	const profileTriviaPackages = allTriviaPackages.filter((triviaPackage) => {
		return triviaPackage.userId === id;
	});

	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
		dispatch(getAllUsersThunk());
	}, [dispatch]);

	const placeHolderImg =
		"https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/defaulttriviaimage.jpg";
	const onImageError = (e) => {
		e.target.src = placeHolderImg;
	};
	return (
		<div className="profilepage-main-container">
			{sessionUser && profileUser && profileTriviaPackages && (
				<div>
					<div className="profilepage-header-container">
						<h1>This is the profile page</h1>
					</div>
					<div className="profilepage-info-container">
						<img
							className="profilepage-profile-img"
							src={profileUser.profileImg}
							alt={profileUser.username}
						/>
						<p>{profileUser.username}</p>
						<p>{profileUser.email}</p>
						<p>average rating</p>
					</div>
					<div className="profilepage-content-container">
						{sessionUser.id === id ? (
							<AddTriviaButton sessionUser={sessionUser} />
						) : (
							<></>
						)}
						<h1>My Trivia Packages</h1>
						<div className="profilepage-triviapackage-menu">
							{profileTriviaPackages.map((triviapackage) => (
								<div
									key={triviapackage.name}
									className="profilepage-triviapackage-card"
								>
									<img
										className="profilepage-triviapackage-img"
										src={triviapackage.imageUrl}
										alt={triviapackage.name}
										onError={onImageError}
									/>
									<p>{triviapackage.name}</p>
									<p>Category: {triviapackage.category}</p>
									<p>
										Difficulty: {triviapackage.difficulty}
									</p>
									{sessionUser.id === id &&
										sessionUser.trivias.length < 20 && (
											<p>
												You need{" "}
												{20 -
													triviapackage.trivias
														.length}{" "}
												more trivia questions!
											</p>
										)}
									{sessionUser.id === id && (
										<TriviaEditButtons
											triviapackage={triviapackage}
											sessionUser={sessionUser}
										/>
									)}
									{sessionUser.id !== id &&
										triviapackage.trivias.length > 1 && (
											<div>
												<button>Play</button>
											</div>
										)}
								</div>
							))}
						</div>
					</div>
					<div>
						<h1>comments section placeholder</h1>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfilePage;
