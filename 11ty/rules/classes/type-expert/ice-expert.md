---
characterClass: Ice Expert
description: Ice Experts love chilly, icy Pokémon and want to warm their cold hearts.
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
Ice Expert Moves
: Ice Ball, Powder Snow, Mist

Ice Expert
: You gain Advantage on rolls to interact with Ice-Types. (This includes capture attempts but not attack rolls.)


## Rank 2
Melty
: Your Ice-Type Boost +5 SPE when a Fire-Type foe enters the battle, and get +5 SPE in harsh sunlight.

Cold Orders
: 1 AP. Your Pokémon's Ice Move that could freeze loses its freeze chance for the rest of the battle, in exchange for Dropping the target's SPE by -10 on 11+.

Deep Freeze Orders
: 0 AP. If you hit a Frozen Pokémon with a Move this round, it is immediately cured and its Type becomes Ice.


## Rank 3
Expand your available Bonus Moves to include the following: Icicle Spear, Freeze-Dry, Hail

## Rank 4
Flakes Orders
:  2 AP. If your Ice-Type is hit with a super-effective Move this round, they fill their Zone with Stealth Icicle Hazards. Foes joining the battle lose 2 Ticks of HP. (Apply Weakness/Resistance, but not stats.)

Air-Conditioned
: Your Ice-Types can make any enclosed space as cold as a freezer in less than a minute.


## Rank 5
Winterland
: Your Pokémon’s Ice Moves get +10 damage in Hail.


## Rank 6
Expand your available Bonus Moves to include the following: Icicle Crash, Ice Beam, Haze

## Rank 7
Permafrost Orders
: 4 AP. Your Ice-Type gains +1 Resistance to any Move it does not take super-effective damage from this round.

Icecrete
: Your Pokémon can make ice sculptures that won't melt to anything but fire from Pokémon.


## Rank 8
Ice Rink
: Once per Long Rest, your Ice-Types can create icy terrain so slippery that battle on it is impossible. This ice can be melted or shattered by Moves that Ice is weak to.


## Rank 9
Expand your available Bonus Moves to include the following: Mountain Gale, Blizzard, Aurora Veil

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Subzero Slammer without holding a Z-Crystal.
