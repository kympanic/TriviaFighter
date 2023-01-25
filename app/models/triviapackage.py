from .db import db, environment, SCHEMA, add_prefix_for_prod


class TriviaPackage (db.Model):
    __tablename__ = 'triviapackages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    category = db.Column(db.String(255), nullable=False)
    description= db.Column(db.String(255), nullable=False)
    difficulty = db.Column(db.String(10),nullable=False)
    image_url = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    #relationships
    user = db.relationship('User', back_populates='trivia_packages')
    trivias = db.relationship('Trivia', back_populates ='trivia_package', cascade='all,delete')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'difficulty': self.difficulty,
            'imageUrl': self.image_url,
            'user': self.user.to_dict_basic(),
            'trivias': [trivia.to_dict_basic() for trivia in self.trivias]
        }

    def to_dict_basic(self):
        return {
            'id':self.id,
            'userId': self.user_id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'difficulty': self.difficulty,
            'imageUrl': self.image_url,
            'trivias': [trivia.to_dict_basic() for trivia in self.trivias],
        }