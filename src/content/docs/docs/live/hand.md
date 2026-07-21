---
title: Player Hand
description: The cards in a player's hand, which is what the hand stack overlay renders.
---

**Player Hand** holds the cards currently in that player's hand. This panel is
the source of truth for the hand stack overlay, what is listed here is what
viewers see.

![The player hand panel](/docs-assets/live/hand.png)

## Adding and removing cards

Drag cards in from the [library](/docs/live/library) (drawing a card), or from
an annotation (returning a card to hand).

Drag a card out to:

- the **library**, to remove it from hand (discard, mill, whatever it was)
- an **annotation**, to move it there (say, into the graveyard)
- the **card display**, to show it, see
  [Playing and Highlighting Cards](/docs/live/playing-cards)

## Clearing the hand

![The clear hand button](/docs-assets/live/hand-clear.png)

The trash icon empties the hand in one go. It is disabled when the hand is
already empty.

Empty state reads "No cards in hand".

:::note
How the hand renders on the overlay (strip width, stack direction, where new
cards land) is configured separately, see
[Hand Stack](/docs/overlay/hand-stack).
:::
