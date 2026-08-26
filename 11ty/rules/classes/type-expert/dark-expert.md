---
characterClass: Dark Expert
description: Dark Experts love Pokémon who use tricks and lies to take on opponents far stronger than themselves.
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
Dark Expert Moves
: Assurance, Snarl, Fake Tears

Dark Expert
: You gain Advantage on rolls to interact with Dark-Type Pokémon Pokémon. (This includes capture attempts but not attack rolls.)

## Rank 2
Bad Getaway
: Your Dark-Type Pokémon Pokémon can immediately switch out for free when a foe tries to Trap or Bind them.

Sick Orders
: 1 AP. If your Dark-Type Pokémon fails a save check this round, it cures its status problem at the end of the round. If it passes, it gains advantage on its attack roll.

Exploit Orders
: 2 AP. Your Dark Move activates any secondary effects if it hits a foe with less than 50% HP this round.


## Rank 3
Expand your available Bonus Moves to include the following: Power Trip, Sucker Punch, Torment

## Rank 4
OverKO Orders
: 2 AP. If your Dark-Type Pokémon faints a foe this round, any damage past 0 heals your Pokémon.

Evil Lair
: Your Dark-Type Pokémon Pokémon can always find isolated places in inhabited areas where other Trainers will not naturally go.


## Rank 5
Bad Jackpot
: Your Dark Moves also critically hit and trigger their effects on 13.


## Rank 6
Expand your available Bonus Moves to include the following: Pursuit, Dark Pulse, Foul Play

## Rank 7
Sore Orders
: 5 AP. Your Dark-Type Pokémon’s Move gains Priority and has advantage on the attack roll. Your Pokémon faints after the Move resolves.

Bad Luck
: You or your Pokémon can intentionally fail a Skill Check before rolling. If you do so, you may force another Trainer to fail a Skill Check before your next Long Rest.


## Rank 8
Bad Influence
: Once per long rest, your Dark-Type Pokémon automatically succeeds a Deception check against another Pokémon outside of combat no matter how outrageous the lie.


## Rank 9
Expand your available Bonus Moves to include the following: Punishment, Topsy-Turvy, Snatch

## Rank 10
Z-Expert
: Once per Long Rest, your Pokémon can use Black Hole Eclipse without holding a Z-Crystal.
