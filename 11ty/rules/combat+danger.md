---
title: Combat & Danger · Rules
layout: rules-page
tags: topLevelSection
eleventyNavigation:
  key: Combat & Danger
  parent: Rules
  order: 4
---

{{ collections.topLevelSection | eleventyNavigation | eleventyNavigationToHtml | safe }}

# Combat & Danger

Pokémon Trainers often find themselves in conflict with other Pokémon. Combat has special rules for when and how characters act. Time during battle is counted in **Rounds**, and characters keep their decisions secret until the last second.

A **Round** is the amount of time it takes for every character involved in the battle to act. A character acts by taking a **Turn**, which is shared between a Trainer and their Pokémon. Turns are taken in an order determined by the Pokémon’s **Speed,** beginning with the fastest Pokémon and ending with the slowest.

Some effects happen *between rounds*, and state so in their rules. When multiple effects happen between rounds, the GM decides the order if necessary.

Pokémon: Tabletop Version uses a **double-blind** system for combat. This means involved characters keep their Action and Order for the round secret, then all reveal them at the same time. In battles between Trainers, even the Pokémon chosen to start the battle are decided in secret. For physical play, write down your decision on a scrap of paper and reveal it at the same time as everybody else. Online games have digital tools to replicate this.

> **Note:** Feel free to talk about your decisions when making them! Communicating lets players work together for powerful strategies.

A player’s Turn is made up of: **Travel**, **Order**, and **Action**.

- **Travel** is a Pokémon and Trainer’s ability to change Zones. Both the Pokémon and Trainer can travel to an adjacent Zone before taking an action.
- **Orders** are Trainer commands that affect the battlefield, the participants, or both. Orders happen at the beginning of the round, and last for that round unless they state otherwise. Orders always use AP, so do not feel forced to make an Order every round.
- **Actions** are active events that your Pokémon or Trainer perform. Some actions have additional rules to determine how they resolve.

## Actions

### Guard

If a Trainer and their Pokémon are in the same Zone, the Trainer can become the target for anything targeting their Pokémon this round, but any received damage gets +1 Effectiveness.

### Items/Switch

Items are used and Pokémon are switched before any other Actions, even Moves.

Switched-in Pokémon can appear in the same Zone as the old Pokémon, or the Trainer’s current Zone.

### Flee

To flee a battle, make an Acrobatics check. Foes can contest this Acrobatics check without using up an action. When a whole party decides to flee, only half the party needs to win the contested check.

### Cheer

If all of a Trainer’s Pokemon are fainted, they can use their action to Cheer. On the Trainer’s SPE, Cheer creates one of these effects:

- Reset an ally’s Dropped Stats.
- Cure an ally’s Status Problem.
- Heal an ally 3 Ticks.
- Destroy a Boss Pokemon’s barrier.

### Improvise

Any action a character takes that’s not covered by Guard, Item, Switch, Move, Flee, or Cheer is considered *improvising*. Improvisation is generally resolved through Skill checks, and can have as many effects as the table agrees on. If an improvised action imitates a Move, use the rules for that Move. Examples:

- Tossing a nearby stone: performs Rock Throw, even if the character doesn’t normally know it.
- Pushing a tree over: Athletics check, performs Wood Hammer, even if the character doesn’t normally know it, with an ATK related to the size of the tree and how successful the check was.
- Cooperating with another character to give them Advantage on their dice rolls this round.
- Causing a distraction using Intensity, Bluster, or Deception skill rolls.

### Using Moves

#### Range

Before anything, decide what target(s) your Move hits. Some Moves can target multiple characters, and others don’t target characters at all:

- **Self:** only targets the user.
- **Allies:** can only target characters on the user’s side. Whether that includes the user is described by each Move.
- **Foes in Zone:** target all opposing characters in a Zone.
- **Others in Zone:** target everybody except the user in a Zone, including allies.
- **Field:** doesn’t target any character, but changes the battlefield somehow.

In addition to the above, Moves can be either **Contact** or **Ranged**, which certain effects care about. Ranged Moves can also target adjacent Zones; Contact Moves can only target characters/things in the same Zone as the user.

#### Attack Rolls

After targeting, make a d20 **Attack Roll** for each target the Move has. These rolls decide if the Move hits the target, how much damage it does, if the Move was a Critical Hit, and if the Move triggers its Secondary Effect.

