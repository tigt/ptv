---
characterClass: Bug Expert
description: Bug Experts just love bugs, the creepy-crawlies that live everywhere you decide to take a look.
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
Bug Expert Moves
: Fury Cutter, Infestation, Sticky Web

Bug Expert
: You gain Advantage on rolls to interact with Bug Pokémon. (This includes capture attempts but not attack rolls.)
: Your non-Bug-Type Pokémon in the Insect Egg Group gain STAB on Bug Moves and are considered Bug-Types for the purposes of Bug Expert Features.

## Rank 2
Chitin Plate
: Your Bug-Type Pokémon gain +10 SPE whenever they take damage from a critical hit.

Larva Orders
: 1 AP. Your Bug-Type Pokémon changes into Larva Forme at the beginning of the round. Larva Forme has no resistances and its Moves double any Stat Boosts/Drops.

Cocoon Orders
: 1 AP. Your Bug-Type Pokémon changes into Cocoon Forme at the beginning of the round. Cocoon Forme can’t use Damaging Moves, but gains +1 Resistance to all Types.

Molt Orders
: 0 AP. Your Bug-Type Pokémon returns to its original Forme at the beginning of the round.

## Rank 3
Expand your available Bonus Moves to include the following: Fell Stinger, Silver Wind, Quiver Dance

## Rank 4
Underbug Orders
: 3 AP. Your Pokémon’s Bug Move gains maximum bonus damage against Rock, Flying, or Fire-Type Pokémon.

The Tall Grass
: Outside of combat, your Bug-Type Pokémon can hide within tall grass and reappear in any other tall grass in sight without explanation of how they got there.

## Rank 5
Naturous
: Poison-Type Pokémon are weak to your Pokémon’s Bug Moves and Fairy-Type Pokémon do not resist your Bug Moves.


## Rank 6
Expand your available Bonus Moves to include the following: U-Turn, Signal Beam, Sticky Web

## Rank 7
Metavolve Orders
: 5 AP. Your Bug-Type Pokémon Mega Evolves at the beginning of the round and reverts to its original form at the end of the round. This does not count towards the once-per battle Mega Evolution limit.

In The Walls
: Your Bug-Type Pokémon can squeeze through any hole that’s at least 1 foot in diameter.


## Rank 8
Big Buzz
: Your Bug-Type Pokémon can create sounds that can be heard by anybody or everybody on your route.


## Rank 9
Expand your available Bonus Moves to include the following: Megahorn, Pollen Puff, Tail Glow

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Savage Spin-Out without holding a Z-Crystal.
