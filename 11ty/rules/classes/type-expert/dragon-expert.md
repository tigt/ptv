---
characterClass: Dragon Expert
description: Dragon Experts adore the kings of the Pokémon world, and reach for heaven through violence.
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
Dragon Expert Moves
: Twister, Dragon Rage, Egg Tooth

Dragon Expert
: You gain Advantage on rolls to interact with Dragon-Type Pokémon. (This includes capture attempts but not attack rolls.)
: Your non-Dragon-Type Pokémon in the Draconic Egg Group gain STAB from Dragon Moves and benefit from Dragon Expert features.


## Rank 2
Prestige Orders
: 1 PP. If an ally faints this round, your Dragon-Type Pokémon Boosts its Critical Rate by +2.

Rampage Orders
: 2 PP. If your Dragon-Type Pokémon faints a foe this round, any damage past 0 can be applied to a second target in the Zone.


## Rank 3
Expand your available Bonus Moves to include the following: Dragon Tail, Dragon Breath, Dragon Dance

## Rank 4
Heavenly Orders
: 3 PP. This round, your Dragon-Type Pokémon gains maximum bonus damage against foes shorter than it.

Wild Den
: Your Dragon-Type Pokémon can create Dragon Dens in the wilderness. Dragon Dens have enough room for an entire party and keep a stable temperature, but attract nearby strong Pokémon.


## Rank 5
Providence
: Once per round, If your Pokémon’s single target Dragon Move misses, you may choose a different target and reroll the attack roll.


## Rank 6
Expand your available Bonus Moves to include the following: Scale Shot, Dragon Pulse, Battle Cry

## Rank 7
Royalty Orders
: 5 PP. At the beginning of the round, all foes choose together to Defy or Defer. If foes Defy, boost your Pokémon’s ATK/SATK by +5. If foes Defer, drop all foes’ ATK/SATK by -5.

Royal Constitution
: If your Dragon-Type Pokémon take damage outside of battle and are not brought to 0 HP, the damage is healed.


## Rank 8
Monarch
: Once per long rest, your Dragon-Type Pokémon can summon a weak horde of Pokémon from the area. These Pokémon will follow a simple order that does not involve combat. (ex. Tell Cutiefly to “search for an amulet” or tell Bidoof to “cut down this tree.”)


## Rank 9
Expand your available Bonus Moves to include the following: Outrage, Draco Meteor, Clangorous Soul

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Devastating Drake without holding a Z-Crystal.
