---
title: Player Panel
description: Name, deck, life total, and match wins for one player.
---

The panel at the top of each side. It holds the identity and the two numbers the
scoreboard cares about.

![The player panel](/docs-assets/live/player-panel.png)

## Name and deck

The panel shows the player's **name** and **deck name**.

![Player name and deck name with the edit button](/docs-assets/live/player-panel-identity.png)

The **pencil** icon opens the Players dialog, where name, deck, and the other
player fields are edited. Those fields are what scoreboard field mappings bind
to, see [Scoreboard](/docs/overlay/scoreboard#player-fields).

## Life

![The life control](/docs-assets/live/player-panel-life.png)

Minus and plus step the life total by 1. For a bigger swing, type straight into
the number field instead of clicking eleven times.

## Wins

![The wins control](/docs-assets/live/player-panel-wins.png)

Minus and plus step match wins by 1. Minus is disabled at 0.

Wins are what best-of-3 win pips read from in a scoreboard SVG, see
[Custom Scoreboard SVG](/docs/overlay/scoreboard-svg#2-conditional-visibility).
They survive a match reset, so bump wins first, then reset.