- If the Move is a Status Move that targets Self, allies, or the Field, you don’t need an Attack Roll.
- If the Move is marked as Can’t Miss, you still make an Attack Roll for extra damage and possible Critical Hits.
- If the Move is normally used on foes but you’re targeting allies for some reason — like Ember on an ally with Flash Fire — you still make an Attack Roll.

> *⚠️ Note: it’s tempting to only make one Attack Roll for Moves with multiple targets, but that varies wildly and causes the effect to be all-or-nothing. Roll for each target to avoid swinginess.*

#### Accuracy Check

To hit with a Move, first check the Move’s Accuracy Check. Take the Attack Roll’s result, add the attacker’s Accuracy Rate, then subtract the target’s Evasion. *(Accuracy Rate and Evasion are 0 by default.)* If the Accuracy Check result matches or is higher than the Move’s Accuracy, the Move hits. Otherwise, it misses.

#### Damage

Damaging Moves inflict damage on their targets, which causes HP loss. To calculate damage:

1. Start with the Move’s Power
2. Add the appropriate attacking Stat:
   - **Physical** Moves add **Attack (ATK)**
   - **Special** Moves add **Special Attack (SATK)**
3. Add +10 if the Pokémon shares a Type with the Move. (That’s STAB \[Same-Type Attack Bonus\] if you’re familiar with that term.)
4. Finally, the Attack Roll adds bonus damage: the bonus damage from an attack roll is half the attack roll’s result, rounded down.

For example, a Charmander rolls 13 to attack Bulbasaur with Ember.
**Ember** is a Special Fire-Type Move with a Power of 4.
**Charmander** has 5 SATK.
**Bulbasaur** is Grass/Poison-Type and has 6 SDEF.

1. Charmander adds 4 (Ember’s Power) + 5 (Charmander’s SATK) + 10 (Same-Type Attack Bonus) + 6 (Attack Roll ÷ 2) to hit Bulbasaur with 25 Fire-Type Damage.
2. Bulbasaur subtracts its SDEF of 6 from the 25 damage, making 19.
3. The damage is 2× from Grass-Type’s Fire Weakness, making 38. [TODO]
4. Bulbasaur loses 38 HP.

#### Critical Hits

Sometimes, attacks bypass a target’s guard and hit a vital point. Damaging Moves are **Critical Hits** on a natural 20 Attack Roll. (Some Moves, like Slash, can crit on lower rolls.)

The user’s **Critical Rate** substat modifies when Attack Rolls are Critical Hits. A +2 Critical Rate means the user’s Critical Hits occur on rolls of 18–20, instead of only on 20.

If an attack is a Critical Hit, then the bonus damage from the Attack Roll becomes +20 and the attack ignores negative Accuracy modifiers and positive Evasion modifiers.

#### Effect Rates

Some Moves have additional effects on high Attack Rolls. (For example, the “Bite” Move makes its target Flinch on an Attack Roll of 17+.) These secondary effects happen after damage is applied.

Changes to the user’s **Effect Rate** substat modify this chance like Critical Rate does with Critical Hits.

#### Save Check

If your Pokemon has a Status Problem, they may need to pass a Save Check before their attack can trigger at all. If your Pokemon’s attack roll fails to beat or match the Save Check DC, they suffer the effects listed by the Status Problem.

Changes to the user’s **Save Bonus** modify this roll.

#### Move Keywords

Moves can have special effects with their own rules. These keywords describe those special interactions.

##### Priority

Priority changes when things happen during a round.

- The default Priority for Moves and Actions is 0.
- Moves and Actions that have a different Priority will state that they have one, such as “Priority +1”, “Priority -3”, etc.
- Moves or Actions with higher Priorities happen before Moves or Actions with other Priorities.
- If multiple characters use a Move or Action with the same Priority, the one with the highest SPE goes first.

##### Double Strike

**Double Strike** Moves, such as Bonemerang, trigger on-hit/contact twice. Add the user’s ATK/SATK twice and add the defender’s DEF/SDEF twice.

##### Multi-strike

