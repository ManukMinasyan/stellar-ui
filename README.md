<p align="center">
    <img src="https://github.com/ManukMinasyan/stellar-ui/blob/main/art/logo.png?raw=true" width="256" />
</p>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

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

## Setup

Use npm to install.

```
npm i stellar-ui
```

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.


```ts
// main.ts
import { createApp } from 'vue'
import StellarUI from 'stellar-ui'
import 'stellar-ui/dist/index.css';
import App from './App.vue'

const app = createApp(App)

app.use(StellarUI)
app.mount('#app')
```

### Manually import

Stellar UI provides out of box Tree Shaking functionalities based on ES Module.

```html
<script setup lang="ts">
  import { SButton } from 'stellar-ui';
</script>

<template>
    <SButton>Submit</SButton>
</template>
```


## Documentation

Visit https://manukminasyan.github.io/stellar-ui/ to explore the documentation.


## Credits

- [nuxtlabs/ui](https://github.com/nuxtlabs/ui)
- [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [tailwindlabs/headlessui](https://github.com/tailwindlabs/headlessui)
- [vueuse/vueuse](https://github.com/vueuse/vueuse)
- [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind)


## License

Licensed under the [MIT license](https://github.com/ManukMinasyan/stellar-ui/blob/main/LICENSE).


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/stellar-ui/latest.svg?style=flat&colorA=18181B&colorB=5BC339
[npm-version-href]: https://npmjs.com/package/stellar-ui

[npm-downloads-src]: https://img.shields.io/npm/dm/stellar-ui.svg?style=flat&colorA=18181B&colorB=5BC339
[npm-downloads-href]: https://npmjs.com/package/stellar-ui

[license-src]: https://img.shields.io/github/license/ManukMinasyan/stellar-ui.svg?style=flat&colorA=18181B&colorB=5BC339
[license-href]: https://github.com/ManukMinasyan/stellar-ui/blob/main/LICENSE
