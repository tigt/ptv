---
characterClass: Grass Expert
description: Grass Experts love botany, flowers, and vines — especially those that get up and walk around.
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
Grass Expert Moves
: Leafage, Absorb, Ingrain

Grass Expert
: You gain Advantage on rolls to interact with Grass-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Spring Showers
: Your Grass-Type Pokémon heal 1 Tick when targeted by a Water Move after damage resolves, and Boost their save bonus by +3 in rain.

Sporin Orders
: 1 PP. If an ally including your Pokémon has a Status Problem one of your Pokémon could inflict, cure that Problem at the beginning of the round and heal your Pokémon 1 Tick.

Compost Orders
: 2 PP. If your Grass-Type Pokémon doesn’t target any foes this round, it heals all allies 1 Tick at the end of the round.


## Rank 3
Expand your available Bonus Moves to include the following: Razor Leaf, Magical Leaf, Leech Seed

## Rank 4
Undergrowth Orders
: 4 PP. Your Pokémon’s Grass Move targets the Field and becomes a Hazard. The next foe to switch in or enter the Zone is hit by the effects of the Move. Fire-Type Pokémon are Immune and destroy the Field Trap.

Gardener
: Your Grass-Type Pokémon can make other plant life grow at a visible rate.


## Rank 5
Big Seed
: Your Pokémon’s Grass Moves Drain half the damage dealt on a Critical Hit.  If the Move already Drains, it heals the user twice as much.


## Rank 6
Expand your available Bonus Moves to include the following: Leaf Blade, Grass Pledge, Grassy Terrain

## Rank 7
Bulb Orders
: 5 PP. Your Pokémon plants a Power, Mental or White Herb on the field that can be used by any ally in Zone including your Pokémon for free next round.

Wild Avenue
: Your Grass-Type Pokémon automatically succeed on checks to avoid Pokémon by redirecting tall grass or lure Pokémon by emitting sweet scents.


## Rank 8
Tall Grass
: Once per Long Rest, your Grass-Type Pokémon can grow plant life at an extreme rate to create impassable terrain. This terrain can only be cleared by damage super-effective against Grass, or the Move Cut.


## Rank 9
Expand your available Bonus Moves to include the following: Solar Beam, Solar Blade, Jungle Healing

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use the Z-Move Bloom Doom without holding a Z-Crystal.
