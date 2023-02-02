from flask import Blueprint, request
from ..models import GameData, db
from app.forms import GameDataForm
from flask_login import login_required, current_user


gamedata_routes = Blueprint('gamedatas', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#GET ALL GAMEDATA
@gamedata_routes.route('')
def get_all_gamedata():
    gamedatas = GameData.query.all()

    res = {gamedata.id: gamedata.to_dict() for gamedata in gamedatas}
 
    return res

#POST GAMEDATA
@gamedata_routes.route('', methods=['POST'])
@login_required
def add_gamedata():
    form = GameDataForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_gamedata= GameData()
        form.populate_obj(new_gamedata)

        db.session.add(new_gamedata)
        db.session.commit()
        return {new_gamedata.id: new_gamedata.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
