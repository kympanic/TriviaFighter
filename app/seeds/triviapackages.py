from app.models import db, TriviaPackage, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_trivia_packages():
    triviapackage1 = TriviaPackage(
        name="Sports Bonanza", category="Sports", description="Random questions about sports", difficulty="Easy", user_id=1, image_url="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/gorillasports.jpg" )
    triviapackage2 = TriviaPackage(
        name="Animals Animals All Animals", category="Animals", description="Who doesn't like animals?", difficulty="Medium", user_id=1, image_url="" )
    triviapackage3 = TriviaPackage(
        name="History", category="History", description="Refresh your grade school history knowledge!", difficulty="Easy", user_id=1, image_url="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/historycaesar.jpg" )
    triviapackage4 = TriviaPackage(
        name="Paparazzi", category="Celebrities", description="Easy random trivia about celebrities. MOOOOO", difficulty="Easy", user_id=2, image_url="" )
    triviapackage5 = TriviaPackage(
        name="TV? MOOOO", category="Entertainment: Television", description="Normal level trivia for every tv enthusiast", difficulty="Medium", user_id=2, image_url="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/television.jpg" )
    triviapackage6 = TriviaPackage(
        name="Player 1 Ready", category="Entertainment: Video Games", description="Only for the hardcore gamer", difficulty="Hard", user_id=3, image_url="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/videogamefatcat.jpg" )
    triviapackage7 = TriviaPackage(
        name="Everyone and Everything", category="General Knowledge", description="Lets get it! How much do you actually know?", difficulty="Easy", user_id=3, image_url="" )
  
    db.session.add_all([triviapackage1,triviapackage2,triviapackage3,triviapackage4,triviapackage5,triviapackage6,triviapackage7])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_trivia_packages():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.triviapackages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM triviapackages")
        
    db.session.commit()