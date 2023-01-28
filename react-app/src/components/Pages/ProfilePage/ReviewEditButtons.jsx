import { useState } from "react";
import EditReviewModal from "../../Modals/EditReview/EditReviewModal";
import DeleteReviewModal from "../../Modals/DeleteReview/DeleteReviewModal";
import styles from "../../Modals/App.module.css";
const ReviewEditButtons = ({ sessionUser, review }) => {
	const [isOpenDeleteReview, setIsOpenDeleteReview] = useState(false);
	const [isOpenEditReview, setIsOpenEditReview] = useState(false);

	return (
		<div>
			<button
				className={styles.primaryBtn}
				onClick={() => setIsOpenEditReview(true)}
			>
				Edit
			</button>
			<button
				className={styles.primaryBtn}
				onClick={() => setIsOpenDeleteReview(true)}
			>
				Delete
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
