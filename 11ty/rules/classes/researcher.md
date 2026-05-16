---
characterClass: Researcher
description: Researchers spend their time studying and learning. They’re experts in their field, improving the world through knowledge and patience.
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

# Researcher

{{ description }}

## Rank 1
Researcher Moves
: Swift, Lock-On, and Copycat

Researcher
: When you enter a named location, make an Insight check. The GM recalls one interesting fact for every 10 DC.


## Rank 2
Deep Study
: Your Pokémon gain a 5<sup>th</sup> regular Move slot. (Their Bonus Move slot is still distinct.)

Learn Orders
: 1 AP. Choose a target. You learn one Move or Order the target has yet to use.

Understudy Orders
: 1 AP. Your Pokémon’s Move gets -1 Priority, but uses the highest Attack Roll made by an ally this round.


## Rank 3: Class Evolution!
Researchers evolve at Rank 3 into Doctors, Engineers, or Pokéologists.

- **Doctors** ensure that in a world full of battle, nobody needs to get too hurt. They find the body an amazing world of discoveries all on its own.

- **Engineers** are masters of items and devices. They can supplement any shortcomings with truly incredible technology of the future!

- This world is widely inhabited by mysterious creatures called Pokémon! Pokémon have mysterious powers. They come in many shapes and live in many different places. **Pokéologists** want to learn about them all.

Expand your available Bonus Moves to include the following from the subclass you have:

Doctor
: Acupressure, Rest, Life Dew

Engineer
: Magnet Rise, Autotomize, Gravity

Pokéologist
: Hold Back, Block, Imprison


## Rank 4
### Doctor

Learn Medic Orders
: 1 AP. Choose a target. You learn the target’s current HP, two highest Skills, and one Move or Order the target has yet to use. This Order replaces Learn.

Doctor’s Orders
: 2 AP. Choose a character. The target automatically fails any saving throws this round, but is cured of all status problems at the end of the round.

Medical History
: You can tell what a patient has been up to by analyzing their health. Choose a target, make an Insight check, and the GM describes one fact about the target’s history per 10 DC.

### Engineer

Learn: Systems Orders
: 1 AP. Choose a target. You learn one Item the target is holding, the value of 1 Skill of your choice, and one Move or Order the target has yet to use. This replaces Learn.

Technology! Orders
: 2 AP. Choose a foe. That foe can use an Item for free at the beginning of the round. If they do, you can also use an Item for free at the beginning of the round.

Gadgeteer
: You can create single-use machines given one minute to prepare. These machines do not sell for much.

### Pokéologist
Learn: Pokéologist Orders
: 1 AP. You learn a target’s Abilities, two lowest Skills, and one Move or Order the target has yet to use. This Order replaces Learn.

Experiment Orders
: 3 AP. If your Pokémon uses the same Move as last round, it gains maximum bonus damage on the attack roll.

Professor
: You have encyclopedic knowledge of Pokémon. Make an Insight check, and the GM provides 1 interesting fact per 10 DC.

## Rank 5
### Doctor
Overheal
: Your Pokémon can be healed over their Maximum HP by Items during battle. This extra HP goes away when the battle is over.

### Engineer
Out of Beta
: Your Pokémon’s Moves learned from Technical Devices cost 1 less AP.

### Pokéologist
Natural Efficiency
: Your Pokémon’s Moves learned from leveling up cost 1 less AP.

## Rank 6
Expand your available Bonus Moves to include the following from the subclass you have:

Doctor
: Mist, Heal Pulse, Healing Wish

Engineer
: Shift Gear, Magnet Bomb, Iron Defense

Pokéologist
: Disable, Assist, Heal Block


## Rank 7
### Doctor
Diagnostic Orders
: 5 AP. You can use any Item that restores HP or AP at the end of the round in addition to your turn.

First Aid
: You can save friends from themselves. If an ally faints from damage outside of battle, you can revive them at 1HP with any Item that restores HP.
### Engineer

X-Shield Orders
: 3 AP. If your Pokémon holds an X-Item, its corresponding Stat cannot Drop past +0 for the rest of the battle.

Technical Orders
: If your Pokémon holds a TM, the device can be activated to use its Move as your own, but without adding your Stats or STAB. (You still pay its AP cost.)

Box Link
: You can switch Pokémon from your PC Storage System during any Rest.

### Pokéologist
Derivative Orders
: 5 AP. At the beginning of the round, your Pokémon gains +1 Resistance to any Types that damaged it last round. This lasts until the battle ends or you use this Order again.

Strong Results
: You help Pokémon become their platonic ideal. Your Pokémon gain an extra bonus equal to their Level if they make a Skill Check they would be considered talented in.


## Rank 8
### Doctor
Medical Care
: You can stabilize fainted Pokémon or Trainers enough for them to make skill checks, but they cannot participate in combat.

### Engineer
Team Preview
: You can see a Trainer's team inside their Pokeballs with an Insight check (one creature per 10 DC). Targets can resist this with Bluster/Deception if they know you’re doing it.

### Pokéologist
Talk to the Pokémon
: You can imitate the cries of Pokémon and can understand basic concepts from their speech.


## Rank 9
Expand your available Bonus Moves to include the following from the subclass you have:

Doctor
: Purify, Safeguard, Heal Block

Engineer
: Steel Roller, Techno Blast, Self-Destruct

Pokéologist
: Snipe Shot, Simple Beam, Haze


## Rank 10
### Doctor
Emergency Care
: Once per Long Rest, you can revive all Pokémon on your team that were fainted before battle begins with 1 HP.

### Engineer
Vendor Buff
: Once per Long Rest, you can use one Item as battle begins.

### Pokéologist
Team Study
: Your Pokémon can learn Bonus Moves from your allied Trainers.
