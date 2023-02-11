from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired



class TriviaForm(FlaskForm):
    user_id=IntegerField('user_id', validators=[DataRequired()])
    trivia_package_id=IntegerField('trivia_package_id', validators=[DataRequired()])
    question = StringField('question', validators=[DataRequired()])
    correct_answer=StringField('correct_answer', validators=[DataRequired()])
    incorrect_answer1=StringField('incorrect_answer1', validators=[DataRequired()])
    incorrect_answer2=StringField('incorrect_answer2', validators=[DataRequired()])
    incorrect_answer3=StringField('incorrect_answer3', validators=[DataRequired()])
  
