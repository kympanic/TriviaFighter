from app.models import db, TriviaPackage, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_trivia_packages():
    triviapackage1 = TriviaPackage(
      name="Entertainment Bonanza", category="Entertainment: Television", description="This game is all about movies from the 2000s", difficulty="Hard", user_id=1, image_url="" )
 
    db.session.add(triviapackage1)

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