import { useState } from "react";
import EditReviewModal from "../../../Modals/EditReview/EditReviewModal";
import DeleteReviewModal from "../../../Modals/DeleteReview/DeleteReviewModal";
import styles from "../../../Modals/App.module.css";
import "../profilepage.css";

const ReviewEditButtons = ({ sessionUser, review }) => {
	const [isOpenDeleteReview, setIsOpenDeleteReview] = useState(false);
	const [isOpenEditReview, setIsOpenEditReview] = useState(false);

	return (
		<div className="review-editbtns-container">
			<button
				className={styles.editBtn}
				onClick={() => setIsOpenEditReview(true)}
			>
				EDIT
			</button>
			<button
				className={styles.deleteBtn}
				onClick={() => setIsOpenDeleteReview(true)}
			>
				DELETE
			</button>
			{isOpenDeleteReview && (
				<DeleteReviewModal
					setIsOpen={setIsOpenDeleteReview}
					review={review}
				/>
			)}
			{isOpenEditReview && (
				<EditReviewModal
					setIsOpen={setIsOpenEditReview}
					review={review}
					sessionUser={sessionUser}
				/>
			)}
		</div>
	);
};

export default ReviewEditButtons;
