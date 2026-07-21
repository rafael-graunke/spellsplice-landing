---
title: Hand Stack
description: Configure each player's hand of cards — placement, size, growth direction, and overflow.
---

The hand stack shows a player's cards in hand as a stack of card title strips.
Configure it in the **Hand Stack** section. Each player is set up separately,
under **Left Player** and **Right Player**.

![Hand Stack configuration section](/docs-assets/overlay/hand-stack.png)
<!-- TODO: replace placeholder screenshot -->

## Position

- **Anchor** and **Offset (px)** place the stack on the frame. See
  [Anchors & Offsets](/docs/overlay/anchors-offsets).

## Sizing

- **Card strip width (px)** — how wide each card strip is drawn.
- **Max height (px)** — caps the stack's height. When the hand is taller than
  the cap, the cards nearest the anchor stay and the rest collapse into a
  **+N pill** at the growing edge. Set it to `0` for no cap (show every card).

## Behaviour

- **Grow** — the direction the stack extends from its anchor as cards are added:
  **Top-down**, **Bottom-up**, or **Center**. This also decides which end holds
  the newest card and where the **+N** overflow pill sits.
- **New card** — where a freshly added card lands: **Append** (at the far end)
  or **Prepend** (at the anchor end).

<details>
<summary>Config reference (JSON)</summary>

```json
{
    "anchor": "bottom-left",
    "offset": { "x": 8, "y": -24 },
    "cardStripWidth": 340,
    "growth": "bottom-up",
    "insert": "append",
    "maxHeight": 0
}
```

- `cardStripWidth` — strip width in pixels (default `340`).
- `growth` — `top-down`, `bottom-up`, or `center` (default `bottom-up`).
- `insert` — `append` or `prepend` (default `append`). Optional.
- `maxHeight` — pixel cap, `0` = unlimited (default `0`). Optional.

</details>
