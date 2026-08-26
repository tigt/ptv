---
characterClass: Water Expert
description: Water Experts love fish, eels, and everything else that lives just under the surface.
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
Water Expert Moves
: Clamp, Bubble, Water Sport

Water Expertise
: You gain Advantage on rolls to interact with Water-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Swim Speed
: Your Water-Type Pokémon can travel up to 2 Zones each turn if there’s a layer of water on the ground or the user is submerged.

Drink Orders
: 1 AP. If your Pokémon is not targeted by a Move this round, it regains 3 AP.

Flow Orders
: 2 AP. At the beginning of the round, Drop your Water-Type Pokémon’s ATK and SATK by -5 each and Boost DEF and SDEF by the same amount, or vice versa.


## Rank 3
Expand your available Bonus Moves to include the following: Dive, Bubble Beam, Aqua Ring

## Rank 4
Tidal Shift Orders
: 3 AP. At the beginning of the round, choose a foe. The foe must change the target of their Move, but can use a different Move than originally chosen. This Order fails if there are only two Pokémon in the battle.

Big Bubble
: A single one of your Water-Type Pokémon creates enough bubbles to ventilate an entire party when they dive underwater.


## Rank 5
Rainbow
: When used in Harsh Sunlight, your Pokémon’s Water Moves create a rainbow that doubles in-Zone Allies’ (and the user’s) effect rates for the rest of the battle.


## Rank 6
Expand your available Bonus Moves to include the following: Flip Turn, Water Pledge, Rain Dance

## Rank 7
Fog Orders
: 5 AP. Characters in your Water-Type Pokémon’s Zone Drop -5 Accuracy Rate this round.

Best Boat
: Your Water-Type Pokémon automatically succeed on checks to navigate through bodies of water and swim faster than any wild Water-Type Pokémon.


## Rank 8
Full Flood
: Once per Long Rest, your Water-Type Pokémon can turn any enclosed space into a pool in less than a minute.


## Rank 9
Expand your available Bonus Moves to include the following: Wave Crash, Hydro Pump, Soak

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Hydro Vortex without holding a Z-Crystal.
