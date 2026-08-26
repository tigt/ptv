---
characterClass: Electric Expert
description: Electric Experts love the energizing, shocking vitality that can only be found in Pokémon.
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
Electric Expert Moves
: Spark, Thunder Shock, Charge

Electric Expert
: You gain Advantage on rolls to interact with Electric-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Circuituous
: Your Electric-Type Pokémon get Advantage on attack rolls targeting other Electric-Types.

Overvolt Orders
: 2 AP. Your Pokémon’s Electric Move this round is Exhausting and critically hits.

Transistor Orders
: 1 AP. If any allies are suffering Paralysis, cure it and heal your Pokémon 1 Tick of HP for each at the beginning of the round.


## Rank 3
Expand your available Bonus Moves to include the following: Thunder Punch, Volt Switch, Electric Terrain

## Rank 4
Charger Orders
: 3 AP. Your Pokemon's Electric Move leaves Chargers that act as a Hazard. Allies joining the battle get +5 damage on their next damaging Move. If a Ground-Type joins the battle, destroy the Chargers.

Radio
: Your Electric-Type Pokémon automatically succeed on checks to trace electric currents and radio waves to their source.


## Rank 5
Zap Tap
: Your Pokémon’s Electric Moves gain Double Strike against Paralyzed targets.


## Rank 6
Expand your available Bonus Moves to include the following: Plasma Fists, Thunderbolt, Eerie Impulse

## Rank 7
Chu! Orders
: 3 AP. Ground-Type Pokémon resist your Electric Moves (½×) and lose their Immunity for this round.

Magnetic North
: Your Electric-Types always know what direction North is and have advantage on all checks to navigate areas.


## Rank 8
Dynamo
: Your Electric-Type Pokémon automatically succeed at checks to power machinery no matter the output.


## Rank 9
Expand your available Bonus Moves to include the following: Volt Tackle, Zap Cannon, Magnet Rise

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Gigavolt Havoc without holding a Z-Crystal.
