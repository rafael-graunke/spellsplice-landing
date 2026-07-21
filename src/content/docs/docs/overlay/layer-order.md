---
title: Layer Order
description: Control which overlay element draws on top when elements overlap.
---

When overlay elements overlap, layer order decides which one draws on top. Set
it under **Layers** in the **General** section.

![Layer order drag list](/docs-assets/overlay/layer-order.png)

## Reordering

The **Layers** list has a drag handle on each row. Drag a layer up or down to
restack it. **The top of the list is drawn on top of everything below it.**

The four layers are:

- **Card Display**
- **Hand Stack**
- **Annotations**
- **Scoreboard**

For example, put **Scoreboard** at the top of the list and it will always draw
over the hand stack and card display where they overlap.

:::note
**Annotations** is reserved for an upcoming feature and has no settings of its
own yet, but it already takes part in layer order.
:::

<details>
<summary>Config reference (JSON)</summary>

```json
"layerOrder": ["cardDisplay", "hand", "annotations", "scoreboard"]
```

- Valid ids: `cardDisplay`, `hand`, `annotations`, `scoreboard`.
- In the stored array, the **first** entry is the bottom layer (drawn first) and
  the **last** is on top. The config panel shows the reverse (top row = topmost
  layer), so the default above draws the scoreboard over everything.

</details>
