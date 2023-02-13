import { useState } from "react";
import EditReviewModal from "../../../Modals/EditReview/EditReviewModal";
import DeleteReviewModal from "../../../Modals/DeleteReview/DeleteReviewModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import "../profilepage.css";

const ReviewEditButtons = ({ sessionUser, review }) => {
	const [isOpenDeleteReview, setIsOpenDeleteReview] = useState(false);
	const [isOpenEditReview, setIsOpenEditReview] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="review-editbtns-container">
			{!isOpen ? (
				<FontAwesomeIcon
					className="review-edit-menu"
					icon={faEllipsisH}
					onClick={() => setIsOpen(true)}
				/>
			) : (
				<div className="edit-review-links-container">
					<h3
						className="edit-links"
						onClick={() => setIsOpenEditReview(true)}
					>
						Edit Review
					</h3>
					<h3
						className="edit-links"
						onClick={() => setIsOpenDeleteReview(true)}
					>
						Delete Review
					</h3>
					<h3 className="edit-links" onClick={() => setIsOpen(false)}>
						Close
					</h3>
					{isOpenDeleteReview && (
						<DeleteReviewModal
							setIsOpen={setIsOpenDeleteReview}
							review={review}
							setIsOpenMenu={setIsOpen}
						/>
					)}
					{isOpenEditReview && (
						<EditReviewModal
							setIsOpen={setIsOpenEditReview}
							review={review}
							sessionUser={sessionUser}
							setIsOpenMenu={setIsOpen}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default ReviewEditButtons;
