from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, URL
from app.models import User

## ADD CUSTOM ERROR VALIDATORS HERE

def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')




class ProfileForm(FlaskForm):
    username=StringField('username', validators=[DataRequired(),username_exists])
    email = StringField('email', validators=[DataRequired()])
    profile_img=StringField('profile_img', validators=[URL(require_tld=True,message="Please provide a valid url")])
    