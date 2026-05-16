---
characterClass: Type Expert
description: Type Experts master a specific Type of Pokémon, of course. They embody their Types both in philosophy and combat.
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

{{ description }}

Each Type’s Expert has different enough features to be an entirely new class, branching at level 1 with entirely different features for every Type:

{{ collections.typeExpert | eleventyNavigation | eleventyNavigationToHtml({ showExcerpt: true }) | safe }}
