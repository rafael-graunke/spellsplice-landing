---
title: Custom Scoreboard SVG
description: Author your own scoreboard graphic with id-bound live fields and conditional visibility.
---

Spellsplice can render any SVG you provide as the scoreboard, then bind live
player data into it at render time. You design the graphic in any SVG editor
(Illustrator, Inkscape, Figma export) and mark the dynamic parts with **ids**
and **data attributes**. Spellsplice does the rest.

## How substitution works

At render time Spellsplice parses your SVG and, for each field mapping, finds
the element whose `id` matches and replaces its **text content** with the live
value. Because it targets elements by `id` (not by matching text), it survives
exporters that fragment text into per-character `<tspan>`s.

Two mechanisms are available:

1. **Field binding** — replace an element's text with a live player field.
2. **Conditional visibility** — show/hide an element based on match state.

## 1. Binding a field to an element

Give the text element in your SVG a unique `id`, then map it in the scoreboard
config's `fieldMappings`:

```xml
<text id="left.life">20</text>
<text id="right.life">20</text>
```

```json
"fieldMappings": [
    { "id": "left.life",  "field": "life", "side": "left" },
    { "id": "right.life", "field": "life", "side": "right" }
]
```

- **`id`** — must exactly match the element `id` in the SVG.
- **`field`** — one of `name`, `deckName`, `standing`, `pronouns`, `life`,
  `wins`. See the field table on the
  [Scoreboard](/docs/overlay/scoreboard#player-fields) page.
- **`side`** — `left` or `right`; picks which player's value is used.

The text you put in the SVG (`20` above) is just a design-time placeholder; it
is overwritten at render time.

`field` is the fixed data-field name; the element `id` is whatever you choose,
they need not match. The bundled default scoreboard, for instance, binds the
`deckName` field to an element with `id="deck"`.

:::tip
Use side-prefixed ids like `left.name` / `right.name` in a **shared** scoreboard
so both players' elements stay distinct. In a **per-player** scoreboard the
`left` and `right` graphics are separate, so plain ids like `name` are fine.
:::

## 2. Conditional visibility

Any element with a `data-visible-if` attribute is shown or hidden based on a
comparison against live match state. Perfect for best-of-3 win pips, "match
point" flags, or low-life warnings.

```xml
<!-- first win pip: visible once this side has >= 1 win -->
<g id="left-pip-1" data-side="left" data-visible-if="wins>=1"> ... </g>

<!-- match point: visible when either side reaches 2 wins -->
<g data-visible-if="wins>=2" data-side="right"> ... </g>

<!-- low-life warning driven off the explicit right side -->
<g data-visible-if="right.life<=5"> ... </g>
```

Rules:

- **Operators** — `>=`, `<=`, `==`, `!=`, `>`, `<`.
- **Field** — any numeric field (`life`, `wins`). Non-numeric comparisons fail
  safe (hidden).
- **Side** — the field may be side-prefixed (`left.` / `right.`). Without a
  prefix, the element's `data-side` attribute applies (defaulting to `left`).
- An expression with no operator is treated as always visible; a malformed one
  fails safe to hidden, so a typo hides the element rather than breaking layout.

Visibility is applied via inline style, so it overrides an authored default of
`visibility: hidden` (a common "hidden by default" export from editors). Author
your conditional elements however you like; the condition wins.

### Real example: best-of-3 win pips

The bundled **Pro Tour** presets (`pro-tour-main-stage`, `pro-tour-side-table`)
use exactly this to drive win pips. Each pip has a filled and an empty variant,
toggled off the `wins` count:

```xml
<g data-visible-if="left.wins>=1"> <!-- filled pip 1 --> </g>
<g data-visible-if="left.wins<1">  <!-- empty pip 1  --> </g>
<g data-visible-if="left.wins>=2"> <!-- filled pip 2 --> </g>
<g data-visible-if="left.wins<2">  <!-- empty pip 2  --> </g>
```

They are shared scoreboards, so the fields are side-prefixed (`left.` /
`right.`), and the SVG is embedded inline in the preset JSON at full
1920x1080. Open either preset file under `public/presets/` to see the complete
markup.

## Wiring your SVG into the config

Set the `svg` field of the scoreboard config to your SVG source string
(replacing `"@bundled-default"`), then list your `fieldMappings`:

```json
"scoreboard": {
    "mode": "shared",
    "shared": {
        "svg": "<svg ...>...</svg>",
        "anchor": "top-center",
        "scale": 100,
        "offset": { "x": 0, "y": 24 },
        "fieldMappings": [
            { "id": "left.name",  "field": "name", "side": "left" },
            { "id": "left.life",  "field": "life", "side": "left" },
            { "id": "right.name", "field": "name", "side": "right" },
            { "id": "right.life", "field": "life", "side": "right" }
        ]
    }
}
```

In the app you provide the SVG by **file upload** (Scoreboard section >
Design > Import), not by pasting JSON or SVG markup. Field mappings are entered
separately under **Advanced**: for each mapping you type the element `id` by
hand into a text field, then pick its `field` and (for shared scoreboards) its
`side`. The app does not scan your SVG or list its ids for you, so keep the ids
handy from your SVG editor.

## Authoring checklist

- Give every dynamic text element a unique, stable `id`.
- Keep ids meaningful and side-prefixed for shared boards (`left.wins`).
- Add `data-visible-if` (+ `data-side`) to anything conditional.
- Use a 16:9-friendly `viewBox` and design at overlay resolution; `scale` in the
  config fine-tunes final size.
- Test with extreme values (long names, 2-digit life, negative life) so text
  doesn't overflow.
