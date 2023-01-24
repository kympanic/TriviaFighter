from flask import Blueprint,request
from ..models import TriviaPackage, db
from app.forms import TriviaPackageForm
from flask_login import login_required, current_user


triviapackage_routes = Blueprint('triviapackages', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#GET ALL TRIVIA PACKAGES
@triviapackage_routes.route('')
def get_all_triviapackages():
    trivia_packages = TriviaPackage.query.all()

    res = {trivia_package.id: trivia_package.to_dict() for trivia_package in trivia_packages}
 
    return res

@triviapackage_routes.route('', methods=['POST'])
@login_required
def add_trivia_package():
    form = TriviaPackageForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        trivia_package = TriviaPackage()
        form.populate_obj(trivia_package)

        db.session.add(trivia_package)
        db.session.commit()
        return {trivia_package.id: trivia_package.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@triviapackage_routes.route('/<int:id>', methods=['PUT','PATCH'])
@login_required
def edit_trivia_package(id):
    trivia_package = TriviaPackage.query.get(id)
    form = TriviaPackageForm()
    
    if form.data["user_id"] != current_user.id:
        return {'error': "You are not authorized to edit this product"}, 401

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form.populate_obj(trivia_package)
        db.session.commit()
        return {trivia_package.id: trivia_package.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
 

#DELETE A TRIVIA PACKAGE
@triviapackage_routes.route('/<int:id>', methods = ["DELETE"])
@login_required
def delete_product(id):
    selectedTriviaPackage = TriviaPackage.query.get(id)

    if selectedTriviaPackage.user_id != current_user.id:
        return {'error': "You are not authorized to delete this product"}, 401

    db.session.delete(selectedTriviaPackage)
    db.session.commit()

    return {"msg": "Successfully deleted the trivia package!"}
