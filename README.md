# rchurro's Kasm Workspaces registry

A third-party [Kasm Workspaces](https://kasmweb.com) registry. Add it to your Kasm and the
workspaces below show up as one-click installs.

**Registry URL:**

```
https://rchurro.github.io/kasm-registry/
```

## Add it to your Kasm

1. In Kasm, go to **Admin → Workspaces → Registry**.
2. Click **Add new**, paste the URL above and save.
3. Pick a workspace from the list and click **Install**.

Only add registries from people you trust: a workspace runs whatever image it points at.

## Workspaces

| Workspace | Image | Notes |
|---|---|---|
| **Minecraft (Prism Launcher)** | `ghcr.io/rchurro/kasm-minecraft:1.19.0` | Minecraft: Java Edition through [Prism Launcher](https://prismlauncher.org), GPU rendering via VirtualGL. Game files download on first launch; you need a Microsoft account that owns the game. Source and setup: [rchurro/kasm-minecraft](https://github.com/rchurro/kasm-minecraft) |

Built for Kasm 1.19.x (registry schema 1.1, served from the `gh-pages` branch).

## Maintaining

Workspaces live in `workspaces/<Name>/workspace.json`. The template's full documentation
(schema, site build, GitHub Pages setup) is in [TEMPLATE.md](TEMPLATE.md).

## Discovery

This marker lets Kasm users find the registry through
[this GitHub search](https://github.com/search?q=in%3Areadme+sort%3Aupdated+-user%3Akasmtech+%22KASM-REGISTRY-DISCOVERY-IDENTIFIER%22&type=repositories).

KASM-REGISTRY-DISCOVERY-IDENTIFIER
