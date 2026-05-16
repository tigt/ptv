---
characterClass: Normal Expert
description: Normal Experts love Pokémon that live a regular life and relate to their normalcy.
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
Normal Expert Moves
: Rapid Spin, Echoed Voice, Tickle

Normal Expertise
: You gain Advantage on rolls to interact with Normal-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Humble Origin
: Your Normal-Type Pokémon retain Normal STAB, Immunity to Ghost, and Normal Expert feature benefits even if Evolution, Moves, Abilities, or Features change their Type.

Serious Orders
: 1 PP. If your Pokémon uses the same Normal Move it used last round, it gets Advantage on the attack roll.

Regular Orders
: 2 PP. All the dice your Normal-Type Pokémon would roll this turn are treated as if you rolled 11.


## Rank 3
Expand your available Bonus Moves to include the following: After You, Yawn, Roar

## Rank 4
Mundane Orders
: 2 PP. Your Normal-Type Pokémon swaps its DEF and SDEF for this round.

Normal to See Here
: Your Normal-Type Pokémon can see through illusions and invisibility.


## Rank 5
No Odds
: Your Normal Moves ignore others’ Abilities during your Pokémon’s turn.


## Rank 6
Expand your available Bonus Moves to include the following: Double-Edge, Tri Attack, Simple Beam

## Rank 7
Normal Orders
: 4 PP. Your Pokémon’s Type becomes Normal/Normal for this round. (They get 2× STAB for Normal Moves and are 4× weak to Fighting.)

Order from Chaos
: Your Normal-Type Pokémon automatically succeed on any checks related to organization and cleanup.


## Rank 8
Just Normal Sights
: Once per Long Rest: outside of combat, your Normal-Type Pokémon can blend into the background to become effectively invisible. Anyone not in your party ignores the Pokémon until it uses a damaging Move, breaks something or Boosts its Stats.


## Rank 9
Expand your available Bonus Moves to include the following: Last Resort, Uproar, Guillotine

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Breakneck Blitz without holding a Z-Crystal.
