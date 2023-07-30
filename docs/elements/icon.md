<script setup>
import Basic from './demo/Icon/Basic.vue';
</script>

# Icon

Display an icon from Iconify library.

Iconify plugin for Tailwind CSS makes it easy to use icons in Tailwind CSS.

You can use [over 150,000 open source icons](https://iconify.design/docs/icons/icon-data.html) and custom icons with minimal code.

## Installation

You need to install and configure plugin.

To install it, add `@iconify/tailwind` as dev dependency:

```sh
npm i -D @iconify/tailwind
```

Then open `tailwind.config.js`, import `addDynamicIconSelectors` from `@iconify/tailwind` and add it to list of plugins.

Example `tailwind.config.js`:

```js
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/*.html'],
	plugins: [
		// Iconify plugin
		addDynamicIconSelectors(),
	],
};
```

### Icon sets

You also need to install icon sets as dev dependencies. You can install either full package `@iconify/json` or packages for icon sets you want to use `@iconify-json/{prefix}`.

See [icon data documentation](https://iconify.design/docs/icons/icon-data.html).

For example, if you want to use icon `mdi-light:home`, install `@iconify-json/mdi-light` package.

## Usage

To use icons in HTML, all you have to do is create `[tag]span` element (or any element) with class name that contains icon.

Syntax of class names is this: `icon-[{prefix}--{name}]`, where `{prefix}` is icon set prefix, `{name}` is icon name.

Examples:

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Icon/Basic.vue

Make sure prefix and icon name are separated with 2 hyphens: `--`.

Why such complex syntax? It is because of Tailwind CSS limitations. It can handle dynamic class names only if they are created in format `rule-[value]`.

## Issues

If everything is done correctly, icons should work.

Possible issues:

### Errors when building CSS

If an icon set is missing or icon is missing, the plugin will throw errors.

See error message. If the plugin cannot find an icon set, install dependency. If the plugin cannot find icon, you are using the wrong icon name.

### Selectors do not work

You have added class names, built your CSS, but icons do not work?

First, make sure the class name is correct. If it is correct, most likely Tailwind CSS is not seeing your class names. If you are familiar with Tailwind CSS, the process of fixing it is exactly the same as any other missing class name:

- You can check if your files are scanned.
- You can add it to `safelist` in config.

## Color and size

To change icon color, change text color. See [how monotone icons work in CSS](https://iconify.design/docs/usage/css/#monotone).

By default, icon's height is set to `1em`. Width can be different, depending on an icon. To change icon size, set `font-size`.

## Advanced usage

What else can you do with plugin?

The plugin has various options:

- You can use plugin with custom icon sets.
- You can change the class name.
- You can remove duplicate CSS.

See [plugin options documentation](https://iconify.design/docs/usage/css/tailwind/options.html).

There is also a second plugin included, which behaves a bit differently. Instead of dynamic classes such as `icon-[mdi-light--home]`, it can generate CSS with clean classes, such as `icon--mdi-light--home` and reduce duplication.

See [clean classnames documentation](https://iconify.design/docs/usage/css/tailwind/clean.html).

## Multiple instances

You can add plugin to the plugin list in Tailwind CSS config multiple times, with different options.

Each `addDynamicIconSelectors()` entry in the plugin list should have different `prefix` option to avoid conflicts. Default value for `prefix` is `icon`.
