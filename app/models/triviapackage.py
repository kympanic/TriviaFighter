from .db import db, environment, SCHEMA, add_prefix_for_prod


class TriviaPackage (db.Model):
    __tablename__ = 'triviapackages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(35), nullable=False, unique=True)
    category = db.Column(db.String(255), nullable=False)
    description= db.Column(db.String(255), nullable=False)
    difficulty = db.Column(db.String(10),nullable=False)
    image_url = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    #relationships
    user = db.relationship('User', back_populates='trivia_packages')
    trivias = db.relationship('Trivia', back_populates ='trivia_package', cascade='all,delete')
    reviews = db.relationship('Review', back_populates='trivia_package', cascade='all,delete')
    gamedata = db.relationship('GameData', back_populates='trivia_package')



    def to_dict(self):
        #conversion to get average rating on triviapackages
        my_list_ratings = [review.to_dict()['rating'] for review in self.reviews]
        #convert to float from string
        converted_ratings = [float(x) for x in my_list_ratings]
        #get the average
        total = sum(converted_ratings)
        if total == 0:
            avg = 3.00
        else:
            avg = total / len(converted_ratings)
        #only get 2 decimal places    
        avg = (f'{avg:.2f}')

        return {
            'id': self.id,
            'userId': self.user_id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'difficulty': self.difficulty,
            'avgRating': avg,
            'imageUrl': self.image_url,
            'user': self.user.to_dict_basic(),
            'trivias': [trivia.to_dict_basic() for trivia in self.trivias],
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