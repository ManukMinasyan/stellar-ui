<img src="https://github.com/ManukMinasyan/stellar-ui/blob/main/art/stellar-uu-logo.jpeg?raw=true" width="512" />

# What is Stellar UI?

Fully styled and customizable components for Vue 3.

This package has been developed by the Minasyan.Info, its goal is to provide everything related
to UI when building a Vue app. This includes components, icons, colors, dark mode but also keyboard shortcuts.

# Features

-  Built with Headless UI and Tailwind CSS
-  HMR support through Nuxt App Config
-  Dark mode support
-  Support for LTR and RTL languages
-  Keyboard shortcuts
-  Bundled icons
-  Fully typed

[Documentation](https://manukminasyan.github.io/stellar-ui/)

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
    import { UButton, UDropdown } from 'stellar-ui';
</script>
```
