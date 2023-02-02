from .db import db, environment, SCHEMA


class GameData(db.Model):
    __tablename__ = 'gamedatas'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    player_one = db.Column(db.String(40), nullable=False)
    player_two = db.Column(db.String(40),  nullable=False)
    winner = db.Column(db.String(40), nullable=False)
    playdate = db.Column(db.String(40), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    trivia_package_id = db.Column(db.Integer, db.ForeignKey('triviapackages.id'))
   
    #relationships
    trivia_package = db.relationship('TriviaPackage', back_populates = 'gamedata')
    user = db.relationship('User', back_populates = 'gamedata')

    def to_dict(self):
        return {
            'id': self.id,
            'player_one': self.player_one,
            'player_two': self.player_two,
            'winner': self.winner,
            'playdate': self.playdate,
            'triviaPackageId': self.trivia_package_id,
            'user_id': self.user_id
        }

