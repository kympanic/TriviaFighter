from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='Demo', email='demo@aa.io', password='password',profile_img="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/coolcatwithbat.jpg")
    user2 = User(username='MooMoo', email='moomoo@aa.io', password='password',profile_img="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/sleepingcow.jpg")
    user3 = User(username="Panda Programmer", email='pandaprogrammer@aa.io', password='password',profile_img="https://trivia-fighter.s3.us-west-2.amazonaws.com/Images/hackerpanda.jpg" )
    
    db.session.add_all([demo,user2,user3])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
    db.session.commit()