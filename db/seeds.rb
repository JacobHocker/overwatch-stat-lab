puts "Begining Seeding Database..."
puts 

puts "Creating All Hero Seeds..."
puts 
###DPS####
puts "Creating DPS..."
puts 
Character.create(name: "Reaper", role: "Damage", hero_card: '/images/Icon-Reaper.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Widowmaker", role: "Damage", hero_card: '/images/Icon-Widowmaker.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Tracer", role: "Damage", hero_card: '/images/Icon-Tracer.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Torbjorn", role: "Damage", hero_card: '/images/Icon-Torbjorn.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Symmetra", role: "Damage", hero_card: '/images/Icon-Symmetra.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Sombra", role: "Damage", hero_card: '/images/Icon-Sombra.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Soldier 76", role: "Damage", hero_card: '/images/Icon-Soldier_76.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Pharah", role: "Damage",hero_card: '/images/Icon-Pharah.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Mei", role: "Damage", hero_card: '/images/Icon-Mei.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Junkrat", role: "Damage", hero_card: '/images/Icon-Junkrat.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Hanzo", role: "Damage", hero_card: '/images/Icon-Hanzo.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Genji", role: "Damage", hero_card: '/images/Icon-Genji.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Echo", role: "Damage", hero_card: '/images/Icon-Echo.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Doomfist", role: "Damage", hero_card: '/images/Icon-Doomfist.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Cassidy", role: "Damage", hero_card: '/images/Icon-Cassidy.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Bastion", role: "Damage", hero_card: '/images/Icon-Bastion.png', role_card: '/images/Icon-Damage.png')
Character.create(name: "Ashe", role: "Damage", hero_card: '/images/Icon-Ashe.png', role_card: '/images/Icon-Damage.png')

###Tanks###
puts "Creating Tanks..."
puts 
Character.create(name: "D.Va", role: "Tank", hero_card: '/images/Icon-D.Va.png', role_card: '/images/Icon-Tank.png')
Character.create(name: "Orisa", role: "Tank", hero_card: '/images/Icon-Orisa.png', role_card: '/images/Icon-Tank.png')
Character.create(name: "Sigma", role: "Tank", hero_card: '/images/Icon-Sigma.png', role_card: '/images/Icon-Tank.png')
Character.create(name: "Roadhog", role: "Tank", hero_card: '/images/Icon-Roadhog.png', role_card: '/images/Icon-Tank.png')
Character.create(name: "Reinhardt", role: "Tank", hero_card: '/images/Icon-Reinhardt.png', role_card: '/images/Icon-Tank.png')
Character.create(name: "Winston", role: "Tank", hero_card: '/images/Icon-Winston.png', role_card: '/images/Icon-Tank.png')
Character.create(name: "Zarya", role: "Tank", hero_card: '/images/Icon-Zarya.png', role_card: '/images/Icon-Tank.png')
Character.create(name: "Wrecking Ball", role: "Tank", hero_card: '/images/Icon-Wrecking_Ball.png', role_card: '/images/Icon-Tank.png')


###Supports###
puts "Creating Supports..."
puts 
Character.create(name: "Baptiste", role: "Support", hero_card: '/images/Icon-Baptiste.png', role_card: '/images/Icon-Support.png')
Character.create(name: "Ana", role: "Support", hero_card: '/images/Icon-Ana.png', role_card: '/images/Icon-Support.png')
Character.create(name: "Mercy", role: "Support", hero_card: '/images/Icon-Mercy.png', role_card: '/images/Icon-Support.png')
Character.create(name: "Zenyatta", role: "Support", hero_card: '/images/Icon-Zenyatta.png', role_card: '/images/Icon-Support.png')
Character.create(name: "Brigitte", role: "Support", hero_card: '/images/Icon-Brigitte.png', role_card: '/images/Icon-Support.png')
Character.create(name: "Moira", role: "Support", hero_card: '/images/Icon-Moira.png', role_card: '/images/Icon-Support.png')
Character.create(name: "Lucio", role: "Support", hero_card: '/images/Icon-Lucio.png', role_card: '/images/Icon-Support.png')


puts "Seeding Complete!"
