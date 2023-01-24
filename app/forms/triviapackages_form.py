from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

def provider_check(form,field):
    provider=field.data
    if (provider=="--"):
        raise ValidationError('Provide valid provider')
    
def category_check(form,field):
    category=field.data
    if len(category) < 4:
        raise ValidationError('Provide valid category')
    if category.count("-") > 1:
        raise ValidationError('Provide valid category')

def difficulty_check(form,field):
    difficulty=field.data
    if len(difficulty) < 4:
        raise ValidationError('Provide valid difficulty')
    if difficulty.count("-") > 1:
        raise ValidationError('Provide valid difficulty')

class TriviaPackageForm(FlaskForm):
    user_id=IntegerField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    category=StringField('account_number', validators=[DataRequired(),category_check])
    description=StringField('description', validators=[DataRequired()])
    difficulty=StringField('difficulty', validators=[DataRequired(), difficulty_check])
    image_url=StringField('image_url')
