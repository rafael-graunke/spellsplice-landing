---
title: Release Channels
description: The three versions of Spellsplice - Stable, Beta, and Dev - and which one to use.
---

Spellsplice ships on three channels. They are the same app at different points on
the release timeline. Pick by how much polish versus how many new features you want.

| Channel | Where | Use it if |
| --- | --- | --- |
| **Stable** | [app.spellsplice.com](https://app.spellsplice.com) | You want the tested, reliable build. |
| **Beta** | [beta.spellsplice.com](https://beta.spellsplice.com) | You want new features first and can tolerate rough edges. |
| **Dev** | Local only | You are running the app from source. |

## Stable

The default. Every feature has been through Beta first. It can lag behind the
newest additions, but it is the version to recommend to anyone who just wants
things to work.

## Beta

Updated on every change, so it always has the latest features. Because those
changes have not been through a full release yet, Beta can be unstable.

:::caution
Beta is a moving target. Expect the occasional bug, and expect things to change
between visits. If you hit a problem, try [Stable](https://app.spellsplice.com)
to confirm whether it is Beta-specific.
:::

Stable and Beta share nothing at runtime beyond the code: projects, settings, and
Live Mode state live in your browser per site, so switching channels does not
carry your data across.

## Dev

The build you get from running the project locally (`npm run dev`). It only ever
runs on your own machine, so there is no public URL. See
[Running Locally](/docs/running-locally/) for requirements and setup.

## Switching channels

Open the channel badge in the app's top bar (top right, shows the current channel
and version) to see all three and jump between Stable and Beta. Each channel keeps
its own browser storage, so save or export a project before moving if you want to
continue it elsewhere.

![The channel menu open in the app's top bar, listing Stable, Beta, and Dev](/docs-assets/channels/channel-menu.png)
