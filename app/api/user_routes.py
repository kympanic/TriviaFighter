from flask import Blueprint
from flask_login import login_required
from app.models import User, TriviaPackage, Review


user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    
    res = {user.id: user.to_dict() for user in users}

    return res


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

#GET ALL TRIVIA PACKAGES BY USER ID
@user_routes.route('/<int:id>/triviapackages')
@login_required
def get_trivia_packages_by_user(id):
    trivia_packages =TriviaPackage.query.filter_by(user_id=id).all()
   
    res = {trivia_package.id: trivia_package.to_dict() for trivia_package in trivia_packages}
 
    return res

#GET ALL REVIEWS BY USER ID
@user_routes.route('/<int:id>/reviews')
@login_required
def get_reviews_by_user(id):
    reviews = Review.query.filter_by(user_id=id).all()
    
    res = {review.id: review.to_dict() for review in reviews}

    return res