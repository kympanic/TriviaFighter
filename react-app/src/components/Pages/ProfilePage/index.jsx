import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllTriviasPackagesThunk } from "../../../store/triviapackage";
import { getAllUsersThunk } from "../../../store/users";
import AddTriviaPackageModal from "../../Modals/AddTriviaPackage/AddTriviaPackageModal";
import DeleteTriviaPackageModal from "../../Modals/DeleteTriviaPackage/DeleteTriviaPackageModal";
import EditTriviaPackageModal from "../../Modals/EditTriviaPackage/EditTriviaPackageModal";

const ProfilePage = () => {
	const { userId } = useParams();
	const id = parseInt(userId);
	const dispatch = useDispatch();
	const history = useHistory();
	const selectedUser = useSelector((state) => state?.users[userId]);
	const sessionUser = useSelector((state) => state.session.user);

	const [isOpenAddTriviaPackage, setIsOpenAddTriviaPackage] = useState(false);
	const [isOpenDeleteTriviaPackage, setIsOpenDeleteTriviaPackage] =
		useState(false);
	const [isOpenEditTriviaPackage, setIsOpenEditTriviaPackage] =
		useState(false);

	useEffect(() => {
		dispatch(getAllTriviasPackagesThunk());
		dispatch(getAllUsersThunk());
	}, [dispatch]);

	return (
		<div>
			{sessionUser && selectedUser && (
				<div>
					<div className="profilepage-info-container">
						<img
							src={selectedUser.profileImg}
							alt={selectedUser.username}
						/>
						<p>{selectedUser.username}</p>
						<p>{selectedUser.email}</p>
						<p>average rating</p>
					</div>
					<div className="profilepage-header-container">
						<h1>This is the profile page</h1>
					</div>
					<div className="profilepage-content-container">
						<div>
							{isOpenAddTriviaPackage && (
								<AddTriviaPackageModal
									setIsOpen={setIsOpenAddTriviaPackage}
									sessionUser={sessionUser}
								/>
							)}
							{sessionUser.id === id ? (
								<button
									onClick={() =>
										setIsOpenAddTriviaPackage(true)
									}
								>
									Create Trivia!
								</button>
							) : (
								<></>
							)}
						</div>
						<div className="profilepage-triviapackage-menu">
							<h1>
								This is where the trivia packages made by the
								user would go
							</h1>
							{selectedUser &&
								sessionUser &&
								sessionUser.triviaPackages.map(
									(triviapackage) => (
										<div key={triviapackage.name}>
											<img
												src={triviapackage.imageUrl}
												alt={triviapackage.name}
											/>
											<p>{triviapackage.category}</p>
											<p>{triviapackage.difficulty}</p>
											{sessionUser.id === id &&
												sessionUser.trivias.length <
													20 && (
													<p>
														You need{" "}
														{20 -
															triviapackage
																.trivias
																.length}{" "}
														more trivia questions!
													</p>
												)}
											{sessionUser.id === id && (
												<div>
													{isOpenDeleteTriviaPackage && (
														<DeleteTriviaPackageModal
															setIsOpen={
																setIsOpenDeleteTriviaPackage
															}
															triviapackage={
																triviapackage
															}
														/>
													)}
													{isOpenEditTriviaPackage && (
														<EditTriviaPackageModal
															setIsOpen={
																setIsOpenEditTriviaPackage
															}
															triviapackage={
																triviapackage
															}
															sessionUser={
																sessionUser
															}
														/>
													)}
													<button
														onClick={() =>
															history.push({
																pathname: `/triviapackage/${triviapackage.id}`,
																// state: {
																// 	triviapackage,
																// 	sessionUser,
																// },
															})
														}
													>
														Add Trivia
													</button>
													<button
														onClick={() =>
															setIsOpenEditTriviaPackage(
																true
															)
														}
													>
														Edit
													</button>
													<button
														onClick={() =>
															setIsOpenDeleteTriviaPackage(
																true
															)
														}
													>
														Delete
													</button>
												</div>
											)}
											{sessionUser.id !== id &&
												triviapackage.trivias.length ===
													1 && (
													<div>
														<button>Play</button>
													</div>
												)}
										</div>
									)
								)}
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
