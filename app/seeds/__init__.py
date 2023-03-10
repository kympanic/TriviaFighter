from flask.cli import AppGroup
from .users import seed_users, undo_users
from .trivias import seed_trivias, undo_trivias
from .triviapackages import seed_trivia_packages, undo_trivia_packages
from .reviews import seed_reviews,undo_reviews
from .gamedatas import seed_gamedatas, undo_gamedatas
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_gamedatas()
        undo_reviews()
        undo_trivias()
        undo_trivia_packages()
        undo_users()
    seed_users()
    seed_trivia_packages()
    seed_trivias()
    seed_reviews()
    seed_gamedatas()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_reviews()
    undo_trivias()
    undo_gamedatas()
    undo_trivia_packages()
    undo_users()

    # Add other undo functions here