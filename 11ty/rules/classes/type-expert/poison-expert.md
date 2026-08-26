---
characterClass: Poison Expert
description: Poison Experts love the subversive acids and toxins that make Pokémon truly dangerous.
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
Poison Expert Moves
: Poison Fang, Acid, Poison Gas

Poison Expertise
: You gain Advantage on rolls to interact with Poison-Type Pokémon. (This includes capture attempts but not attack rolls.)


## Rank 2
Worsely Poisoned
: Your Poison-Type Pokémon can stack Poisoned and Badly Poisoned on foes. Your Poison Moves inflict Badly Poisoned if the foe is already Poisoned and vice-versa.

Blight Orders
: 1 AP. Choose a Poisoned foe. The foe takes an extra tick from your Pokémon’s damaging Move this round.

Potent Orders
: 2 AP.  Your Pokémon’s Poison Move doubles its AP cost and gains +1 Effectiveness this round.


## Rank 3
Expand your available Bonus Moves to include the following: Toxic, Toxic Spikes, Venom Drench

## Rank 4
Contagion Orders
: 2 AP. If a foe becomes Poisoned this round, its Allies in Zone are also Poisoned. (A Badly-Poisoned foe spreads Bad Poison.)

Toxic Stench
: Your Poison-Type Pokémon can make the area unbearable to stay in for wild Pokémon, or Trainers with weak Intensity.


## Rank 5
Intoxication
: When your Pokémon’s Move Poisons a foe, Drop that foe’s SATK by -10.


## Rank 6
Expand your available Bonus Moves to include the following: Cross Poison, Venoshock, Gastro Acid

## Rank 7
Toxins Orders
: 3 AP. Your Pokémon that inflicts Poison changes to inflict Burn, Paralysis, or Confusion (your choice) for the rest of the battle.

Volatile Poisons
: Foes Poisoned by you and your Pokémon have disadvantage on all Skill Checks.


## Rank 8
Poison Master
: You are as immune to poisons as your Pokémon, and almost as good at making your own. You can craft a serum for free: Whoever consumes the serum has to Save against a DC of 10+[Your Deception] or is Poisoned.


## Rank 9
Expand your available Bonus Moves to include the following: Gunk Shot, Sludge Wave, Corrosive Gas

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Acid Downpour without holding a Z-Crystal.
