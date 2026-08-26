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

https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Mile

## Rank 1
Traveler Moves
: Add Flash, Cut, Odor Sleuth, and Camouflage to your Bonus Moves.

Travel Guide
: You may add your Traveler Rank to Checks you make to remember or learn information about locations.
    ::: example
    Interesting facts about a location could be wild Pokémon found nearby, the Gym Leader’s specialty, unique items sold in town, a plot hook, etc.
    :::

Travel Budget
: When you enter a new town, route, cave, dungeon, or other named major location for the first time, add 1000₽ × your Traveler Rank to your money.

## Rank 2

Be Prepared Orders
: 3 AP. This round, your Pokémon and Allies in Zone ignore negative effects of weather, terrain, and hazards.

New & Old Orders
: 2 AP. Choose another character. If that character or their species is new to you, your next Order that targets them or your Pokémon’s next Move that targets them costs 0 AP.
: If instead they are familiar to you, you and your Pokémon get +3 Accuracy and +3 Evasion when targeting or being targeted by them this Round.

Field Moves
: Add Rock Smash, Defog, and Rock Climb to your Bonus Moves.

Maxed Relaxing
: A life of frequent travel means you’re prepared to get comfortable anywhere. You and your Pokémon each heal an extra 2 Ticks of HP and an extra 2 AP each Short Rest.

## Rank 3: Class Evolution!
Travelers evolve at Level 3 into Cosmopolitans or Explorers:

### Cosmopolitan
Cosmopolitans live to sightsee and meet people, and can bring those memories into battle.

Cosmopolitan Moves
: Add Confide, Play Nice, Flatter, Secret Power, Pay Day, and Happy Hour to your Bonus Moves.

City Shroodle
: Social skill checks you make get +3 when you’re in populated areas, but -1 in wilderness.

Return Trip
: You get a 10% discount at shops in locations you’ve visited before.

### Explorer
Explorers boldly survey the unknown with time-tested techniques and traditions.

Explorer Moves
: Add Nature Power, Strength, Dig, Terrain Pulse, Mud Sport, and Water Sport to your Bonus Moves.

Country Bidoof
: Social skill checks you make get +3 when you’re in wilderness, but -1 in populated areas.

Forage
: Once per Long Rest, you may roll on the Pickup Ability table. You may also add or subtract your Endurance skill to modify the result.
: Your Pokémon roll with Advantage when using Pickup. 

## Rank 4

### Cosmopolitan

As The Locals Do Orders
: 2 AP. Your Pokémon’s next Move gains an additional Type from the current Zone: choose either the Type that Nature Power would become, or the Type Weather Ball would become.
: (It’s up to the GM if things like Strong Winds/Tailwind count as Flying, if Midnight counts as Dark, etc.)

Who You Know
: Detect Classes, Trainer Level, etc. like how Researcher does for Pokemon; Intel on knowing a gym leader’s (or their equivalent in any towns) specialty, ace Pokemon, and signature move/TM — 1 AP. You learn the character’s two lowest Skills, and one Order they have yet to use. <!-- todo -->

### Explorer
Strong Style Orders
: In exchange for doubling its AP cost and an additional recharge turn, your Pokémon’s Move this turn becomes more powerful:
    - Give it +10 Power if it’s Physical or Special
    - Make its Attack Roll with Advantage
    - Double its Drain and Recoil amounts
    - Stats it Boosts get an extra +5, and Stats it Drops get an extra -5
    - Its effects that last a certain number of Rounds now last 2 Rounds longer

Some out-of-battle thing. Parkour?
: todo

## Rank 5
### Cosmopolitan
Sightseeing
: You may choose to double any effects that Zone features, Weather, and Terrain have on you and your Pokémon.

### Explorer
Trail Blazer
: When you enter a Zone that none of your allies are in, you automatically use the Move [Trailblaze](/moves/trailblaze/), but with the Type that Zone would turn Nature Power into.
: If that Zone had Hazards or Terrain, you may clear them after suffering their effects.

## Rank 6

Expand your available Bonus Moves to include the following from the subclasses you have:

### Cosmpolitan
Weather Planning
: Sunny Day, Rain Dance, Snowscape, Sandstorm, and Weather Ball

### Explorer
Ground Control
: Electric Terrain, Grassy Terrain, Misty Terrain, Psychic Terrain, and Steel Roller

## Rank 7

### Cosmopolitan
Plus Move Orders
: 5 AP. Your Pokémon’s next Move:
  - Gets +3 Accuracy, +3 Effect Rate, and -2 AP cost
  - Gets +5 Power, and another +5 Power if it’s Super-Effective
  - Hits through protection to deal ¼ of the damage it usually would
  - If it has a non-Self single target: gains one additional target
  - If Multistrike: hits one additional time
  - If HP-recovering/Draining: heals an extra Tick

The Universal Language
: use money instead of AP? <!-- todo, I think using money for social checks is just something money can do anyway -->

### Explorer
Dodge Roll Orders
: 4 AP (cost of Detect). You get Evasion equal to your Acrobatics/lets you and your Pokemon use Detect for the first move that hits you that round? Or is it less horrifically strong to use Detect, but with a fallback Move if nothing hits you that round? TODO

Trail Maintenance
: You and your Pokémon can clear the way for other Trainers. Travel obstacles that require a skill check are wiped away whenever you or your Pokémon beat their DC by 5 or more.

## Rank 8
Got All I Need
: You and your party can successfully take a Long Rest anywhere, no matter the environment.

### Cosmopolitan
Strange Weather Orders
: 3 AP. If you change the weather this Round, the previous weather does not go away. (It still wears off when it originally would.)

### Explorer
Agile Style Orders
: Your Pokémon’s next Move doubles its AP cost, gets +1 Priority, and you can choose another Move to use normally this round afterwards. In exchange, the first Move is weakened:
  - Halve its Power
  - Its effects only last for one Round

## Rank 9
Hidden No More
: You may teach your Pokémon Surf, Fly, Waterfall, Whirlpool, and Dive if they can normally learn them. (These aren’t Bonus Moves.)

Expand your available Bonus Moves to include the following from the subclasses you have:

### Cosmopolitan
Jet-Setter Moves
: Make It Rain, Tailwind, Midnight, Morning Sun, Moonlight

### Explorer
Wayfarer Moves
: Steel Roller, Grassy Glide, Rising Voltage, Expanding Force, Misty Explosion

## Rank 10
### Cosmopolitan

Acclimate
: Not only does weather need never spoil a good trip, it can enhance it. Your Pokémon and Allies sharing a Zone with it gain a new Ability during certain Weathers:
    - Rain: Hydration
    - Harsh Sunlight: Sun Blanket
    - Snow/Hail: Slush Rush
    - Sand: Sand Force
    - Midnight: Lunar Power <!-- Tailwind is not on this list because it’s already an asymmetric, wholly-beneficial Weather for your party -->

### Explorer
Seeds of Mastery
: Your Pokémon’s Bonus Moves can gain the effects of Strong Style, Agile Style, or Plus Moves without using the Order. (It can only be one of those at a time, though.)
