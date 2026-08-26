---
characterClass: Flying Expert
description: Flying Experts love birds who can soar through the sky, a place where only they belong.
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
Flying Expert Moves
: Pluck, Gust, Defog

Flying Expert
: You gain Advantage on rolls to interact with Flying-Type Pokémon. (This includes capture attempts but not attack rolls.)
: Your non-Flying-Type Pokémon in the Winged Egg Group gain STAB on Flying Moves and benefit from Flying Expert features. You may also decide with your GM if certain Pokémon with Levitate qualify for this, because some of them are basically honorary Flying-Types (Flygon), but not all (Koffing).


## Rank 2
Dynamic Orders
: 1 AP. Your Flying-Type Pokémon can switch in to any Zone on the Field. If an ally is in that Zone, your Flying-Type Pokémon can redirect any non-Ground Moves targeting that ally this round to itself.

Wind Tunnel Orders
: 2 AP. Choose a foe. That foe has disadvantage on attack rolls against all targets except your Flying-Type Pokémon the next round. 


## Rank 3
Expand your available Bonus Moves to include the following: Fly, Air Cutter, Roost

## Rank 4
Gale Orders
: 2 AP. Your Pokémon’s  damaging Flying Move adds SPE instead of ATK or SATK this round.

Big Wings
: Your Flying-Type Pokémon can carry the weight of an Indian Elephant.


## Rank 5
Aerial Strike
: Your Pokémon’s Flying Moves ignore Protecting Moves from non-Flying Type Pokémon.


## Rank 6
Expand your available Bonus Moves to include the following: Dual Wingbeat, Air Slash, Feather Dance

## Rank 7
Twirlwind Orders
: 5 AP. Your Pokémon’s Flying Move is Delayed, but causes trained targets to switch out for another party member of their choice.

Flying Finds Home
: Your Flying-Type Pokémon can always find you no matter where you go when they are out of sight.


## Rank 8
Bird Chatter
: Your Flying-Type Pokémon can communicate whatever they see to you with perfect clarity somehow.


## Rank 9
Expand your available Bonus Moves to include the following: Brave Bird, Hurricane, Tailwind

## Rank 10
Z-Expert
: Once per Long Rest, a Flying Expert’s Pokémon can use Supersonic Skystrike without holding a Z-Crystal.
