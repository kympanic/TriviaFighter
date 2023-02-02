from .db import db, environment, SCHEMA


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.String(10), nullable=False)
    body = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    trivia_package_id = db.Column(db.Integer, db.ForeignKey('triviapackages.id'), nullable=False)
   
    #relationships
    trivia_package = db.relationship('TriviaPackage', back_populates = 'reviews')
    user = db.relationship('User', back_populates = 'reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'body': self.body,
            'userId': self.user_id,
            'triviaPackageId': self.trivia_package_id,
            'trivia_package': self.trivia_package.to_dict_basic(),
            'user': self.user.to_dict_basic()
        }
