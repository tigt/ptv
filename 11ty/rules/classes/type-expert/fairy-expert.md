---
characterClass: Fairy Expert
description: Fairy Experts love these mystical creatures who seem to live inside myth as much as reality.
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
Fairy Expert Moves
: Disarming Voice, Goblin Punch, Fairy Lock

Fairy Expert
: You gain Advantage on rolls to interact with Fairy-Type Pokémon. (This includes capture attempts but not attack rolls.)
: Your non-Fairy-Type Pokémon Pokémon in the Pixie Egg Group gain STAB on Fairy Moves and benefit from Fairy Expert features.


## Rank 2
Sprite Orders
: 1 PP. If an ally faints this round, Boost your Fairy-Type’s Evasion by +2.

Contract Orders
: 1 PP. If a foe has a status problem at the beginning of the round, cure it immediately and heal your Fairy-Type Pokémon 3 Ticks of HP.


## Rank 3
Expand your available Bonus Moves to include the following: Misty Explosion, Draining Kiss, Misty Terrain

## Rank 4
Pixie Orders
: 2 PP. Your Fairy-Type Pokémon gains maximum bonus damage on foes taller than it for this round.

Cryptid
: Your Fairy-Type Pokémon cannot be photographed or artistically depicted accurately unless they choose it.


## Rank 5
Fairyland
: Your Pokémon’s Fairy Moves get +5 extra damage in Misty Terrain.


## Rank 6
Expand your available Bonus Moves to include the following: Play Rough, Dazzling Gleam, Charm

## Rank 7
Soul Orders
: 5 PP. At the beginning of the round, all foes choose together either Truth or Ideals. If Truth, Boost your Pokémon’s DEF and SDEF by +5 each. If  Ideals, Drop all foes’ DEF and SDEF by -5 each.

Changeling
: Your Fairy-Types automatically succeed on checks to disguise themselves as children.


## Rank 8
Fairy Ring
: Once per long rest, your Fairy-Types can spend a minute to create a fairy ring large enough to hold your party. Wild Pokémon ignore the contents of this fairy ring unless combat is engaged. The fairy ring can be destroyed by poison or steel.


## Rank 9
Expand your available Bonus Moves to include the following: Spirit Break, Moonblast, Moonlight

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Twinkle Tackle without holding a Z-Crystal.
