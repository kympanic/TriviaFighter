import { useHistory } from "react-router-dom";
import { setDefaultTriviaImage } from "../../../Helpers";
import ReviewEditButtons from "../Buttons/ReviewEditButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewSection = ({ review, sessionUser, id }) => {
	const history = useHistory();

	return (
		<div key={review.id} className="profilepage-comments-components">
			<div className="profilepage-comments-info">
				<img
					src={review.trivia_package.imageUrl}
					alt={review.trivia_package.name}
					onClick={() =>
						history.push(`/profile/${review.trivia_package.userId}`)
					}
					onError={setDefaultTriviaImage}
					className="profilepage-review-img"
				/>
				<p className="review-triviapkg-title">
					{review.trivia_package.name}
				</p>
				<p>
					rating: {review.rating}
					<FontAwesomeIcon
						className="header-star-icon"
						icon={faStar}
					/>
				</p>
			</div>
			<div className="profilepage-comments-body">
				<p id="profilepage-comment">{review.body}</p>
				{sessionUser.id === id && (
					<ReviewEditButtons
						review={review}
						sessionUser={sessionUser}
					/>
				)}
			</div>
		</div>
	);
};

export default ReviewSection;
