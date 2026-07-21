---
title: Broadcasting to OBS
description: Get the live overlay onto your stream as a transparent OBS Browser Source.
---

Live Mode renders to a standalone overlay page at `/overlay`: a transparent
1920x1080 canvas. The controller (the app window where you drive the match) and
the overlay page talk to each other over a WebSocket through a small local
relay, so they can run in separate windows.

## 1. Run the relay

The relay is a single Python file with no dependencies beyond the standard
library. Download `spellsplice-relay.py` from the **Connection** section (the
"clicking here" link in the yellow notice), then run it:

```bash
python3 spellsplice-relay.py
```

![The Connection section with the relay download link](/docs-assets/live/obs-relay-download.png)

It prints the URL to use:

```
Spellsplice relay listening on ws://localhost:8765
```

Pass a port as an argument if 8765 is taken:

```bash
python3 spellsplice-relay.py 9000
```

Leave this terminal open for the whole broadcast. Closing it drops the
connection between the controller and the overlay.

:::caution
The relay binds to `127.0.0.1` only, so the browser, OBS, and the relay all have
to run on the **same machine**. Since the app is served over HTTPS, a plaintext
`ws://` address on a LAN IP is blocked as mixed content. To drive the overlay
from a second machine, expose the relay over a `wss://` tunnel (cloudflared,
ngrok) and use that URL instead.
:::

## 2. Connect the controller

Open the **Connection** section and put the relay's URL in **WebSocket URL**:

```
ws://localhost:8765
```

![The WebSocket URL field filled in](/docs-assets/live/obs-connection-url.png)

**Test Connection** checks the relay without leaving the dialog. A green
"Connected Successfully!" means the relay is up and reachable; "Connection
failed" means it is not running, the port is wrong, or the address is being
blocked.

![Connection test result states](/docs-assets/live/obs-connection-test.png)

**Start** runs the same check, saves the URL, and drops you into the controller.

## 3. Add the overlay to OBS

Once the URL is valid, the Connection section shows the full overlay URL under
"Paste this into OBS's Browser Source URL field:", with a copy button.

![The overlay URL with its copy button](/docs-assets/live/obs-overlay-url.png)

In OBS, add a **Browser Source** to your scene and paste it in. Set the size to
**1920 x 1080**.

![Adding a Browser Source in OBS](/docs-assets/live/obs-browser-source.png)

![The Browser Source properties: URL, width, height](/docs-assets/live/obs-browser-source-properties.png)

The overlay page background is transparent, so it composites straight onto your
scene: **no chroma key and no cropping**. Order the source above your capture in
the scene list.

![The finished scene with the overlay above the match capture](/docs-assets/live/obs-scene-result.png)

## How updates reach the overlay

OBS runs its Browser Source in an isolated profile, so the overlay keeps its own
copy of the configuration. When you change life totals, wins, hands, or displayed
cards in the controller, those updates are pushed to the overlay live over the
socket.

:::note
The overlay's **look** (scoreboard, hand stack, card display) is set up in
[Overlay Configuration](/docs/overlay). This page is only about getting that
overlay onto your stream.
:::
