<p align="center">
    <img src="https://github.com/ManukMinasyan/stellar-ui/blob/main/art/logo.png?raw=true" width="256" />
</p>

<a href="https://www.npmjs.com/package/stellar-ui" rel="nofollow"><img src="https://img.shields.io/npm/dw/stellar-ui.svg" style="max-width: 100%;"></a>

# What is Stellar UI?

Fully styled and customizable components for Vue 3

This package has been developed by the Minasyan.Info, its goal is to provide everything related
to UI when building a Vue app. This includes components, icons, colors, dark mode but also keyboard shortcuts.

# Features

-  Built with Headless UI and Tailwind CSS
-  Dark mode support
-  Support for LTR and RTL languages
-  Keyboard shortcuts
-  Icons
-  Fully typed

[See Documentation](https://manukminasyan.github.io/stellar-ui/)

## Setup

Use npm to install.

```
npm i stellar-ui
```

In your `index.ts`, you shall import the libraries and CSS:

```ts
import 'stellar-ui/dist/style.css';
```

Import components from this library in your own component:

```html
<script setup lang="ts">
    import { SButton, SDropdown } from 'stellar-ui';
</script>
```
