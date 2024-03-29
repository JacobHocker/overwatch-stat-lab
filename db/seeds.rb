puts "Destroying Data..."
puts 
Character.destroy_all 
Map.destroy_all
Player.destroy_all 
Team.destroy_all 
Comment.destroy_all
Post.destroy_all
User.destroy_all

puts "Begining Seeding Database..."
puts 

puts "Creating All Hero Seeds..."
puts 
###DPS####
puts "Creating DPS..."
puts 
#REAPER
Character.create(
    name: "Reaper", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Reaper.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Gabriel Reyes",
    age: 58,
    occupation: 'Mercenary',
    base_of_operation: 'Los Angeles, California',
    affiliation: "United States Military (formerly), Overwatch (formerly), Blackwatch (formerly), Talon (Council Member)",
    hero_story: 'Some speak of a black-robed terrorist known only as the Reaper. His identity and motives are a mystery. What is known is that where he appears, death follows.
    The Reaper is an extremely volatile mercenary, a ruthless and remorseless killer responsible for terrorist attacks across the world. He has fought in many armed conflicts in the last decades, showing no loyalty to any cause or organization.
    Survivors have described a black shadow ghosting unscathed through the most hellish battlefields. The few bodies recovered of those he kills are pale, empty husks drained of life, their cells showing signs of intense degradation. It is possible that he is a byproduct of failed genetic alteration which forces his cells to simultaneously decay and regenerate at a hyper-accelerated rate.
    Those attempting to track his movements have begun to see a pattern in his appearances. They believe that Reaper is hunting former Overwatch agents and systematically eliminating them.',
    hero_image_one: '/images/heroImages/reaper/Reaper-page-one.png',
    hero_image_two: '/images/heroImages/reaper/Reaper-page-two.png',
    hero_gameplay_video: 'placeholder',
    hero_gameplay_description: 'Hellfire Shotguns, the ghostly ability to become immune to damage, and the power to step between shadows make Reaper one of the deadliest beings on Earth.',
    hp: 250,
    armor: 0,
    shields: 0,
    total_hp: 250,
    hero_difficulty: 1,
    playstyle: 'Flanker/Tank Buster',
    weapon_one_image: "/images/heroImages/reaper/Reaper-shotgun.png",
    weapon_one_name: "Hellfire Shotguns",
    weapon_one_description: "Short-range spread weapons",
    weapon_one_type: "Short-range spread hitscan",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/reaper/Reaper-passive.png",
    passive_name: "The Reaping",
    passive_description: "Dealing damage heals you.",
    ability_one_image: "/images/heroImages/reaper/Reaper-shadow-step.png",
    ability_one_name: "Shadow Step",
    ability_one_description: "Teleport to a targeted location.",
    ability_two_image: "/images/heroImages/reaper/Reaper-wraith-form.png",
    ability_two_name: "Wraith Form",
    ability_two_description: "Move faster and become invulnerable, but you cannot shoot.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/reaper/Reaper-death-blossom.png",
    ultimate_name: "Death Blossom",
    ultimate_description: "Damage all nearby enemies.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0  
)
#WIDOWMAKER
Character.create(
    name: "Widowmaker", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Widowmaker.png', 
    role_card: '/images/icons/Icon-Damage.png', 
    name_two: "Amélie Lacroix (née Guillard)",
    age: 33,
    occupation: "Ballet dancer (formerly), Assassin",
    base_of_operation: "Annecy, France",
    affiliation: "Talon",
    hero_story: "Widowmaker is the perfect assassin: a patient, ruthlessly efficient killer who shows neither emotion nor remorse.
    It is believed that in her former life, Widowmaker was married to Gérard Lacroix, an Overwatch agent spearheading operations against the Talon terrorist organization. After several unsuccessful attempts to eliminate Gérard, Talon decided to change its focus to his wife, Amélie. Talon operatives kidnapped her and subjected her to an intense program of neural reconditioning. They broke her will, suppressed her personality, and reprogrammed her as a sleeper agent. She was eventually found by Overwatch agents, apparently none the worse for wear, and returned to her normal life.
    Two weeks later she killed Gérard in his sleep.
    Her mission complete, Amélie returned to Talon, and they completed the process of turning her into a living weapon. She was given extensive training in the covert arts, and then her physiology was altered, drastically slowing her heart, which turned her skin cold and blue and numbed her ability to experience human emotion. Amélie was gone.
    Now, Widowmaker is Talon's most effective assassin, feeling little save the satisfaction of a job well done.",
    hero_image_one: "/images/heroImages/widowmaker/Widow-page-one.png",
    hero_image_two: "/images/heroImages/widowmaker/Widow-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Widowmaker equips herself with whatever it takes to eliminate her targets, including mines that dispense poisonous gas, a visor that grants her squad infra-sight, and a powerful sniper rifle that can fire in fully-automatic mode.",
    hp: 175,
    armor: 0,
    shields: 0,
    total_hp: 175,
    playstyle: "Sniper/Long-range Hitscan",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/widowmaker/Widow-sniper.png",
    weapon_one_name: "Widow's Kiss",
    weapon_one_description: "Automatic assault weapon.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "/images/heroImages/widowmaker/Widow-sniper.png",
    weapon_two_name: "Sniper Mode",
    weapon_two_description: "Hold for long-ranged sniper weapon.",
    weapon_two_type: "Hitscan",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/widowmaker/Widow-grapple.png",
    ability_one_name: "Grappling Hook",
    ability_one_description: "Launch a hook that pulls you towards a ledge.",
    ability_two_image: "/images/heroImages/widowmaker/Widow-venom.png",
    ability_two_name: "Venom Mine",
    ability_two_description: "Launch a poison trap.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/widowmaker/Widow-infra-sight.png",
    ultimate_name: "Infra-sight",
    ultimate_description: "Provide your team with a view of the enemy's location.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#TRACER
Character.create(
    name: "Tracer",
    role: "Damage", 
    hero_card: '/images/icons/Icon-Tracer.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "	Lena Oxton",
    age: 26,
    occupation: "Adventurer , Pilot, Overwatch agent",
    base_of_operation: "London, United Kingdom (formerly), Watchpoint: Gibraltar",
    affiliation: "Royal Air Force (formerly), Overwatch ",
    hero_story: "The former Overwatch agent known as Tracer is a time-jumping adventurer and an irrepressible force for good.
    Lena Oxton  was the youngest person ever inducted into Overwatch's experimental flight program. Known for her fearless piloting skills, she was handpicked to test the prototype of a teleporting fighter, the Slipstream. But during its first flight, the aircraft's teleportation matrix malfunctioned, and it disappeared. Lena was presumed dead.
    She reappeared months later, but her ordeal had greatly changed her: her molecules had been desynchronized from the flow of time. Suffering from 'chronal disassociation,' she was a living ghost, disappearing for hours and days at a time. Even for the brief moments she was present, she was unable to maintain physical form.
    Overwatch's doctors and scientists were stumped, and Tracer's case seemed hopeless until a scientist named Winston designed the chronal accelerator, a device capable of keeping Tracer anchored in the present. In addition, it gave Tracer the ability to control her own time, allowing her to speed it up and slow it down at will. With her newfound skills, she became one of Overwatch's most effective agents.
    Since Overwatch's dissolution, Tracer has continued to right wrongs and fight the good fight wherever the opportunity presents itself.",
    hero_image_one: "/images/heroImages/tracer/Tracer-page-one.png",
    hero_image_two: "/images/heroImages/tracer/Tracer-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to 'blink' through space and rewind her personal timeline as she battles to right wrongs the world over.",
    hp: 150,
    armor: 0,
    shields: 0,
    total_hp: 150,
    playstyle: "Flanker/Dive",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/tracer/Tracer-pistol.png",
    weapon_one_name: "Pulse Pistols",
    weapon_one_description: "Short-range automatic weapons.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/tracer/Tracer-blink.png",
    ability_one_name: "Blink",
    ability_one_description: "Teleport in the direction you are moving.",
    ability_two_image: "/images/heroImages/tracer/Tracer-recall.png",
    ability_two_name: "Recall",
    ability_two_description: "Travel back in time to your previous location and health. (3 seconds)",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/tracer/Tracer-pulse.png",
    ultimate_name: "Pulse Bomb",
    ultimate_description: "Throw out a powerful sticky explosive.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#TORBJORN
Character.create(
    name: "Torbjorn", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Torbjorn.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Torbjörn Lindholm",
    age: 57,
    occupation: "Weapon designer, Chief Engineer (formerly)",
    base_of_operation: "Gothenburg, Sweden",
    affiliation: "SST Laboratories (formerly), Ironclad Guild (formerly),  Overwatch (formerly)",
    hero_story: "At its height, Overwatch possessed one of the most advanced armaments on the planet, which could be traced to the workshop of an ingenious engineer named Torbjörn Lindholm.
    Before the Omnic Crisis, Torbjörn had gained notoriety for designing weapons systems used by countries around the world. However, his belief that technology must serve a better vision for humanity put him at odds with his employers, who desired to control his weapons using networked computer intelligence.
    Torbjörn had a deep mistrust of sentient robotic intelligence, and while many of his peers wrote this off as paranoia, his worst fears were realized when the robot populations of the world turned against their human creators during the Omnic Crisis. Because of his engineering genius, he was recruited to join the original Overwatch strike team, and his many inventions proved integral to ending the crisis. In the years that followed, Overwatch became an international peacekeeping force, and Torbjörn remained a critical resource for all of its technological needs and signature weapons systems.
    But in the aftermath of Overwatch's fall, many of Torbjörn's weapons were stolen or stashed away around the world. Feeling responsible for his creations, Torbjörn is determined to stop them from falling into the wrong hands and wreaking havoc on the innocent.",
    hero_image_one: "/images/heroImages/torbjorn/Torbjorn-page-one.png",
    hero_image_two: "/images/heroImages/torbjorn/Torbjorn-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Torbjörn's extensive arsenal includes a rivet gun, hammer, and a personal forge that he can use to build turrets.",
    hp: 200,
    armor: 50,
    shields: 0,
    total_hp: 250,
    playstyle: "Builder",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/torbjorn/Torbjorn-gun.png",
    weapon_one_name: "Rivet Gun & Rivet Gun - Alt Fire",
    weapon_one_description: "Primary - Slow firing, long-ranged weapon.  Secondary - Inaccurate but powerful short-range weapon",
    weapon_one_type: "Projectile",
    weapon_two_image: "/images/heroImages/torbjorn/Torbjorn-hammer.png",
    weapon_two_name: "Forge Hammer",
    weapon_two_description: "Swing to repair your turret or damage an enemy.",
    weapon_two_type: "Melee Weapon.",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/torbjorn/Torbjorn-turret.png",
    ability_one_name: "Deploy Turret",
    ability_one_description: "Deploy a self building turret.",
    ability_two_image: "/images/heroImages/torbjorn/Torbjorn-overload.png",
    ability_two_name: "Overload",
    ability_two_description: "Gain additional armor as well as improved attack, movement, and reload speed.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/torbjorn/Torbjorn-molten.png",
    ultimate_name: "Molten Core",
    ultimate_description: "Create pools of molten slag that damage enemies. Deals additional damage to armor.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#SYMMETRA
Character.create(
    name: "Symmetra", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Symmetra.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Satya Vaswani (सत्य वासवानी)",
    age: 28,
    occupation: "Architech",
    base_of_operation: "Utopaea, India",
    affiliation: "Vishkar Corporation",
    hero_story: "Symmetra literally bends reality. By manipulating hard-light constructs, she crafts the world as she wishes it to be, in hopes of engineering a perfect society.
    Following the Omnic Crisis, the Vishkar Corporation of southern India began the laborious process of creating new, self-sustaining cities to house the nation's displaced population. One such city, Utopaea, was created using radical hard-light technology that enabled its architechs to shape the city's streets, utilities, and living spaces in the blink of an eye.
    After she was identified as one of the few capable of becoming a light-bending architech, young Satya Vaswani was plucked from extreme poverty and placed in the care of Vishkar's architech academy, never to return home. Isolated and lonely in her new life, Satya immersed herself in her education and training. She quickly grasped the applications of the technology and was one of the top students in her class. Satya approached hard-light manipulation differently than her peers, with their more procedural, mechanical constructions, instead weaving her constructs in the motions of the traditional dance of her homeland.
    Though she was one of Utopaea's top architechs, the Vishkar Corporation saw far greater potential in Satya's abilities. Giving her the moniker 'Symmetra,' Vishkar sent her on clandestine missions around the world to uphold its corporate interests and expand its influence into other countries.
    Symmetra believes her actions serve the greater good in society. But there are times when she wonders whether the control and order she desires are truly best for humanity.",
    hero_image_one: "/images/heroImages/symmetra/Symmetra-page-one.png",
    hero_image_two: "/images/heroImages/symmetra/Symmetra-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Symmetra utilizes her Photon Projector to dispatch adversaries, shield her associates, construct teleportation pads and deploy particle-blasting Sentry Turrets.",
    hp: 100,
    armor: 0,
    shields: 125,
    total_hp: 225,
    playstyle: "Builder/Architect",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/symmetra/Symmetra-gun.png",
    weapon_one_name: "Photon Projector",
    weapon_one_description: "Short-range beam weapon with increasing damage. Damaging Barriers does not consume ammunition.",
    weapon_one_type: "Beam",
    weapon_two_image: "/images/heroImages/symmetra/Symmetra-gun.png",
    weapon_two_name: "Photon Projector",
    weapon_two_description: "Hold to charge, release to fire explosive orb",
    weapon_two_type: "Projectile",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/symmetra/Symmetra-turret.png",
    ability_one_name: "Sentry Turret",
    ability_one_description: "Deploy a small turret that damages and slows enemies.",
    ability_two_image: "/images/heroImages/symmetra/Symmetra-teleporter.png",
    ability_two_name: "Teleporter",
    ability_two_description: "Create two teleporters that enable instant travel between them.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/symmetra/Symmetra-barrier.png",
    ultimate_name: "Photon Barrier",
    ultimate_description: "Deploy a massive energy barrier. (5,000 HP)",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0 
)
#SOMBRA
Character.create(
    name: "Sombra", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Sombra.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Olivia Colomar",
    age: 30,
    occupation: "Hacker",
    base_of_operation: "Dorado, Mexico",
    affiliation: "Los Muertos (formerly), Talon (currently)",
    hero_story: "One of the world's most notorious hackers, Sombra uses information to manipulate those in power.
    Long before she took up the alias 'Sombra,' ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers.
    After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance.
    Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding.
    She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense.
    Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.",
    hero_image_one: "/images/heroImages/sombra/Sombra-page-one.png",
    hero_image_two: "/images/heroImages/sombra/Sombra-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Stealth and debilitating attacks make Sombra a powerful infiltrator. Her hacking can disrupt her enemies, ensuring they're easier to take out, while her EMP provides the upper hand against multiple foes at once. Sombra’s ability to Translocate and camouflage herself makes her a hard target to pin down.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Flanker/Dive/Crowd Control",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/sombra/Sombra-gun.png",
    weapon_one_name: "Machine Pistol",
    weapon_one_description: "Short-range automatic weapon",
    weapon_one_type: "Short-range large spread hitscan",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/sombra/Sombra-passive.png",
    passive_name: "Opportunist",
    passive_description: "You detect critically injured enemies through walls.",
    ability_one_image: "/images/heroImages/sombra/Sombra-translocator.png",
    ability_one_name: "Translocator",
    ability_one_description: "Throw a beacon, then press E again to teleport to it. Press ABILITY 2 to remove it.",
    ability_two_image: "/images/heroImages/sombra/Sombra-stealth.png",
    ability_two_name: "Stealth",
    ability_two_description: "Become invisible and move quickly.",
    ability_three_image: "/images/heroImages/sombra/Sombra-hack.png",
    ability_three_name: "Hack",
    ability_three_description: "Hold to hack. Hacked enemies cannot use abilities. Hacked health packs spawn faster but can't be used by enemies. Taking damage interrupts the hack attempt.",
    ultimate_image: "/images/heroImages/sombra/Sombra-ultimate.png",
    ultimate_name: "EMP",
    ultimate_description: "Hack enemies and destroy enemy shields and barriers around you.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#SOLDIER 76
Character.create(
    name: "Soldier 76", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Soldier_76.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "John Francis 'Jack' Morrison",
    age: 55,
    occupation: "Vigilante",
    base_of_operation: "Unknown",
    affiliation: "United States Military (formerly), Overwatch (formerly)",
    hero_story: "Currently the target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch's collapse.
    Soldier: 76 revealed himself in a string of attacks that crisscrossed the globe, targeting financial institutions, shadowy corporations, and secure Overwatch facilities. Though to the outside world his motives are inscrutable, there are those who claim that he is a former Overwatch agent, determined to shed light on the conspiracy that brought down the organization.
    While his true identity remains a mystery, he is believed to have been trained as a member of the American 'soldier enhancement program.' He possesses physical capabilities exceeding those of a conventional soldier's, as well as other augmentations that make him a peerless combatant. In addition, he utilizes a cutting-edge arsenal, much of it stolen in raids on Overwatch installations.
    Unrelenting in his search to find those responsible for Overwatch's fall, Soldier: 76 will stop at nothing to bring them to justice.",
    hero_image_one: "/images/heroImages/soldier/Soldier-page-one.png",
    hero_image_two: "/images/heroImages/soldier/Soldier-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Armed with cutting-edge weaponry, including an experimental pulse rifle that’s capable of firing spirals of high-powered Helix Rockets, Soldier: 76 has the speed and support know-how of a highly trained warrior.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Full Auto Hitscan",
    hero_difficulty: 1,
    weapon_one_image: "/images/heroImages/soldier/Soldier-gun.png",
    weapon_one_name: "Heavy Pulse Rifle",
    weapon_one_description: "Automatic assault weapon.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/soldier/Soldier-sprint.png",
    ability_one_name: "Sprint",
    ability_one_description: "Run faster while moving forward.",
    ability_two_image: "/images/heroImages/soldier/Soldier-heal.png",
    ability_two_name: "Biotic Field",
    ability_two_description: "Deploy a field that heals you and your allies.",
    ability_three_image: "/images/heroImages/soldier/Soldier-rockets.png",
    ability_three_name: "Helix Rockets",
    ability_three_description: "Launch a volley of explosive rockets.",
    ultimate_image: "/images/heroImages/soldier/Soldier-visor.png",
    ultimate_name: "Tactical Visor",
    ultimate_description: "Automatically aims your weapon at targets in view.", 
    healing_type: "N/A", 
    barrier: false, 
    barrier_health: 0 
)
#PHARAH
Character.create(
    name: "Pharah", 
    role: "Damage",
    hero_card: '/images/icons/Icon-Pharah.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Fareeha Amari (فاريها عماري)",
    age: 32,
    occupation: "Security Chief",
    base_of_operation: "Giza, Egypt",
    affiliation: "Egyptian Army (formerly), Helix Security International",
    hero_story: "Fareeha Amari's commitment to duty runs in her blood. She comes from a long line of highly decorated soldiers and burns with the desire to serve with honor.
    As a child, Fareeha dreamed of following in her mother's footsteps and joining the global peacekeeping force, Overwatch. She enlisted in the Egyptian army, and her dogged persistence and tactical prowess caused her to rise up through the officer ranks. She was a courageous leader and earned the loyalty of all who served under her. With her exemplary record, Fareeha was well placed to join the ranks of Overwatch, but before she had that opportunity, Overwatch was disbanded.
    After leaving the army with a commendation for distinguished service, she was offered employment with Helix Security International, a private security firm contracted to defend the artificial intelligence research facility beneath the Giza Plateau. The top-secret facility was touted as vital to the safety of not only the region but countries across the globe. Fareeha gladly accepted the choice assignment and received training in the Raptora Mark VI, an experimental combat suit designed for rapid mobility and devastating firepower.
    Under the call sign 'Pharah,' she works to safeguard the AI installation. Though she mourns Overwatch's passing, she still dreams of fighting the good fight and making a difference on a global scale.",
    hero_image_one: "/images/heroImages/pharah/Pharah-page-one.png",
    hero_image_two: "/images/heroImages/pharah/Pharah-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Soaring through the air in her combat armor, and armed with a launcher that lays down high-explosive rockets, Pharah is a force to be reckoned with.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Flying/Projectile/Crowd Control",
    hero_difficulty: 1,
    weapon_one_image: "/images/heroImages/pharah/Pharah-gun.png",
    weapon_one_name: "Rocket Launcher",
    weapon_one_description: "Long-range explosive projectile",
    weapon_one_type: "Projectile",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/pharah/Pharah-hover.png",
    passive_name: "Hover Jets",
    passive_description: "Hold to hover",
    ability_one_image: "/images/heroImages/pharah/Pharah-jet.png",
    ability_one_name: "Jump Jet",
    ability_one_description: "Fly rapidly upwards",
    ability_two_image: "/images/heroImages/pharah/Pharah-boop.png",
    ability_two_name: "Concussive Blast",
    ability_two_description: "Launch an explosive blast to knock back enemies",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/pharah/Pharah-barrage.png",
    ultimate_name: "Barrage",
    ultimate_description: "Launch a continuous volley of mini-rockets.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0 
)
#MEI
Character.create(
    name: "Mei", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Mei.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Mei-Ling Zhou (周美灵)",
    age: 31,
    occupation: "Climatologist",
    base_of_operation: "Xi'an, China",
    affiliation: "Overwatch, Atlas News",
    hero_story: "Mei is a scientist who has taken the fight to preserve the environment into her own hands.
    Though many blamed the planet's escalating, unexplained climate phenomena on the advent of new technologies, the rapidly growing omnic population, and drastically increased consumption of resources, the true cause remained unknown. To find a solution, Overwatch established a series of eco-Watchpoints at remote, critical locations worldwide.
    Mei-Ling Zhou was a member of this multiyear initiative. A peerless climatologist, she had introduced cutting-edge innovations in the field of climate manipulation that protected at-risk areas in Asia and beyond. She was assigned to the program's monitoring station at Watchpoint: Antarctica when disaster struck: a sudden, catastrophic polar storm battered the installation and cut it off from the outside world, leaving the facility damaged and the scientists stranded. As their supplies dwindled, they entered cryostasis in a last-ditch effort to survive until a rescue attempt could be made.
    But that rescue never came. It was years later when the team's cryogenics chamber was finally discovered. Mei, still in hibernation, was the only survivor. The world Mei awoke to had gone through considerable changes: Overwatch was no more, the serious climate issues had worsened, and none of the eco-Watchpoints were in operation. Any clues that they had uncovered were lost.
    Mei has decided to continue her work on her own. Equipped with a portable version of her climate-manipulation technology, she travels around the world, hoping to re-establish the eco-network and track down the causes of the threats to the planet's ecosystem.",
    hero_image_one: "/images/heroImages/mei/Mei-page-one.png",
    hero_image_two: "/images/heroImages/mei/Mei-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Mei’s weather-altering devices slow opponents and protect locations. Her Endothermic Blaster unleashes damaging icicles and frost streams, and she can Cryo-Freeze herself to guard against counterattacks, or obstruct the opposing team's movements with an Ice Wall.",
    hp: 250,
    armor: 0,
    shields: 0,
    total_hp: 250,
    playstyle: "Crowd Control",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/mei/Mei-gun.png",
    weapon_one_name: "Endothermic Blaster",
    weapon_one_description: "Short-range spray weapon that freezes.",
    weapon_one_type: "Beam/Crowdcontrol",
    weapon_two_image: "/images/heroImages/mei/Mei-gun.png",
    weapon_two_name: "Icicle",
    weapon_two_description: "Long-range icicle launcher.",
    weapon_two_type: "Projectile",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/mei/Mei-heal.png",
    ability_one_name: "Cryo-Freeze",
    ability_one_description: "Become invulnerable and heal yourself.",
    ability_two_image: "/images/heroImages/mei/Mei-wall.png",
    ability_two_name: "Ice Wall",
    ability_two_description: "Create a wall in front of you.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/mei/Mei-blizzard.png",
    ultimate_name: "Blizzard",
    ultimate_description: "Launch a weather control drone that freezes enemies in a wide area.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#JUNKRAT
Character.create(
    name: "Junkrat", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Junkrat.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Jamison Fawkes",
    age: 25,
    occupation: "	Anarchist, Thief, Demolitionist, Mercenary, Scavenger",
    base_of_operation: "Junkertown, Australia",
    affiliation: "Junkers (formerly)",
    hero_story: "Junkrat is an explosives-obsessed freak who lives to cause chaos and destruction.
    The attack on the Australian omnium's fusion core forever altered the landscape of the Outback. After the detonation, the area was transformed into a harsh, irradiated wasteland, littered with debris and the twisted fragments of the ruined facility, and unlivable to most.
    But there were some who survived. Calling themselves the Junkers, they scavenged the husk of the omnium and formed a lawless, cutthroat society in its shadow. Junkrat was one of them, eking out a living reclaiming metal and components from the ruins. Like many others, he was affected by the lingering radiation. This touch of madness made him ideal for handling dangerous explosives, a love which he turned into an obsession.
    He came to notoriety when he discovered an extremely valuable secret in the bones of the omnium. Though few knew the nature of what he found, he was nonetheless pursued by bounty hunters, gangs, and opportunists wherever he went, until he made a deal with the Junker enforcer Roadhog, who grudgingly agreed to be his personal bodyguard in exchange for a fifty-fifty share of the spoils.
    Now, with Roadhog in tow, Junkrat has left the Outback, and embarked upon an international crime spree leaving nothing but havoc and bedlam in his wake.",
    hero_image_one: "/images/heroImages/junkrat/Junkrat-page-one.png",
    hero_image_two: "/images/heroImages/junkrat/Junkrat-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Mei’s weather-altering devices slow opponents and protect locations. Her Endothermic Blaster unleashes damaging icicles and frost streams, and she can Cryo-Freeze herself to guard against counterattacks, or obstruct the opposing team's movements with an Ice Wall.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Crowd Control/Spam",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/junkrat/Junkrat-gun.png",
    weapon_one_name: "Frag Launcher",
    weapon_one_description: "Bouncing explosive projectile weapon.",
    weapon_one_type: "Projectile/Explosive",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/junkrat/Junkrat-passive.png",
    passive_name: "Total Mayhem",
    passive_description: "Deals no damage to self with explosives. Drop bombs on death.",
    ability_one_image: "/images/heroImages/junkrat/Junkrat-mine.png",
    ability_one_name: "Concussion Mine",
    ability_one_description: "Throw a knockback mine with LSHIFT then detonate it with ABILITY 1.",
    ability_two_image: "/images/heroImages/junkrat/Junkrat-trap.png",
    ability_two_name: "Steel Trap",
    ability_two_description: "Place an immobilizing trap.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/junkrat/Junkrat-tire.png",
    ultimate_name: "Rip-Tire",
    ultimate_description: "Drive and detonate an exploding tire.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#HANZO
Character.create(
    name: "Hanzo", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Hanzo.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Hanzo Shimada (島田 半蔵)",
    age: 38,
    occupation: "Mercenary, Assassin",
    base_of_operation: "Hanamura, Japan (formerly)",
    affiliation: "Shimada Clan (formerly)",
    hero_story: "Mastering his skills as a bowman and an assassin, Hanzo Shimada strives to prove himself as a warrior without peer.
    The Shimada family was established centuries ago, a clan of assassins whose power grew over the years, enabling them to build a vast criminal empire that profited from lucrative trade in arms and illegal substances. As the eldest son of the family's head, Hanzo was bound by duty to succeed his father and rule the Shimada empire. From a young age, he was trained for that responsibility, displaying a natural aptitude for leadership and possessing an innate understanding of strategy and tactics. He also excelled in more practical areas: he was a prodigy in martial arts, swordplay, and bowmanship.
    Upon the death of his father, the clan elders instructed Hanzo to straighten out his wayward younger brother so that he, too, might help rule the Shimada empire. When his brother refused, Hanzo was forced to kill him. This act broke Hanzo's heart and drove him to reject his father's legacy, ultimately leading him to abandon the clan and all that he had worked so hard to attain.
    Now, Hanzo travels the world, perfecting his skills as a warrior, attempting to restore his honor and put the ghosts of his past to rest.",
    hero_image_one: "/images/heroImages/hanzo/Hanzo-page-one.png",
    hero_image_two: "/images/heroImages/hanzo/Hanzo-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Hanzo's versatile arrows can reveal his enemies or fragment to strike multiple targets. He can scale walls to fire his bow from on high, or summon a titanic spirit dragon.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Sniper/Projectile",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/hanzo/Hanzo-gun.png",
    weapon_one_name: "Storm Bow",
    weapon_one_description: "Hold to charge then release to launch arrows further.",
    weapon_one_type: "Projectile",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/hanzo/Hanzo-passive.png",
    passive_name: "Wall Climb",
    passive_description: "Jump at walls to climb up them",
    ability_one_image: "/images/heroImages/hanzo/Hanzo-storm-arrow.png",
    ability_one_name: "Storm Arrows",
    ability_one_description: "The next 5 arrows fire instantly at reduced damage.",
    ability_two_image: "/images/heroImages/hanzo/Hanzo-sonic.png",
    ability_two_name: "Sonic Arrow",
    ability_two_description: "Reveals enemies for a short time upon impact.",
    ability_three_image: "/images/heroImages/hanzo/Hanzo-lunge.png",
    ability_three_name: "Lunge",
    ability_three_description: "Double jump.",
    ultimate_image: "/images/heroImages/hanzo/Hanzo-dragon-strike.png",
    ultimate_name: "Dragonstrike",
    ultimate_description: "Launch a deadly Dragon Spirit that devastates enemies it passes through.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#GENJI
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
    hero_story: "The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity.  As the youngest son of the master of the Shimada ninja clan, Genji lived a life of luxury and privilege. He had little interest in the family's illegal businesses, and although he excelled at and enjoyed his ninja training, he spent most of his time pursuing a playboy lifestyle.                       Many within the clan considered the carefree Genji to be a dangerous liability, and they resented his father for coddling and protecting him. Following the clan leader's untimely death, Genji's older brother, Hanzo, demanded that Genji take a more active role in their late father's empire. Genji refused, enraging Hanzo.                          The tension between the brothers built to a violent confrontation that left Genji on the verge of dying. Hanzo believed that he had killed his brother, but Genji was rescued by Overwatch and the intervention of Dr. Angela Ziegler. The global security force saw Genji as a potential asset in its ongoing operations to combat the Shimada clan.                         As Genji's injuries left him clinging to life, Overwatch offered to rebuild his body in exchange for his help. He was put through an extensive process of cyberization, which enhanced his natural speed and agility and augmented his superlative ninja skills. Transformed into a living weapon, Genji single-mindedly set about the task of dismantling his family's criminal empire. But as time passed, Genji felt increasingly at war with himself. He was repulsed by the mechanical parts of his body and could not come to grips with what he had become. When his mission was complete, he abandoned Overwatch and wandered the world in search of meaning. He drifted for many years before crossing paths with the omnic monk Zenyatta. Though Genji initially rejected Zenyatta's wisdom, the benevolent omnic would not be deterred. In time, Zenyatta became his mentor, and under the monk's tutelage, Genji reconciled his dual existence as both man and machine. He learned to accept that although he had a cyborg body, his human soul was intact, and he came to see his new form as a gift and a unique strength. Now, for the first time in his life, Genji is free. Even he cannot say where his path will ultimately lead.",
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
    weapon_one_image: "/images/heroImages/genji/Genji-shuriken.png",
    weapon_one_name: "Shuriken",
    weapon_one_description: "Throw an accurate burst of three projectiles",
    weapon_one_type: "Projectile",
    weapon_two_image: "/images/heroImages/genji/Genji-shuriken.png",
    weapon_two_name: "Fan of Blades",
    weapon_two_description: "Throw a fan of 3 projectiles in an arc.",
    weapon_two_type: "Projectile",
    passive_image: "/images/heroImages/genji/Genji-passive.png",
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
#ECHO
Character.create(
    name: "Echo", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Echo.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Echo",
    age: 0,
    occupation: "Multirole adaptive robot",
    base_of_operation: "Watchpoint: Gibraltar",
    affiliation: "Overwatch",
    hero_story: "To chart the origins of the Echo project, it is important to delve into the personal history of Singaporean scientist Dr. Mina Liao, who would later become perhaps best known as one of the founding members of Overwatch. But prior to joining the organization, Dr. Liao was widely considered one of the preeminent experts in the fields of robotics and artificial intelligence, and an employee of Omnica Corporation. There she worked on the team that was responsible for the design and creation of the omnics that would ultimately wage war against humanity during the Omnic Crisis. Ultimately, it was this expertise that led her to be recruited into Overwatch to help stop her creations.
    Even that catastrophe was not enough to dissuade Liao of her firmly held belief in the potential artificial life and its power to transform the lives of humanity for the better. She dreamed of improving upon the original omnic designs. These theories would become the foundation of the Echo project. However, due to Overwatch’s restrictions on artificial intelligence research and development after the Omnic Crisis, Liao was forced to limit Echo’s capabilities. What she created was a multirole, adaptive robot that could be programmed to learn different functions: anything from medical support to construction: but had serious limits to its independent decision making. Critically, Echo had multiple layers of protections, failsafes, and security to keep it under control. Echo was used successfully on test missions alongside Overwatch strike teams, but Overwatch leadership was reluctant to put it into full service.",
    hero_image_one: "/images/heroImages/echo/Echo-page-one.png",
    hero_image_two: "/images/heroImages/echo/Echo-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Echo is an evolutionary robot programmed with a rapidly adapting artificial intelligence, versatile enough to fill multiple battlefield combat roles.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Flying/Projectile",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/echo/Echo-gun.png",
    weapon_one_name: "Tri-Shot",
    weapon_one_description: "Fires 3 shots at once, in a triangle pattern.",
    weapon_one_type: "Projectile",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/echo/Echo-glide.png",
    passive_name: "Glide",
    passive_description: "Hold jump to glide while falling",
    ability_one_image: "/images/heroImages/echo/Echo-sticky.png",
    ability_one_name: "Sticky Bombs",
    ability_one_description: "Fire a volley of sticky bombs that detonate after a delay.",
    ability_two_image: "/images/heroImages/echo/Echo-flight.png",
    ability_two_name: "Flight",
    ability_two_description: "Fly forward quickly and then free-fly briefly.",
    ability_three_image: "/images/heroImages/echo/Echo-beam.png",
    ability_three_name: "Focusing Beam",
    ability_three_description: "Channel a beam for a few seconds. Deals very high damage to targets under half health.",
    ultimate_image: "/images/heroImages/echo/Echo-duplicate.png",
    ultimate_name: "Duplicate",
    ultimate_description: "Become a copy of the targeted enemy hero. They cannot swap heroes for the duration.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0 
)
#DOOMFIST
Character.create(
    name: "Doomfist", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Doomfist.png',
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Akande Ogundimu",
    age: 45,
    occupation: "Mercenary, CEO, Talon Counsil",
    base_of_operation: "Oyo, Nigeria",
    affiliation: "Talon",
    hero_story: "Recently freed from imprisonment, Doomfist is determined to plunge the world into a new conflict that he believes will make humanity stronger.
    Akande Ogundimu was born into a well-regarded Nigerian family, heir to its prosthetic-technology company. A highly intelligent and charismatic figure, Ogundimu helped to expand his family's business and position it for the future while dedicating his free time to his first love: competitive martial arts. He trained in traditional African fighting styles, including Dambe and Gidigbo, as well as in wrestling and other modern combat systems, incorporating the most effective techniques into his repertoire. Ogundimu competed in tournaments all over the continent, utilizing his intuition and ability to read opponents alongside his tremendous speed and strength.
    But when he lost his right arm in the aftermath of the Omnic Crisis, it seemed his martial arts career was finished before he had reached his prime. His company's cybernetic prosthetics allowed him to recover from his injuries, even making him stronger, but these enhancements rendered him ineligible for competition. He tried to devote himself to his business with the same zeal that he had for fighting, but he found nothing that could fill the void… until he was given a new opportunity by Akinjide Adeyemi, better known to the world as the second Doomfist, the Scourge of Numbani.
    Adeyemi offered Ogundimu the chance to fight with him as a mercenary. Initially wary, Ogundimu accepted, and discovered that he now had an arena in which he could unleash his enhanced capabilities. Eventually, Adeyemi brought him into the Talon organization. Talon's belief that humanity would be made stronger through conflict resonated with Ogundimu's personal experiences. Moreover, Talon's power struggles presented a new challenge that allowed him to use his talent in the boardroom along with his cunning as a combatant.
    Adeyemi was a useful asset to Talon, but the organization saw far greater potential in Ogundimu, with his intelligence and his ability to inspire as a commander. While Adeyemi was content to profit from raids on Numbani, Ogundimu had a grander vision. This difference in aspiration would lead Ogundimu to kill his teacher and take on the mantle of Doomfist, along with the eponymous gauntlet.
    As the new Doomfist, Ogundimu rose high in Talon and helped to orchestrate a conflict that the organization hoped would someday engulf the world. However, before their plan came to fruition, Ogundimu was defeated and captured by an Overwatch strike team that included Tracer, Winston, and Genji. He was imprisoned in a maximum-security facility for years, where he waited patiently for events he had incited to play out.
    Finally, he sensed that the time had come for him to return. He broke out of his prison and recovered Doomfist's gauntlet in a one-sided battle with Numbani's newly unveiled OR15 defense robots. Now, he has retaken his place in Talon's inner council, ready to spark a war that will consume the world once again.",
    hero_image_one: "/images/heroImages/doomfist/Doomfist-page-one.png",
    hero_image_two: "/images/heroImages/doomfist/Doomfist-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Doomfist’s cybernetics make him a highly-mobile, powerful frontline fighter. In addition to dealing ranged damage with his Hand Cannon, Doomfist can slam the ground, knock enemies into the air and off balance, or charge into the fray with his Rocket Punch. When facing a tightly packed group, Doomfist leaps out of view, then crashes down to earth with a spectacular Meteor Strike.",
    hp: 250,
    armor: 0,
    shields: 0,
    total_hp: 250,
    playstyle: "Melee/Combo/Flanker/Dive",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/doomfist/Doomfist-gun.png",
    weapon_one_name: "Hand Cannon",
    weapon_one_description: "Short-range weapon with spread, Reloads automatically",
    weapon_one_type: "Short-range hitscan shotgun",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/doomfist/Doomfist-passive.png",
    passive_name: "The Best Defense...",
    passive_description: "Dealing damage with abilities creates temporary personal shields.",
    ability_one_image: "/images/heroImages/doomfist/Doomfist-slam.png",
    ability_one_name: "Seismic Slam",
    ability_one_description: "Leap forward and smash the ground.",
    ability_two_image: "/images/heroImages/doomfist/Doomfist-uppercut.png",
    ability_two_name: "Rising Uppercut",
    ability_two_description: "Knock an enemy into the air.",
    ability_three_image: "/images/heroImages/doomfist/Doomfist-punch.png",
    ability_three_name: "Rocket Punch",
    ability_three_description: "Hold to charge then release to launch forward and knock an enemy back. Damage increases if the enemy hits a wall.",
    ultimate_image: "/images/heroImages/doomfist/Doomfist-meteor.png",
    ultimate_name: "Meteor Strike",
    ultimate_description: "Press Q to leap up into the air. Move the targeting circle, then press ABILITY 3 to strike the targeted area.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0 
)
#CASSIDY
Character.create(
    name: "Cassidy", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Cassidy.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Cole Cassidy",
    age: 35,
    occupation: "Overwatch Agent, Bounty Hunter, Mercenary",
    base_of_operation: "Santa Fe, New Mexico (formerly)",
    affiliation: "Deadlock Gang (formerly), Blackwatch (formerly), Mercenary",
    hero_story: "Armed with his Peacekeeper revolver, the outlaw Cole Cassidy doles out justice on his own terms.
    On the run from the law as a young man, Cassidy became a founding member of the notorious Deadlock Gang, which trafficked in illicit weapons and military hardware throughout the American Southwest. Eventually, the gang’s luck ran out, and Overwatch busted Cassidy and several of his associates. With his expert marksmanship and resourcefulness, Cassidy was given the choice between rotting in a maximum-security lockup and joining Blackwatch, Overwatch's covert ops division. He chose the latter.
    Although initially cynical, Cassidy came to believe that he could make amends for his past by righting the injustices of the world. He appreciated the flexibility afforded to the clandestine Blackwatch, unhindered by bureaucracy and red tape. But as Overwatch's influence waned, rogue elements within Blackwatch sought to bring down the organization and turn it to their own ends. Wanting no part of the infighting, Cassidy set off alone.
    He resurfaced several years later as a gunslinger for hire. But while Cassidy's talents are sought after by parties great and small, he fights only for causes he believes are just.",
    hero_image_one: "/images/heroImages/cassidy/Cassidy-page-one.png",
    hero_image_two: "/images/heroImages/cassidy/Cassidy-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Armed with his Peacekeeper revolver, Cassidy takes out targets with deadeye precision and dives out of danger with eagle-like speed.",
    hp: 225,
    armor: 0,
    shields: 0,
    total_hp: 225,
    playstyle: "Crowd Control/Medium-Short-range Hitscan",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/cassidy/Cassidy-gun.png",
    weapon_one_name: "Peacekeeper",
    weapon_one_description: "Accurate, powerful revolver.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "/images/heroImages/cassidy/Cassidy-gun.png",
    weapon_two_name: "Fan The Hammer",
    weapon_two_description: "Wildly fire remaining rounds.",
    weapon_two_type: "Hitscan",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/cassidy/Cassidy-roll.png",
    ability_one_name: "Combat Roll",
    ability_one_description: "Roll in the direction you're moving and reload.",
    ability_two_image: "/images/heroImages/cassidy/Cassidy-flash.png",
    ability_two_name: "Flashbang",
    ability_two_description: "Stun enemies in front of you.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/cassidy/Cassidy-deadeye.png",
    ultimate_name: "Deadeye",
    ultimate_description: "Face off against your enemies. Press Q to lock on, then Q or ABILITY 3 to fire.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0 
)
#BASTION
Character.create(
    name: "Bastion", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Bastion.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "SST Laboratories Siege Automaton E54",
    age: 30,
    occupation: "Battle automaton (formerly), None",
    base_of_operation: "Black Forrest, Germany (formerly",
    affiliation: "None",
    hero_story: "Once a frontline combatant in the devastating Omnic Crisis, this curious Bastion unit now explores the world, fascinated by nature but wary of a fearful humanity.
    Originally created for peacekeeping purposes, Bastion robot units possessed the unique ability to rapidly reconfigure themselves into an assault-cannon mode. But during the Omnic Crisis, they were turned against their human makers, forming the bulk of the omnics' rebel army. Following the resolution of the crisis, nearly all of them were destroyed or disassembled. To this day, Bastion units still symbolize the horrors of the conflict.
    One unique Bastion unit, severely damaged in the final battles of the war, was left forgotten for over a decade. It lay dormant, exposed to the elements and rusting while nature slowly reclaimed it. Overgrown with vines and roots and nested upon by small animals, the robot sat inert, seemingly unaware of the passing of time. That was until one fateful day, when it unexpectedly reactivated. With its combat programming all but lost, it instead displayed an intense curiosity about the natural world and its inhabitants. This inquisitive Bastion unit set out to explore its surroundings and discover its purpose on a war-ravaged planet.
    Though 'Bastion' appears to be gentle—even harmless, at times—its core combat programming takes over when the unit senses danger, utilizing its entire arsenal to eliminate anything it perceives as a threat. This has led to instances of conflict with the few humans it has encountered, and has driven it to avoid populated areas in favor of the wild, uncharted regions of the world.",
    hero_image_one: "/images/heroImages/bastion/Bastion-page-one.png",
    hero_image_two: "/images/heroImages/bastion/Bastion-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory.",
    hp: 200,
    armor: 100,
    shields: 0,
    total_hp: 300,
    playstyle: "Hitscan/Builder/Tank",
    hero_difficulty: 1,
    weapon_one_image: "/images/heroImages/bastion/Bastion-gun.png",
    weapon_one_name: "Configuration: Sentry",
    weapon_one_description: "Immobile with a powerful rotary cannon.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "/images/heroImages/bastion/Bastion-gun-two.png",
    weapon_two_name: "Configuration: Recon",
    weapon_two_description: "Mobile with a light automatic weapon.",
    weapon_two_type: "Hitscan",
    passive_image: "/images/heroImages/bastion/Bastion-iron.png",
    passive_name: "Ironclad",
    passive_description: "Reduces damage taken while transformed.",
    ability_one_image: "/images/heroImages/echo/Echo-sticky.png",
    ability_one_name: "Self-Repair",
    ability_one_description: "Hold to heal yourself.",
    ability_two_image: "/images/heroImages/bastion/Bastion-reconfigure.png",
    ability_two_name: "Reconfigure",
    ability_two_description: "Switch between weapon configurations.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/bastion/Bastion-tank.png",
    ultimate_name: "Configuration: Tank",
    ultimate_description: "Mobile with a powerful cannon.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0 
)
#ASHE
Character.create(
    name: "Ashe", 
    role: "Damage", 
    hero_card: '/images/icons/Icon-Ashe.png', 
    role_card: '/images/icons/Icon-Damage.png',
    name_two: "Elizabeth Caledonia 'Calamity' Ashe",
    age: 39,
    occupation: "Thief, gang leader",
    base_of_operation: "Lead Rose Manor, Texas (formerly)",
    affiliation: "Deadlock Gang",
    hero_story: "Ashe is the ambitious and calculating leader of the Deadlock Gang and a respected figure in the criminal underworld.
    Born into a wealthy family, Ashe grew up surrounded by privilege. Her parents were highly sought-after business consultants and coaches for powerful CEOs around the world. Though her parents paid little attention to her , they ensured that Ashe had every opportunity to succeed. But a chance meeting with a local ruffian, named Cole Cassidy, and an impromptu string of crimes committed together opened her eyes to her true calling. The satisfaction of outwitting her targets and the thrill of getting away with it set her on the outlaw path.
    Along with the other three founders of the Deadlock Gang, Ashe started to make a name for herself with bigger and more extravagant heists. The Deadlock Gang’s rapid rise to prominence put them at odds with the other criminal organizations in the American Southwest; the encounters often became violent. After years of skirmishes and bloodshed, Ashe called the heads of the major groups together.
    Ashe saw the potential to grow the influence of all. She used what she’d learned from her parents’ business to bring order to these groups. Her proposal was that the gangs could work together . Her principles: keep your word, don’t work with the law, respect each other’s territory, and always punish betrayal.
    No longer having to focus her energies on squabbles with the other gangs, Ashe is now writing her name across the American Southwest with a string of audacious heists and operations that has put her at top of the authorities’ most-wanted lists and cemented her legacy as an outlaw legend.",
    hero_image_one: "/images/heroImages/ashe/Ashe-page-one.png",
    hero_image_two: "/images/heroImages/ashe/Ashe-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Ashe quickly fires her rifle from the hip or uses her weapon’s aim-down sights to line up a high damage shot. She blasts enemies by throwing dynamite, and her coach gun packs enough punch to put some distance between her and her foes. And Ashe is not alone, as she can call on her omnic ally Bob, to join the fray when the need arises.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Medium-Long-range Hitscan",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/ashe/Ashe-gun.png",
    weapon_one_name: "The Viper",
    weapon_one_description: "Semi-automatic rifle.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "/images/heroImages/ashe/Ashe-gun.png",
    weapon_two_name: "Take Aim",
    weapon_two_description: "Hold to zoom in, increasing damage and accuracy but slowing rate of fire.",
    weapon_two_type: "Hitscan",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/ashe/Ashe-coach.png",
    ability_one_name: "Coach Gun",
    ability_one_description: "Blast enemies in front of you and knock yourself backwards.",
    ability_two_image: "/images/heroImages/ashe/Ashe-dynamite.png",
    ability_two_name: "Dynamite",
    ability_two_description: "Throw an explosive that detonates after a short delay or immediately when shot.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/ashe/Ashe-bob.png",
    ultimate_name: "B.O.B",
    ultimate_description: "Deploy Bob. He charges forward and knocks enemies into the air, then attacks with his arm cannons.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0 
)


   
    
###Tanks###

puts "Creating Tanks..."
puts 
#DVA
Character.create(
    name: "D.Va", 
    role: "Tank", 
    hero_card: '/images/icons/Icon-D.Va.png', 
    role_card: '/images/icons/Icon-Tank.png',
    name_two: "Hana Song (송하나)",
    age: 19,
    occupation: "Mech Pilot, Actress",
    base_of_operation: "Busan, South Korea",
    affiliation: "Mobile Exo-Force of the Korean Army (MEKA)",
    hero_story: "D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland.
    Twenty years ago, South Korea was attacked by a colossal omnic monstrosity that rose from the depths of the East China Sea. The massive, lumbering construct caused catastrophic damage to coastal cities before it was driven back beneath the waves. In response, the South Korean government developed a mechanized armored drone unit, called MEKA, to protect urban environments in future engagements with the omnic threat.
    The government's fears proved to be well founded, as a disturbing pattern of attacks emerged. Every few years, the monstrosity would rise from the sea to assault South Korea and its neighbors. The omnic learned from these encounters, often reconfiguring itself in a different form and appearing with new weapons and capabilities. Each incident ended in a stalemate, with the monstrosity defeated but not destroyed.
    As the omnic continued to adapt, it eventually disrupted MEKA's drone-control networks, forcing the military to place pilots in the mechs. Scrambling to find suitable candidates, the government turned to the country's professional gamers, who possessed the necessary reflexes and instincts to operate the mechs' advanced weapons systems. Top stars were drafted, including reigning world champion Hana Song, also known as 'D.Va.' Famous for her elite skills, D.Va was a fierce competitor who played to win at all costs, and she had a well-earned reputation for showing no mercy to her opponents.
    Seeing her new mission as a game, D.Va fearlessly charges into battle alongside the rest of her MEKA unit, ready to spring to her nation's defense at a moment's notice. Recently, she has begun to stream combat operations to her adoring fans, and her growing following has turned her into a global icon.",
    hero_image_one: "/images/heroImages/dva/Dva-page-one.png",
    hero_image_two: "/images/heroImages/dva/Dva-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.",
    hp: 300,
    armor: 300,
    shields: 0,
    total_hp: 600,
    playstyle: "Dive",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/dva/Dva-gun.png",
    weapon_one_name: "Fusion Cannons",
    weapon_one_description: "Automatic short-range spread weapons.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "/images/heroImages/dva/Dva-gun-two.png",
    weapon_two_name: "Light Gun",
    weapon_two_description: "Hold to zoom in, increasing damage and accuracy but slowing rate of fire.",
    weapon_two_type: "Hitscan",
    passive_image: "/images/heroImages/dva/Dva-passive.png",
    passive_name: "Eject!",
    passive_description: "Eject out of your mech when it is destroyed.",
    ability_one_image: "/images/heroImages/dva/Dva-boost.png",
    ability_one_name: "Boosters",
    ability_one_description: "Fly in the direction you are facing.",
    ability_two_image: "/images/heroImages/dva/Dva-matrix.png",
    ability_two_name: "Defense Matrix",
    ability_two_description: "Block projectiles in an area in front of you.",
    ability_three_image: "/images/heroImages/dva/Dva-missile.png",
    ability_three_name: "Micro Missiles",
    ability_three_description: "Launch a volley of explosive rockets.",
    ultimate_image: "/images/heroImages/dva/Dva-self.png",
    ultimate_name: "Self-Destruct",
    ultimate_description: "Eject and overload your mech, causing it to explode after a short time.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#ORISA
Character.create(
    name: "Orisa", 
    role: "Tank", 
    hero_card: '/images/icons/Icon-Orisa.png', 
    role_card: '/images/icons/Icon-Tank.png',
    name_two: "Orisa",
    age: 1,
    occupation: "Guardian robot",
    base_of_operation: "Numbani",
    affiliation: "Numbani",
    hero_story: "Built from parts of one of Numbani's short-lived OR15 defense robots, Orisa is the city's newest protector, though she still has much to learn.
    Originally put into service before the Omnic Crisis, the OR14 'Idina' line of security robots was built in Nigeria's massive manufacturing omnium. After the war, they were taken out of production, along with many of the other models used during the crisis. Twenty years later, Numbani revived and recommissioned the OR14 program to protect the city from external threats. These new OR15s were deployed for a short time before they were destroyed in an attack by Doomfist.
    Following the attack, the program was scrapped, and the civic government sold off the remaining OR15 inventory. Some parts were purchased by eleven-year-old Efi Oladele, a brilliant girl whose early accomplishments in robotics and artificial intelligence had already earned her the Adawe Foundation's 'genius grant.'
    With the approval of her understanding and open-minded parents, Efi spent the bulk of her grant money to acquire one of the decommissioned OR15 bots. She believed that Numbani needed a protector and that an upgraded OR15 could do just that. Efi repaired and reconfigured the robot and installed a personality core that she had designed herself.
    She named Numbani's newest hero Orisa.
    Orisa has shown that she can be of service to the city, but she is still working toward finding her optimal protocols. The omnic's inexperience can cause her to be an occasional liability. Fortunately, between Efi's willingness to make the necessary modifications and Orisa's adaptive artificial intelligence, both robot and creator have always been able to set things right.
    As Orisa starts her career as a guardian, she has much to learn about the world and her functionality. But as long as she is guided by Efi's boundless optimism and her own growing sense of honor and duty, Orisa stands ready to protect Numbani and her creator at any cost.",
    hero_image_one: "/images/heroImages/orisa/Orisa-page-one.png",
    hero_image_two: "/images/heroImages/orisa/Orisa-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Orisa serves as the central anchor of her team, and defends her teammates from the frontline with a protective barrier. She can attack from long range, fortify her own defenses, launch graviton charges to slow and move enemies, and deploy a Supercharger to boost the damage output of multiple allies at once.",
    hp: 200,
    armor: 0,
    shields: 250,
    total_hp: 450,
    playstyle: "Anchor Tank",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/orisa/Orisa-gun.png",
    weapon_one_name: "Fusion Driver",
    weapon_one_description: "Automatic projectile weapon. Slows Orisa while firing.",
    weapon_one_type: "Projectile",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/orisa/Orisa-barrier.png",
    ability_one_name: "Protective Barrier",
    ability_one_description: "Throw a device that creates a barrier.",
    ability_two_image: "/images/heroImages/orisa/Orisa-fortify.png",
    ability_two_name: "Fortify",
    ability_two_description: "Reduce damage taken and you cannot be stopped.",
    ability_three_image: "/images/heroImages/orisa/Orisa-pull.png",
    ability_three_name: "Halt!",
    ability_three_description: "Launch a graviton charge with Secondary Fire then detonate it with SECONDARY FIRE. The sphere slows and pulls nearby enemies to it.",
    ultimate_image: "/images/heroImages/orisa/Orisa-super.png",
    ultimate_name: "Super Charger",
    ultimate_description: "Deploy a device that increases damage inflicted by your allies.",
    healing_type: "N/A",
    barrier: true,
    barrier_health: 600
)
#SIGMA
Character.create(
    name: "Sigma", 
    role: "Tank", 
    hero_card: '/images/icons/Icon-Sigma.png', 
    role_card: '/images/icons/Icon-Tank.png',
    name_two: "Siebren de Kuiper",
    age: 62,
    occupation: "Astrophysicist",
    base_of_operation: "The Hague, Netherlands (formerly)",
    affiliation: "Talon",
    hero_story: "Brilliant astrophysicist Dr. Siebren de Kuiper's life changed forever when an experiment gone wrong gave him the ability to control gravity; now, Talon manipulates him to their own ends.
    De Kuiper was considered a pioneer in his field. His life's work involved devising a way to harness the power of gravity. Equally known for his groundbreaking research and eccentric personality, he conducted most of his studies from his lab in The Hague. Believing that he was close to achieving his goal, he performed his most important experiment on an international space station.
    But something went wrong, triggering the brief formation of a black hole. De Kuiper was only exposed to its power for a moment, but he suffered serious psychological damage. The area around him began to experience strange fluctuations in gravity, peaking and dropping in time with his reactions. He had to be evacuated immediately.
    Upon returning to Earth, De Kuiper was quarantined in a secret government facility. Between his ravings about the patterns of the universe, the psychic damage he sustained, and the gravitic anomalies happening around him, he was deemed unsafe and detained for years under the name 'Subject Sigma.' Isolated and unable to control his powers, De Kuiper retreated into his own mind. He thought he would never see the outside world again.
    When Talon discovered De Kuiper's existence, they infiltrated the facility and broke him out, planning to use his brilliance and research to further their plans. In their custody, De Kuiper slowly gained control of his powers. Now, gravity moved according to his will, and he was closer than ever to achieving his life's goal. But the same experiment that had opened his mind had also fractured it, and he struggled to keep the pieces together.
    De Kuiper continues to develop his powers in hopes of unlocking the secrets of the universe, unaware that Talon is using both him and his research.",
    hero_image_one: "/images/heroImages/sigma/Sigma-page-one.png",
    hero_image_two: "/images/heroImages/sigma/Sigma-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Sigma is an eccentric astrophysicist and volatile tank who gained the power to control gravity in an orbital experiment gone wrong. Manipulated by Talon and deployed as a living weapon, Sigma’s presence on the battlefield cannot be ignored.",
    hp: 300,
    armor: 0,
    shields: 100,
    total_hp: 400,
    playstyle: "Off/Barrier Tank",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/sigma/Sigma-gun.png",
    weapon_one_name: "Hyperspheres",
    weapon_one_description: "Launch two charges which implode after a short duration, dealing damage in an area.",
    weapon_one_type: "Projectile",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/sigma/Sigma-suck.png",
    ability_one_name: "Kinetic Grasp",
    ability_one_description: "Absorb projectiles in front of you and convert them into shields.",
    ability_two_image: "/images/heroImages/sigma/Sigma-rock.png",
    ability_two_name: "Accretion",
    ability_two_description: "Gather a mass of debris and throw it at an enemy to knock them down.",
    ability_three_image: "/images/heroImages/sigma/Sigma-barrier.png",
    ability_three_name: "Experimental Barrier",
    ability_three_description: "Hold to propel a floating barrier; release to stop. Press again to recall the barrier to you.",
    ultimate_image: "/images/heroImages/sigma/Sigma-flux.png",
    ultimate_name: "Gravitic Flux",
    ultimate_description: "Manipulate gravity to lift enemies into the air and slam them back down.",
    healing_type: "N/A",
    barrier: true,
    barrier_health: 700
)
#ROADHOG
Character.create(
    name: "Roadhog", 
    role: "Tank", 
    hero_card: '/images/icons/Icon-Roadhog.png', 
    role_card: '/images/icons/Icon-Tank.png',
    name_two: "Mako Rutledge",
    age: 48,
    occupation: "Bodyguard",
    base_of_operation: "Junkertown, Australia (formerly)",
    affiliation: "Junkers (formerly)",
    hero_story: "Roadhog is a ruthless killer with a well-earned reputation for cruelty and wanton destruction.
    After the Omnic Crisis, government officials gifted the Australian omnium and the surrounding area to the omnics that had nearly destroyed their country, hoping to establish a long-term peace accord. This arrangement permanently displaced Mako Rutledge and a large number of the Outback's residents, a scattered collection of survivalists, solar farmers, and people who just wanted to be left alone.
    Furious over the loss of their homes, Mako and others turned to violent rebellion. They formed the Australian Liberation Front and struck against the omnium and its robot population to take back the lands that had been stolen. Events continued to escalate until the rebels sabotaged the omnium's fusion core, resulting in an explosion that destroyed the facility, irradiated the region, and littered the Outback with twisted metal and wreckage for kilometers around.
    Mako watched as his home became an apocalyptic wasteland, and he was forever changed.
    Adapting to his environment, he donned a mask and took to the broken highways of the Outback on his ramshackle chopper. Little by little, his humanity was forgotten. The last vestiges of Mako faded away and the ruthless killer Roadhog was born.",
    hero_image_one: "/images/heroImages/roadhog/Roadhog-page-one.png",
    hero_image_two: "/images/heroImages/roadhog/Roadhog-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.",
    hp: 600,
    armor: 0,
    shields: 0,
    total_hp: 600,
    playstyle: "Off/Crowd Control",
    hero_difficulty: 1,
    weapon_one_image: "/images/heroImages/roadhog/Roadhog-gun.png",
    weapon_one_name: "Scrap Gun",
    weapon_one_description: "Short-range spread weapon.",
    weapon_one_type: "Projectile",
    weapon_two_image: "/images/heroImages/roadhog/Roadhog-gun.png",
    weapon_two_name: "Scrap Gun",
    weapon_two_description: "Medium-range spread weapon.",
    weapon_two_type: "Projectile",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/roadhog/Roadhog-hook.png",
    ability_one_name: "Chain Hook",
    ability_one_description: "Drag a targeted enemy to you.",
    ability_two_image: "/images/heroImagesroadhog/Roadhog-heal.png",
    ability_two_name: "Take a Breather",
    ability_two_description: "Heal yourself and reduce damage taken over a short time.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/roadhog/Roadhog-hog.png",
    ultimate_name: "Whole Hog",
    ultimate_description: "Damage and knock back enemies in front of you.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#REINHARDT
Character.create(
    name: "Reinhardt", 
    role: "Tank", 
    hero_card: '/images/icons/Icon-Reinhardt.png', 
    role_card: '/images/icons/Icon-Tank.png',
    name_two: "Reinhardt Wilhelm",
    age: 61,
    occupation: "Adventurer, Overwatch agent (formerly) ",
    base_of_operation: "Stuttgart, Germany",
    affiliation: "Overwatch",
    hero_story: "Reinhardt Wilhelm styles himself as a champion of a bygone age, who lives by the knightly codes of valor, justice, and courage.
    Over thirty years ago, Overwatch was founded to counter the threat of the robot uprisings around the world. Reinhardt, a highly decorated German soldier, was inducted as part of the original Overwatch strike team that put an end to the Omnic Crisis. After the conflict's resolution, Overwatch grew into a global institution, keeping the peace in a war-torn world. Reinhardt proved himself to be one of its most stalwart champions.
    Reinhardt's unique ethics and larger-than-life persona earned the admiration of his peers and superiors alike. Never afraid to speak his mind, he was Overwatch's most vocal supporter and, when necessary, its harshest critic, providing a constant reminder that Overwatch was meant to be a force for good.
    Having served into his late fifties, Reinhardt was faced with mandatory retirement from combat operations. Despondent about being removed from active duty, Reinhardt feared that his days of purpose and glory had ended. As times grew darker and Overwatch came under suspicion of corruption and sedition, Reinhardt could only watch as the cause he had dedicated his life to defending surrendered in disgrace.
    Though Overwatch was eventually disbanded, Reinhardt was not content to sit idly by while the world fell to disorder. Once again donning his Crusader armor, he has vowed to fight for justice across Europe like a knight of old, defending the innocent and winning hearts and minds with the promise of better days to come.",
    hero_image_one: "/images/heroImages/reinhardt/Reinhardt-page-one.png",
    hero_image_two: "/images/heroImages/reinhardt/Reinhardt-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Clad in powered armor and swinging his hammer, Reinhardt leads a rocket-propelled charge across the battleground and defends his squadmates with a massive energy barrier.",
    hp: 300,
    armor: 200,
    shields: 0,
    total_hp: 500,
    playstyle: "Anchor Tank/Barrier Tank",
    hero_difficulty: 1,
    weapon_one_image: "/images/heroImages/reinhardt/Reinhardt-gun.png",
    weapon_one_name: "Rocket Hammer",
    weapon_one_description: "Devastating melee weapon",
    weapon_one_type: "Melee weapon",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/reinhardt/Reinhardt-passive.png",
    passive_name: "Steadfast",
    passive_description: "Resistant to knock back effects.",
    ability_one_image: "/images/heroImages/reinhardt/Reinhardt-charge.png",
    ability_one_name: "Charge",
    ability_one_description: "Charge forward and smash an enemy against a wall.",
    ability_two_image: "/images/heroImages/reinhardt/Reinhardt-fire.png",
    ability_two_name: "Fire Strike",
    ability_two_description: "Launch a fiery projectile.",
    ability_three_image: "/images/heroImages/reinhardt/Reinhardt-barrier.png",
    ability_three_name: "Barrier Field",
    ability_three_description: "Hold Secondary Fire to deploy a frontal energy barrier.",
    ultimate_image: "/images/heroImages/reinhardt/Reinhardt-shatter.png",
    ultimate_name: "Earthshatter",
    ultimate_description: "Knock down all enemies in front of you.",
    healing_type: "N/A",
    barrier: true,
    barrier_health: 1600
)
#WINSTON
Character.create(
    name: "Winston", 
    role: "Tank", 
    hero_card: '/images/icons/Icon-Winston.png', 
    role_card: '/images/icons/Icon-Tank.png',
    name_two: "Winston",
    age: 29,
    occupation: "Scientist",
    base_of_operation: "Watchpoint: Gibraltar",
    affiliation: "Overwatch",
    hero_story: "A super-intelligent, genetically engineered gorilla, Winston is a brilliant scientist and a champion for humanity's potential.
    The Horizon Lunar Colony was established as a first step for humanity's renewed exploration of space. Among its residents was a group of genetically enhanced gorillas that were intended to test the effects of prolonged habitation in space.
    One gorilla displayed such rapid brain development from the gene therapy that he was taken under the wing of Dr. Harold Winston, who taught him science and inspired him with tales of human ingenuity. The young gorilla passed his days assisting with the scientists' experiments, watching the distant blue world outside his habitat window, dreaming of the endless possibilities that awaited him there.
    But his life was thrown into chaos when the other gorillas led an uprising, killed the mission scientists, and claimed the colony for their own. Taking on the name of his beloved human caretaker, Winston built a makeshift rocket and escaped to Earth. There he found a new home with Overwatch, an organization that represented everything he had come to admire about humanity. Winston was finally able to live up to the heroic ideal that had been instilled in him.
    Now with the fall of Overwatch, Winston has gone into seclusion, once again cut off from the world he believes in, but longing for the days of heroism to return.",
    hero_image_one: "/images/heroImages/winston/Winston-page-one.png",
    hero_image_two: "/images/heroImages/winston/Winston-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Winston wields impressive inventions—a jump pack, electricity-blasting Tesla Cannon, portable shield projector and more—with literal gorilla strength.",
    hp: 350,
    armor: 150,
    shields: 0,
    total_hp: 500,
    playstyle: "Dive/Beam",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/winston/Winston-gun.png",
    weapon_one_name: "Tesla Cannon",
    weapon_one_description: "Electric frontal-cone weapon.",
    weapon_one_type: "Beam",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/winston/Winston-jump.png",
    ability_one_name: "Jump Pack",
    ability_one_description: "Leap forward into the air. Landing on an enemy damages them.",
    ability_two_image: "/images/heroImages/winston/Winston-barrier.png",
    ability_two_name: "Barrier Projector",
    ability_two_description: "Deploy a protective energy dome.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/winston/Winston-primal.png",
    ultimate_name: "Primal Rage",
    ultimate_description: "Gain immense health, but you can only leap and punch enemies.",
    healing_type: "N/A",
    barrier: true,
    barrier_health: 700
)
#ZARYA
Character.create(
    name: "Zarya", 
    role: "Tank", 
    hero_card: '/images/icons/Icon-Zarya.png', 
    role_card: '/images/icons/Icon-Tank.png',
    name_two: "	Aleksandra Zaryanova (Александра Зарянова)",
    age: 28,
    occupation: "Soldier",
    base_of_operation: "Krasnoyarsk Front, Russia",
    affiliation: "	Russian Defense Forces",
    hero_story: "Aleksandra Zaryanova is one of the world's strongest women, a celebrated athlete who sacrificed personal glory to protect her family, friends, and country in a time of war.
    Aleksandra was born in a remote Siberian village that was on the front lines of the Omnic Crisis, which began some thirty years ago. Although Russian forces defeated the robots and shut down their omnium, the region was devastated by the conflict. Only a child at the time, Aleksandra was surrounded by the post-war destruction, and as she grew older, she swore that she would gain the strength to help her people recover.
    Focusing on weightlifting and bodybuilding, Aleksandra was identified by the national athletics program as a potential star. She trained extensively, moving up the ranks while representing her country, and was expected to shatter longstanding records in the upcoming world championships.
    But on the eve of the tournament, an attack came from the long-dormant Siberian omnium, and her village was thrust into war once again. Aleksandra immediately withdrew from the competition and rushed home to enlist in the local defense forces, sacrificing the life of fame and fortune she might have had.
    Now she serves—a symbol to some, a stalwart fellow soldier to others. But for Aleksandra, it is a chance to use her great strength to protect the ones she loves.",
    hero_image_one: "/images/heroImages/zarya/Zarya-page-one.png",
    hero_image_two: "/images/heroImages/zarya/Zarya-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Deploying powerful personal barriers that convert incoming damage into energy for her massive Particle Cannon, Zarya is an invaluable asset on the front lines of any battle.",
    hp: 200,
    armor: 0,
    shields: 200,
    total_hp: 400,
    playstyle: "Off Tank/ Crowd Control",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/zarya/Zarya-gun.png",
    weapon_one_name: "Particle Cannon",
    weapon_one_description: "Short-range linear beam weapon.",
    weapon_one_type: "Beam",
    weapon_two_image: "/images/heroImages/zarya/Zarya-gun.png",
    weapon_two_name: "Particle Cannon",
    weapon_two_description: "Energy grenade launcher.",
    weapon_two_type: "Projectile",
    passive_image: "/images/heroImages/zarya/Zarya-passive.png",
    passive_name: "Energy",
    passive_description: "Damage blocked by barriers increases Particle Cannon damage.",
    ability_one_image: "/images/heroImages/zarya/Zarya-self.png",
    ability_one_name: "Particle Barrier",
    ability_one_description: "Create a damage barrier around you.",
    ability_two_image: "/images/heroImages/zarya/Zarya-friendly.png",
    ability_two_name: "Projected Barrier",
    ability_two_description: "Create a damage barrier around an ally.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/zarya/Zarya-grav.png",
    ultimate_name: "Graviton Surge",
    ultimate_description: "Launch a gravity well that pulls enemies to it.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)
#WRECKING BALL
Character.create(
    name: "Wrecking Ball", 
    role: "Tank", 
    hero_card: '/images/icons/Icon-Wrecking_Ball.png', 
    role_card: '/images/icons/Icon-Tank.png', 
    name_two: "Hammond",
    age: 14,
    occupation: "Mech Pilot, Mechanic",
    base_of_operation: "Horizon Lunar Colony (formerly), Junkertown (formerly)",
    affiliation: "	Lucheng Interstellar (formerly)",
    hero_story: "In one of the many experiments carried out at Horizon Lunar Colony, animals were given genetic therapy to assess their adaptation to extended periods of habitation on the moon. As an unexpected side effect, several of them exhibited exceptional growth in physical size and brain function. While most of the test subjects were gorillas or other primates, there were some exceptions, including a hamster named Hammond.
    Like the others, Hammond's intelligence grew, and he became more curious about the world around him. Much to the puzzlement and amusement of the scientists, Hammond would frequently escape into different parts of the moon base. Though they'd always find him and return him to his cell, they never figured out the true purpose behind his nightly escapades. What they didn't know was that Hammond was busy teaching himself the skills of a mechanic, which would soon come in handy.
    The colony was eventually thrown into chaos when some of the gorillas rose up against the human scientists and took control. Not all of the animals participated, however, and one of the gorillas, Winston, was making a plan to escape to earth. Hammond sensed his opportunity. He built a makeshift capsule and secretly hitched it to Winston's craft as the gorilla blasted off. As the two entered earth's atmosphere, Hammond broke off and landed in a different location: the wasteland of the Australian Outback.
    Hammond modified his escape pod to enter the lucrative mech battle arena of the Scrapyard. Working his way up the ranks, 'Wrecking Ball' went from contender to champion, though the pilot's identity remained a mystery to all. Gathering his winnings, Hammond was able to upgrade his mech enough to survive the dangerous trek out of the Junker-controlled Outback.
    Now free to travel and do as he pleases, Hammond is exploring the world and finding new adventures along the way.",
    hero_image_one: "/images/heroImages/wreckingBall/Ball-page-one.png",
    hero_image_two: "/images/heroImages/wreckingBall/Ball-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Wrecking Ball rolls across the battlefield, using his arsenal of weapons and his mech’s powerful body to crush his enemies.",
    hp: 500,
    armor: 100,
    shields: 0,
    total_hp: 600,
    playstyle: "Dive/Flanker/Crowd Control",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/wreckingBall/Ball-gun.png",
    weapon_one_name: "Quad Cannons",
    weapon_one_description: "Automatic assault weapons.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "N/A",
    weapon_two_name: "N/A",
    weapon_two_description: "N/A",
    weapon_two_type: "N/A",
    passive_image: "/images/heroImages/wreckingBall/Ball-passive.png",
    passive_name: "Roll",
    passive_description: "Transform into a ball and increase maximum movement speed.",
    ability_one_image: "/images/heroImages/wreckingBall/Ball-grapple.png",
    ability_one_name: "Grappling Claw",
    ability_one_description: "Launch a grappling claw to rapidly swing around the area. Enables high speed collisions to damage and knockback enemies.",
    ability_two_image: "/images/heroImages/wreckingBall/Ball-pile.png",
    ability_two_name: "Piledriver",
    ability_two_description: "Slam into the ground below to damage and launch enemies upward.",
    ability_three_image: "/images/heroImages/wreckingBall/Ball-shield.png",
    ability_three_name: "Adaptive Shield",
    ability_three_description: "Create temporary personal shields. Amount increases with more enemies nearby.",
    ultimate_image: "/images/heroImages/wreckingBall/Ball-mine.png",
    ultimate_name: "Minefield",
    ultimate_description: "Deploy a massive field of proximity mines.",
    healing_type: "N/A",
    barrier: false,
    barrier_health: 0
)


###Supports###
puts "Creating Supports..."
puts 
#BAPTISTE
Character.create(
    name: "Baptiste", 
    role: "Support", 
    hero_card: '/images/icons/Icon-Baptiste.png', 
    role_card: '/images/icons/Icon-Support.png',
    name_two: "Jean-Baptiste Augustin",
    age: 36,
    occupation: "Combat Medic",
    base_of_operation: "	Tortuga, Haiti (formerly)",
    affiliation: "Talon (formerly)",
    hero_story: "An elite combat medic and ex-Talon operative, Baptiste now uses his skills to help those whose lives have been impacted by war.
    Jean-Baptiste Augustin was one of the 30 million children orphaned by the Omnic Crisis. With limited opportunities and resources, he enlisted in the military. The Caribbean Coalition, a pan-island force formed in response to the Crisis, became his new home. Guided by his innate desire to help people, Baptiste chose the path of a combat medic and served in an elite branch of the Caribbean Coalition’s special ops.
    After his service was complete, Baptiste struggled to find a demand for his unique skills. He turned to one of the few opportunities open to him: joining the Talon mercenary group, one of the many organizations that were poised to profit off the chaos in the war's aftermath.
    For the first time ever, Baptiste had a taste of the good life. Talon's missions were easy and paid well, and he put aside some of his earnings to set up a clinic in his hometown. But slowly, his unit's orders escalated in brutality, expanding into assassinations and operations with civilian casualties. Confronted by his team's actions, Baptiste realized he was perpetuating a cycle of violence like the one that had destroyed his own community. He abandoned Talon, disgusted with what he had done and determined to forge a new path for himself.
    But Talon would not let him go. Baptiste knew too much, and they sent operatives after him to silence him. Agent after agent came for him, including Baptiste's former comrades. To stay under the radar, Baptiste drifted from place to place, aiding in humanitarian efforts around the globe. The few Talon members who managed to track him down were never seen again.
    Now, Baptiste works toward a better world, healing where he can and fighting when he must. He knows that he cannot undo his past—but that making a difference now is what matters.",
    hero_image_one: "/images/heroImages/baptiste/Bap-page-one.png",
    hero_image_two: "/images/heroImages/baptiste/Bap-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Baptiste wields an assortment of experimental devices and weaponry to keep allies alive and eliminate threats under fierce conditions. A battle-hardened combat medic, he is just as capable of saving lives as he is taking out the enemy.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Bunker/Main Healer",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/baptiste/Bap-gun.png",
    weapon_one_name: "Biotic Launcher",
    weapon_one_description: "Three-round burst gun.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "/images/heroImages/baptiste/Bap-gun.png",
    weapon_two_name: "Biotic Launcher",
    weapon_two_description: "Lob a healing projectile that heals all allies near the impact.",
    weapon_two_type: "Projectile",
    passive_image: "/images/heroImages/baptiste/Bap-passive.png",
    passive_name: "Exo Boots",
    passive_description: "Hold crouch to jump higher.",
    ability_one_image: "/images/heroImages/baptiste/Bap-burst.png",
    ability_one_name: "Regenerative Burst",
    ability_one_description: "Activate to heal yourself and nearby allies over time",
    ability_two_image: "/images/heroImages/baptiste/Bap-imo.png",
    ability_two_name: "Immortality Field",
    ability_two_description: "Toss a device that prevents allies from dying. The device can be destroyed.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/baptiste/Bap-matrix.png",
    ultimate_name: "Amplification Matrix",
    ultimate_description: "Project a matrix that doubles the damage and healing effects of allied projectiles.",
    healing_type: "Burst, Area of Effect (AOE)",
    barrier: false,
    barrier_health: 0
)
#ANA
Character.create(
    name: "Ana", 
    role: "Support", 
    hero_card: '/images/icons/Icon-Ana.png', 
    role_card: '/images/icons/Icon-Support.png',
    name_two: "Ana Amari (أنا عماري)",
    age: 60,
    occupation: "Sharpshooter (formerly), Overwatch Second-In-Command (formerly)",
    base_of_operation: "Cairo, Egypt",
    affiliation: "Overwatch (formerly)",
    hero_story: "One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for.
    As the Omnic Crisis inflicted a heavy toll on Egypt, the country's depleted and undermanned security forces relied on elite snipers for support. Among them was Ana Amari, who was widely considered to be the world's best. Her superior marksmanship, decision-making, and instincts made her a natural selection to join the Overwatch strike team that would end the war.
    Following the success of Overwatch's original mission, Ana served for many years as Strike Commander Morrison's second-in-command. Despite her responsibilities in leading the organization, Ana refused to step away from combat operations. She remained on active duty well into her fifties, until she was believed to have been killed during a hostage rescue mission by the Talon operative known as Widowmaker.
    In truth, Ana survived that encounter, despite being gravely wounded and losing her right eye. During her recovery, she wrestled with the weight of a life spent in combat, and she chose to stay out of the world's growing conflicts. However, as time passed, she realized she could not sit on the sidelines while people threatened her city and the innocents around her.
    Now, Ana has rejoined the fight to protect her country from the forces that would destabilize it, and most importantly, to keep her family and her closest allies safe.",
    hero_image_one: "/images/heroImages/ana/Ana-page-one.png",
    hero_image_two: "/images/heroImages/ana/Ana-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Ana’s versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/ana/Ana-gun.png",
    weapon_one_name: "Biotic Rifle",
    weapon_one_description: "Long-range rifle that heals allies and damages enemies.",
    weapon_one_type: "Hitscan",
    weapon_two_image: "/images/heroImages/ana/Ana-gun.png",
    weapon_two_name: "Zoom",
    weapon_two_description: "Hold to zoom in.",
    weapon_two_type: "Hitscan",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/ana/Ana-sleep.png",
    ability_one_name: "Sleep Dart",
    ability_one_description: "Fires a dart that puts an enemy to sleep.",
    ability_two_image: "/images/heroImages/ana/Ana-grenade.png",
    ability_two_name: "Biotic Grenade",
    ability_two_description: "Throws a grenade that heals and increases healing on allies, while damaging and preventing healing on enemies.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/ana/Ana-nano.png",
    ultimate_name: "Nano Boost",
    ultimate_description: "Increases an ally's damage, while reducing damage taken.",
    healing_type: "Single Target/Healing Over Time",
    barrier: false,
    barrier_health: 0
)
#MERCY
Character.create(
    name: "Mercy", 
    role: "Support", 
    hero_card: '/images/icons/Icon-Mercy.png', 
    role_card: '/images/icons/Icon-Support.png',
    name_two: "Angela Ziegler",
    age: 37,
    occupation: "Field Medic, First Responder",
    base_of_operation: "Watchpoint: Gibraltar",
    affiliation: "Overwatch",
    hero_story: "A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace.
    Ziegler rose to become the head of surgery at a prominent Swiss hospital before pioneering a breakthrough in the field of applied nanobiology that radically improved the treatment of life-threatening illnesses and injuries. It was this expertise that attracted the attention of Overwatch.
    Because her parents had been taken by war, Ziegler was opposed to the organization's militaristic approach to keeping global peace. Ultimately, she recognized that Overwatch offered her the opportunity to save lives on a much larger scale. As Overwatch's head of medical research, Angela sought to leverage her work for healing in frontline crises. The result was the Valkyrie swift-response suit, which Ziegler herself piloted on many Overwatch missions.
    Despite her contributions to Overwatch, she was often at odds with her superiors and the organization's overarching aims. When Overwatch dissolved, Ziegler dedicated herself to helping those affected by war.
    Though she spends most of her time caring for the broken and dispossessed in crisis areas around the world, Dr. Ziegler can be counted on to don her Valkyrie suit whenever innocents are imperiled.",
    hero_image_one: "/images/heroImages/mercy/Mercy-page-one.png",
    hero_image_two: "/images/heroImages/mercy/Mercy-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Main Healer/Flying",
    hero_difficulty: 1,
    weapon_one_image: "/images/heroImages/mercy/Mercy-gun.png",
    weapon_one_name: "Caduceus Staff",
    weapon_one_description: "Hold To Heal an Ally/ Hold to Increase an Ally's Damage Inflicted",
    weapon_one_type: "Beam",
    weapon_two_image: "/images/heroImages/mercy/Mercy-gun-two.png",
    weapon_two_name: "Caduceus Blaster",
    weapon_two_description: "Automatic weapon",
    weapon_two_type: "Projectile",
    passive_image: "/images/heroImages/mercy/Mercy-passive.png",
    passive_name: "Regeneration",
    passive_description: "Automatically heal over time",
    ability_one_image: "/images/heroImages/mercy/Mercy-guardian.png",
    ability_one_name: "Guardian Angel",
    ability_one_description: "Fly towards an ally",
    ability_two_image: "/images/heroImages/mercy/Mercy-rez.png",
    ability_two_name: "Resurrect",
    ability_two_description: "Revive a dead teammate",
    ability_three_image: "/images/heroImages/mercy/Mercy-descent.png",
    ability_three_name: "Angelic Descent",
    ability_three_description: "Fall very slowly",
    ultimate_image: "/images/heroImages/mercy/Mercy-valkyrie.png",
    ultimate_name: "Valkyrie",
    ultimate_description: "Gain the ability to fly. Abilities are enhanced.",
    healing_type: "Single Target",
    barrier: false,
    barrier_health: 0
)
#ZENYATTA
Character.create(
    name: "Zenyatta", 
    role: "Support", 
    hero_card: '/images/icons/Icon-Zenyatta.png', 
    role_card: '/images/icons/Icon-Support.png',
    name_two: "Tekhartha Zenyatta",
    age: 20,
    occupation: "Wandering Guru",
    base_of_operation: "Shambali Monastery, Nepal (formerly)",
    affiliation: "Shambali (formerly)",
    hero_story: "Zenyatta is an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again.
    Years ago, following the Omnic Crisis, a group of outcast omnic robots experienced what they described as a spiritual awakening. They abandoned their preprogrammed lives to establish a communal monastery deep in the Himalayas. After many years of meditation on the nature of existence, they came to the belief that they were more than artificial intelligences and that, like humans, they possessed the essence of a soul.
    Recognizing the spiritual equality they held with humans, the monks, led by the enigmatic robot known as Tekhartha Mondatta, sought to heal the wounds caused by the Omnic Crisis a generation earlier and bring humans and robots back into societal harmony. Their message was embraced by millions around the world, and they became global celebrities.
    But one monk, Zenyatta, disagreed with this new direction. He believed that the way to repair the problems between humans and omnics was not through dogmatic teaching but through interpersonal connection and engagement.
    Ultimately, Zenyatta followed his own path. He chose to leave the monastery and wander the world, helping those he meets to overcome their personal struggles and find inner peace. But, when necessary, he will fight to protect the innocent, be they omnic or human.",
    hero_image_one: "/images/heroImages/zenyatta/Zen-page-one.png",
    hero_image_two: "/images/heroImages/zenyatta/Zen-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Zenyatta calls upon orbs of harmony and discord to heal his teammates and weaken his opponents, all while pursuing a transcendent state of immunity to damage.",
    hp: 50,
    armor: 0,
    shields: 150,
    total_hp: 200,
    playstyle: "Utility Low Healing/High Damage",
    hero_difficulty: 3,
    weapon_one_image: "/images/heroImages/zenyatta/Zen-gun.png",
    weapon_one_name: "Orb of Destruction",
    weapon_one_description: "Energy projectile weapon.",
    weapon_one_type: "Projectile",
    weapon_two_image: "/images/heroImages/zenyatta/Zen-gun.png",
    weapon_two_name: "Orb of Destruction",
    weapon_two_description: "Charge to release more projectiles.",
    weapon_two_type: "Projectile",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/zenyatta/Zen-discord.png",
    ability_one_name: "Orb of Discord",
    ability_one_description: "Launch this orb at an enemy to increase the damage they take",
    ability_two_image: "/images/heroImages/zenyatta/Zen-heal.png",
    ability_two_name: "Orb of Harmony",
    ability_two_description: "Launch this orb at an ally to heal them.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/zenyatta/Zen-trans.png",
    ultimate_name: "Transcendence",
    ultimate_description: "Become invulnerable, move faster, and heal nearby allies.",
    healing_type: "Single Target",
    barrier: false,
    barrier_health: 0
)
#BRIGITTE
Character.create(
    name: "Brigitte", 
    role: "Support",
    hero_card: '/images/icons/Icon-Brigitte.png', 
    role_card: '/images/icons/Icon-Support.png',
    name_two: "Brigitte Lindholm",
    age: 23,
    occupation: "	Mechanical engineer",
    base_of_operation: "Gothenburg, Sweden (formerly)",
    affiliation: "	Overwatch",
    hero_story: "No longer sitting on the sidelines, Brigitte Lindholm has taken up arms to defend those in need of protection.
    The youngest daughter of weapons designer, Torbjörn Lindholm, Brigitte was the first of his children to show an interest in mechanical engineering. Brigitte spent much of her spare time in her father's workshop, learning the trade and honing her skills. Her aptitude for engineering mirrored that of her father's, but Brigitte's primary interest was in armor fabrication and defensive systems, unlike Torbjörn, who was world renowned (and perhaps infamous) for the weapons he created.
    Everyone expected that Brigitte would continue her apprenticeship and follow in her father's footsteps. But her plans changed due to influence of another prominent figure in her life, her father's close friend and fellow Overwatch agent, Reinhardt Wilhelm. A close friend of the family and Brigitte's godfather, Reinhardt told Brigitte tales of heroes and chivalry as she grew up. After his retirement and Overwatch's fall, Reinhardt declared that he would become a knight-errant on a quest to bring justice. Before he left on his adventures, Brigitte surprised him by asking to join him as his squire. Reinhardt accepted.
    As a squire, Brigitte had many responsibilities, the most important of which was the upkeep of Reinhardt's Crusader armor (a design she was familiar with as the current version was designed by her father). But more and more, she found her main job was taking care of Reinhardt himself, trying to protect him from his overenthusiasm even as his body was breaking down from years of combat.
    Eventually, she realized that serving only as a mechanic wasn't enough, and that the best way she could aid Reinhardt was to become a warrior in her own right. While Reinhardt trained her in combat, Brigitte began to build her own suit of armor in secret.
    Now Brigitte fights at Reinhardt's side to protect him, and any others in need as knight and squire journey to make the world a better place, one battle at a time.",
    hero_image_one: "/images/heroImages/brigitte/Brig-page-one.png",
    hero_image_two: "/images/heroImages/brigitte/Brig-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Brigitte specializes in armor. She can throw Repair Packs to heal teammates, or automatically heal nearby allies when she damages foes with her Flail. Her Flail is capable of a wide swing to strike multiple targets, or a Whip Shot that stuns an enemy at range. When entering the fray, Barrier Shield provides personal defense while she attacks enemies with Shield Bash. Brigitte’s ultimate ability, Rally, gives her a substantial short-term boost of speed and provides long-lasting armor to all her nearby allies.",
    hp: 150,
    armor: 50,
    shields: 0,
    total_hp: 200,
    playstyle: "Brawl/High Damage",
    hero_difficulty: 1,
    weapon_one_image: "/images/heroImages/brigitte/Brig-gun.png",
    weapon_one_name: "Rocket Flail",
    weapon_one_description: "Melee weapon with extended range.",
    weapon_one_type: "Melee",
    weapon_two_image: "/images/heroImages/brigitte/Brig-gun-two.png",
    weapon_two_name: "Barrier Shield",
    weapon_two_description: "Hold Secondary Fire to deploy a frontal energy barrier.",
    weapon_two_type: "Shield",
    passive_image: "/images/heroImages/brigitte/Brig-passive.png",
    passive_name: "Inspire",
    passive_description: "Striking enemies with your flail heals nearby allies.",
    ability_one_image: "/images/heroImages/brigitte/Brig-repair.png",
    ability_one_name: "Repair Pack",
    ability_one_description: "Heals an ally for a short duration.",
    ability_two_image: "/images/heroImages/brigitte/Brig-whip.png",
    ability_two_name: "Whip Shot",
    ability_two_description: "Launch your flail forward to knock an enemy away from you.",
    ability_three_image: "/images/heroImages/brigitte/Brig-bash.png",
    ability_three_name: "Shield Bash",
    ability_three_description: "Available when Barrier Shield is deployed. Dash forward to knock back and stun an enemy.",
    ultimate_image: "/images/heroImages/brigitte/Brig-rally.png",
    ultimate_name: "Rally",
    ultimate_description: "Move faster and provide armor to nearby allies.",
    healing_type: "Single Target/Area of Effect (AOE)",
    barrier: true,
    barrier_health: 250
)
#MOIRA
Character.create(
    name: "Moira", 
    role: "Support", 
    hero_card: '/images/icons/Icon-Moira.png', 
    role_card: '/images/icons/Icon-Support.png',
    name_two: "Moira O'Deorain",
    age: 48,
    occupation: "Geneticist",
    base_of_operation: "Oasis, Iraq",
    affiliation: "Talon (council member)",
    hero_story: "Equal parts brilliant and controversial, scientist Moira O'Deorain is on the cutting edge of genetic engineering, searching for a way to rewrite the fundamental building blocks of life.
    Over a decade ago, O'Deorain made waves when she published a controversial paper detailing a methodology for creating custom genetic programs that could alter DNA at a cellular level. It seemed like a promising step toward overcoming diseases and disorders and maximizing human potential. 
    Dissent among her peers soon followed. Many considered her work to be dangerous because of its perceived ethical shortfalls, and O'Deorain was even accused of having the same unchecked desire for scientific advancement that some believed had caused the Omnic Crisis. In addition, other geneticists were unable to reproduce the results of Moira's research, which further called her discoveries into question. Instead of kickstarting her career, her paper seriously damaged her reputation.
    She received a lifeline in an offer from an unlikely source: Overwatch's covert ops division, Blackwatch. She continued her work in the shadows while developing new weapons and technologies for the organization. Her employment was a closely kept secret, until it was uncovered during inquiries following the Venice incident. Many high-ranking Overwatch officials disavowed all knowledge of her affiliation with them.
    After Overwatch was disbanded, O'Deorain was forced to turn to unconventional sources of funding. This time, she was invited to join the scientific collective that had founded the city of Oasis. Yet some have whispered that the shadowy Talon organization had already been supporting her for years, aiding her experiments in exchange for utilizing the results for their own purposes.
    Though O'Deorain will go to any lengths to make scientific breakthroughs, her work is still unknown to most of the world. But now that she has been freed from all constraints, it is only a matter of time before everything changes.",
    hero_image_one: "/images/heroImages/moira/Moira-page-one.png",
    hero_image_two: "/images/heroImages/moira/Moira-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "Moira’s biotic abilities enable her to contribute healing or damage in any crisis. While Biotic Grasp gives Moira short-range options, her Biotic Orbs contribute longer-range, hands-off damage and healing; she can also Fade to escape groups or remain close to allies in need of support. Once she’s charged Coalescence, Moira can save multiple allies from elimination at once or finish off weakened enemies.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Main Healer",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/moira/Moira-gun.png",
    weapon_one_name: "Biotic Grasp",
    weapon_one_description: "Hold to heal all allies in front of you. Consumes biotic energy.",
    weapon_one_type: "Beam",
    weapon_two_image: "/images/heroImages/moira/Moira-gun.png",
    weapon_two_name: "Biotic Grasp - Alt Fire",
    weapon_two_description: "Long range beam weapon. Damage dealt heals you and replenishes your biotic energy.",
    weapon_two_type: "Beam",
    passive_image: "N/A",
    passive_name: "N/A",
    passive_description: "N/A",
    ability_one_image: "/images/heroImages/moira/Moira-orb.png",
    ability_one_name: "Biotic Orb",
    ability_one_description: "Launch a bouncing sphere that either heals nearby allies or damages nearby enemies.",
    ability_two_image: "/images/heroImages/moira/Moira-fade.png",
    ability_two_name: "Fade",
    ability_two_description: "Disappear, move faster, and become invulnerable, but you cannot shoot.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/moira/Moira-coal.png",
    ultimate_name: "Coalescence",
    ultimate_description: "Fire a beam that heals allies and damages enemies.",
    healing_type: "Burst/Area of Effect (AOE)",
    barrier: false,
    barrier_health: 0
)
#LUCIO
Character.create(
    name: "Lucio", 
    role: "Support", 
    hero_card: '/images/icons/Icon-Lucio.png', 
    role_card: '/images/icons/Icon-Support.png',
    name_two: "	Lúcio Correia dos Santos",
    age: 26,
    occupation: "DJ, Freedom Figher",
    base_of_operation: "Rio de Janeiro, Brazil",
    affiliation: "Overwatch",
    hero_story: "Lúcio is an international celebrity who inspires social change through his music and actions.
    Lúcio Correia dos Santos grew up in Rio de Janeiro, in a poor and crowded favela that was hit hard by the financial upheaval following the Omnic Crisis. As Brazil began the long process of recovery, he wanted to find a way to lift the spirits of those around him. He found his answer in music and its power to bring people together and even help them forget their troubles, if only for a short time. He performed on street corners, in block parties, and as he got older, at a string of legendary underground shows.
    But Lúcio's close-knit community was thrown into chaos when the multinational Vishkar Corporation secured a contract to redevelop large tracts of the city. Lúcio and his neighbors had been told that the development would improve their lives. However, that promise never became a reality. Vishkar imposed controls on the residents in the name of building a more orderly society: enforcing curfews, cracking down on what the company perceived as lawless behavior, and exploiting the populace as a cheap labor force.
    Lúcio wouldn't stand for it. He stole Vishkar sonic technology that had been used to suppress the people, and he converted it into a tool to rally them to action. In a popular uprising, they drove Vishkar out of their neighborhoods. Lúcio's leadership made him a star overnight and a symbol for positive social change. His music skyrocketed in popularity. Whereas he had once performed locally, he was now filling arenas across the world.
    With his newfound fame, Lúcio realizes that he has an opportunity to make a difference and change the world for the better.",
    hero_image_one: "/images/heroImages/lucio/Lucio-page-one.png",
    hero_image_two: "/images/heroImages/lucio/Lucio-page-two.png",
    hero_gameplay_video: "Placeholder",
    hero_gameplay_description: "On the battlefield, Lúcio’s cutting-edge Sonic Amplifier buffets enemies with projectiles and knocks foes back with blasts of sound. His songs can both heal his team or boost their movement speed, and he can switch between tracks on the fly.",
    hp: 200,
    armor: 0,
    shields: 0,
    total_hp: 200,
    playstyle: "Flanking/Speed",
    hero_difficulty: 2,
    weapon_one_image: "/images/heroImages/lucio/Lucio-gun.png",
    weapon_one_name: "Sonic Amplifier",
    weapon_one_description: "Sonic projectile launcher.",
    weapon_one_type: "Projectile",
    weapon_two_image: "/images/heroImages/lucio/Lucio-gun-two.png",
    weapon_two_name: "Soundwave",
    weapon_two_description: "Create a short-range blast wave to knock enemies away from you.",
    weapon_two_type: "Sound Wave",
    passive_image: "/images/heroImages/lucio/Lucio-passive.png",
    passive_name: "Wall Ride",
    passive_description: "Jump onto a wall to ride along it.",
    ability_one_image: "/images/heroImages/lucio/Lucio-fade.png",
    ability_one_name: "Crossfade",
    ability_one_description: "Switches between two songs: Healing Boost heals nearby allies, and Speed Boost makes nearby allies move faster.",
    ability_two_image: "/images/heroImages/lucio/Lucio-amp.png",
    ability_two_name: "Amp It Up",
    ability_two_description: "Increase the effectiveness of your current song.",
    ability_three_image: "N/A",
    ability_three_name: "N/A",
    ability_three_description: "N/A",
    ultimate_image: "/images/heroImages/lucio/Lucio-beat.png",
    ultimate_name: "Sound Barrier",
    ultimate_description: "Create temporary shields for nearby allies.",
    healing_type: "Area of Effect (AOE)",
    barrier: false,
    barrier_health: 0
)
puts "Completed Hero Seeding!"
puts 
### MAPS 
puts "Creating Map Seeding..."
puts
# #CONTROL
#BUSAN
Map.create(
    name: "Busan", 
    country: "South Korea", 
    country_flag: "/images/maps/control/busan/south-korea.png",
    map_type: "Control",
    map_type_icon: "/images/maps/mapIcons/control-icon.png",
    card: "/images/maps/control/busan/Busan-card.jpg",
    image_one: "https://cdn.vox-cdn.com/thumbor/Vchz_V5pqofz3VWCBrP36pmSmfA=/0x0:1024x576/1200x800/filters:focal(431x207:593x369)/cdn.vox-cdn.com/uploads/chorus_image/image/60978423/OVR_BusanMap_AnnouncementMap_XA_012.0.jpg",
    image_two: "https://static.invenglobal.com/upload/image/2018/08/22/i1534927533076824.jpeg",
    image_three: "https://www.gamespot.com/a/uploads/original/1578/15787979/3437047-3107387298-34285.png",
    top_down: "/images/maps/control/busan/Busan-top-down.jpg"
)
#ILIOS
Map.create(
    name: "Ilios", 
    country: "Greece", 
    country_flag: "/images/maps/control/ilios/greece.png",
    map_type: "Control",
    map_type_icon: "/images/maps/mapIcons/control-icon.png",
    card: "/images/maps/control/ilios/Ilios-card.png",
    image_one: "http://vignette1.wikia.nocookie.net/overwatch/images/d/d2/Ilios_screenshot_19.png/revision/latest?cb=20160712054824",
    image_two: "https://cdn1.dotesports.com/wp-content/uploads/2022/01/04130951/Ilios_screenshot_9-768x432.png",
    image_three: "https://staticr1.blastingcdn.com/media/photogallery/2017/7/26/660x290/b_1200x630/blizzard-is-set-to-introduce-some-changes-to-one-of-the-maps-in-overwatch-via-youtubeplayoverwatch_1468637.jpg",
    top_down: "/images/maps/control/ilios/Ilios-top-down.jpg"
)
#LIJIANG TOWER
Map.create(
    name: "Lijiang Tower", 
    country: "Greece", 
    country_flag: "/images/maps/control/lijiang/china.png",
    map_type: "Control",
    map_type_icon: "/images/maps/mapIcons/control-icon.png",
    card: "/images/maps/control/lijiang/Lijiang-card.jpg",
    image_one: "http://media.esportsedition.com/wp-content/uploads/2016/03/Lijiang-Tower-1-1.jpg",
    image_two: "http://vignette3.wikia.nocookie.net/overwatch/images/3/3c/Lijiang_screenshot_6.jpg/revision/latest?cb=20160521222340",
    image_three: "http://vignette2.wikia.nocookie.net/overwatch/images/6/6a/Lijiang_screenshot_24.jpg/revision/latest?cb=20160521224446",
    top_down: "/images/maps/control/lijiang/Lijiang-top-down.jpg"
)
#NEPAL
Map.create(
    name: "Nepal", 
    country: "Monastery, Nepal", 
    country_flag: "/images/maps/control/nepal/nepal.png",
    map_type: "Control",
    map_type_icon: "/images/maps/mapIcons/control-icon.png",
    card: "/images/maps/control/nepal/Nepal-card.jpg",
    image_one: "http://vignette1.wikia.nocookie.net/overwatch/images/7/78/Nepal_screenshot_3.png/revision/latest?cb=20160711231334",
    image_two: "http://vignette2.wikia.nocookie.net/overwatch/images/6/62/Nepal_screenshot_16.png/revision/latest?cb=20160711233016",
    image_three: "https://s3.us-east-1.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/01/25203038/R3nu8dA.jpg",
    top_down: "/images/maps/control/nepal/Nepal-top-down.jpg"
)
#OASIS
Map.create(
    name: "Oasis", 
    country: "Iraq", 
    country_flag: "/images/maps/control/oasis/iraq.png",
    map_type: "Control",
    map_type_icon: "/images/maps/mapIcons/control-icon.png",
    card: "/images/maps/control/oasis/Oasis-card.jpg",
    image_one: "https://cdna.artstation.com/p/assets/images/images/022/897/156/4k/thiago-klafke-screenshot-19-12-23-14-04-53-000-copy.jpg?1577142455",
    image_two: "https://cdnb.artstation.com/p/assets/images/images/037/383/731/large/philip-klevestav-overwatch-oasis-05.jpg?1620233158&dl=1",
    image_three: "https://www.owfire.com/images/maps/oasis-1.jpg",
    top_down: "/images/maps/control/oasis/Oasis-top-down.jpg"
)
##ASSAULT
#HANAMURA
Map.create(
    name: "Hanamura", 
    country: "Japan", 
    country_flag: "/images/maps/assault/hanamura/japan.png",
    map_type: "Assault",
    map_type_icon: "/images/maps/mapIcons/assault-icon.png",
    card: "/images/maps/assault/hanamura/Hanamura-card.jpg",
    image_one: "https://lh3.googleusercontent.com/-QlfCEHdLSlo/VxIQj3B2k6I/AAAAAAAAdjQ/dv964Xjx7Qwnv2gmPXBwHcS82ybPbDZFgCCo/s740-Ic42/Hanamura1.jpg",
    image_two: "https://i.pinimg.com/originals/9c/df/a9/9cdfa9e33e72f0911371f16f2d2ab39a.jpg",
    image_three: "https://thumbor.forbes.com/thumbor/711x442/https://specials-images.forbesimg.com/imageserve/5f225bef04bc8bd13b1f8127/Overwatch-map-Hanamura/960x0.jpg?fit=scale",
    top_down: "/images/maps/assault/hanamura/Hanamura-top-down.jpg"
)
#HORIZON LUNAR COLONY
Map.create(
    name: "Horizon Lunar Colony", 
    country: "Lunar Ops Facility, Moon", 
    country_flag: "/images/maps/assault/horizon/lunar.png",
    map_type: "Assault",
    map_type_icon: "/images/maps/mapIcons/assault-icon.png",
    card: "/images/maps/assault/horizon/Lunar-card.jpeg",
    image_one: "https://www.gamespot.com/a/uploads/screen_kubrick/123/1239113/3240505-hor.jpg",
    image_two: "https://www.pcgamesn.com/wp-content/uploads/legacy/overwatch_horizon_lunar_colony_rework-1200x675.jpg",
    image_three: "https://cdn.vox-cdn.com/thumbor/Pl9DvwnxVGE0bzFUouMgf2btC_8=/0x0:1280x720/1400x1400/filters:focal(538x258:742x462):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55237131/overwatch_horizon_lunary_colony.0.jpeg",
    top_down: "/images/maps/assault/horizon/Lunar-top-down.jpg"
)
#PARIS
Map.create(
    name: "Paris", 
    country: "France", 
    country_flag: "/images/maps/assault/paris/france.png",
    map_type: "Assault",
    map_type_icon: "/images/maps/mapIcons/assault-icon.png",
    card: "/images/maps/assault/paris/Paris-card.jpg",
    image_one: "https://static.invenglobal.com/upload/image/2021/03/24/i1616616778918137.jpeg",
    image_two: "https://static.invenglobal.com/upload/image/2021/03/24/i1616617366261341.png",
    image_three: "https://i.pinimg.com/originals/f0/ac/5d/f0ac5dc689c2721b656f9d535572b700.jpg",
    top_down: "/images/maps/assault/paris/Paris-top-down.jpg"
)
#TEMPLE OF ANUBIS
Map.create(
    name: "Temple Of Anubis", 
    country: "Egypt", 
    country_flag: "/images/maps/assault/anubis/egypt.png",
    map_type: "Assault",
    map_type_icon: "/images/maps/mapIcons/assault-icon.png",
    card: "/images/maps/assault/anubis/Anubis-card.png",
    image_one: "https://blog.gamersensei.com/wp-content/uploads/2017/07/Header1080-1.png",
    image_two: "https://cdn1.dotesports.com/wp-content/uploads/2021/11/23111303/Temple-of-Anubis-768x432.jpg",
    image_three: "https://cdnb.artstation.com/p/assets/images/images/022/415/203/4k/helder-pinto-hp-temple-anubis-01.jpg?1575362565",
    top_down: "/images/maps/assault/anubis/Anubis-top-down.jpg"
)
#VOLSKAYA INDUSTRIES
Map.create(
    name: "Volskaya Industries", 
    country: "Russia", 
    country_flag: "/images/maps/assault/volskaya/russia.png",
    map_type: "Assault",
    map_type_icon: "/images/maps/mapIcons/assault-icon.png",
    card: "/images/maps/assault/volskaya/Volskaya-card.jpg",
    image_one: "https://cdnb.artstation.com/p/assets/images/images/022/591/013/4k/helder-pinto-5rssa.jpg?1576000687",
    image_two: "https://cdnb.artstation.com/p/assets/images/images/022/591/021/large/helder-pinto-2rssa.jpg?1575999886",
    image_three: "https://cdnb.artstation.com/p/assets/images/images/037/380/417/large/philip-klevestav-overwatch-volskaya-01.jpg?1620227836",
    top_down: "/images/maps/assault/volskaya/Volskaya-top-down.jpg"
)
##ESCORT
#DORADO
Map.create(
    name: "Dorado", 
    country: "Mexico", 
    country_flag: "/images/maps/escort/dorado/mexico.png",
    map_type: "Escort",
    map_type_icon: "/images/maps/mapIcons/escort-icon.png",
    card: "/images/maps/escort/dorado/Dorado-card.jpg",
    image_one: "https://cdnb.artstation.com/p/assets/images/images/022/751/553/4k/helder-pinto-1mexico.jpg?1576906738",
    image_two: "https://i.ytimg.com/vi/PRbeYQpknS4/maxresdefault.jpg",
    image_three: "https://www.owfire.com/images/maps/dorado-4.jpg",
    top_down: "/images/maps/escort/dorado/Dorado-top-down.jpg"
)
#Havana
Map.create(
    name: "Havana", 
    country: "Cuba", 
    country_flag: "/images/maps/escort/havana/cuba.png",
    map_type: "Escort",
    map_type_icon: "/images/maps/mapIcons/escort-icon.png",
    card: "/images/maps/escort/havana/Havana-card.png",
    image_one: "https://www.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/overwatch-havana-map-details-storm-rising.jpg",
    image_two: "https://assets2.rockpapershotgun.com/overwatch-havana.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/overwatch-havana.jpg",
    image_three: "https://cdna.artstation.com/p/assets/images/images/020/053/062/large/simon-fuchs-havana-02.jpg?1566167951",
    top_down: "/images/maps/escort/havana/Havana-top-down.jpg"
)

#Junkertown
Map.create(
    name: "Junkertown", 
    country: "Australia", 
    country_flag: "/images/maps/escort/junkertown/australia.png",
    map_type: "Escort",
    map_type_icon: "/images/maps/mapIcons/escort-icon.png",
    card: "/images/maps/escort/junkertown/Junkertown-card.jpg",
    image_one: "https://cdn.vox-cdn.com/thumbor/M0SMow2OXuHipCKN7djRG9AfcXQ=/0x0:3840x2160/1200x800/filters:focal(1031x1546:1645x2160)/cdn.vox-cdn.com/uploads/chorus_image/image/56756693/OVR_Junkertown_009.0.jpg",
    image_two: "https://www.destructoid.com//ul/462087-Overwatch-New-Map-Junkertown-Trailer-t.jpg",
    image_three: "https://gamingbolt.com/wp-content/uploads/2017/09/Overwatch_Junkertown.jpg",
    top_down: "/images/maps/escort/junkertown/Junkertown-top-down.jpg"
)

#Rialto
Map.create(
    name: "Rialto", 
    country: "Italy", 
    country_flag: "/images/maps/escort/rialto/italy.png",
    map_type: "Escort",
    map_type_icon: "/images/maps/mapIcons/escort-icon.png",
    card: "/images/maps/escort/rialto/Rialto-card.jpg",
    image_one: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/05/02/35587467-c0d4-41ca-bda9-94fadfbfd60d/overwatch-rialto-map",
    image_two: "https://cdn.wccftech.com/wp-content/uploads/2018/05/Overwatch-Rialto.jpeg",
    image_three: "https://cdn.vox-cdn.com/thumbor/umYflcYAglH8CiiHEqIDfwaEfyw=/0x0:5120x2880/1200x800/filters:focal(1762x1087:2580x1905)/cdn.vox-cdn.com/uploads/chorus_image/image/60847973/OVR_Rialto_Presskit_JPA_006.0.png",
    top_down: "/images/maps/escort/rialto/Rialto-top-down.jpg"
)

#Route 66
Map.create(
    name: "Route 66", 
    country: "United States", 
    country_flag: "/images/maps/escort/route/usa.png",
    map_type: "Escort",
    map_type_icon: "/images/maps/mapIcons/escort-icon.png",
    card: "/images/maps/escort/route/Route-card.jpg",
    image_one: "https://cdna.artstation.com/p/assets/images/images/031/074/312/4k/martin-holmberg-route66-06.jpg?1602527108",
    image_two: "https://www.dexerto.com/wp-content/uploads/2021/07/01/overwatch-route-66-diner.jpg",
    image_three: "http://imgur.com/U0g01yQ.png",
    top_down: "/images/maps/escort/route/Route-top-down.jpg"
)

#Watchpoint Gibraltar
Map.create(
    name: "Watchpoint Gibraltar", 
    country: "Overwatch Base", 
    country_flag: "/images/maps/escort/watchpoint/ow.png",
    map_type: "Escort",
    map_type_icon: "/images/maps/mapIcons/escort-icon.png",
    card: "/images/maps/escort/watchpoint/Watchpoint-card.jpg",
    image_one: "https://www.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/gibraltar-overwatch-camera-trick-spawn.jpg",
    image_two: "https://www.owfire.com/images/maps/watchpoint-gibraltar-6.jpg",
    image_three: "https://assets.tentonhammer.com/guides/attached_images/000/011/304/medium/OWWatchpointGibraltar.jpg?1469202759",
    top_down: "/images/maps/escort/watchpoint/Watchpoint-top-down.jpg"
)
##HYBRID
#KINGS ROW
Map.create(
    name: "Kings Row", 
    country: "England",
    country_flag: "/images/maps/hybrid/kingsRow/england.png",
    map_type: "Hybrid",
    map_type_icon: "/images/maps/mapIcons/hybrid-icon.png",
    card: "/images/maps/hybrid/kingsRow/KingsRow-card.png",
    image_one: "https://assets.tentonhammer.com/articles/attached_images/000/025/042/large/KingsRow.jpg?1468378046",
    image_two: "https://images.squarespace-cdn.com/content/v1/59af2189c534a58c97bd63b3/1530555857623-44Z39PLCYLNU7652M01C/King%27s+Row+Widowmaker+best+sniping+spots+Overwatch.jpg?format=2500w",
    image_three: "https://i.pinimg.com/originals/0e/86/e7/0e86e7e1e373992a3ee7a7b7a4ec9ed5.png",
    top_down: "/images/maps/hybrid/kingsRow/KingsRow-top-down.jpg"
)
#EICHENWALDE
Map.create(
    name: "Eichenwalde", 
    country: "Germany",
    country_flag: "/images/maps/hybrid/eichenwalde/germany.png",
    map_type: "Hybrid",
    map_type_icon: "/images/maps/mapIcons/hybrid-icon.png",
    card: "/images/maps/hybrid/eichenwalde/Eichenwalde-card.png",
    image_one: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2016/08/31/1331815127129_2/a-rocket-powered-payload-for-a-supercharged-map",
    image_two: "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2016/08/31/1331815129740_8/eichenwalde-isn%E2%80%99t-as-big-as-it-looks",
    image_three: "https://www.slashgear.com/wp-content/uploads/2016/08/eichenwalde-one-980x420.png",
    top_down: "/images/maps/hybrid/eichenwalde/Eichenwalde-top-down.jpg"
)
#HOLLYWOOD
Map.create(
    name: "Hollywood", 
    country: "United States",
    country_flag: "/images/maps/hybrid/hollywood/usa.png",
    map_type: "Hybrid",
    map_type_icon: "/images/maps/mapIcons/hybrid-icon.png",
    card: "/images/maps/hybrid/hollywood/Hollywood-card.jpg",
    image_one: "https://overwatch.wiki.fextralife.com/file/Overwatch/hollywood.jpg",
    image_two: "https://s3.us-east-1.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/08/12052713/0e0f9349926847bf5ea0526e6846d5c0a09ce7b4c9e3bd223c2e02d29c.jpg",
    image_three: "https://i.pinimg.com/originals/b2/da/37/b2da370317c6f65be70af00e5bd847e5.png",
    top_down: "/images/maps/hybrid/hollywood/Hollywood-top-down.jpg"
)
#BLIZZARD WORLD
Map.create(
    name: "Blizzard World", 
    country: "United States",
    country_flag: "/images/maps/hybrid/blizzard/usa.png",
    map_type: "Hybrid",
    map_type_icon: "/images/maps/mapIcons/hybrid-icon.png",
    card: "/images/maps/hybrid/blizzard/Blizzard-card.jpg",
    image_one: "https://cdn.vox-cdn.com/thumbor/Si_s953Fspw91EOT06b80epTqfU=/0x0:4978x2800/1200x800/filters:focal(1614x661:2410x1457)/cdn.vox-cdn.com/uploads/chorus_image/image/57488921/Overwatch_BlizzardWorld_001_png_jpgcopy.0.jpg",
    image_two: "https://s.yimg.com/uu/api/res/1.2/glNkJsk7QYtfDbrCKrYj_A--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/b09c549ab048f9a8aa2e5b9cd3ea72c2/206083909/Overwatch_BlizzardWorld_Snaxxramas.jpg",
    image_three: "https://cdn.mos.cms.futurecdn.net/gSxmZ5qzfQRjzrUi9ZkkZd.jpg",
    top_down: "/images/maps/hybrid/blizzard/Blizzard-top-down.jpg"
)
#NUMBANI
Map.create(
    name: "Numbani", 
    country: "Numbani",
    country_flag: "/images/maps/hybrid/numbani/numbani.png",
    map_type: "Hybrid",
    map_type_icon: "/images/maps/mapIcons/hybrid-icon.png",
    card: "/images/maps/hybrid/numbani/Numbani-card.jpg",
    image_one: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/5c2bad07d208a80efc000001.jpeg",
    image_two: "https://staticr1.blastingcdn.com/media/photogallery/2017/8/11/660x290/b_1200x675/the-numbani-map-in-overwatch-image-source-youtubeoverwatch-brasil_1502759.jpg",
    image_three: "https://preview.redd.it/cj7snh26dsj21.jpg?width=1805&format=pjpg&auto=webp&s=0b9f798741420341dd005333c54ed6d0a62f2aaa",
    top_down: "/images/maps/hybrid/numbani/Numbani-top-down.jpg"
)

##Deathmatch
#KANEZAKA
Map.create(
    name: "Kanezaka", 
    country: "Japan",
    country_flag: "/images/maps/deathmatch/kanezaka/japan.png",
    map_type: "Deathmatch",
    map_type_icon: "/images/maps/mapIcons/deathmatch-icon.png",
    card: "/images/maps/deathmatch/kanezaka/Kanezaka-card.jpg",
    image_one: "/images/maps/deathmatch/kanezaka/Kanezaka-one.jpg",
    image_two: "/images/maps/deathmatch/kanezaka/Kanezaka-two.png",
    image_three: "/images/maps/deathmatch/kanezaka/Kanezaka-three.jpg",
    top_down: "N/A"
)

#PETRA
Map.create(
    name: "Petra", 
    country: "Jordan",
    country_flag: "/images/maps/deathmatch/petra/jordan.png",
    map_type: "Deathmatch",
    map_type_icon: "/images/maps/mapIcons/deathmatch-icon.png",
    card: "/images/maps/deathmatch/petra/Petra-card.jpg",
    image_one: "/images/maps/deathmatch/petra/Petra-one.jpg",
    image_two: "/images/maps/deathmatch/petra/Petra-two.png",
    image_three: "/images/maps/deathmatch/petra/Petra-three.jpg",
    top_down: "N/A"
)

#MALEVENTO
Map.create(
    name: "Malevento", 
    country: "Italy",
    country_flag: "/images/maps/deathmatch/malevento/italy.png",
    map_type: "Deathmatch",
    map_type_icon: "/images/maps/mapIcons/deathmatch-icon.png",
    card: "/images/maps/deathmatch/malevento/Malevento-card.jpg",
    image_one: "/images/maps/deathmatch/malevento/Malevento-one.png",
    image_two: "/images/maps/deathmatch/malevento/Malevento-two-two.png",
    image_three: "/images/maps/deathmatch/malevento/Malevento-three.jpg",
    top_down: "N/A"
)

#CHATEAU GUILLARD
Map.create(
    name: "Chateau Guillard", 
    country: "France",
    country_flag: "/images/maps/deathmatch/chateau/france.png",
    map_type: "Deathmatch",
    map_type_icon: "/images/maps/mapIcons/deathmatch-icon.png",
    card: "/images/maps/deathmatch/chateau/Chateau-card.jpg",
    image_one: "/images/maps/deathmatch/chateau/Chateau-one.jpg",
    image_two: "/images/maps/deathmatch/chateau/Chateau-two.jpg",
    image_three: "/images/maps/deathmatch/chateau/Chateau-three.jpg",
    top_down: "N/A"
)

##Capture The Flag
#Ayutthaya
Map.create(
    name: "Ayutthaya", 
    country: "Thailand",
    country_flag: "/images/maps/capture/ayutthaya/thailand.png",
    map_type: "Capture The Flag",
    map_type_icon: "/images/maps/mapIcons/ctf-icon.png",
    card: "/images/maps/capture/ayutthaya/Ayutthaya-card.png",
    image_one: "/images/maps/capture/ayutthaya/Ayutthaya-one.png",
    image_two: "/images/maps/capture/ayutthaya/Ayutthaya-two.jpg",
    image_three: "/images/maps/capture/ayutthaya/Ayutthaya-three.jpg",
    top_down: "N/A"
)

puts "Maps Seeding Complete!"
puts

puts "Seeding OWL Data..."
puts 

puts "Creating Teams..."
puts 
outlaws = Team.create(
    team_name: "Outlaws", 
    team_city: "Houston",
    team_logo: "/images/owl/teams/outlaws/outlaws-logo.png",
    team_skin_home: "/images/owl/teams/outlaws/outlaws-uni.jpg"
)
fuel = Team.create(
    team_name: "Fuel",
    team_city: "Dallas",
    team_logo: "/images/owl/teams/fuel/fuel-logo.png",
    team_skin_home: "/images/owl/teams/fuel/fuel-uni.jpg"
)
shock = Team.create(
    team_name: "Shock",
    team_city: "San Francisco",
    team_logo: "/images/owl/teams/shock/shock-logo.png",
    team_skin_home: "/images/owl/teams/shock/shock-uni.jpg"
)
titans = Team.create(
    team_name: "Titans",
    team_city: "Vancouver",
    team_logo: "/images/owl/teams/titans/titans-logo.png",
    team_skin_home: "/images/owl/teams/titans/titans-uni.jpg"
)
dragons = Team.create(
    team_name: "Dragons",
    team_city: "Shanghai",
    team_logo: "/images/owl/teams/dragons/dragons-logo.png",
    team_skin_home: "/images/owl/teams/dragons/dragons-uni.jpg"
)
uprising = Team.create(
    team_name: "Uprising",
    team_city: "Boston",
    team_logo: "/images/owl/teams/uprising/uprising-logo.png",
    team_skin_home: "/images/owl/teams/uprising/uprising-uni.jpg"
)
reign = Team.create(
    team_name: "Reign",
    team_city: "Atlanta",
    team_logo: "/images/owl/teams/reign/reign-logo.png",
    team_skin_home: "/images/owl/teams/reign/reign-uni.jpg"
)
mayhem = Team.create(
    team_name: "Mayhem",
    team_city: "Florida",
    team_logo: "/images/owl/teams/mayhem/mayhem-logo.png",
    team_skin_home: "/images/owl/teams/mayhem/mayhem-uni.jpg"
)
hunters = Team.create(
    team_name: "Hunters",
    team_city: "Chengdu",
    team_logo: "/images/owl/teams/hunters/hunters-logo.png",
    team_skin_home: "/images/owl/teams/hunters/hunters-uni.jpg"
)
charge = Team.create(
    team_name: "Charge",
    team_city: "Guangzhou",
    team_logo: "/images/owl/teams/charge/charge-logo.png",
    team_skin_home: "/images/owl/teams/charge/charge-uni.jpg"
)
spark = Team.create(
    team_name: "Spark",
    team_city: "Hangzhou",
    team_logo: "/images/owl/teams/spark/spark-logo.png",
    team_skin_home: "/images/owl/teams/spark/spark-uni.jpg"
)
spitfire = Team.create(
    team_name: "Spitfire",
    team_city: "London",
    team_logo: "/images/owl/teams/spitfire/spitfire-logo.png",
    team_skin_home: "/images/owl/teams/spitfire/spitfire-uni.jpg"
)
gladiators = Team.create(
    team_name: "Gladiators",
    team_city: "Los Angeles",
    team_logo: "/images/owl/teams/valiant/valiant-logo.png",
    team_skin_home: "/images/owl/teams/valiant/valiant-uni.jpg"
)
valiant = Team.create(
    team_name: "Valiant",
    team_city: "Los Angeles",
    team_logo: "/images/owl/teams/valiant/valiant-logo.png",
    team_skin_home: "/images/owl/teams/valiant/valiant-uni.jpg"
)
excelsior = Team.create(
    team_name: "Excelsior",
    team_city: "New York",
    team_logo: "/images/owl/teams/excelsior/excelsior-logo.png",
    team_skin_home: "/images/owl/teams/excelsior/excelsior-uni.jpg"
)
eternal = Team.create(
    team_name: "Eternal",
    team_city: "Paris",
    team_logo: "/images/owl/teams/eternal/eternal-logo.png",
    team_skin_home: "/images/owl/teams/eternal/eternal-uni.jpg"
)
fusion = Team.create(
    team_name: "Fuson",
    team_city: "Philadelphia",
    team_logo: "/images/owl/teams/fusion/fusion-logo.png",
    team_skin_home: "/images/owl/teams/fusion/fusion-uni.jpg"
)
dynasty = Team.create(
    team_name: "Dynasty",
    team_city: "Seoul",
    team_logo: "/images/owl/teams/dynasty/dynasty-logo.png",
    team_skin_home: "/images/owl/teams/dynasty/dynasty-uni.jpg"
)
defiant = Team.create(
    team_name: "Defiant",
    team_city: "Toronto",
    team_logo: "/images/owl/teams/defiant/defiant-logo.png",
    team_skin_home: "/images/owl/teams/defiant/defiant-uni.jpg"
)
justice = Team.create(
    team_name: "Justice",
    team_city: "Washington",
    team_logo: "/images/owl/teams/justice/justice-logo.png",
    team_skin_home: "/images/owl/teams/justice/justice-uni.jpg"
)


puts "Completed Team Creation!"
puts 

puts "Creating Players..."
puts 

## Altanta Reign
Player.create(
    name: "Gator", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: reign.id
)
Player.create(
    name: "Hawk", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: reign.id
)
Player.create(
    name: "Kai", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: reign.id
)
Player.create(
    name: "Nero", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: reign.id
)
Player.create(
    name: "Venom", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: reign.id
)
Player.create(
    name: "Ojee", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: reign.id
)

## Boston Uprising
Player.create(
    name: "Punk", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: uprising.id
)
Player.create(
    name: "Faith", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: uprising.id
)
Player.create(
    name: "Valentine", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: uprising.id
)
Player.create(
    name: "Crimzo", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: uprising.id
)
Player.create(
    name: "Striker", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: uprising.id
)
Player.create(
    name: "Marve1", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: uprising.id
)
Player.create(
    name: "MCD", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: uprising.id
)
Player.create(
    name: "Victoria", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: uprising.id
)

## Chengdu Hunters
Player.create(
    name: "Yveltal", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: hunters.id
)
Player.create(
    name: "JinMu", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: hunters.id
)
Player.create(
    name: "Leave", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: hunters.id
)
Player.create(
    name: "Nisha", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: hunters.id
)
Player.create(
    name: "GA9A", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: hunters.id
)
Player.create(
    name: "Farway1987", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: hunters.id
)
Player.create(
    name: "Mmonk", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: hunters.id
)

## Dallas Fuel
Player.create(
    name: "Doha", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: fuel.id
)
Player.create(
    name: "Sp9rk1e", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: fuel.id
)
Player.create(
    name: "Hanbin", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: fuel.id
)
Player.create(
    name: "Fielder", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: fuel.id
)
Player.create(
    name: "Fearless", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: fuel.id
)
Player.create(
    name: "ChiYo", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: fuel.id
)
Player.create(
    name: "Edison", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: fuel.id
)
Player.create(
    name: "Guriyo", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: fuel.id
)

## Florida Mayhem
Player.create(
    name: "SirMajed", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: mayhem.id
)
Player.create(
    name: "Checkmate", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: mayhem.id
)
Player.create(
    name: "MirroR", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: mayhem.id
)
Player.create(
    name: "Adam", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: mayhem.id
)
Player.create(
    name: "Anamo", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: mayhem.id
)

## Guanzhou Charge
Player.create(
    name: "Eileen", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: charge.id
)
Player.create(
    name: "Rio", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: charge.id
)
Player.create(
    name: "Cr0ng", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: charge.id
)
Player.create(
    name: "ChoiSehwan", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: charge.id
)
Player.create(
    name: "Develop", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: charge.id
)
Player.create(
    name: "Unique", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: charge.id
)
Player.create(
    name: "Molly", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: charge.id
)

## Hangzhou Spark
Player.create(
    name: "Guxue", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: spark.id
)
Player.create(
    name: "Architect", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: spark.id
)
Player.create(
    name: "Shy", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: spark.id
)
Player.create(
    name: "LiGe", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: spark.id
)
Player.create(
    name: "BERNAR", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: spark.id
)
Player.create(
    name: "Pineapple", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: spark.id
)
Player.create(
    name: "AlphaYi", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: spark.id
)
Player.create(
    name: "Irony", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: spark.id
)
Player.create(
    name: "Superich", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: spark.id
)

##Houston Outlaws
Player.create(
    name: "Danteh", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: outlaws.id
)
Player.create(
    name: "PIGGY", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: outlaws.id
)
Player.create(
    name: "Jake", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: outlaws.id
)
Player.create(
    name: "Pelican", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: outlaws.id
)
Player.create(
    name: "Ir1s", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: outlaws.id
)
Player.create(
    name: "Lastro", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: outlaws.id
)
Player.create(
    name: "MER1T", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: outlaws.id
)

## London Spitfire
Player.create(
    name: "SparkR", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: spitfire.id
)
Player.create(
    name: "Shax", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: spitfire.id
)
Player.create(
    name: "Backbone", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: spitfire.id
)
Player.create(
    name: "Hadi", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: spitfire.id
)
Player.create(
    name: "Poko", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: spitfire.id
)
Player.create(
    name: "Provide", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: spitfire.id
)
Player.create(
    name: "Admiral", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: spitfire.id
)

## Los Angeles Gladiators
Player.create(
    name: "SPACE", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: gladiators.id
)
Player.create(
    name: "Kevster", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: gladiators.id
)
Player.create(
    name: "Shu", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: gladiators.id
)
Player.create(
    name: "Skewed", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: gladiators.id
)
Player.create(
    name: "FunnyAstro", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: gladiators.id
)
Player.create(
    name: "ANS", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: gladiators.id
)
Player.create(
    name: "Reiner", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: gladiators.id
)
Player.create(
    name: "Patiphan", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: gladiators.id
)

## Los Angeles Valiant
Player.create(
    name: "Diya", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: valiant.id
)
Player.create(
    name: "Innovation", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: valiant.id
)
Player.create(
    name: "Becky", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: valiant.id
)
Player.create(
    name: "ColdEst", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: valiant.id
)

## New York Excelsior
Player.create(
    name: "Flora", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: excelsior.id
)
Player.create(
    name: "Yaki", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: excelsior.id
)
Player.create(
    name: "Kellan", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: excelsior.id
)
Player.create(
    name: "Gangnamjin", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: excelsior.id
)
Player.create(
    name: "Myunb0ng", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: excelsior.id
)

## Paris Eternal
Player.create(
    name: "Naga", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: eternal.id
)
Player.create(
    name: "Daan", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: eternal.id
)
Player.create(
    name: "Kaan", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: eternal.id
)
Player.create(
    name: "Drido", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: eternal.id
)
Player.create(
    name: "Glister", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: eternal.id
)
Player.create(
    name: "Vestola", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: eternal.id
)

## Philadelphia Fusion
Player.create(
    name: "Carpe", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: fusion.id
)
Player.create(
    name: "MN3", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: fusion.id
)
Player.create(
    name: "ZEST", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: fusion.id
)
Player.create(
    name: "Fury", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: fusion.id
)
Player.create(
    name: "AimGod", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: fusion.id
)

## San Francisco Shock
Player.create(
    name: "Super", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: shock.id
)
Player.create(
    name: "Viol2t", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: shock.id
)
Player.create(
    name: "FiNN", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: shock.id
)
Player.create(
    name: "Kilo", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: shock.id
)
Player.create(
    name: "Proper", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: shock.id
)
Player.create(
    name: "S9mm", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: shock.id
)

## Seoul Dynasty
Player.create(
    name: "FITS", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: dynasty.id
)
Player.create(
    name: "Profit", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: dynasty.id
)
Player.create(
    name: "Creative", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: dynasty.id
)
Player.create(
    name: "Stalk3r", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: dynasty.id
)
Player.create(
    name: "Smurf", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: dynasty.id
)
Player.create(
    name: "JJoNak", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: dynasty.id
)
Player.create(
    name: "Vindaim", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: dynasty.id
)

## Shanghai Dragons
Player.create(
    name: "Izayaki", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: dragons.id
)
Player.create(
    name: "Fleta", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: dragons.id
)
Player.create(
    name: "LIP", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: dragons.id
)
Player.create(
    name: "Void", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: dragons.id
)
Player.create(
    name: "LeeJaeGon", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: dragons.id
)
Player.create(
    name: "Fate", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: dragons.id
)
Player.create(
    name: "WhoRU", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: dragons.id
)

## Toronto Defiant
Player.create(
    name: "Heesu", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: defiant.id
)
Player.create(
    name: "Twilight", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: defiant.id
)
Player.create(
    name: "HOTBA", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: defiant.id
)
Player.create(
    name: "CH0R0NG", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: defiant.id
)
Player.create(
    name: "MuZe", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: defiant.id
)
Player.create(
    name: "Finale", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: defiant.id
)
Player.create(
    name: "ALTHOUGH", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: defiant.id
)

## Vancouver Titans
Player.create(
    name: "Aspire", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: titans.id
)
Player.create(
    name: "sHockWave", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: titans.id
)
Player.create(
    name: "False", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: titans.id
)
Player.create(
    name: "Masaa", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: titans.id
)
Player.create(
    name: "Aztac", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: titans.id
)
Player.create(
    name: "Seicoe", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: titans.id
)
Player.create(
    name: "Skairipa", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: titans.id
)

## Washington Justice
Player.create(
    name: "Decay", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: justice.id
)
Player.create(
    name: "Mag", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: justice.id
)
Player.create(
    name: "Assassin", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: justice.id
)
Player.create(
    name: "Happy", role: "DPS", role_icon: "/images/icons/Icon-Damage.png", team_id: justice.id
)
Player.create(
    name: "Krillin", role: "Support", role_icon: "/images/icons/Icon-Support.png", team_id: justice.id
)
Player.create(
    name: "Kalios", role: "Tank", role_icon: "/images/icons/Icon-Tank.png", team_id: justice.id
)






puts "Completed Player Seeding!"



puts "Seeding Complete!"
