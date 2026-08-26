---
characterClass: Ghost Expert
description: Ghost Experts adore the spirits who haunt this world, making friends with spectres sometimes only they can see.
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
Ghost Expert Moves
: Lick, Curse, Grudge, Spite

Ghost Expert
: You gain Advantage on rolls to interact with Ghost-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
From Beyond
: If your Ghost Pokémon is KO’d with 5 or more AP remaining, a Curse is put on the foe that targeted them.

Panic Orders
: 1 AP. If your Pokémon uses a Ghost Move on a target with a status problem, the target loses 3 AP and cures their status problem.

Linger Orders
: 2 AP. If a foe faints or switches out this round, their stat changes pass over to the new Pokémon.


## Rank 3
Expand your available Bonus Moves to include the following: Shadow Claw, Ominous Wind, Midnight

## Rank 4
Wisp Orders
: 3 AP. If you faint a foe with a Ghost Move this round, your Pokémon gains any AP the foe had remaining.

Phasing
: Your Ghost-Type Pokémon can take allies with them when phasing through solid objects.


## Rank 5
Jeepers
: Your Ghost Moves drop 1 AP from targeted foes on 18+. On a critical hit, your Pokémon gains 1 AP.


## Rank 6
Expand your available Bonus Moves to include the following: Shadow Force, Shadow Ball, Destiny Bond

## Rank 7
Specter Orders
: 3 AP. If an ally or your Pokémon fainted last round, your Ghost-Type Pokémon can use any Move that ally knew this round using the ally’s stats.

Old Tastes
: Your Ghost-Type Pokémon can see what isn’t there. If you put an Item into a Ghost-Type Pokémon’s grasp, it knows exactly where that Item has been and who used it within the last week.


## Rank 8
Nightmarish
: Your Ghost-Type Pokémon can create illusions of creatures and frights of any size. If a target wants to see through your Pokémon’s illusions, it makes a social check against your Deception.


## Rank 9
Expand your available Bonus Moves to include the following: Poltergeist, Moongeist Beam, Trick-or-Treat

## Rank 10
Z-Expert
: Once per Long Rest, a Ghost Expert’s Pokémon can use Neverending Nightmare without holding a Z-Crystal.
