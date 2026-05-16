---
characterClass: Hooligan
description: Hooligans love to bend and push the limits on what’s allowed. They’re not necessarily bad, but they certainly don’t follow the same rules as everybody else.
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

# Hooligan

{{ description }}

## Rank 1
Hooligan Moves
: Low Kick, Covet, Taunt

Hooligan
: You can tell how much money a person holds at a glance. You also can roll a DC5 Intuition check for the GM to identify at least 1 Item in their possession, plus an additional item for every 5 you beat the check by.


## Rank 2
Rogue
: Your Pokémon can pick up and steal Items even if it already has a Held Item. The new Item goes into your Bag immediately.

You Too Orders
: 2 AP. If a foe used a Foes in Zone Move last round, your Pokemon can use that Move this round for 2 less AP.

Pull Down Orders
: 1 AP. At the end of the round, drop one of your Pokemon’s stats by –5. A foe of your choice Drops by the same amount. (Stats Dropped past 0 are still 0.)


## Rank 3: Class Evolution!
Hooligans evolve at Rank 3 into Roughnecks or Scoundrels:

- **Roughnecks** are tough and tumble rough business. They put everything they have into protecting their friends, but have no qualms about exploiting advantages.

- **Scoundrels** love to try and experiment with what they can get away with. Their rules differ from everybody else’s, for better or worse.

Expand your available Bonus Moves to include the following from the subclass you have:

Roughneck
: Brutal Swing, Rage, Scary Face

Scoundrel
: Substitute, Nasty Plot, Fake Tears


## Rank 4
### Roughneck

Looming Orders
: 2 AP. Your Pokémon gains maximum bonus damage on any foe shorter than it this round.

Breaker
: All inanimate objects take Super-Effective damage from you and your Pokémon.

### Scoundrel

Copycat Orders
: 3 AP. Name an Order. If anybody in the battle knows that Order, you use it this round for 0 AP.

Disguise
: You can disguise yourself as other Trainer classes. This disguise uses Composure, and is usually contested through Insight.


## Rank 5
### Roughneck
Hard Knocks
: Your Pokémon recover 1 AP whenever their Move misses or fails, and their Missed Moves do not cost AP.
### Scoundrel
Subversive
: Whenever your Pokémon Drops a foe’s Stats (outside of inflicting Status Problems), your Pokemon heals 1 Tick for every target Dropped.


## Rank 6
Expand your available Bonus Moves to include the following from the subclasses you have:

Roughneck
: Beat Up, Breaking Swipe, Obstruct

Scoundrel
: Sucker Punch, Flatter, Parting Shot


## Rank 7
### Roughneck
Max Mox Orders
: 3 AP. If your Pokémon faints a foe this round, they copy that foe’s Boosts/Drops.

Rough Aura
: Once per Long Rest, you can whip all characters in a scene into a frenzy to the point they must battle.
### Scoundrel
Kidding Orders
: 2 AP. After choices are revealed, one ally of your choice (including your Pokémon) can use a different Move than originally chosen this round.

Scoundrel Aura
: Once per Long Rest, you can make a character forget a conversation they had with you. Anything they learned or decided from the conversation is attributed to other sources.


## Rank 8
### Roughneck
Nirvana
: Once per Long Rest, you can turn any failed physical skill check into a success through violence.
### Scoundrel
Bribery
: Once per Long Rest, you may pay 500₽ to change a failed social skill check into a success. [TODO should this price scale with the check DC?]


## Rank 9
Expand your available Bonus Moves to include the following from the subclasses you have:

Roughneck
: Lash Out, Wring Out, Quash

Scoundrel
: Burning Jealousy, Trick Room, Memento


## Rank 10
### Roughneck
Mega Theft
: Once per Long Rest, if your foe uses Mega Evolution, your Pokémon also Mega Evolves without a Mega Stone or counting against the once-per-battle limit.
### Scoundrel
Z-Theft
: Once per Long Rest, if your foe uses a Z-Move you can also upgrade your Pokémon’s Move into a Z-Move without a Z-Stone or counting against the 1 per battle limit.
