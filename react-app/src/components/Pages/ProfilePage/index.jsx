import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTriviasThunk } from "../../../store/trivia";

const ProfilePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTriviasThunk());
	}, [dispatch]);

	return (
		<div>
			<h1>This is the profile page</h1>
		</div>
	);
};

export default ProfilePage;
