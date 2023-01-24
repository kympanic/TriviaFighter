from .db import db, environment, SCHEMA, add_prefix_for_prod


class TriviaCard (db.Model):
    __tablename__ = 'triviacards'

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
    user = db.relationship('User', back_populates='trivia_cards')
    trivia = db.relationship('Trivia', back_populates ='trivia_card', cascade='all,delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'difficulty': self.difficulty,
            'imageUrl': self.image_url,
            'user': self.user.to_dict_basic(),
            'trivia': self.trivia.to_dict(),
        }

    def to_dict_basic(self):
        return {
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'difficulty': self.difficulty,
            'image_url': self.image_url,
        }