from flask import Blueprint,request
from ..models import TriviaPackage, db
from app.forms import TriviaPackageForm
from flask_login import login_required, current_user
from app.s3_helpers import (upload_file_to_s3,allowed_file,get_unique_filename)
from ..utils import Print
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

#GET ONE TRIVIA PACKAGE BY ID
@triviapackage_routes.route('/<int:id>')
def get_trivia_package(id):
    selected_trivia_package = TriviaPackage.query.get(id)

    res = {selected_trivia_package.id: selected_trivia_package.to_dict()}

    return res

#POST TRIVIA PACKAGE
@triviapackage_routes.route('', methods=['POST'])
@login_required
def add_trivia_package():
    form = TriviaPackageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # Print(form.data)        
    # if "image" not in form["image_url"].data:
    #     return {"errors": "image required"}, 400
    # Print("is it getting here? after the image error")
    # image = form["image_url"].data
    # if not allowed_file(image.filename):
    #     return {"errors": "file type not permitted"},400
    # image.filename= get_unique_filename(image.filename)
    # upload = upload_file_to_s3(image)

    # if "image_url" not in upload:
    #     return upload,400
    
    # url = upload["url"]

    if form.validate_on_submit():
        trivia_package = TriviaPackage()
        form.populate_obj(trivia_package)
        db.session.add(trivia_package)
        db.session.commit()
        return {trivia_package.id: trivia_package.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#EDIT TRIVIA PACKAGE BY ID
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
