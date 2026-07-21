---
title: Getting Started
description: Install nothing, open the app, and produce your first overlay.
---

Spellsplice is a web app. Nothing to install: open
[app.spellsplice.com](https://app.spellsplice.com) in Chrome or Edge.

:::note
Video **export** relies on WebCodecs and the File System Access API, which today
means a Chromium browser (Chrome / Edge). Everything else works in any modern
browser.
:::

## Timeline vs Live Mode

The two apps do not share state. Pick based on your workflow:

| | Timeline | Live Mode |
| --- | --- | --- |
| **Input** | Recorded video/audio files | A live match, driven by hand |
| **Output** | A baked `.mp4` / `.webm` export | A browser overlay for OBS |
| **Timing** | Events placed on a timeline | Events pushed in real time |
| **Best for** | Post-production VODs | Live streams |

## Your first timeline overlay

1. Open the app and choose **Create new project**.
2. Drag a video file into the **Sources** panel on the left.
3. Drag the source onto the video track to create a clip.
4. Add players and drop events (life changes, draws, reveals) onto each
   player's track rows at the right timestamps.
5. Use **File > Export** to bake the overlay into a downloaded video.

Projects autosave to your browser. Use **File > Save** to download a `.sps`
project file (a ZIP) you can reopen later. Media files are not bundled in the
`.sps`; on reopen you relink them.

## Your first live overlay

Live Mode renders a transparent overlay page that OBS captures as a **Browser
Source** (no chroma key, no cropping). In outline:

1. Start the local relay (download `spellsplice-relay.py` from the Live Mode
   **Connection** dialog); the controller and overlay sync through it over a
   WebSocket.
2. Open the app, choose **Start Live Mode**, and point **Connection** at the
   relay.
3. Configure the overlay (scoreboard, hand stack, card display). See
   [Overlay Configuration](/docs/overlay).
4. Copy the `/overlay?ws=...` URL from the connection dialog into an OBS
   **Browser Source**. The page is transparent and already 1920x1080.
5. Drive life, wins, hands, and reveals from the controller during the match.

Full walkthrough: [Broadcasting to OBS](/docs/live/broadcasting-obs).
