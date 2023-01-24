from flask import Blueprint,request
from ..models import TriviaCard, db
from app.forms import TriviaCardForm
from flask_login import login_required, current_user


triviacard_routes = Blueprint('triviacards', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#GET ALL TRIVIA CARDS
@triviacard_routes.route('')
def get_all_triviacards():
    trivia_cards = TriviaCard.query.all()

    res = {trivia_card.id: trivia_card.to_dict() for trivia_card in trivia_cards}
 
    return res

@triviacard_routes.route('', methods=['POST'])
@login_required
def add_trivia_card():
    form = TriviaCardForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        trivia_card = TriviaCard()
        form.populate_obj(trivia_card)

        db.session.add(trivia_card)
        db.session.commit()
        return {trivia_card.id: trivia_card.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#DELETE A TRIVIA CARD
@triviacard_routes.route('/<int:id>', methods = ["DELETE"])
@login_required
def delete_product(id):
    selectedTriviaCard = TriviaCard.query.get(id)

    if selectedTriviaCard.user_id != current_user.id:
        return {'error': "You are not authorized to delete this product"}, 401

    db.session.delete(selectedTriviaCard)
    db.session.commit()

    return {"msg": "Successfully deleted the trivia card!"}
