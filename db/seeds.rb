puts "Begining Seeding Database..."
puts 

puts "Creating All Hero Seeds..."
puts 
###DPS####
puts "Creating DPS..."
puts 
Character.create(name: "Reaper", role: "Damage", hero_card: '/images/icons/Icon-Reaper.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Widowmaker", role: "Damage", hero_card: '/images/icons/Icon-Widowmaker.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Tracer", role: "Damage", hero_card: '/images/icons/Icon-Tracer.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Torbjorn", role: "Damage", hero_card: '/images/icons/Icon-Torbjorn.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Symmetra", role: "Damage", hero_card: '/images/icons/Icon-Symmetra.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Sombra", role: "Damage", hero_card: '/images/icons/Icon-Sombra.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Soldier 76", role: "Damage", hero_card: '/images/icons/Icon-Soldier_76.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Pharah", role: "Damage",hero_card: '/images/icons/Icon-Pharah.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Mei", role: "Damage", hero_card: '/images/icons/Icon-Mei.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Junkrat", role: "Damage", hero_card: '/images/icons/Icon-Junkrat.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Hanzo", role: "Damage", hero_card: '/images/icons/Icon-Hanzo.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(
    name: "Genji", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Genji.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Genji Shimada",
    age: 35,
    occupation: "Adventurer",
    base_of_operation: "Shambali Monastery, Nepal",
    affiliation: "Shimada Clan (formerly), Overwatch (formerly), Blackwatch(formerly)",
    hero_story: "The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity.  As the youngest son of the master of the Shimada ninja clan, Genji lived a life of luxury and privilege. He had little interest in the family's illegal businesses, and although he excelled at and enjoyed his ninja training, he spent most of his time pursuing a playboy lifestyle. Many within the clan considered the carefree Genji to be a dangerous liability, and they resented his father for coddling and protecting him. Following the clan leader's untimely death, Genji's older brother, Hanzo, demanded that Genji take a more active role in their late father's empire. Genji refused, enraging Hanzo. The tension between the brothers built to a violent confrontation that left Genji on the verge of dying. Hanzo believed that he had killed his brother, but Genji was rescued by Overwatch and the intervention of Dr. Angela Ziegler. The global security force saw Genji as a potential asset in its ongoing operations to combat the Shimada clan. As Genji's injuries left him clinging to life, Overwatch offered to rebuild his body in exchange for his help. He was put through an extensive process of cyberization, which enhanced his natural speed and agility and augmented his superlative ninja skills. Transformed into a living weapon, Genji single-mindedly set about the task of dismantling his family's criminal empire. But as time passed, Genji felt increasingly at war with himself. He was repulsed by the mechanical parts of his body and could not come to grips with what he had become. When his mission was complete, he abandoned Overwatch and wandered the world in search of meaning. He drifted for many years before crossing paths with the omnic monk Zenyatta. Though Genji initially rejected Zenyatta's wisdom, the benevolent omnic would not be deterred. In time, Zenyatta became his mentor, and under the monk's tutelage, Genji reconciled his dual existence as both man and machine. He learned to accept that although he had a cyborg body, his human soul was intact, and he came to see his new form as a gift and a unique strength. Now, for the first time in his life, Genji is free. Even he cannot say where his path will ultimately lead.",
    hero_image_one: "/images/heroImages/genji/Genji-page-image-one.png",
    hero_image_two: "/images/heroImages/genji/Genji-page-image-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Genji flings precise and deadly Shuriken at his targets, and uses his technologically-advanced katana to deflect projectiles or deliver a Swift Strike that cuts down enemies.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Flanker/Dive",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/genji/Genji-shuriken-circle.png",
    weapon_one_name: "Shuriken",
    weapon_one_description: "Throw an accurate burst of three projectiles",
    weapon_one_type: "Projectile",
    weapon_two_image: "/images/heroImages/genji/Genji-shuriken-circle.png",
    weapon_two_name: "Fan of Blades",
    weapon_two_description: "Throw a fan of 3 projectiles in an arc.",
    weapon_two_type: "Projectile",
    passive_image: "/images/heroImages/genji/Genji-passive-ability.png",
    passive_name: "Cyber-Agility",
    passive_description: "Climbs walls and double jump.",
    ability_one_image: "/images/heroImages/genji/Genji-deflect.png",
    ability_one_name: "Deflect",
    ability_one_description: "Deflect incoming projectiles towards the direction you are aiming and block melee attacks.",
    ability_two_image: "/images/heroImages/genji/Genji-dash.png",
    ability_two_name: "Swift Strike",
    ability_two_description: "Rapidly dash forward and inflict damage on enemies. Eliminations reset the cooldown.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/genji/Genji-dragon-blade.png",
    ultimate_name: "Dragonblade",
    ultimate_description: "Unsheathe a deadly melee weapon.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0  
)
Character.create(name: "Echo", role: "Damage", hero_card: '/images/icons/Icon-Echo.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Doomfist", role: "Damage", hero_card: '/images/icons/Icon-Doomfist.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Cassidy", role: "Damage", hero_card: '/images/icons/Icon-Cassidy.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Bastion", role: "Damage", hero_card: '/images/icons/Icon-Bastion.png', role_card: '/images/icons/Icon-Damage.png')
Character.create(name: "Ashe", role: "Damage", hero_card: '/images/icons/Icon-Ashe.png', role_card: '/images/icons/Icon-Damage.png')

###Tanks###
puts "Creating Tanks..."
puts 
Character.create(name: "D.Va", role: "Tank", hero_card: '/images/icons/Icon-D.Va.png', role_card: '/images/icons/Icon-Tank.png')
Character.create(name: "Orisa", role: "Tank", hero_card: '/images/icons/Icon-Orisa.png', role_card: '/images/icons/Icon-Tank.png')
Character.create(name: "Sigma", role: "Tank", hero_card: '/images/icons/Icon-Sigma.png', role_card: '/images/icons/Icon-Tank.png')
Character.create(name: "Roadhog", role: "Tank", hero_card: '/images/icons/Icon-Roadhog.png', role_card: '/images/icons/Icon-Tank.png')
Character.create(name: "Reinhardt", role: "Tank", hero_card: '/images/icons/Icon-Reinhardt.png', role_card: '/images/icons/Icon-Tank.png')
Character.create(name: "Winston", role: "Tank", hero_card: '/images/icons/Icon-Winston.png', role_card: '/images/icons/Icon-Tank.png')
Character.create(name: "Zarya", role: "Tank", hero_card: '/images/icons/Icon-Zarya.png', role_card: '/images/icons/Icon-Tank.png')
Character.create(name: "Wrecking Ball", role: "Tank", hero_card: '/images/icons/Icon-Wrecking_Ball.png', role_card: '/images/icons/Icon-Tank.png')


###Supports###
puts "Creating Supports..."
puts 
Character.create(name: "Baptiste", role: "Support", hero_card: '/images/icons/Icon-Baptiste.png', role_card: '/images/icons/Icon-Support.png')
Character.create(name: "Ana", role: "Support", hero_card: '/images/icons/Icon-Ana.png', role_card: '/images/icons/Icon-Support.png')
Character.create(name: "Mercy", role: "Support", hero_card: '/images/icons/Icon-Mercy.png', role_card: '/images/icons/Icon-Support.png')
Character.create(name: "Zenyatta", role: "Support", hero_card: '/images/icons/Icon-Zenyatta.png', role_card: '/images/icons/Icon-Support.png')
Character.create(name: "Brigitte", role: "Support", hero_card: '/images/icons/Icon-Brigitte.png', role_card: '/images/icons/Icon-Support.png')
Character.create(name: "Moira", role: "Support", hero_card: '/images/icons/Icon-Moira.png', role_card: '/images/icons/Icon-Support.png')
Character.create(name: "Lucio", role: "Support", hero_card: '/images/icons/Icon-Lucio.png', role_card: '/images/icons/Icon-Support.png')


puts "Seeding Complete!"
