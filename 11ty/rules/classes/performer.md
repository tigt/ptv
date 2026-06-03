---
characterClass: Performer
description: Life is a performance, and Performers are ready to make it their best. Rather than treating every conflict as mere battle, they see any challenge as a chance to show off.
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

# Performer

{{ description }}

## Rank 1
Performer Moves
: False Swipe, Laser Focus, and Copycat

Performer
: Your Social Skill Checks gain Advantage if they have more than one target.
: You may add your Rank in Performer to any Social Skill Check that targets a character other than yourself.


## Rank 2
Inspiring
: Your Pokémon’s self-targeting Moves may instead target an ally in the same Zone.

Appeal Orders
: 2 AP. This round, all Moves cost 2 less AP. (This includes your foes’ Moves.)

Introducing! Orders
: 2 AP. Any ally other than your Pokémon that switches in next round can also use a self-targeting Move.


## Rank 3: Class Evolution!
Performers evolve at Rank 3 into Musician or Star:

- **Musicians** influence the world through tunes, making art that can change the heart. They communicate with their friends through emotion.

- **Stars** were born to be seen and heard. They thrive in the spotlight, and know how to use that attention to get what they need.

Expand your available Bonus Moves to include the following from the subclass you have:

Musician
: Disarming Voice, Sing, Metal Sound

Star
: Speed Swap, Mimic, Metronome


## Rank 4
### Musician
Celebrate Orders
: 3 AP. An ally of your choice gains 3 AP at the beginning of the round.

Busking
: You automatically succeed on Skill Checks to attract or repel a crowd. This even works on wild Pokémon outside of battle.
### Star
Copycat Orders
: 3 AP. Name an Order. If anybody in the battle knows that Order, you use it this round for 0 AP.

Disguise
: You can disguise yourself as other people. This disguise uses Composure, and is usually contested through Insight.


## Rank 5
### Musician
Critically Sung
: When you roll a critical hit on a Move that doesn’t Always Crit (like Storm Throw), you can choose to not take the critical damage bonus in order to turn an ally's Move next round into a critical hit.

### Star
Critically Starring
: When your ally's Pokémon rolls a critical hit, your Pokémon gets +5 to its next attack roll.


## Rank 6
Expand your available Bonus Moves to include the following from the subclasses you have:

Musician
: Quiver Dance, Swords Dance, Revelation Dance

Star
: Heart Swap, Yawn, Spotlight


## Rank 7
### Musician
Revmix Orders
: 1 AP. Revelation Dance matches the user’s second Type this round.

Closing Act Orders
: 1 AP. Lunar Dance heals _all_ allies that switch in next round.

With Feeling Orders
: 1 AP. Quiver Dance raises ATK/DEF instead of SATK/SDEF.

King’s Dance Orders
: 1 AP. Swords Dance raises DEF instead of ATK.

Musically-Inclined
: You can add your highest Social Skill Rank to any Social Skill Check as long as you are playing music as it is made.

### Star
Stakes Orders
: 5 AP. All Stat Boosts/Drops this round receive an extra ±5.

Stage Cue
: If nobody is observing you, you can appear in any other space within eyesight without explanation.


## Rank 8
### Musician
Intermission
: Once per Long Rest, you can cure all status conditions and damage caused outside of battle for the entire party.

### Star
Diva
: You can intentionally fail a Physical skill check before rolling. When you do this, you can automatically pass any one other Skill check made before your next long rest.


## Rank 9
Expand your available Bonus Moves to include the following from the subclasses you have:

Musician
: Lunar Dance, Perish Song, Relic Song

Star
: Role Play, Encore, Substitute


## Rank 10
### Musician
Duet
: Once per Long Rest, your Trainer can also use a Bonus Move for free. This Move applies at the end of the round and applies any Stat Boosts to your Pokémon. Revelation Dance’s Type used this way is Normal.

### Star
The Star
: You can switch in your Starter Pokémon between rounds.
