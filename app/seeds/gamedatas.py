from app.models import db, GameData, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_gamedatas():
    gamedata1 = GameData(player_one="Wamster Hamster", player_two="Shiba Ninja", winner="Wamster Hamster", playdate="2023-01-1",user_id=1,trivia_package_id=3)
 
    db.session.add_all([gamedata1])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_gamedatas():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.gamedatas RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM gamedatas")
        
    db.session.commit()