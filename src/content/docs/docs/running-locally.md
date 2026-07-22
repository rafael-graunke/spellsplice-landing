---
title: Running Locally
description: Requirements and setup for building and running Spellsplice from source (the Dev channel).
---

Running from source gives you the **Dev** channel: the app on your own machine,
rebuilt as you edit. This is for contributors and anyone who wants the very
latest code. If you just want to use Spellsplice, open
[Stable or Beta](/docs/channels/) instead - no install required.

## Requirements

| Tool | Version | Notes |
| --- | --- | --- |
| [Node.js](https://nodejs.org) | 24 (see `.nvmrc`) | Use [nvm](https://github.com/nvm-sh/nvm) to match it exactly. |
| [Git](https://git-scm.com) | any recent | To clone the repository. |
| Chromium browser | Chrome or Edge | Video **export** needs WebCodecs + File System Access; other browsers run the app but cannot export. |
| [Python 3](https://python.org) | 3.x | Optional. Only needed for the Live Mode relay (see below). |

## Setup

Clone the repository and enter it:

```bash
git clone https://github.com/rafael-graunke/spellsplice.git
cd spellsplice
```

Select the Node version pinned in `.nvmrc`, then install dependencies:

```bash
nvm use      # reads .nvmrc -> Node 24
npm install
```

Start the dev server:

```bash
npm run dev
```

Vite prints a local URL (default `http://localhost:5173`). Open it in Chrome or
Edge.

![The Vite dev server running in a terminal, showing the local URL](/docs-assets/running-locally/dev-server.png)

The app's top bar shows the **Dev** badge, confirming you are on a local build.

![The app running locally with the Dev channel badge in the top bar](/docs-assets/running-locally/dev-badge.png)

## Other commands

```bash
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Live Mode relay (optional)

Live Mode drives the OBS overlay over a WebSocket through a small local relay,
`public/spellsplice-relay.py`. You only need it if you are testing Live Mode
broadcasting. Run it with Python 3:

```bash
python public/spellsplice-relay.py
```

Then point the relay URL in the app's Live Mode connection settings at it. See
[Broadcasting to OBS](/docs/live/broadcasting-obs/) for the full flow.

<!-- TODO: expand with relay host/port defaults and a connection screenshot. -->
