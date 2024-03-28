---
outline: deep
---

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
import {createApp} from 'vue'
import StellarUI from 'stellar-ui'
import 'stellar-ui/dist/style.css';
import App from './App.vue'

const app = createApp(App)

app.use(StellarUI)
app.mount('#app')
```

### Manually import

Stellar UI provides out of box Tree Shaking functionalities based on ES Module.

```html

<script setup lang="ts">
    import {SButton} from 'stellar-ui';
</script>

<template>
    <s-button>Submit</s-button>
</template>
```

## Tailwind CSS Configuration

Stellar UI uses Tailwind CSS for styling. Tailwind CSS offers a `safelist` option in its configuration to prevent certain classes from being purged during the build process. This is especially useful when you want to ensure that specific classes are included in the final build, regardless of whether they are used in your templates or not.

By default, the `generateSafelist` function only safelists the primary color. If you want to use other colors in your components, you need to safelist them too.

### Configuring the Safelist

Here's how you can configure the safelist:

```js
import {generateSafelist} from 'stellar-ui/helpers'
import colors from 'tailwindcss/colors'

// 
const themeColors = {
    primary: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b",
        DEFAULT: "#6366f1",
    },
    success: colors.green,
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", 
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    safelist: [
        ...generateSafelist(themeColors, ["primary", "success", "orange"])
    ],
    theme: {
        extend: {
            colors: themeColors
        },
    }
}
```

In the above example, we are importing the `generateSafelist` function from Stellar UI and the predefined colors from Tailwind CSS. We then define our theme colors and use them to generate a safelist. This safelist is then passed to the Tailwind CSS configuration.

Remember to replace `success`, `orange` with the actual colors you want to safelist. The `generateSafelist` function will ensure that these colors are not purged during the build process. 

This way, you can customize the colors used by your Stellar UI components and ensure that they are included in the final build.