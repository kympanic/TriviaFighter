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

#POST REVIEW
@review_routes.route('', methods=['POST'])
@login_required
def add_review():
    form = ReviewForm()


    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_review = Review()
        form.populate_obj(new_review)

        db.session.add(new_review)
        db.session.commit()
        return {new_review.id: new_review.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#EDIT TRIVIA BY ID
@review_routes.route('/<int:id>', methods=['PUT','PATCH'])
@login_required
def edit_review(id):
    edited_review = Review.query.get(id)
    form = ReviewForm()
    
    if form.data["user_id"] != current_user.id:
        return {'error': "You are not authorized to edit this product"}, 401

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form.populate_obj(edited_review)
        db.session.commit()
        return {edited_review.id: edited_review.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
 
 #DELETE TRIVIA BY ID
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    deleted_review = Review.query.get(id)
    
    if deleted_review.user_id != current_user.id:
        return {'error': "You are not authorized to delete this review"}, 401

    db.session.delete(deleted_review)
    db.session.commit()

    return {"msg": "Successfully deleted the Review!"}
 
 