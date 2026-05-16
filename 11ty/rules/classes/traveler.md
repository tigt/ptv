---
characterClass: Traveler
description: Travelers care about the lands they journey as much as the people and Pokémon that live there. Whether icy peaks, city streets, or ocean deeps, you’ll find Travelers having a wonderful time.
layout: rules-page
tags: characterClass
eleventyComputed:
  title: "{{ characterClass }} · Classes"
  eleventyNavigation:
    key: "{{ characterClass }}"
    parent: Classes
    excerpt: "{{ description }}"
---

{{ collections.all | eleventyNavigation("Classes") | eleventyNavigationToHtml | safe }}

# Traveler

{{ description }}

## Rank 1
Traveler Moves
: Add Flash, Cut, Odor Sleuth, and Camouflage to your Bonus Moves.

Travel Guide
: When you enter a named location, make a check and add your Class Rank. The GM recalls one interesting fact for every 10 DC. <!-- would love to reword this so that using Insight to know things is something anyone can do, Traveler is just uniquely good at it -->

Travel Budget
: When you enter a new town, route, cave, dungeon, or other named major location for the first time, add 1000₽ × your Traveler Rank to your money.

## Rank 2

Be Prepared Orders
: 2 AP. This round, your Pokémon and Allies in Zone ignore negative effects of weather, terrain, and hazards.

New & Old Orders
: 2 AP. Choose another character. If that character or their species is new to you, your next Order that targets them or your Pokémon’s next Move that targets them costs 0 AP. If instead they are familiar to you, you and your Pokémon get +3 Accuracy and +3 Evasion when targeting or being targeted by them this Round.

Field Moves
: Add Rock Smash, Dig, Defog, and Rock Climb to your Bonus Moves.

Maxed Relaxing
: You and your Pokémon each heal an extra 2 Ticks of HP and an extra 2 AP each Short Rest.

## Rank 3: Class Evolution!

Travelers evolve at Level 3 into Cosmopolitans or Explorers.

### Cosmopolitan
Cosmopolitans travel to sightsee and meet people, and can bring those memories into battle.

Cosmopolitan Moves
: Add Confide, Play Nice, Flatter, Secret Power, Pay Day, and Happy Hour to your Bonus Moves.

City Shroodle
: Any social skill checks you make get +3 when you’re in populated areas, but -1 in wilderness.

Return Trip
: You get a 10% discount at shops in locations you’ve visited before.

### Explorer
Explorers boldly survey the unknown with time-tested techniques and traditions.

Explorer Moves
: Add Nature Power, Strength, Terrain Pulse, Mud Sport, and Water Sport to your Bonus Moves.

Country Bidoof
: Any social skill checks you make get +3 when you’re in wilderness, but -1 in populated areas.

Forage
: Once per Long Rest, you may roll on the Pickup Ability table. You may also choose to add or subtract your Endurance skill to modify the result.

## Rank 4

### Cosmopolitan

Field Sync Orders
: 2 AP. Your Pokémon’s Move this round gains an additional Type associated with the Zone’s terrain or weather (your choice) for the rest of the battle. <!-- TBD -->

Who You Know
: Detect Classes, Trainer Level, etc. like how Researcher does for Pokemon; Intel on knowing a gym leader’s (or their equivalent in any towns) specialty, ace Pokemon, and signature move/TM — "1 AP. You learn the character’s two lowest Skills, and one Order they have yet to use." <!-- TBD -->

### Explorer
Strong Style Orders
: 1 AP. In exchange for an additional recharge turn, your Pokémon’s Move this turn becomes more powerful, depending on its characteristics: <!-- should also eat the Pokemon's AP -->
    - Give it +10 Power if it’s a damaging Move
    - Halve its Accuracy Check so that it’s twice as likely to hit
    - For each of the following the Move has, double them: Crit Rate, Effect Rate, Drain amount, and Recoil
    - Any Boosts it causes get an extra +5, and any Drops get an extra -5
    - If it has effects that last a certain number of Rounds, those effects last two Rounds longer"

[TBD]
: ? <!-- TBD -->

## Rank 5
### Cosmopolitan
Sightseeing
: You may choose to double any effects that Zone features have on you and your Pokémon.
### Explorer
Dodge Roll
: You get Evasion equal to your Acrobatics.

## Rank 6

Expand your available Bonus Moves to include the following from the subclasses you have:

### Cosmpolitan
Weather Planning
: Sunny Day, Rain Dance, Snowscape, Sandstorm, and Weather Ball
### Explorer
Ground Control
: Electric Terrain, Grassy Terrain, Misty Terrain, Psychic Terrain, and Steel Roller

## Rank 7
Guide
: You and your Pokémon can clear the way for other Trainers. Travel obstacles that require a skill check are wiped away whenever you beat their DC by 5 or more.
### Cosmopolitan
Fleet Feet Orders
: 5 AP. Your Pokémon’s Traveler Bonus Move gains Priority this round. Your Pokémon can move up to 2 Zones for free during their turn if they use a Bonus Move. <!-- TBD -->
?
: use money instead of AP? <!-- TBD -->
### Explorer
____ Orders
: Orienteering Orders, where you get SPE in special terrain? and/or if you travel to a new Zone this turn? or Trail Blazer, where allies following you into new Zones get SPE? <!-- TBD -->
?
: ? <!-- TBD -->

## Rank 8
Got All I Need
: You and your party can take a Long Rest anywhere, no matter the environment.
### Cosmopolitan
Strange Weather Orders
: 3 AP. If you change the weather this Round, the previous weather does not go away. (It still wears off when it was originally going to.)
### Explorer
Agile Style Orders
: 5 AP. Your Pokémon’s next Move gets +1 Priority and you can choose another Move to use normally this round. In exchange, the first Move is weakened depending on its characteristics:
    - Halve its Power if it’s a damaging Move
    - Its effects only last for one Round if it’s a Status Move" <!-- should also eat the Pokemon's AP -->

## Rank 9
Hidden No More
: You may teach your Pokémon Surf, Fly, Waterfall, Whirlpool, and Dive if they can normally learn them. (These aren’t Bonus Moves.)

: Expand your available Bonus Moves to include the following from the subclasses you have:
### Cosmopolitan
Jet-Setter Moves
: Make It Rain, Tailwind, Morning Sun, Moonlight
### Explorer
Wayfarer Moves
: Steel Roller, Grassy Glide, Rising Voltage, Expanding Force, Misty Explosion

## Rank 10
### Cosmopolitan
Extreme Weather
: When your Pokémon change the weather or set Tailwind, they may spend 5 AP to upgrade the result. (The new effects last as long as the original would.)
    - Harsh Sunlight → Extremely Harsh Sunlight
    - Rain → Heavy Rain
    - Tailwind → Tailwind + Mysterious Wind Current
    - Snow → Snow + Hail + Aurora Veil
    - Sandstorm → Sandstorm + Fog
### Explorer
### Seeds of Mastery <!-- should change name now that Seeds of Mastery are also in Z-A -->
Your Pokémon’s Bonus Moves can gain the effects of Strong or Agile Style without using the Order. <!-- what about the AP costs? -->
