---
characterClass: Ground Expert
description: Ground Experts connect to the reliable, grounded Pokémon who always look up.
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
Ground Expert Moves
: Dig, Mud-Slap, Mud Sport

Ground Expert
: You gain Advantage on rolls to interact with Ground-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Entry Ammo
: When your Ground-Type Pokémon trigger entry hazards, they Boost their ATK and SATK by +10 each.

Burrow Orders
: 1 AP. At the end of the round, your itemless Ground-Type Pokémon burrows underground and pops back up in any other Zone holding a Sitrus Berry. This also happens if your itemless Pokémon uses Dig.

Shake Orders
: 2 AP. If there are any Terrain or Hazards in-Zone, your Pokémons’ Ground Moves destroy them and gains advantage on the attack roll.


## Rank 3
Expand your available Bonus Moves to include the following: Bulldoze, Mud Shot, Spikes

## Rank 4
Tremor Orders
: 3 AP. All single-target Moves in your Ground-Type Pokémon’s Zone have disadvantage on the attack roll this round.

Dig Sense
: Your Ground-Type Pokémon never lose communication with their Trainer, no matter how far they tunnel.


## Rank 5
Terra Firma
: Your Pokémon’s Ground Moves get +5 extra damage in any special Terrain. (Grass, Electric, Psychic, and Fairy Terrain.) <!-- TODO: hm. Grass Terrain already sorta nerfs this… what is the goal of this feature? -- >


## Rank 6
Expand your available Bonus Moves to include the following: Stomping Tantrum, Scorching Sands, Shore Up

## Rank 7
Aftershock Orders
: 5 AP. Your Pokémon's Ground-Type Pokémon Move strikes the same Zone at the beginning of the next turn as a free action. Do not add bonus damage, STAB or stats to this second strike.

Adobe Home
: Your Ground-Type Pokémon can mold dirt and sand to form a basic house in the span of a minute.


## Rank 8
All Dig
: Once per Long Rest, your Ground-Type Pokémon can shatter any floor made of material softer than solid steel.


## Rank 9
Expand your available Bonus Moves to include the following: Earthquake, Earth Power, Fissure

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Tectonic Rage without holding a Z-Crystal.
