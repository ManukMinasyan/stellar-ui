# Getting Started

Learn how to install and configure the module in your Vue app.

## Setup

Install `stellar-ui` dependency to your project:

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
  import { UButton } from 'stellar-ui';
</script>

<template>
    <UButton>Submit</UButton>
</template>
```
