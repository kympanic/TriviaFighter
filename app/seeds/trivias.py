from app.models import db, Trivia, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_trivias():
    trivia1 = Trivia(
      question="A carnivorous animal eats flesh, what does a nucivorous animal eat?", correct_answer="Nuts", incorrect_answer1="Nothing", incorrect_answer2="Fruit",incorrect_answer3="Seaweed", user_id=1, trivia_package_id=2 )
    trivia2 = Trivia(
      question="What is the common term for bovine spongiform encephalopathy (BSE)??", correct_answer="Mad Cow disease", incorrect_answer1="Weil's disease", incorrect_answer2="Milk fever",incorrect_answer3="Weiss Disease", user_id=1, trivia_package_id=2 )
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
      question="Which player holds the NHL record of 2,857 points?", correct_answer="Wayne Gretzky", incorrect_answer1="Mario Lemieux", incorrect_answer2="Sidney Crosby",incorrect_answer3="Gordie Howe", user_id=1, trivia_package_id=1 )
    trivia30 = Trivia(
      question="What is the name of Manchester United's home stadium?", correct_answer="Old Trafford", incorrect_answer1="Anfield", incorrect_answer2="City of Machester Stadium",incorrect_answer3="St James Park", user_id=1, trivia_package_id=1 )
    trivia31 = Trivia(
      question="Which boxer was banned for taking a bite out of Evander Holyfield's ear in 1997?", correct_answer="Mike Tyson", incorrect_answer1="Roy Jones Jr", incorrect_answer2="George Forman",incorrect_answer3="Lennox Lewis", user_id=1, trivia_package_id=1 )
    trivia32 = Trivia(
      question="Who did Steven Gerrard win the Champions League with?", correct_answer="Liverpool", incorrect_answer1="Real Madrid", incorrect_answer2="Chelsea",incorrect_answer3="Man City", user_id=1, trivia_package_id=1 )
    trivia33 = Trivia(
      question="How many soccer players should be on the field at the same time?", correct_answer="22", incorrect_answer1="20", incorrect_answer2="24",incorrect_answer3="26", user_id=1, trivia_package_id=1 )
    trivia34 = Trivia(
      question="What is the most common type of pitch thrown by pitchers in baseball?", correct_answer="Fastball", incorrect_answer1="Slowball", incorrect_answer2="Screwball",incorrect_answer3="Palmball", user_id=1, trivia_package_id=1 )
    trivia35 = Trivia(
      question="From what show is the character James Doakes? ", correct_answer="Dexter", incorrect_answer1="Marvel's Daredevil", incorrect_answer2="Boardwalk Empire",incorrect_answer3="The Walking Dead", user_id=2, trivia_package_id=4 )
    trivia36 = Trivia(
      question="In which year did the British television series The Bill end?", correct_answer="2010", incorrect_answer1="2001", incorrect_answer2="2018",incorrect_answer3="2005", user_id=2, trivia_package_id=4 )
    trivia37 = Trivia(
      question="In Game of Thrones what is the name of Jon Snow's sword?", correct_answer="Longclaw", incorrect_answer1="Oathkeeper", incorrect_answer2="Widow's Wail",incorrect_answer3="Needle", user_id=2, trivia_package_id=4 )
    trivia38 = Trivia(
      question="The 1985 Toyota Corolla AE86 was the hero car for what anime? ", correct_answer="Initial D", incorrect_answer1="Wangan Midnight", incorrect_answer2="Ghost in the Shell",incorrect_answer3="Ex Driver", user_id=2, trivia_package_id=4 )
    trivia39 = Trivia(
      question="What is the name of the Flash Arrow spinoff featuring a team of characters that have appeared on both shows?", correct_answer="Legends of Tomorrow", incorrect_answer1="Heroes", incorrect_answer2="The Justice Society",incorrect_answer3="Arrow and Flash", user_id=2, trivia_package_id=4 )
    trivia40 = Trivia(
      question="Cesar Romero played which iconic Batman villain from the 1960's TV show?", correct_answer="The Joker", incorrect_answer1="The Penguin", incorrect_answer2="The Riddler",incorrect_answer3="Mr. Freeze", user_id=2, trivia_package_id=4 )
    trivia41 = Trivia(
      question="What is the surname of the character Daryl in AMC's show The Walking Dead?", correct_answer="Dixon", incorrect_answer1="Grimes", incorrect_answer2="Dickinson",incorrect_answer3="Dickerson", user_id=2, trivia_package_id=4 )
    trivia42 = Trivia(
      question="Which WWF wrestler had the nickname The Ayatollah of Rock N Roll?", correct_answer="Chris Jericho", incorrect_answer1="Marty Jannetty", incorrect_answer2="Scott Hall",incorrect_answer3="Shawn Michaels", user_id=2, trivia_package_id=4 )
    trivia43 = Trivia(
      question="Which character does voice actress Tara Strong NOT voice?", correct_answer="Bubbles (2016)", incorrect_answer1="Twilight Sparkle", incorrect_answer2="Timmy Turner",incorrect_answer3="Harley Quinn", user_id=2, trivia_package_id=4 )
    trivia44 = Trivia(
      question="Alan Reed is known for providing the voice of which character?", correct_answer="Fred Flintstone", incorrect_answer1="Bugs Bunny", incorrect_answer2="Fangface",incorrect_answer3="G.I. Joe", user_id=2, trivia_package_id=4 )
    trivia45 = Trivia(
      question="Which of the following Autobot names in Michael Bay's movies was NOT a name for a Transformer in the original 1980's cartoon?", correct_answer="Mudflap", incorrect_answer1="Skids", incorrect_answer2="Sideswipe",incorrect_answer3="Ratchet", user_id=2, trivia_package_id=4 )
    trivia46 = Trivia(
      question="In The Big Bang Theory, what is Howard Wolowitz's nickname in World of Warcraft?", correct_answer="Wolowizard", incorrect_answer1="Sheldor", incorrect_answer2="Rajesh",incorrect_answer3="Priya", user_id=2, trivia_package_id=4 )
    trivia47 = Trivia(
      question="Which of these television shows makes everyone look under their chair?", correct_answer="Oprah", incorrect_answer1="Jimmy Fallon", incorrect_answer2="Saturday Night Live",incorrect_answer3="Dr. Phil", user_id=2, trivia_package_id=4 )
    trivia48 = Trivia(
      question="In the episode of SpongeBob SquarePants,Survival of the Idiots, Spongebob called Patrick which nickname?", correct_answer="Pinhead", incorrect_answer1="Starfish", incorrect_answer2="Larry",incorrect_answer3="Dirty Dan", user_id=2, trivia_package_id=4 )
    trivia49 = Trivia(
      question="Which one of the following titles by Valve is not based on a Community Mod?", correct_answer="Ricochet", incorrect_answer1="Day of Defeat", incorrect_answer2="Counter-Strike",incorrect_answer3="Alien Swarm", user_id=3, trivia_package_id=5 )
    trivia50 = Trivia(
      question="When was Steam first released?", correct_answer="2003", incorrect_answer1="2000", incorrect_answer2="2010",incorrect_answer3="2012", user_id=3, trivia_package_id=5 )
    trivia51 = Trivia(
      question="What Pokemon's Base Stat Total does not change when it evolves?", correct_answer="Scyther", incorrect_answer1="Pikachu", incorrect_answer2="Sneasel",incorrect_answer3="Larvesta", user_id=3, trivia_package_id=5 )
    trivia52 = Trivia(
      question="How long are all the cutscenes from Metal Gear Solid 4 (PS3, 2008) combined?", correct_answer="8 hours", incorrect_answer1="2 hours", incorrect_answer2="5 hours",incorrect_answer3="30 hours", user_id=3, trivia_package_id=5 )
    trivia53 = Trivia(
      question="In the Call Of Duty: Zombies; map Origins, where is Stamin-Up, located?", correct_answer="Generator 5", incorrect_answer1="Weapon Cache", incorrect_answer2="Control Room",incorrect_answer3="Excavation Site", user_id=3, trivia_package_id=5 )
    trivia54 = Trivia(
      question="Which of these characters was considered, but ultimately not included, for Super Smash Bros. Melee?", correct_answer="James Bond", incorrect_answer1="Diddy Kong", incorrect_answer2="Megaman",incorrect_answer3="Wave Racer", user_id=3, trivia_package_id=5 )
    trivia55 = Trivia(
      question="Which of these Generation 1 Pokemon did NOT have an evolution in Generation 4?", correct_answer="Jynx", incorrect_answer1="Electabuzz", incorrect_answer2="Magmar",incorrect_answer3="Rhydon", user_id=3, trivia_package_id=5 )
    trivia56 = Trivia(
      question="Before he was a cop, what occupation was John Tanner, the main protagonist for Driver and Driver 2?", correct_answer="Racing Driver", incorrect_answer1="Taxi Driver", incorrect_answer2="Delivery Driver",incorrect_answer3="Getaway Driver", user_id=3, trivia_package_id=5 )
    trivia57 = Trivia(
      question="Which character, in the game Morenatsu, has the most possible endings to their route?", correct_answer="Shin Kuroi", incorrect_answer1="Kouya Aotsuki", incorrect_answer2="Soutarou Touno",incorrect_answer3="Torahiko Ooshima", user_id=3, trivia_package_id=5 )
    trivia58 = Trivia(
      question="What device allows Tracer to manipulate her own time in the game Overwatch?", correct_answer="Chronal Accelerator", incorrect_answer1="B.L.I.N.K.", incorrect_answer2="Spacial Displacement Teleporter",incorrect_answer3="TMD", user_id=3, trivia_package_id=5 )
    trivia59 = Trivia(
      question="Which of these characters in Undertale can the player NOT go on a date with?", correct_answer="Toriel", incorrect_answer1="Papyrus", incorrect_answer2="Undyne",incorrect_answer3="Alphys", user_id=3, trivia_package_id=5 )
    trivia60 = Trivia(
      question="In the Kingdom Hearts series, which is not an optional boss you can fight?", correct_answer="Master Yen Sid", incorrect_answer1="Sephiroth", incorrect_answer2="Julius",incorrect_answer3="Kurt Zisa", user_id=3, trivia_package_id=5 )
    trivia61 = Trivia(
      question="In World of Warcraft lore, who organized the creation of the Paladins?", correct_answer="Alonsus Faol", incorrect_answer1="Uther the Lightbringer", incorrect_answer2="Alexandro Mograine",incorrect_answer3="Sargeras, The Daemon Lord", user_id=3, trivia_package_id=5 )
    trivia62 = Trivia(
      question="What is the name of the virus that infected New York in Tom Clancy's The Division?", correct_answer="Dollar Flu", incorrect_answer1="Ebola", incorrect_answer2="Red Poison",incorrect_answer3="Smallpox", user_id=3, trivia_package_id=5 )
    trivia63 = Trivia(
      question="Area 51 is located in which US state?", correct_answer="Nevada", incorrect_answer1="Arizona", incorrect_answer2="New Mexico",incorrect_answer3="Utah", user_id=3, trivia_package_id=6 )
    trivia64 = Trivia(
      question="The Canadian $1 coin is colloquially known as a what?", correct_answer="Loonie", incorrect_answer1="Booolie", incorrect_answer2="Foolie",incorrect_answer3="Moodie", user_id=3, trivia_package_id=6 )
    trivia65 = Trivia(
      question="What is on display in the Madame Tussaud's museum in London?", correct_answer="Wax Sculptures", incorrect_answer1="Designer clothing", incorrect_answer2="Unreleased film reels",incorrect_answer3="vintage cars", user_id=3, trivia_package_id=6 )
    trivia66 = Trivia(
      question="What zodiac sign is represented by a pair of scales?", correct_answer="Libra", incorrect_answer1="Aries", incorrect_answer2="Capricorn",incorrect_answer3="Sagittarius", user_id=3, trivia_package_id=6 )
    trivia67 = Trivia(
      question="On a dartboard, what number is directly opposite No. 1?", correct_answer="19", incorrect_answer1="20", incorrect_answer2="12",incorrect_answer3="15", user_id=3, trivia_package_id=6 )
    trivia68 = Trivia(
      question="What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?", correct_answer="Demolition", incorrect_answer1="The Dream Team", incorrect_answer2="The Bushwackerse",incorrect_answer3="The British Bulldogs", user_id=3, trivia_package_id=6 )
    trivia69 = Trivia(
      question="If you are caught Goldbricking, what are you doing wrong?", correct_answer="Slacking", incorrect_answer1="Smoking", incorrect_answer2="Stealing",incorrect_answer3="Cheating", user_id=3, trivia_package_id=6 )
    trivia70 = Trivia(
      question="What does a funambulist walk on?", correct_answer="A tight rope", incorrect_answer1="broken glass", incorrect_answer2="balls",incorrect_answer3="wires", user_id=3, trivia_package_id=6 )
    trivia71 = Trivia(
      question="What is the Spanish word for donkey?", correct_answer="burro", incorrect_answer1="caballo", incorrect_answer2="toro",incorrect_answer3="pero", user_id=3, trivia_package_id=6 )
    trivia72 = Trivia(
      question="What machine element is located in the center of fidget spinners?", correct_answer="bearings", incorrect_answer1="axles", incorrect_answer2="gears",incorrect_answer3="belts", user_id=3, trivia_package_id=6 )
    trivia73 = Trivia(
      question="Who invented the first ever chocolate bar, in 1847?", correct_answer="Joseph Fry", incorrect_answer1="Andrew Johnson", incorrect_answer2="John Cadbury",incorrect_answer3="John Tyler", user_id=3, trivia_package_id=6 )
    trivia74 = Trivia(
      question="When one is envious, they are said to be what color?", correct_answer="green", incorrect_answer1="red", incorrect_answer2="blue",incorrect_answer3="yellow", user_id=3, trivia_package_id=6 )
    trivia75 = Trivia(
      question="What is the nickname of the US state of California?", correct_answer="Golden State", incorrect_answer1="Sunshine State", incorrect_answer2="Bay State",incorrect_answer3="Treasure State", user_id=3, trivia_package_id=6 )
    trivia76 = Trivia(
      question="Foie gras is a French delicacy typically made from what part of a duck or goose?", correct_answer="Liver", incorrect_answer1="Heart", incorrect_answer2="Stomach",incorrect_answer3="Intestines", user_id=3, trivia_package_id=6 )
    trivia77 = Trivia(
      question="How many SoulsBorne games are there?", correct_answer="6", incorrect_answer1="4", incorrect_answer2="3",incorrect_answer3="1", user_id=1, trivia_package_id=7 )
    trivia78 = Trivia(
      question="What is the newest From Software Game?", correct_answer="Elden Ring", incorrect_answer1="Kings Field", incorrect_answer2="Demon Souls",incorrect_answer3="Dark Souls 3", user_id=1, trivia_package_id=7 )
    trivia79 = Trivia(
      question="Who is the secret boss of Bloodborne?", correct_answer="Moon Presence", incorrect_answer1="Ludwig, Holy Blade", incorrect_answer2="Lady Maria",incorrect_answer3="The Doll", user_id=1, trivia_package_id=7 )
    trivia80 = Trivia(
      question="what are the two swords that you can get at the end of the game in demon souls?", correct_answer="demon brandt and soul brandt", incorrect_answer1="zwei hander and drake sword", incorrect_answer2="dragon sword and dragon king greataxe",incorrect_answer3="blade of mercy and boom hammer", user_id=1, trivia_package_id=7 )
    trivia81 = Trivia(
      question="Who is the character known as , SUNBRO", correct_answer="Solaire of Astora", incorrect_answer1="King Allant", incorrect_answer2="Ladder Smith Gilligan",incorrect_answer3="Nameless King", user_id=1, trivia_package_id=7 )
    trivia82 = Trivia(
      question="Who is the final boss of dark souls?", correct_answer="Gwyn", incorrect_answer1="Kalameet", incorrect_answer2="Soul of Cinder",incorrect_answer3="Gael", user_id=1, trivia_package_id=7 )
    trivia83 = Trivia(
      question="Who is the nameless king?", correct_answer="Faraam the God of War", incorrect_answer1="Solaire of Astora", incorrect_answer2="Ludwig, Holy Blade",incorrect_answer3="The Rock", user_id=1, trivia_package_id=7 )
    trivia84 = Trivia(
      question="which dragon is a boss?", correct_answer="midir", incorrect_answer1="hellkite", incorrect_answer2="gywn lefuire",incorrect_answer3="Jennifer Lawrence", user_id=1, trivia_package_id=7 )
    trivia85 = Trivia(
      question="who created the soulsborne series?", correct_answer="Hidetaka Miyazaki", incorrect_answer1="From Software", incorrect_answer2="Hayoa Miyizaki",incorrect_answer3="Studio Ghibli", user_id=1, trivia_package_id=7 )
    trivia86 = Trivia(
      question="Which ring boosts damage taken from enemy's and effects?", correct_answer="calamity ring", incorrect_answer1="havels ring", incorrect_answer2="witches ring",incorrect_answer3="blue tearstone ring", user_id=1, trivia_package_id=7 )
    trivia87 = Trivia(
      question="Where are you in Dar Souls?", correct_answer="lordran", incorrect_answer1="yharnam", incorrect_answer2="lothric",incorrect_answer3="smoldering lake", user_id=1, trivia_package_id=7 )
    trivia88 = Trivia(
      question="What anime heavily influenced dark souls?", correct_answer="Berserk", incorrect_answer1="Fairy Tale", incorrect_answer2="Naruto",incorrect_answer3="Black Butler", user_id=1, trivia_package_id=7 )
    trivia89 = Trivia(
      question="What game did the hollowslayer greatsword first appear in?", correct_answer="Dark Souls 2", incorrect_answer1="Dark Souls 3", incorrect_answer2="Demon Souls",incorrect_answer3="Dark Souls", user_id=1, trivia_package_id=7 )
    trivia90 = Trivia(
      question="What is the secret ending for Dark Souls?", correct_answer="Don't link the flame", incorrect_answer1="Link the flame", incorrect_answer2="You explode",incorrect_answer3="no secret ending", user_id=1, trivia_package_id=7 )
    
    
    
    db.session.add_all([trivia1,trivia2,trivia3,trivia4,trivia5,trivia6,trivia7,trivia8,trivia9,trivia10,trivia11,trivia12,trivia13,trivia14,trivia15,trivia16,trivia17,trivia18,trivia19,trivia20,trivia21,trivia22,trivia23,trivia24,trivia25,trivia26,trivia27,trivia28,trivia29,
        trivia30,trivia31,trivia32,trivia33,trivia34,trivia35,trivia36,trivia37,trivia38,trivia39,trivia40,trivia41,trivia42,trivia43,trivia44,trivia45,trivia46,trivia47,trivia48,trivia49,trivia50,trivia51,trivia52,trivia53,trivia54,trivia55,trivia56,trivia57,trivia58,trivia59,
        trivia60,trivia61,trivia62,trivia63,trivia64,trivia65,trivia66,trivia67,trivia68,trivia69,trivia70,trivia71,trivia72,trivia73,trivia74,trivia75,trivia76,trivia77,trivia78,trivia79,trivia80,trivia81,trivia82,trivia83,trivia84,trivia85,trivia86,trivia87,trivia88, trivia89,
        ])

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