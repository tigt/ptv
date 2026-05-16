---
characterClass: Caretaker
description: Caretakers don’t focus on the moment-to-moment, but on healthy growth. They use accessories and special techniques to keep their Pokémon at their very best.
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

# Caretaker

{{ description }}

## Rank 1
Caretaker Moves
: Hidden Power

Caretaker
: Your Pokemon can use Moves outside of battle for 0 AP.


## Rank 2
Nurtured Natures
: Your Pokémon’s Natures double their skill changes (±6 instead of ±3).

Battle Pickup Orders
: 1 AP. During battle, if your Pokémon isn’t holding an Item, roll d20 at the beginning of the round. They pick up and hold an Item based on the result:
    - 1–5: Heart Scale (How lucky!)
    - 6–10: Berry Juice (Heals 20 HP below 3 Ticks.)
    - 11–15: Focus Sash (Can't be KO'd in one shot)
    - 16+: Red Card (switches out after damage)

Amie Orders
: 2 AP. At the beginning of the round, you lose 2 Ticks and your Pokémon heals 2 Ticks.


## Rank 3: Class Evolution!
Expand your available Bonus Moves to include the following: Return, Frustration

Caretakers evolve at Rank 3 into Chefs, Stylists, or Artists.

- **Chefs** excel at cooking nutritious meals. A healthy breakfast is the strongest way to start the day, and they often take care of even their human partners.

- **Stylists** groom their Pokémon and accessorize them with the latest fashions. A Pokémon feels their best when they look their best, and items help.

- **Artists** focus on the big picture, composing their team as if they were one. Their team is a statement, not just a strategy.

### Chef
Sweets
: Once per Rest, Chefs can create a Sweet. Sweets are eaten when their holder’s HP drops below 3 Ticks. Any feature or Order that references Berries also applies to Sweets.
    - Berry: Crit +3
    - Love: Save +3
    - Flower: Effect +3
    - Clover: Evasion +3
    - Star: Accuracy +3
    - Strawberry: Can be used on a Berry or Sweet to change its trigger to: “HP below 5 Ticks”.
    - Ribbon: Can be used on a Berry or Sweet to change its trigger to: “hit by a Super-Effective Move”.

### Stylist
Accessorize
: Once per Rest, a Stylist can create an Accessory. An Accessory held by a Stylist’s Pokémon emulates one of the holder’s Abilities that the holder does not already have.

### Artist
Artist Moves
: Sketch

Theme Team
: You can have a 7-Pokémon team as long as all Pokémon share a theme decided by you and okayed by the GM (‘eeveelutions’, ‘pink’, ‘snakes’, ‘christmas’, etc.)

## Rank 4
### Chef
Waste Not Orders
: 1 AP. If your Pokémon faints or switches out this round, it swaps its Held Item with its replacement.

Agriculture
: Whenever you find Berries in the wild, double the amount procured.

### Stylist
Waste Not Orders
: 1 AP. If your Pokémon faints or switches out this round, it swaps its Held Item with its replacement.

Weaver
: You can create any outfit given a minute to prepare, and automatically succeed Skill Checks to swap outfits instantly.

### Artist
My Style Orders
: 1 AP. If your Pokémon’s Move is resisted by the target (even after Abilities), it costs 0 AP.

Artisan
: You can create representative depictions of anything you’ve seen before in seconds.

## Rank 5
### Chef
Recipe
: You can combine two berries with the same trigger into a single edible item you name. If a Pokémon aside from your own consumes this “berry”, they gain one effect of your choice.
### Stylist
Wardrobe
: Your Pokémon can hold two Held Items at once. They are treated like a single Held Item with both effects.
### Artist
Palette
: When you catch a Pokémon, you can add +1 to all its Social Skills, +2 to 2 of its Social Skills, or +3 to one of its Social Skills.
: You may adjust the Social Skills of any previously-acquired Pokémon when you take this Feature.

## Rank 6
Expand your available Bonus Moves to include the following from the subclass you have:

Chef
: Recycle, Stuff Cheeks

Stylist
: Bestow, Fling

Artist
: Doodle


## Rank 7
### Chef
Eat Up Orders
: 3 AP. Your Pokémon immediately eats any edible item it’s holding at the beginning of the round.

Professional
: Chefs can set up a fine dining experience for at least 4 in under a minute and are never without the tools to do so, even if they lack a Bag.

### Stylist
Henshin! Orders
: 3 AP. At the beginning of the round, your Pokémon switches its Held Item with one from your Bag.

My Brand
: Your Pokémon can use _your_ Social Skill Ranks for its Skill Checks if it is wearing an outfit you chose for it.

### Artist
Uniform Orders
: 3 AP. For each Pokémon on your team that also knows the Move your Pokémon uses this round, add +1 to the attack roll.

Great Minds
: You get Advantage on Social Skill Checks made with or targeting Trainers who own a Pokémon matching your team’s theme.


## Rank 8
### Chef
Well-Balanced Breakfast
: Once per Long Rest, you can turn any failed Physical Skill Check into a success by eating a berry. (This does mean you don’t get any bonus effects from exceeding the Skill Check.)
### Stylist
Influencer
: Once per Long Rest, any ally can use your Skill Ranks for a Skill Check if they are wearing something you made.
### Artist
One for All
: Once per Long Rest, when your Pokémon makes a Skill Check you can also add the Skill Ranks of every other Pokémon on your team in the same evolutionary family.


## Rank 9
Expand your available Bonus Moves to include the following from the subclass you have:

Chef
: Teatime, Belch

Stylist
: Switcheroo, Thief

Artist
: Splash (Look, you already got Sketch. What more could you want?) <!-- todo: this might also be a good place to do something like a custom move -->


## Rank 10

### Chef
Appetizer
: Once per long rest, you may feed your Starter Pokémon a berry before battle starts that takes effect when it enters battle.
### Stylist
Fashionability
: Your Starter Pokémon can wear an Accessory without using a Held Item slot.
### Artist
Inspiration
: During battle, your Pokémon may forget its Bonus Move and relearn Sketch between rounds. You can only do this once per Long Rest.
