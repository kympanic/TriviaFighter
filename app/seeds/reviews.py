from app.models import db, Review, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(rating="4.5", body="The questions were well balanced and fun", user_id=2,trivia_package_id=1)
    review2 = Review(rating="2.5", body="The questions were all over the place and difficult", user_id=2,trivia_package_id=2)
    review3 = Review(rating="5.0", body="Loved it! Would play again once more questions are added", user_id=2,trivia_package_id=3)
    review4 = Review(rating="3.0", body="Fun but a bit too difficult", user_id=2,trivia_package_id=5)
    review5 = Review(rating="2.5", body="Fun but a bit too easy. Needs some more questions about food!", user_id=2,trivia_package_id=7)
    review6 = Review(rating="3.5", body="A standard trivia pack. Needs more questions", user_id=3,trivia_package_id=1)
    review7 = Review(rating="5.0", body="Best questions ever", user_id=3,trivia_package_id=2)
    review8 = Review(rating="2.0", body="Eh, the questions were not very well thought out", user_id=3,trivia_package_id=3)
    review10 = Review(rating="2.5", body="Nothing inspiring but had the genre correct", user_id=3,trivia_package_id=4)
    review12 = Review(rating="4.0", body="Great Job! Needs some more questions about 90's sitcoms", user_id=1,trivia_package_id=4)
    review13 = Review(rating="4.0", body="Wow! Good work! I would try this again", user_id=1,trivia_package_id=6)
    review14 = Review(rating="3.0", body="It was okay. Would need more questions for me to play again", user_id=1,trivia_package_id=5)
    
    db.session.add_all([review1,review2,review3,review4,review5,review6,review7,review8,review10,review12,review13,review14])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")
        
    db.session.commit()