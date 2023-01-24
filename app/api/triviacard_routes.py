from flask import Blueprint
from ..models import TriviaCard


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