**Multi-strike** Moves, like Fury Swipes, ‘hit’ a random number of times. They do not halve the bonus damage from the damage check to represent this mechanically. The number of times they ‘hit’ trigger effects that many times, such as with [the Static Ability](https://ptv.ti.gt/abilities/#static), or [the Rocky Helmet item](https://ptv.ti.gt/items/#rocky-helmet).

 Roll | Number of hits
----: | :-------------
   ≤5 | 2
 6–10 | 3
11–15 | 4
  ≥16 | 5

##### Protect

Moves that **Protect** the user prevent Moves from affecting the user, both their damage and effects. Characters can’t use Protecting Moves if they used a Protecting Move or Endure on their previous turn.

##### Hazard

**Hazards** remain in the Zone they were used in, and trigger against foes that enter the Zone.

##### Bind

**Binding** Moves inflict [HP loss](#hp-loss) between rounds as long as the user and target are both on the field. Whenever the user or target travels between Zones, the other comes with.

##### Drain

**Draining** Moves heal the user when they hit a target by an amount specified in the Move.

##### Exhausting

**Exhausting** Moves tire the user and make them spend the next round recharging. The user isn’t Exhausted if the Move misses all targets or fails.

##### Disable

When a Move is **Disabled**, it can’t be chosen and automatically fails if used somehow.

##### HP Loss

If an effect says a target **loses HP**, that HP loss does not interact with any Stats, bonus damage, or Effectiveness outside of Immune.

##### Recoil

A Move with **Recoil** inflicts HP Loss on the user based on how much damage was done to the target — the Move’s description will say how much.

### Struggle

When a Pokemon has 0 AP, it can use a Move called Struggle. Struggle is a Physical Move with 4 Power, no Type, it can’t miss, and it recoils for 3 Ticks of HP.

## Stats and Other Numbers

- **Battle Stats** are the character’s ATK, DEF, SATK, SDEF, and SPE.
- **Accuracy Rate** and **Evasion** change a character’s chances to hit. The user’s Accuracy Rate is added to their attack roll, and the target’s Evasion is subtracted.
- **Save Bonus** changes a character’s chance to be affected by status problems. Add the Save Bonus to save checks.
- **Critical Rate and Effect Rate** change an attack’s chances of adding special effects.
- **STAB (Same-Type Attack Bonus)** adds +10 to their damage.

### Boosts and Drops

**Boosts** and **Drops** are temporary changes to a character’s Stats. They represent circumstances such as a flaring fighting spirit, an opponent’s threat display, or getting covered in feathers. Moves like Growl or Sword Dance are the most common way to Boost or Drop Stats.

A Stat can’t be Boosted by more than 20 points, or Dropped by more than 20 points. A Stat Dropped past 0 is treated as 0. A character’s Boosts and Drops wear off when they leave battle.

## Entering and Leaving Battle

Abilities, Moves, and other effects may mention “enters battle” or “leaves battle”:

- A character **enters battle** when they are a starting combatant when a battle begins, when they’re switched in, or when they join a battle they previously were not part of.
- A character **leaves battle** when they switch out, successfully flee, Faint, or are present when the battle ends.
- In weird circumstances, do whatever the table agrees on, appealing to the GM as the final word.

## Zones

If the battle uses a map, the GM divides the battlefield into general Zones as they see fit. Traveling to an adjacent Zone is free, but traveling two or more Zones in one turn requires the character’s action.

Examples of Zones in a forest battle:

- Center of clearing
- Near big hollow tree
- Around burbling brook, where Water Moves can be easily improvised
- In a ditch, where Moves with “Mud” in the name get +1 Effectiveness
- A mushroom patch, where each character in it rolls 2d10 between rounds to roll on the Wild Mushroom table. (The mushrooms can also be harvested outside of battle for use as held items, where they are eaten when the holder enters battle.)

### Terrain

Zones can be filled with special terrains with extra effects for characters standing on them. (Therefore, airborne characters do not gain these effects.) Some examples:

- **Electric Terrain**
  + Gives Immunity to Sleep
  + Damaging Electric Moves get +10 damage
- **Misty Terrain**
  + Gives Immunity to persistent Status Problems and Confusion
  + Dragon Moves get −1 Effectiveness
- **Psychic Terrain**
  + Gives Immunity to Moves with Priority +1 or greater
  + Damaging Psychic Moves get +10 damage
- **Grassy Terrain**
  + Heals 1 Tick between rounds
  + Bulldoze, Earthquake, and Magnitude get −1 Effectiveness
  + Damaging Grass Moves get +10 damage
- A polluted landscape may permanently act like it has Toxic Spikes.
- Deep water may halve the SPE of characters that aren’t airborne or ideally-suited to swimming.

### Weather

The current weather can also affect battle. Although it usually covers the entire battlefield, the world of Pokemon is strange and whimsical; some situations may have weather in a small area. The most common types of weather are:

- **Harsh Sunlight** gives damaging Fire Moves +10 damage and damaging Water Moves –10 damage.
- **Rain** gives damaging Water Moves +10 damage and damaging Fire Moves –10 damage.
- **Sandstorms** deal 1 Tick of HP between turns to everything but Ground, Rock, and Steel-Types. Rock-Types get +10 SDEF while in a sandstorm.
- **Snow** gives Ice-Types +10 DEF.
- **Strong Winds** removes the Weaknesses of Flying-Types and prevents other Weather.
- **Hail** deals 1 Tick of HP between turns to everything but Ice-Types.
- **Midnight** gives +5 Crit Rate to everyone, and Ghost- or Dark-Type Moves get +5 damage.

## Physical Dangers

### Fall Damage

Colliding with the ground from heights of 10 feet or higher counts as a Physical Normal-Type Move with 8 Power.

- The Move gets +2 Power for each additional foot beyond 10.
- Terminal velocity restricts its Power to a maximum of 50.
- Soft landings, like water or leaf piles, usually reduce the damage by –10.
- A DC 10 Acrobatics Check reduces the damage by how much the check succeeds by.
- Flying and Levitating characters avoid fall damage, unless their flight/levitation is restricted somehow.

### Suffocating Damage

If a character can’t breathe for more than 1 minute, they lose a Tick of Health between each Round until they can breathe again. Some Pokémon can breathe in water, earth, or smoke — or don’t need to breathe at all.

## Surprise & Ambushes

Although most battles between Trainers begin with introductions, characters can sometimes surprise each other in ambush.

- If a Trainer is surprised, they must reveal their first Pokémon to the opponent, instead of using the double-blind system.
- If a wild Pokémon is surprised, it must reveal its first Move instead of using the double-blind system.

## Rests and Healing

Pokémon Centers restore perfect health within seconds, but you can’t always reach one. **Rest** is any period of time when characters aren’t busy with strenuous physical or mental activity. Usually rest means sleeping or relaxing, but what exactly counts is up to the GM.

A **Long Rest** takes at least 8 hours, and completely restores Health, AP, and Status Problems. Pokémon can relearn any Moves they’ve forgotten or Level-Up Moves up to their level during a long rest.

A **Short Rest** takes at least 30 minutes, and restores 3 Ticks of Health and 3 AP. Meals tend to count as Short Rests.

Rests may be less effective or even impossible in harsh circumstances, such as inclement weather, stultifying heat, loud clamors, etc. Player preparation, equipment, or improvisation may be used to handle these travel hazards.

Sometimes, serious injury or illness needs extensive time and care to heal, even with Center technology. These are considered plot points, not game mechanics.

## Capturing Pokémon

Trainers can take an action to throw a Pokéball at a wild Pokémon. Roll d20 and add the Ball’s modifier, if any. If you roll at least the target’s Catch DC, you capture it. A natural 20 is a “critical capture” and always succeeds. If two or more people throw a Poké Ball, the highest roll wins. The captured Pokemon keeps any HP and Status Problems when they are caught.

To find a Pokémon’s **Catch DC**:

1. Start with the species’ Catch DC from the Pokédex. (Or guess: Caterpie’s is 2, Mewtwo’s is 24.)
2. Lower the Catch DC by −1 for each Status Problem the target suffers from.
3. Finally, modify the Catch DC depending on the target’s Health:
   - ½ or less: −2
   - A Tick or less: Automatic success.
   - Fainted Pokémon can’t be captured: Poké Balls refuse for safety reasons.

The GM may assign a caught Pokémon’s Gender, Nature, and Abilities, or let you roll for random ones:
Roll 2d6. You choose which of the corresponding Stats are raised and lowered. A roll of 6 means you pick the Stat.

Poké Balls fail if they try to capture a Pokémon already registered to a Trainer, or a Boss Pokémon the GM isn’t ready to allow capture for.

### Other Ways to get Pokémon

- Trades
- Surprise Trade: roll 3 random Pokémon, GM selects one to trade for your offered mon
- Gifts

## Z-Moves

Trainers can use a Z-Crystal to turn a Pokémon’s Move into a superpowerful Z-Move.

- The Trainer must not have activated a Z-Move already for the battle.
- Their Pokémon must hold a Z-Crystal that matches the Type of the base Move.
- The Trainer must wear a Z-Ring.

If the base Move is Physical or Special, the Move becomes the Z-Move listed in its Z-Effect, gains the Power listed in its Z-Effect, keeps its original Kind and AP Cost, and can’t miss. Characters that protect against damaging Z-Moves still lose 3 Ticks of HP.

If the base Move is Status, its Z-Effect occurs before its usual effects.

Some Pokémon have a signature Z-Move that can be used with a special Z-Crystal for that species. For example, Incineroar can turn its Darkest Lariat into the Malicious Moonsault Z-Move with a held Incinium-Z crystal.

## Mega Evolution

Trainers can use Mega Stones for Mega Evolution, a temporary supercharged evolution with 3 requirements:

- The Pokémon holds their species’ Mega Stone.
- Their Trainer wears a Key Stone. (Usually embedded in a Mega Ring.)
- Their Trainer hasn’t Mega Evolved a Pokémon yet for that battle.

Mega Evolution changes Base Stats, replaces the Starting Ability, and may change the Pokémon’s Types. Check the Pokédex entry for specifics.

Mega Evolution lasts for an entire battle, or until the Pokémon Faints.

## Dynamax

A Pokémon can Dynamax if it meets the following requirements:

- Can only be done in certain locations, called Power Spots.
- Their Trainer wears a Dynamax Band.
- Their Trainer hasn’t Dynamaxed a Pokémon yet for that battle.

Dynamaxing a Pokémon makes it look as big as a skyscraper and increases its battle prowess for its next 3 turns:

- The Pokémon doubles its current HP and its Max HP. On reverting, halve both its current and Max HP.
  + Effects that trigger on a percentage of the Pokémon’s Max HP and/or its Ticks use its doubled Max HP.
  + Effects that heal or remove an amount of HP based on Max HP use its non-Dynamaxed Max HP to calculate the amount.
- Dynamaxed Pokémon are immune to:
  + Flinching
  + Moves that vary based on Weight
  + One-hit KO Moves
  + Effects that swap its Abilities with another character’s
  + Opponents forcing them to switch out or flee
  + Having its Move choices disabled or restricted.
- The Pokémon’s known Moves turn into their corresponding Max Moves:
  + Status Moves turn into Max Guard.
  + Damaging Moves turn into the appropriate Max Move of their type, and calculate their new Power by adding half of the Move’s Z-Power. If the result exceeds 24, cap it at 24.

### Gigantamax

If a Pokémon has the Gigantamax Factor, it can Gigantamax — a special kind of Dynamax with a different appearance. Only specific individuals of certain species can Gigantamax. Each Gigantamax Pokémon has an exclusive Max Move known as a G-Max Move. Other than that G-Max Move, Gigantamax is identical to Dynamax.

### Max Moves

Max Move |  Type | Kind | Power | Base Move | Range | Description
-------: | :---: | :---: | :---: | :-------: | :---: | -----------
**Max Airstream** | Flying | ★ | ★ | Damaging Flying | Ranged | A magnified jetstream shears the target and Boosts the user’s and allies’ SPE by +5.
**Max Darkness** | Dark | ★ | ★ | Damaging Dark | Ranged | A magnified midnight pressures the target and Drops all foes’ SDEF by –5.
**Max Flare** | Fire | ★ | ★ | Damaging Fire | Ranged | A magnified burner ignites the target and creates Harsh Sunlight for 5 rounds.
**Max Flutterby** | Bug | ★ | ★ | Damaging Bug | Ranged | A magnified bugness worms into the target and Drops all foes’ SATK by –5.
**Max Geyser** | Water | ★ | ★ | Damaging Water | Ranged | A magnified stream hammers the target and creates Rain for 5 rounds.
**Max Guard** | Normal | Status | — | Any Status | Self | A magnified shield Protects from all Moves, including Max Moves and Z-Moves.
**Max Hailstorm** | Ice | ★ | ★ | Damaging Ice | Ranged | A magnified coldsnap frosts the target and creates Snow for 5 rounds.
**Max Knuckle** | Fighting | ★ | ★ | Damaging Fighting | Ranged | A magnified fist wallops the target and Boosts the user’s and allies’ ATK by +5.
**Max Lightning** | Electric | ★ | ★ | Damaging Electric | Ranged | A magnified thunderhead strikes the target and creates Electric Terrain for 5 rounds.
**Max Mindstorm** | Psychic | ★ | ★ | Damaging Psychic | Ranged | A magnified psychosis overwhelms the target and creates Psychic Terrain for 5 rounds.
**Max Ooze** | Poison | ★ | ★ | Damaging Poison | Ranged | A magnified goop swamps the target and Boosts the user’s and allies’ SATK by +5.
**Max Overgrowth** | Grass | ★ | ★ | Damaging Grass | Ranged | A magnified grassland rasps the target and creates Grassy Terrain for 5 rounds.
**Max Phantasm** | Ghost | ★ | ★ | Damaging Ghost | Ranged | A magnified hollow mortifies the target and Drops all foes’ DEF by –5.
**Max Quake** | Ground | ★ | ★ | Damaging Ground | Ranged | A magnified landslide buries the target and Boosts the user’s and allies’ SDEF by +5.
**Max Rockfall** | Rock | ★ | ★ | Damaging Rock | Ranged | A magnified stone crushes the target and creates a Sandstorm for 5 rounds.
**Max Starfall** | Fairy | ★ | ★ | Damaging Fairy | Ranged | Magnified starshine constellates the target and creates Misty Terrain for 5 rounds.
**Max Steelspike** | Steel | ★ | ★ | Damaging Steel | Ranged | Magnified metallurgy rebuffs the target and Boosts the user’s and allies’ DEF by +5.
**Max Strike** | Normal | ★ | ★ | Damaging Normal | Ranged | A magnified attack hits the target and Drops all foes’ SPE by –5.
**Max Wyrmwind** | Dragon | ★ | ★ | Damaging Dragon | Ranged | A magnified supernature daunts the target and Drops all foes’ ATK by –5.
**Max Shutheart** | Shadow | ★ | ★ | Damaging Shadow | Ranged | A magnified fever-pitch rushes the target and creates Shadow Sky for 5 rounds.

#### G-Max Moves

| G-Max Move | Type | Kind | Power | Base Move | Pokémon | Range | Description |
| ----: | :---: | :---: | :---: | :---: | :---: | :---: | :---- |
| **G-Max Befuddle** | Bug | ★ | ★ | Max Flutterby | Butterfree | Ranged | Gigantic bewitching scales score the target and spread malady. Roll d20: 1–7: Poisons all foes. 8–14: Paralyzes all foes. 15+: Puts all foes to Sleep. |
| **G-Max Cannonade** | Water | ★ | ★ | Max Geyser | Blastoise | Ranged | A gigantic water bombardment besieges the target and for 4 turns, deals 2 Ticks of damage between rounds to non-Water-Type foes. |
| **G-Max Centiferno** | Fire | ★ | ★ | Max Flare | Centiskorch | Ranged | Innumerable gigantic flames sear and Fire Spin the target for the next 4 rounds, even if the user leaves battle. |
| **G-Max Chi Strike** | Fighting | ★ | ★ | Max Knuckle | Machamp | Ranged | A gigantic advancing charge pummels the target and Boosts the user’s and their allies’ Critical Rate by +3. |
| **G-Max Cuddle** | Normal | ★ | ★ | Max Strike | Eevee | Ranged | A gigantic embrace smothers the target and Infatuates all compatible foes. |
| **G-Max Depletion** | Dragon | ★ | ★ | Max Wyrmwind | Duraludon | Ranged | A gigantic decay debrades the target and adds 2 to the AP Cost of their last-used Move; Disables it if it’s a Max Move. |
| **G-Max Drum Solo** | Grass | ★ | 26 | Max Overgrowth | Rillaboom | Ranged | A gigantic drumbeat thumps the target, ignoring their Abilities. |
| **G-Max Finale** | Fairy | ★ | ★ | Max Starfall | Alcremie | Ranged | A gigantic fusillade rockets into the target and heals the user and allies by 2 Ticks. |
| **G-Max Fireball** | Fire | ★ | 26 | Max Flare | Cinderace | Ranged | A gigantic meteor fouls the target, ignoring their Abilities. |
| **G-Max Foam Burst** | Water | ★ | ★ | Max Geyser | Kingler | Ranged | A gigantic froth churns the target and Drops foes’ SPE by –10. |
| **G-Max Gold Rush** | Normal | ★ | ★ | Max Strike | Meowth | Ranged | Gigantic gold *Koban* pound the target and Confuse all foes. Scatters coins worth 1,000× the user's level. The winner of the battle gets to pocket the coins. |
| **G-Max Gravitas** | Psychic | ★ | ★ | Max Mindstorm | Orbeetle | Ranged | A gigantic orbital gravity well spaghettifies the target and creates the effects of the Move Gravity for 5 turns. |
| **G-Max Hydrosnipe** | Water | ★ | 26 | Max Geyser | Inteleon | Ranged | A gigantic squirtgun sharpshoots the target, ignoring their Abilities. |
| **G-Max Malodor** | Poison | ★ | ★ | Max Ooze | Garbodor | Ranged | A gigantic stink chokes the target and Poisons all foes. |
| **G-Max Meltdown** | Steel | ★ | ★ | Max Steelspike | Melmetal | Ranged | A gigantic ferrofluid envelops the target and inflicts the effect of Torment on all foes. |
| **G-Max One Blow** | Dark | ★ | ★ | Max Darkness | Urshifu (Single Strike) | Ranged | A gigantic single strike bruises the target and ignores Protection (even Max Guard). |
| **G-Max Rapid Flow** | Water | ★ | ★ | Max Geyser | Urshifu (Rapid Strike) | Ranged | A gigantic continuous strike rains into the target and ignores Protection (even Max Guard). |
| **G-Max Replenish** | Normal | ★ | ★ | Max Strike | Snorlax | Ranged | A gigantic surge of restoration buffets the target and makes the user and allies each roll d20: on 11+, restore all berries they consumed this battle. |
| **G-Max Resonance** | Ice | ★ | ★ | Max Hailstorm | Lapras | Ranged | A gigantic melodic coruscation encircles the target and creates an Aurora Veil for 5 turns, even without Snow. |
| **G-Max Sandblast** | Ground | ★ | ★ | Max Quake | Sandaconda | Ranged | A gigantic *habūb* scours the target and Sand Tombs the target for the next 4 rounds, even if the user leaves the battle. |
| **G-Max Smite** | Fairy | ★ | ★ | Max Starfall | Hatterene | Ranged | A gigantic divine punishment routes the target and Confuses all foes. |
| **G-Max Snooze** | Dark | ★ | ★ | Max Darkness | Grimmsnarl | Ranged | A gigantic sleepiness soporifies the target and inflicts the effects of Yawn on it. |
| **G-Max Steelsurge** | Steel | ★ | ★ | Max Steelspike | Copperajah | Ranged | A gigantic metalforming barbs the target and creates a Hazard: Foes joining the battle lose 2 Ticks of HP. (Apply Weakness/Resistance, but not stats.) |
| **G-Max Stonesurge** | Water | ★ | ★ | Max Geyser | Drednaw | Ranged | Gigantic tetrapods break over the target and create Stealth Rocks for foes. |
| **G-Max Stun Shock** | Electric | ★ | ★ | Max Lightning | Toxtricity | Ranged | A gigantic electrocution guitar-smashes the target and makes all foes roll a DC10 Save: on success, Poisons that character. On failure, Paralyzes them. |
| **G-Max Sweetness** | Grass | ★ | ★ | Max Overgrowth | Appletun | Ranged | A gigantic nectar wave drowns the target and heals the user’s and allies’ status conditions. |
| **G-Max Tartness** | Grass | ★ | ★ | Max Overgrowth | Flapple | Ranged | A gigantic acid wave dissolves the target and Drops foes’ Evasion by –2. |
| **G-Max Terror** | Ghost | ★ | ★ | Max Phantasm | Gengar | Ranged | A gigantic phantom horrifies and Traps the target. |
| **G-Max Vine Lash** | Grass | ★ | ★ | Max Overgrowth | Venusaur | Ranged | Gigantic whipping vines crack the target and for 4 turns, deal 2 Ticks of damage between rounds to non-Grass-Type foes. |
| **G-Max Volcalith** | Rock | ★ | ★ | Max Rockfall | Coalossal | Ranged | Gigantic ejecta deluge the target and for 4 turns, deal 2 Ticks of damage between rounds to non-Rock-Type foes. |
| **G-Max Volt Crash** | Electric | ★ | ★ | Max Lightning | Pikachu | Ranged | A gigantic heavy thunderstorm strikes the target and Paralyzes all foes. |
| **G-Max Wildfire** | Fire | ★ | ★ | Max Flare | Charizard | Ranged | Gigantic hellfire razes the target and for 4 turns, deals 2 Ticks of damage between rounds to non-Fire-Type foes. |
| **G-Max Wind Rage** | Flying | ★ | ★ | Max Airstream | Corviknight | Ranged | A gigantic downdraft strikes the target and removes Terrain, Hazards, and foes’ Reflect, Light Screen, Mist, or Aurora Veil. |

## Terastallization

With the right conditions, Trainers can use Tera Orbs to Terastallize their Pokémon — a temporary Type-boosted state marked by a crystalline appearance and a jeweled crown — with 2 requirements:

- Their Trainer has a Tera Orb.
- Their Trainer hasn’t Terastallized a Pokémon already since the last Long Rest.

Each Pokémon has an assigned Tera Type; unless the GM assigned a specific Tera Type or Tera Shards were used to change it, a Pokémon’s Tera Type is their first regular Type. Terastallization lasts for an entire battle, or until the Pokémon Faints.

- Changes the Pokémon’s Typing to the Tera Type without removing STAB from their original Types. (The Pokémon gets the Weaknesses, Resistances, and Immunities of only their Tera Type, but keep the STAB from their original Type(s).)
- Terastallized Pokémon gain STAB on Moves of their Tera Type — this stacks with STAB from their original Types.
- Moves of the Tera Type with 5 or less Power become 6 Power, as long as they don’t have Multi-strike or Priority +1 or greater.
- Effects (such as those from Moves like Forest’s Curse or Abilities like Protean) can’t make a Terastallized Pokémon change their Type.

## Status Problems

**Burned**
Burned characters get −15 ATK, and they lose 1 Tick of Health between rounds.
Fire-Types can’t be burned.

**Frozen**
Frozen characters can’t travel or act. Add a DC 15 Save Check to their first attack roll in the round to thaw. Fire damage cures freezing. If a character is frozen for 3 or more turns, they automatically thaw at the start of their next turn.
Ice-Types and targets in harsh sunlight can’t be frozen.

**Paralyzed**
Paralyzed characters get −10 SPE. Add a DC 3 Save Check to their first attack roll in the round. If unsuccessful, they can’t act or travel.
Electric-Types can’t be paralyzed.

**Poisoned**
Poisoned characters lose 2 Ticks of Health between rounds.
Poison and Steel-Types can’t be poisoned.

**Badly Poisoned**
Characters that are Badly Poisoned lose only 1 Tick of Health the first round, but the number of Ticks doubles each round afterward. Effects that refer to Poisoned also apply to Badly Poisoned.

**Confused**
Confused characters add a DC 6 Save Check to their first attack roll each round. If unsuccessful, they can’t act this round, and hit themselves with a typeless Physical attack with 4 Power. This attack can’t miss or crit, and has −1 Effectiveness. On 15+, the character is cured of Confusion.
If a character has stayed Confused for 3 rounds, cure them at the end of their turn. Confusion is also cured by switching out or leaving the battle.

**Flinch**
Flinching characters can’t act for the rest of the round.

**Infatuation**
Infatuated targets add a DC 11 Save Check to their attack rolls. If unsuccessful, they cannot target the character they are infatuated with. Infatuation is cured by switching or leaving the battle.

**Asleep**
Sleeping characters can’t travel or act. The first Round of sleep, characters don’t wake on their own. The following Round, add a DC 10 Save Check to their first attack roll in the round to wake up. If failed, they automatically awaken at the start of their next turn instead.
Sleeping Trainers can’t travel, use Orders, Items, or other actions, but their Pokémon still fight normally otherwise.

**Fainted**
Characters with 0 or less Health Faint. Fainted characters are unconscious, can’t travel or act, and are cured of all other Status Problems.
Fainted Trainers can’t use Orders, Items, or other actions, but their Pokemon still fight normally otherwise.

**Trapped**
Trapped characters can’t flee, switch out, or travel to other Zones.
Ghost-Types can’t be Trapped.
