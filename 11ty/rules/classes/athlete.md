---
characterClass: Athlete
description: Athletes take care of their Pokémon and themselves as a team, building their body and mind to the limit. They won’t be left behind as their Pokémon grow in strength.
layout: rules-page
tags: characterClass
eleventyComputed:
  title: "{{ characterClass }} · Classes"
  eleventyNavigation:
    key: "{{ characterClass }}"
    parent: Classes
    excerpt: "{{ description }}"
---

{{ collections.all | eleventyNavigation("Classes") | eleventyNavigationToHtml | safe }}

# Athlete

{{ description }}

## Rank 1

Athlete Moves
: Expand your available Bonus Moves to include Focus Energy, Work Up, and Court Change.

Athlete
: You can lift and throw any Trainer that does not have Pokémon protecting them without a check.

## Rank 2
Push Through
: Whenever your Pokémon’s Stats would be Dropped, instead Drop the Stats at the end of the round.

Relax Orders
: 1 AP. If your Pokémon is not targeted by a Move this round, they gain 3 AP.

Stretch Orders
: 2 AP. Choose a foe. That foe can use a self-targeting Move for free at the beginning of the round. If it does, your Pokémon can also use a self-targeting Move for free at the beginning of the round.

## Rank 3: Class Evolution!
Athletes evolve at Rank 3 into Coaches, Hikers, or Martial Artists.

- **Coaches** train to be the best at commanding their Pokémon and assisting others. They love to give Orders and feel invested in the entire party’s performance.

- **Hikers** use their training to go anywhere in the world and see sights nobody else has. They survive in any environment, and can even bring memories of those places into battle.

- **Martial Artists** are a rare breed that hone their bodies to evenly match Pokémon. They’re licensed to join their teammates on the battlefield.

Expand your available Bonus Moves to include the following from the subclass you have:	

Coach
: Psych Up, Helping Hand, Lucky Chant

Hiker
: Sandstorm, Sunny Day, Rain Dance, Snowscape

Martial Artist
: Karate Chop, Seismic Toss, Feint

## Rank 4
### Coach
Cheer Orders
: 2 AP. Choose an Order given by an allied Trainer or yourself this round. That Order applies to all allies this round.

Teamwork Orders
: 1 AP. If your Pokémon uses the same Move as an ally this round, they both gain Advantage on the attack roll.

It’s In You!
: You can invert an ally’s negative Skill Rank for one minute if you have a minute beforehand to pump them up.

### Hiker
Field Sync Orders
: 2 AP. Your Pokémon’s Move this round changes to the Type associated with the Zone’s terrain or weather (your choice) for the rest of the battle.

Pickup
: Once per Long Rest, you may roll on the Pickup Ability table and add or subtract your Endurance skill to modify the result.

### Martial Artist
Bonding Orders
: 1 AP. Any status problems or stat drops inflicted on your Pokémon this round affect you instead. (If you already have the status problem, your Pokémon is still affected.)

Battle Pals
: You can substitute your social skills with their respective physical skills if you have battled the target.

## Rank 5

### Coach
Double Play
: You can use two Orders in the same round.

### Hiker
Parasol
: Any immunity an ally on the field has to damage from Hail and Sandstorm extends to the entire party.

### Martial Artist
Fighter
: You can register yourself as a member of your Team in addition to your 6 Pokémon. You have 5 Move Slots and your Moveset is your Class’ Bonus Moves.

## Rank 6
Expand your available Bonus Moves to include the following from the subclass you have:

Coach
: Coaching, After You, Entrainment

Hiker
: Dig, Surf, Fly

Martial Artist
: Darkest Lariat, High Jump Kick, Endure


## Rank 7

### Coach
Rival! Orders
: 1 AP. Choose a foe Trainer. You and the Trainer can use each other's Orders for the rest of the battle.

Time Out! Orders
: 5 AP. When the round’s choices are revealed, they are also wiped away. All choices must be made again. The AP cost for this Order is still consumed.

Responsibility
: If an ally suffers consequences from a failed Skill Check, you can suffer those consequences instead.

### Hiker
Fleet Feet Orders
: 5 AP. Your Pokémon’s Bonus Move gains +1 Priority this round. Your Pokémon can travel 2 Zones for free before their turn if they use a Bonus Move.

Guide
: You and your Pokémon can clear the way for other Trainers. Travel obstacles that require a skill check are wiped away whenever you beat the DC by 5 or more.

### Martial Artist
Tag In Orders
:2 AP. You switch with your Pokémon at the end of the round.

Reckless Behavior
: If you or your Pokémon take damage outside of battle but don’t Faint, heal that damage.


## Rank 8
### Coach
Go Team!
: Once per Long Rest, you can inspire any amount of allies to redo a Skill Check.

### Hiker
Got All I Need
: You and your party can take a Long Rest anywhere, no matter the environment.

### Martial Artist
Goof
: You can intentionally fail a Social skill check before rolling. If you do, you gain Advantage on any one other Skill check made before your next Long Rest.


## Rank 9
Expand your available Bonus Moves to include the following from the subclass you have:

Coach
: Baton Pass, Instruct, Ally Switch

Hiker
: Electric Terrain, Grassy Terrain, Misty Terrain, Psychic Terrain

Martial Artist
: Storm Throw, Focus Punch, Protect


## Rank 10
### Coach
Lead Cheer
: Once per Long Rest, you can give your allies Advantage on all their rolls that round.
### Hiker
Strange Weather
: Once per Long Rest, when you change the weather, the previous weather does not stop.
### Martial Artist
All Together
: Once per Long Rest, you can add Parental Bond to your Starter Pokémon’s Abilities between rounds.
