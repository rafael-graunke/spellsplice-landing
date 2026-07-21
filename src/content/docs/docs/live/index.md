---
title: Live Mode
description: Drive an overlay in real time from a controller screen while a match plays out.
---

Live Mode is the real-time half of Spellsplice. It turns a plain match feed into
a broadcast: a scoreboard with names, decks, life totals and match score, each
player's hand laid out along the edge of the frame, and cards popping up full
size as they are played. Viewers get the information they would otherwise have
to guess at, and you get it without touching a video editor.

Here is what that looks like on stream:

![The Spellsplice overlay composited over a match in OBS](/docs-assets/live/overlay.png)

The overlay is a transparent page OBS composites straight over your camera or
capture, no chroma key and no cropping, see
[Broadcasting to OBS](/docs/live/broadcasting-obs).

You drive it from a **controller** screen as the match plays out: life totals,
wins, cards in hand, cards on screen. Everything you do is pushed to the overlay
instantly.

![The Live Mode controller screen](/docs-assets/live/controller.png)

The screen is mirrored, one column of panels per player, with match-wide
controls in the middle. Each panel has its own page:

- [Player Panel](/docs/live/player-panel) — name, deck, life, wins.
- [Match Controls](/docs/live/match-controls) — resetting between matches.
- [Library](/docs/live/library) — the decklist, and importing it.
- [Player Hand](/docs/live/hand) — what the hand stack overlay shows.
- [Card Display](/docs/live/playing-cards) — putting a card on screen.
- [Annotations](/docs/live/annotations) — Graveyard, Top Deck, and your own.

The overlay's **look** (positions, scoreboard graphic, animations) is set up
separately, see [Overlay Configuration](/docs/overlay). To get the overlay onto
your stream, see [Broadcasting to OBS](/docs/live/broadcasting-obs).

## Moving cards around

Almost everything in Live Mode is drag and drop. Cards live in three places (the
library, the hand, and annotations) and you drag them between those, or onto the
card display.

One rule covers all of it: the **library is a permanent source**, so dragging
out of it copies the card. Dragging out of a hand or an annotation **moves** the
card, it leaves where it came from.
