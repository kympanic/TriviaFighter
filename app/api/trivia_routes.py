from flask import Blueprint
from ..models import Trivia


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
def get_all_products():
    trivias = Trivia.query.all()

    res = {trivia.id: trivia.to_dict() for trivia in trivias}
 
    return res