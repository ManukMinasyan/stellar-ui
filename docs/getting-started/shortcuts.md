---
outline: deep
---

# Shortcuts

Learn how to display and define keyboard shortcuts in your app.

## Overview

Some components like [Dropdown](/elements/dropdown), [Command Palette](/navigation/command-palette)
and [Tooltip](/overlays/tooltip) support the display of keyboard shortcuts.

<<< @/getting-started/demo/Shortcuts/Dropdown.vue

Shortcuts are displayed and styled through the [Kbd](/elements/kbd) component.

<<< @/getting-started/demo/Shortcuts/Kbd.vue

::: info
You will have a preview of how shortcuts are rendered in each component page.
:::

## `defineShortcuts`

This module provides a `defineShortcuts` composable that allows you to define keyboard shortcuts in your app really
easily.

<<< @/getting-started/demo/Shortcuts/DefineShortcuts.vue

Shortcuts keys are written as the literal keyboard key value. Combinations are made with `_` separator. Chained shortcuts
are made with `-` separator.

Modifiers are also available:

- `meta`: acts as `Command` for MacOS and `Control` for others
- `ctrl`: acts as `Control`
- `shift`: acts as `Shift` and is only necessary for alphabetic keys

Examples of keys:
- `escape`: will trigger by hitting `Esc`
- `meta_k`: will trigger by hitting `⌘` and `K` at the same time on MacOS, and `Ctrl` and `K` on Windows and Linux
- `ctrl_k`: will trigger by hitting `Ctrl` and `K` at the same time on MacOS, Windows and Linux
- `shift_e`: will trigger by hitting `Shift` and `E` at the same time on MacOS, Windows and Linux
- `?`: will trigger by hitting `?` on some keyboard layouts, or for example `Shift` and `/`, which results in `?` on US Mac keyboards
- `g-d`: will trigger by hitting `g` then `d` with a maximum delay of 800ms by default
- `arrowleft`: will trigger by hitting `←` (also: `arrowright`, `arrowup`, `arrowdown`)

::: info
For a complete list of available shortcut keys, refer to the [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) API docs. Note the `KeyboardEvent.key` has to be written in lowercase.
:::
