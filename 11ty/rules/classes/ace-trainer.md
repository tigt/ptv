---
characterClass: Ace Trainer
description: Ace Trainers focus on making their Pokémon the best they can be. On or off the battlefield, these Trainers are more in sync with their partners than anyone else.
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

# Ace Trainer

{{ description }}

## Rank 1

Ace Training
: You automatically succeed at checks to discern motivations of wild Pokémon, and newly-captured Pokémon under your Trainer Level will level-up to match your Level right away.

### Signature Techniques
Ace Trainers use **Signature Techniques** to tweak Moves for their personal battle style.

- During Long Rests, you may modify your Pokémon’s Moves with Signature Techniques.
- Modified Moves get a new name and fit in any Move slot (even the Bonus Move slot).
- Pokémon can only know one modified Move at a time, and Moves can only have one Signature Technique at a time.
- Pokémon keep modified Moves even if they forget the original Moves.

You start with the following Signature Techniques:

Mind-or-Matter Technique
: Apply this technique to change a Move from Physical to Special, or vice-versa.

Insult-to-Injury Technique
: If the original Move is a Status move, it becomes a Physical or Special Move (player’s choice choice) with a Power of 1, and applies its original effects after successfully damaging its target(s).

## Rank 2

You gain the following Orders:

Together Orders
: 1 AP. Your Pokémon’s next Move this round spends your character’s AP instead of their own.

Ace Orders
: At the beginning of the round, you may move your Pokémon’s Boosts from one Stat to another, for 2 AP per +5.

You also get a new Signature Technique:

Nuanced Technique
: If the original Move can Boost/Drop a Stat by 5 or more, apply this technique to reassign 5 of those Boosts/Drops to another Stat.
    - If it affects multiple Stats, pick one to change.
    - You can’t change a Boost into a Drop, or vice-versa.
    - Accuracy and Evasion aren’t Stats.

    > **⚘ Example:** This technique on Swords Dance could reassign 5 of its 10 ATK Boosts to DEF, SATK, SDEF, or SPE.

## Rank 3: Class Evolution!

Ace Trainers evolve at Rank 3 into Lancer, Fencer, or Trickster subclasses:

- **Lancers** charge headlong into challenges and never let up. Their strategies focus on unyielding offense and not letting anything thwart them.

- **Fencers** endure hardship and shoulder burdens so their friends don’t have to. Their strategies focus on defensive momentum and drawing in attacks.

- **Tricksters** keep everybody guessing, acting before anyone can figure them out. Their strategies focus on swift cunning that changes with opponents’ decisions.

Add to your available Signature Techniques to include the following from the subclass you have:

### Lancer Techniques
Mighty Stumble Technique
: If it doesn’t miss, this Move Critically Hits on an attack roll of 1–4.

Daredevil Technique
: This Damaging Move discounts its AP cost by half and gains Recoil ½. (Add this to any Recoil it might already have.)

### Fencer Techniques
Backswing Technique
: If this damaging Move misses a target on an attack roll of 1–4, it instead doesn’t miss that target, but hits it with -1 Effectiveness.

Hippowcrates Technique
: Change any HP Loss this Move inflicts on a target into healing for that target. (The Move still obeys Type Effectiveness.)

### Trickster Techniques
Fail Forward Technique
: If it doesn’t miss, this Move’s secondary effects (if any) trigger on an attack roll of 1–4.

Radical Reinterpretation Technique
: Change which Stat this Move Boosts. If the Move Boosts multiple Stats, change only one of them.

## Rank 4

Boostable
: Your Pokémon can use a Stat-Boosting Move outside of battle to affect their next Skill Check that uses a Skill corresponding to one of the Stats Boosted by that Move. (The Move’s AP cost still must be paid.)
    ::: example
    This would let Iron Defense add +10 to a Check for either Endurance or Bluster.
    :::

### Lancer
Sword Orders
: 2 AP. At the beginning of the round, your Pokémon loses 1 Tick and adds that Tick’s HP amount as extra damage to their next Move.

### Fencer
Shield Orders
: 2 AP. Choose an ally in the same Zone as your Pokémon: single-target Moves targeting that ally this round target your Pokémon instead.

### Trickster
Crown Orders
: 1 AP. If a foe switches this round, then you may also switch your Pokémon at the end of the round.


## Rank 5
### Lancer
Unstoppable
: If a foe Protects against your Pokémon's Move, they still lose 3 Ticks.

### Fencer
Immovable
: Whenever your Pokémon finishes a round without being targeted by a foe, it restores a Tick of HP and 2 AP.

### Trickster
Uncatchable
: Your Pokémon always win Speed ties.


## Rank 6
Expand your available Signature Techniques to include the following from the subclasses you have:

### Lancer
Malpractice Technique
: Can modify Status Moves that heal self.
: Changes into a 1 AC Contact Move that inflicts HP Loss equal to the amount the user would have healed.

Wild Strikes Technique
: Change this Move from Multi-Strike to Foes in Zone or vice/versa.
### Fencer
Devil-you-Know Technique
: The user resists this Move’s Type one step further for the rest of the round.

Grandstanding Technique
: This Status Move that Drops Stats becomes Foes in Zone and increases its AP Cost by +3.
### Trickster
Psych-Out Technique
: This Move also inflicts any status problems the user has on the target.

Wild Strikes Technique
: Change this Move from Multi-Strike to Foes in Zone or vice/versa. <!-- TODO: this reads more like a mistake than reuse -->


## Rank 7

### Lancer
Bullseye Orders
: 5 AP. Your Pokémon's Move gets -1 Priority, but also +1 Effectiveness if it’s Resisted. (Like a slow Tinted Lens.)

Unyielding Offense
: Your Pokémon treat any Athletics or Intensity Check result of 9 or lower as 10.

### Fencer
Stalling Orders
: 5 AP. Your Pokémon cannot faint until the end of the round, even at 0 HP.

Defensive Momentum
: Your Pokémon treat any Endurance or Bluster Check result of 9 or lower as 10.

### Trickster
Compensate Orders
: 3 AP. If your Pokémon has a Stat Dropped this round, Boost any other Stat by half that amount.

Swift Cunning
: Your Pokémon treat any Acrobatics or Deception Check result of 9 or lower as 10.


## Rank 8
Combo Skills
: You and your Pokémon can add your Skill Ranks together when you Help each other make a Skill Check.


## Rank 9
Expand your available Signature Techniques to include Speedical and the following from the subclasses you have:

Elemental Surprise Technique
: This Move gains +1 Priority, but can only be used once per battle.

### Lancer
Irritable Technique
: If this Move has a Setup turn, activate its second turn with -1 Priority instead of next Round.
: If this Move is Exhausting, change your next Move to -1 Priority instead of next Round.

### Fencer
Reliable Technique
: This Move always passes Save Checks against status problems. (So it always works even when Paralyzed, always cures Confusion, etc.)

### Trickster
Ungovernable Technique
: This Move changes from boosting the user’s Stat to dropping the target’s Stat, or vice-versa.


## Rank 10
Mega Bond
: Once per Long Rest, you can Mega Evolve your Pokémon without a Key Stone or them holding a Mega Stone. (If you do have those things, this stacks with them.)
