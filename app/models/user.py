from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_img = db.Column(db.String(255))
    hashed_password = db.Column(db.String(255), nullable=False)
    

    #relationships
    trivias = db.relationship('Trivia', back_populates='user', cascade='all,delete')
    trivia_packages = db.relationship('TriviaPackage', back_populates='user', cascade='all,delete')
    reviews = db.relationship('Review', back_populates='user', cascade="all,delete")
    gamedata = db.relationship('GameData', back_populates='user', cascade='all,delete')
   
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profileImg': self.profile_img,
            'trivias': [trivia.to_dict_basic() for trivia in self.trivias],
            'triviaPackages': [trivia_package.to_dict_basic() for trivia_package in self.trivia_packages]
        }
    
    def to_dict_basic(self):
        return{
            'username': self.username,
            'email': self.email,
            'profileImg': self.profile_img,
        }