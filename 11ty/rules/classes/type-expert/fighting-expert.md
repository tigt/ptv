---
characterClass: Fighting Expert
description: Fighting Experts love the discipline and expert training that defines a real Fighting Pokémon.
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
Fighting Expert Moves
: Arm Thrust, Rock Smash, Vacuum Wave, Bulk Up

Fighting Expert
: You gain Advantage on rolls to interact with Fighting-Types. (This includes capture attempts but not attack rolls.)


## Rank 2
Disciplined
: Your Fighting-Types get +3 on saves for Infatuation, Confusion, and Sleep.

Justice Orders
: 1 PP. For every ally that has fainted this battle, your Pokémon’s Fighting Moves get +1 to their attack rolls this round.

Cornered Orders
: 2 PP. If your Fighting-Type’s HP is under 50%, all of its Moves get Can’t Miss until it faints or the battle ends.


## Rank 3
Expand your available Bonus Moves to include the following: Revenge, Dynamic Punch, Quick Guard

## Rank 4
Riposte Orders
: 2 PP. Foes targeting your Fighting-Type Pokémon this round suffer HP Loss equal to your Pokémon’s DEF+SDEF Boosts.

Workout
: Your Pokémon can spend a short or long rest doing heavy physical activity without giving up the rest’s benefits.


## Rank 5
Fighting Technique
: Fighting Experts master their Bonus Moves to an extent that they can enhance them. When your Pokémon choose a Bonus Move, you can apply Fighting Technique to modify it:
    - Gem Smash: Foes defend against Rock Smash with SDEF instead of DEF.
    - Aura Wave: Vacuum Wave Can’t Miss.
    - Zen Up: Bulk Up raises SATK and SDEF instead.
    - Perk-Up Slap: Wake-Up Slap triggers off of and cures Paralysis, Poison, or Burns instead.
    - Mystery Punch: Dynamic Punch can choose on hit to make a target Confused, Infatuated, or Asleep.
    - Time Guard: Quick Guard also protects against attacks with Priority -1 or less.
    - Qi Punch: Drain Punch can restore an ally’s HP instead of your own Pokémon.
    - Aura Bomb: Aura Sphere’s Range becomes Foes in Zone and AC 5.
    - Square Throw: Circle Throw Traps the foe instead of switching them out.
    - Really Close Combat: Close Combat gets +10 Power, but drops the user’s DEF and SDEF by -10 each.
    - Stealth Press: Body Press adds SDEF to its damage instead of DEF.
    - Focus Smite: Focus Blast does ½ damage on a miss.

## Rank 6
Expand your available Bonus Moves to include the following: Drain Punch, Aura Sphere, Circle Throw

## Rank 7
Chivalry Orders
: 5 PP. Your Fighting-Type Pokémon cannot be Fainted by anything other than the foe it targets this round, even if it goes to 0 HP. This effect ends when the targeted foe leaves the battle or your Pokémon targets another foe.

Heavy Shoulders
: Your Fighting-Type Pokémon can carry any weight less than a house on their shoulders.


## Rank 8
Practice
: Your Fighting-Type Pokémon automatically succeed on physical skill checks for actions they have done every day for a week


## Rank 9
Expand your available Bonus Moves to include the following: Close Combat, Focus Blast, Body Press

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use All-Out Pummeling without holding a Z-Crystal.
