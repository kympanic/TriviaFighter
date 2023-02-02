from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired



class GameDataForm(FlaskForm):
    user_id=IntegerField('user_id', validators=[DataRequired()])
    trivia_package_id=IntegerField('trivia_package_id')
    player_one = StringField('player_one', validators=[DataRequired()])
    player_two=StringField('player_two', validators=[DataRequired()])
    winner=StringField('winner', validators=[DataRequired()])
    playdate=StringField('playdate', validators=[DataRequired()])
    
  
