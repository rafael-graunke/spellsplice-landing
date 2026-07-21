---
title: Overlay Configuration
description: How the Spellsplice overlay is built, and where to configure each element.
---

The overlay is what viewers see on top of your match: a transparent
1920x1080 frame made of stacked **elements**, each configured on its own. This
section walks through every element and its settings, one page at a time.

## The elements

| Element | What it shows | Page |
| --- | --- | --- |
| **Scoreboard** | Player names, decks, life, wins | [Scoreboard](/docs/overlay/scoreboard) |
| **Hand Stack** | A player's cards in hand | [Hand Stack](/docs/overlay/hand-stack) |
| **Annotations** | Labelled boxes of called-out cards | [Annotations](/docs/overlay/annotations) |
| **Card Display** | A large card popup on reveal | [Card Display](/docs/overlay/card-display) |

Two more pages cover things that span every element:

- [Anchors & Offsets](/docs/overlay/anchors-offsets) — the placement system
  every element uses.
- [Layer Order](/docs/overlay/layer-order) — which element draws on top when
  they overlap.

And two for saving and extending your look:

- [Presets](/docs/overlay/presets) — bundle every setting into one shareable file.
- [Custom Scoreboard SVG](/docs/overlay/scoreboard-svg) — design your own
  scoreboard graphic.

## Where the settings live

Open the overlay configuration panel. Its sections mirror this documentation:
**Scoreboard**, **Hand Stack**, **Annotations**, and **Card Display** each have
their own section, while **General** holds [presets](/docs/overlay/presets) and the
[layer order](/docs/overlay/layer-order). Every change saves automatically in
your browser.

:::note
Streaming live? Once your overlay looks right, see
[Broadcasting to OBS](/docs/live/broadcasting-obs) to get it on screen.
:::
