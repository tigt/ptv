---
characterClass: Fire Expert
description: Fire Experts love the burning passion found in a Pokémon’s heart that never goes out.
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
Fire Expert Moves
: Flame Charge, Ember, Stoke

Fire Expert
: You gain Advantage on rolls to interact with Fire-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Raze
: When your Fire-Type Pokémon trigger a Hazard, destroy it after it takes effect.

Combust Orders
: 2 AP. Your Pokémon’s Fire Move that inflicts Burned increases its Effect Rate by +6 for the rest of the battle.

Bomb Orders
: 2 AP. If your Fire-Type Pokémon is hit by a Damaging Move before their turn, your Fire-Type Pokémon’s Move Can’t Miss and critically hits.


## Rank 3
Expand your available Bonus Moves to include the following: Fire Fang, Flame Burst, Sunny Day

## Rank 4
Explode Orders
: 2 AP. Your Fire-Type Pokémon loses 2 Ticks to gain Priority on a Move that costs 2 or less AP this round.

Slow Burn
: Fires set by your Fire-Type Pokémon can burn without fuel as long as you want.


## Rank 5
Well-Done
: If your Fire Move would Burn an already Burned foe, Drop the foe’s DEF by -10.


## Rank 6
Expand your available Bonus Moves to include the following: Flare Blitz, Fire Pledge, Will-O-Wisp

## Rank 7
Cinders Orders
: 3 AP. Your Pokémon’s Fire Move leaves Cinders in the Zone that act as a Hazard. All non-Fire Types lose 1 Tick between rounds. If a Water-Type Pokémon enters the Zone or a Water Move is used, the Cinders are destroyed.

Hot Hands
: You are as unharmed by fire as your Fire-Type Pokémon. You cannot be Burned and do not take damage from fire outside of battle. You have advantage on any craft that deals with high temperatures, and automatically succeed if your Fire-Type Pokémon provides the heat.


## Rank 8
Too Hot to Handle
: Once per Long Rest, you can have a Fire Move start a fire that cannot be extinguished without damage from a Move that is super-effective against Fire.


## Rank 9
Expand your available Bonus Moves to include the following: Sacred Fire, Fire Blast, Burn Up

## Rank 10
Z-Expert
: Once per Long Rest, a Fire Expert’s Pokémon can use Inferno Overdrive without holding a Z-Crystal.
