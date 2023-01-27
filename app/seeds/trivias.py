from app.models import db, Trivia, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_trivias():
    trivia1 = Trivia(
      question="A carnivorous animal eats flesh, what does a nucivorous animal eat?", correct_answer="Nuts", incorrect_answer1="Nothing", incorrect_answer2="Fruit",incorrect_answer3="Seaweed", user_id=1, trivia_package_id=2 )
    trivia2 = Trivia(
      question="What is the common term for bovine spongiform encephalopathy (BSE)??", correct_answer="Mad Cow disease", incorrect_answer1="Weil's disease", incorrect_answer2="Milk fever",incorrect_answer3="Wrong answer3", user_id=1, trivia_package_id=2 )
    trivia3 = Trivia(
      question="What are rhinos horn made of??", correct_answer="Keratin", incorrect_answer1="Bone", incorrect_answer2="Ivory",incorrect_answer3="Skin", user_id=1, trivia_package_id=2 )
    trivia4 = Trivia(
      question="What is the scientific name for the Polar Bear?", correct_answer="Ursus Maritumus", incorrect_answer1="Polar Bear", incorrect_answer2="Ursus Spelaeus",incorrect_answer3="Ursus Arctos", user_id=1, trivia_package_id=2 )
    trivia5 = Trivia(
      question="What dog breed is one of the oldest breeds of dog and has flourished since before 400 BCE.", correct_answer="Pugs", incorrect_answer1="Bulldogs", incorrect_answer2="Boxers",incorrect_answer3="Chihuahua", user_id=1, trivia_package_id=2 )
    trivia6 = Trivia(
      question="What is the world's longest venomous snake?", correct_answer="King Cobra", incorrect_answer1="Green Anaconda", incorrect_answer2="Inland Taipan",incorrect_answer3="Yellow Bellied Sea Snake", user_id=1, trivia_package_id=2 )
    trivia7 = Trivia(
      question="Which animal was part of an Russian domestication experiment in 1959?", correct_answer="Foxes", incorrect_answer1="Pigeons", incorrect_answer2="Bears",incorrect_answer3="Alligators", user_id=1, trivia_package_id=2 )
    trivia8 = Trivia(
      question="Cashmere is the wool from which kind of animal?", correct_answer="Goat", incorrect_answer1="Sheep", incorrect_answer2="Camel",incorrect_answer3="Llama", user_id=1, trivia_package_id=2 )
    trivia9 = Trivia(
      question="What does hippopotamus mean and in what langauge?", correct_answer="River Horse (Greek)", incorrect_answer1="River Horse(Latin)", incorrect_answer2="Fat Pig (Greek)",incorrect_answer3="Fat Pig (Latin)", user_id=1, trivia_package_id=2 )
    trivia10 = Trivia(
      question="The dish Fugu, is made from what family of fish?", correct_answer="Pufferfish", incorrect_answer1="Bass", incorrect_answer2="Salmon",incorrect_answer3="Mackerel", user_id=1, trivia_package_id=2 )
    trivia11 = Trivia(
      question="What is the name for a male bee that comes from an unfertilized egg?", correct_answer="Drone", incorrect_answer1="Soldier", incorrect_answer2="Worker",incorrect_answer3="Male", user_id=1, trivia_package_id=2 )
    trivia12 = Trivia(
      question="What color/colour is a polar bear's skin?", correct_answer="Black", incorrect_answer1="White", incorrect_answer2="Pink",incorrect_answer3="Green", user_id=1, trivia_package_id=2 )
    trivia13 = Trivia(
      question="Who was the first American in space?", correct_answer="Alan Shephard", incorrect_answer1="Neil Armstrong", incorrect_answer2="John Glenn",incorrect_answer3="Jim Lovell", user_id=1, trivia_package_id=3 )
    trivia14 = Trivia(
      question="To what political party did Abraham Lincoln belong when elected POTUS?", correct_answer="Republican", incorrect_answer1="Democrat", incorrect_answer2="Independent",incorrect_answer3="Whig", user_id=1, trivia_package_id=3 )
    trivia15 = Trivia(
      question="Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?", correct_answer="The Polish President", incorrect_answer1="Pope John Paull II", incorrect_answer2="Bang-Ding Ow",incorrect_answer3="Albert Putin", user_id=1, trivia_package_id=3 )
    trivia16 = Trivia(
      question="Who led the Communist Revolution of Russia?", correct_answer="Vladimir Lenin", incorrect_answer1="Joseph Stalin", incorrect_answer2="Vladimir Putin",incorrect_answer3="Mikhail Gorbachev", user_id=1, trivia_package_id=3 )
    trivia17 = Trivia(
      question="In 1453, which important city fell?", correct_answer="Constantinople", incorrect_answer1="Rome", incorrect_answer2="Hamburg",incorrect_answer3="Athens", user_id=1, trivia_package_id=3 )
    trivia18 = Trivia(
      question="Brazil was a former colony under which country?", correct_answer="Portugal", incorrect_answer1="Spain", incorrect_answer2="The Netherlands",incorrect_answer3="France", user_id=1, trivia_package_id=3 )
    trivia19 = Trivia(
      question="In what year did the Wall Street Crash take place?", correct_answer="1929", incorrect_answer1="1999", incorrect_answer2="1932",incorrect_answer3="1925", user_id=1, trivia_package_id=3 )
    trivia20 = Trivia(
      question="Who discovered Penicillin?", correct_answer="Alexander Flemming", incorrect_answer1="Marie Curie", incorrect_answer2="Alfred Nobel",incorrect_answer3="Louis Pasteur", user_id=1, trivia_package_id=3 )
    trivia21 = Trivia(
      question="Who was the first president of the United States?", correct_answer="George Washington", incorrect_answer1="James Madison", incorrect_answer2="Thomas Jefferson",incorrect_answer3="Donald Trump", user_id=1, trivia_package_id=3 )
    trivia22 = Trivia(
      question="Which famous military commander marched an army, which included war elephants, over the Alps during the Second Punic War?", correct_answer="Hannibal", incorrect_answer1="Garmanicus", incorrect_answer2="Alexander the Great",incorrect_answer3="Tiberius", user_id=1, trivia_package_id=3 )
    trivia23 = Trivia(
      question="Which of these countries remained neutral during World War II?", correct_answer="Switzerland", incorrect_answer1="United Kingdom", incorrect_answer2="France",incorrect_answer3="Italy", user_id=1, trivia_package_id=3 )
    trivia24 = Trivia(
      question="How many manned moon landings have there been?", correct_answer="6", incorrect_answer1="1", incorrect_answer2="99999",incorrect_answer3="Never landed", user_id=1, trivia_package_id=3 )
    trivia25 = Trivia(
      question="Who was the first prime minister of Canada?", correct_answer="John Macdonald", incorrect_answer1="John Abbott", incorrect_answer2="Alexander Mackenzie",incorrect_answer3="Robert Borden", user_id=1, trivia_package_id=3 )
    trivia26 = Trivia(
      question="How was Socrates executed?", correct_answer="Poison", incorrect_answer1="Decapitation", incorrect_answer2="Firing Squad",incorrect_answer3="Crucifixion", user_id=1, trivia_package_id=3 )
    trivia27 = Trivia(
      question="Which of these species is not extinct?", correct_answer="Komodo Dragon", incorrect_answer1="Japanese sea lion", incorrect_answer2="Tasmanian tiger",incorrect_answer3="Saudi gazelle", user_id=1, trivia_package_id=2 )
    trivia28 = Trivia(
      question="What is the collective noun for rats?", correct_answer="Mischief", incorrect_answer1="Pack", incorrect_answer2="Race",incorrect_answer3="Drift", user_id=1, trivia_package_id=2 )
    trivia29 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=1, trivia_package_id=1 )
    trivia30 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=1, trivia_package_id=1 )
    trivia31 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=1, trivia_package_id=1 )
    trivia32 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=1, trivia_package_id=1 )
    trivia33 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=1, trivia_package_id=1 )
    trivia34 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=1, trivia_package_id=1 )
    trivia35 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia36 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia37 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia38 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia39 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia40 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia41 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia42 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia43 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia44 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia45 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia46 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia47 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia48 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia49 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia50 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia51 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia52 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia53 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia54 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia55 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia56 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia57 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia58 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia59 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia60 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=5 )
    trivia61 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia62 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia63 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia64 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia65 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia66 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia67 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia68 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia69 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia70 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia71 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia72 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia73 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia74 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=6 )
    trivia75 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia76 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia77 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia78 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia79 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia80 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia81 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia82 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia83 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia84 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia85 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia86 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia87 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia88 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=3, trivia_package_id=7 )
    trivia89 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    trivia90 = Trivia(
      question="Is this the right answer?", correct_answer="This is the correct answer", incorrect_answer1="Wrong answer1", incorrect_answer2="Wrong answer2",incorrect_answer3="Wrong answer3", user_id=2, trivia_package_id=4 )
    
    db.session.add_all([trivia1,trivia2,trivia3,trivia4,trivia5,trivia6,trivia7,trivia8,trivia9,trivia10,trivia11,trivia12,trivia13,trivia14,trivia15,trivia16,trivia17,trivia18,trivia19,trivia20,trivia21,trivia22,trivia23,trivia24,trivia25,trivia26,trivia27,trivia28,trivia29,
        trivia30,trivia31,trivia32,trivia33,trivia34,trivia35,trivia36,trivia37,trivia38,trivia39,trivia40,trivia41,trivia42,trivia43,trivia44,trivia45,trivia46,trivia47,trivia48,trivia49,trivia50,trivia51,trivia52,trivia53,trivia54,trivia55,trivia56,trivia57,trivia58,trivia59,
        trivia60,trivia61,trivia62,trivia63,trivia64,trivia65,trivia66,trivia67,trivia68,trivia69,trivia70,trivia71,trivia72,trivia73,trivia74,trivia75,trivia76,trivia77,trivia78,trivia79,trivia80,trivia81,trivia82,trivia83,trivia84,trivia85,trivia86,trivia87,trivia88,trivia89,
        trivia90])

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