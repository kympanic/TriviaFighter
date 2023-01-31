import { useHistory } from "react-router-dom";
import { setDefaultTriviaImage } from "../../../Helpers";
import ReviewEditButtons from "../ReviewEditButtons";
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
				<p>{review.trivia_package.name}</p>
				<p>rating: {review.rating}</p>
			</div>
			<div className="profilepage-comments-body">
				<p id="profilepage-comment">{review.body}</p>
			</div>
			<div>
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
