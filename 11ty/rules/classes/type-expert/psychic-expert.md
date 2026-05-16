---
characterClass: Psychic Expert
description: Psychic Experts love to plumb the depths of the infinite mind, with Pokémon using more mystical powers than they can understand.
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
Psychic Expert Moves
: Confusion, Calm Mind, Teleport

Psychic Expertise
: You gain Advantage on rolls to interact with Psychic-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Strong Minded
: Your Pokémon can still use Psychic Moves when they are Asleep.

Silent Orders
: 1 PP. If your Psychic-Type Pokémon uses a Move this round, you do not need to choose what Move that is until all other Moves are revealed.

Control Orders
: 1 PP. Your Psychic-Type Pokémon uses its PP to fuel an ally’s Move this round.


## Rank 3
Expand your available Bonus Moves to include the following: Stored Power, Psycho Cut, Psychic Terrain

## Rank 4
Somatic Orders
: 3 PP. At the end of the round, inflict any Status Problems your Psychic-Type Pokémon is suffering onto a foe of your choice.

Tagalongs
: Your Psychic-Type Pokémon can teleport the entire party short distances.


## Rank 5
Specialist
: Hypnosis/Dream Eater, Light Screen/Reflect, Power Swap/Guard Swap and Power Split/Guard Split only take up one Move Slot.


## Rank 6
Expand your available Bonus Moves to include the following: Psychic, Psychic Fangs, Magic Coat

## Rank 7
Weird Orders
: 4 PP. Your Pokémon’s Psychic Move also turns the field into Psychic Terrain for 3 rounds.

Heavy Thoughts
: Your Psychic-Type Pokémon automatically succeed on Focus checks to lift anything up to the weight of a dump truck.


## Rank 8
Teleport?
: Your Psychic-Type Pokémon can distort space to make targets think they are in a different environment. To escape this illusion, the target makes an Intensity check contesting your Pokémon’s Focus.


## Rank 9
Expand your available Bonus Moves to include the following: Psystrike, Psycho Shift, Telekinesis

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Shattered Psyche without holding a Z-Crystal.
