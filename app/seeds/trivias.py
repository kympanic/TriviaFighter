from app.models import db, Trivia, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_trivias():
    trivia1 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", category="Entertainment", difficulty="Hard", user_id=1, trivia_package_id=1 )
 
    db.session.add(trivia1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_trivias():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.trivias RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM trivias")
        
    db.session.commit()