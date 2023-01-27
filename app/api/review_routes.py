from flask import Blueprint, request
from ..models import Review, db
from app.forms import ReviewForm
from flask_login import login_required, current_user


review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#GET ALL REVIEWS
@review_routes.route('')
def get_all_reviews():
    reviews = Review.query.all()

    res = {review.id: review.to_dict() for review in reviews}
 
    return res
