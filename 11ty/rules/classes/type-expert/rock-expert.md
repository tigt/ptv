---
characterClass: Rock Expert
description: Rock Experts love Pokémon as strong as boulders and sturdy as mountains.
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
Rock Expert Moves
: Rollout, Stratagem, Rock Polish

Rock Expertise
: You gain Advantage on rolls to interact with Rock-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Geology
: Your Rock-Type Pokémon gain Immunity to Fighting Moves in Psychic Terrain, Water Moves in Misty Terrain, Ground Moves in Grassy Terrain, and Steel Moves in Electric Terrain.

Crash Orders
: 1 PP. Your Rock-Type Pokémon gains advantage on its attack roll. Moves targeting your Pokémon this round also have advantage.

Sediment Orders
: 1 PP. Your Rock-Type Pokémon gains disadvantage on its attack roll. Moves targeting your Pokémon this round also have disadvantage.


## Rank 3
Expand your available Bonus Moves to include the following: Rock Blast, Ancient Power, Sandstorm

## Rank 4
Igneous Orders
: 3 PP. Your Pokémon’s Damaging Rock Move causes other foes in Zone to lose 1 Tick of Fire Type damage. (Apply Weakness/Resistance, but not stats.)

Rocky Road
: Your Rock-Type Pokémon can create a cobblestone path over terrain for easy travel.


## Rank 5
Gneiss Aim
: When your Pokémon’s Rock Move misses, your Pokémon gains +1 Resistance to all Moves until its next turn.


## Rank 6
Expand your available Bonus Moves to include the following: Stone Edge, Power Gem, Stealth Rock

## Rank 7
Memorock Orders
: 3 PP. If your Rock-Type Pokémon is hit with a Super-Effective Move this round, their next Move critically hits.

Boulderdash
: Your Rock-Type Pokémon automatically succeed on checks to push objects of any size.


## Rank 8
Tremorsense
: Your Rock-Type Pokémon can hit the ground to sense the general location and type of all rocks in a mile radius.


## Rank 9
Expand your available Bonus Moves to include the following: Rock Wrecker, Meteor Beam, Wide Guard

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Continental Crush without holding a Z-Crystal.
