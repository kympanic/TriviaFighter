from .db import db, environment, SCHEMA, add_prefix_for_prod


class Trivia (db.Model):
    __tablename__ = 'trivias'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(255), nullable=False)
    correct_answer = db.Column(db.String(255), nullable=False)
    incorrect_answer1 = db.Column(db.String(255), nullable=False)
    incorrect_answer2 = db.Column(db.String(255), nullable=False)
    incorrect_answer3 = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    trivia_package_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('triviapackages.id')), nullable=False)

    #relationships
    user = db.relationship('User', back_populates = 'trivias')
    trivia_package = db.relationship('TriviaPackage', back_populates ='trivias')

    def to_dict(self):
        return {
            'id': self.id,
            'question': self.question,
            'correctAnswer': self.correct_answer,
            'incorrectAnswer1': self.incorrect_answer1,
            'incorrectAnswer2': self.incorrect_answer2,
            'incorrectAnswer3': self.incorrect_answer3,            
            'triviaPackageId': self.trivia_package_id,
            'user': self.user.to_dict_basic(),
            'triviaPackage': self.trivia_package.to_dict_basic(),
        }

    def to_dict_basic(self):
        return {
            'id': self.id,
            'question': self.question,
            'correctAnswer': self.correct_answer,
            'incorrectAnswer1' : self.incorrect_answer1,
            'incorrectAnswer2' : self.incorrect_answer2,
            'incorrectAnswer3' : self.incorrect_answer3,
            'triviaPackageId': self.trivia_package_id,
            'userId': self.user_id
        }