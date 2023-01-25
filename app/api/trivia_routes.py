from flask import Blueprint, request
from ..models import Trivia, db
from app.forms import TriviaForm
from flask_login import login_required, current_user


trivia_routes = Blueprint('trivias', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#GET ALL TRIVIA
@trivia_routes.route('')
def get_all_trivias():
    trivias = Trivia.query.all()

    res = {trivia.id: trivia.to_dict() for trivia in trivias}
 
    return res

@trivia_routes.route('', methods=['POST'])
@login_required
def add_trivia():
    form = TriviaForm()


    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_trivia = Trivia()
        form.populate_obj(new_trivia)

        db.session.add(new_trivia)
        db.session.commit()
        return {new_trivia.id: new_trivia.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
