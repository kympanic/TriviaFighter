import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUserThunk } from "../../../store/users";

const EditUserModal = ({ setIsOpen, sessionUser }) => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState([]);
	const [username, setUsername] = useState("");
	const [profileImg, setProfileImg] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const editedUser = {
			id: sessionUser.id,
			username,
			email: sessionUser.email,
			profile_img: profileImg,
		};
		const data = await dispatch(editUserThunk(editedUser));

		if (data) {
			setErrors(data);
		} else {
			setIsOpen(false);
		}
	};

	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>EDIT YOUR INFO</h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}
					>
						<RiCloseLine style={{ marginBottom: "-3px" }} />
					</button>
					<div className={styles.modalContent}>
						<form
							className={styles.editUserForm}
							onSubmit={handleSubmit}
						>
							<div className={styles.errors}>
								{errors.map((error, ind) => (
									<div className="error-body" key={ind}>
										<ul>
											<li className="error-item">
												{error}
											</li>
										</ul>
									</div>
								))}
							</div>
							<div className={styles.inputGroup}>
								<label>USERNAME </label>
								<input
									type="text"
									name="username"
									onChange={(e) =>
										setUsername(e.target.value)
									}
									maxLength={30}
									value={username}
								/>
							</div>
							<div className={styles.inputGroup}>
								<label>PROFILE IMAGE URL </label>
								<input
									type="url"
									name="profileImg"
									onChange={(e) =>
										setProfileImg(e.target.value)
									}
									placeholder="https://example.com"
								></input>
							</div>
							<div className={styles.modalActions}>
								<div className={styles.actionsContainer}>
									<button
										type="submit"
										className={styles.submitBtn}
									>
										EDIT
									</button>
									<button
										className={styles.cancelBtn}
										onClick={() => setIsOpen(false)}
									>
										CANCEL
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditUserModal;
