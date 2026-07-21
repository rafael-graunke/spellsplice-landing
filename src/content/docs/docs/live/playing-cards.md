---
title: Card Display
description: The two ways to put a card on screen, and what each one does to the card.
---

To put a card on screen, drag it onto the **Card Display** panel for that
player. As soon as you start dragging, the panel splits into two drop zones.
Which one you drop on decides what happens to the card.

![The card display panel](/docs-assets/live/card-display.png)

## Play and Highlight

![The Play and Highlight drop zones](/docs-assets/live/card-display-drop-zones.png)

### Play

The blue zone: "Remove card from origin and display for Ns."

The card **leaves where it came from** (out of the hand, out of the annotation)
and goes on screen for the configured display duration, then clears itself. A
blue countdown bar along the bottom of the panel shows the time remaining.

Use it for a card actually being cast: it comes out of the hand, is shown, and
disappears on its own.

### Highlight

The purple zone: "Display the card till you decide to remove it."

The card **stays where it came from** and goes on screen until you take it down
by hand. No timer, no countdown bar.

Use it to keep a card up while it is being discussed, without moving it out of
the player's hand.

### Side by side

| | Play | Highlight |
| --- | --- | --- |
| **Card leaves its origin** | Yes | No |
| **Clears itself** | Yes, after the display duration | No, you clear it |

Dragging from the [library](/docs/live/library) is the exception on the first
row. The library is a permanent source, so nothing is consumed either way and
Play and Highlight differ only by the timer.

## While a card is on screen

![A card on the display, with its controls](/docs-assets/live/card-display-active.png)

- **X** (top right) takes the card down immediately, whichever way it went up.
- **Flip** (the refresh icon at the bottom) appears for double-faced cards and
  turns the card over, on the overlay too.
- The **countdown bar** only appears for a played card, and restarts if you play
  another card over it.

Empty, the panel reads "Nothing on screen" / "Drop a card to show it".

## Settings

![The card display settings button](/docs-assets/live/card-display-settings.png)

The **gear** icon jumps straight to the Card Display configuration: display
duration, position on the frame, and entrance animation. See
[Card Display configuration](/docs/overlay/card-display).
