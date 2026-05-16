---
characterClass: Steel Expert
description: Steel Experts love machinery, monsters, and the gears that mesh between them.
layout: rules-page
tags: typeExpert
eleventyComputed:
  title: "{{ characterClass }} · Classes"
  eleventyNavigation:
    key: "{{ characterClass }}"
    excerpt: "{{ description }}" 
---

{{ collections.typeExpert | eleventyNavigation | eleventyNavigationToHtml | safe }}

{{ description }}

## Rank 1
Steel Expert Moves
: Metal Claw, Bullet Punch, Metal Sound

Steel Expertise
: You gain Advantage on rolls to interact with Steel-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
True Steel
: Your Steel-Type Pokémon cannot lose their Steel Typing from any Ability, Move or Feature. If your Steel Pokémon has two Types, the other Type still changes.

Polish Orders
: 1 PP. Swap your Steel-Type Pokémon’s DEF/SDEF boosts at the end of the round.

Shed Plate Orders
: 2 PP. Any effect on your Steel-Type Pokémon caused by Contact ends at the beginning of the round.


## Rank 3
Expand your available Bonus Moves to include the following: Smart Strike, Mirror Shot, Shift Gear

## Rank 4
Steamroll Orders
: 2 PP. If you switch in a Steel-Type Pokémon this round, all Hazards, Terrain, Light Screen, Reflect and Aurora Veil on the field are destroyed.

Sticky Steel
: Your Steel-Type Pokémon can magnetically stick metal onto themselves so strongly only other Pokémon can remove it.


## Rank 5
Heavy Steel
: If a target Protects against your Pokémon’s Steel Move, they lose 1 Tick and are forced to move 1 Zone in a direction of your choice.


## Rank 6
Expand your available Bonus Moves to include the following: Iron Head, Flash Cannon, Gyro Ball

## Rank 7
Solid Orders
: 4 PP. Your Pokémon’s Type becomes Steel/Steel for this round. (They get 2× STAB for Steel Moves, are ⅓× resistant to Bug, Dragon, Fairy, Flying, Grass, Ice, Normal, Psychic, Rock, and Steel, and are 4× weak to Fighting, Fire and Ground.)

Resonant Steel
:  Your Steel-Type Pokémon can hit the ground so that all metals in a route’s range echo a loud gong.


## Rank 8
Steel Door
: Your Steel-Type Pokémon can create metal plates the size of doors to blockade with Endurance. Breaking down these doors usually uses Athletics.


## Rank 9
Expand your available Bonus Moves to include the following: Heavy Slam, Steel Beam, Doom Desire

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Corkscrew Crash without holding a Z-Crystal.
