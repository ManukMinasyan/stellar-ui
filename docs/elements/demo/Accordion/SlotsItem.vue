<script setup>
const items = [
  {
    label: 'Getting Started',
    icon: 'icon-[heroicons--information-circle]',
    defaultOpen: true,
    slot: 'getting-started'
  },
  {
    label: 'Installation',
    icon: 'icon-[heroicons--arrow-down-tray]',
    defaultOpen: true,
    slot: 'installation'
  },
  {
    label: 'Theming',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
    icon: 'icon-[heroicons--eye-dropper]',
    defaultOpen: true,
    slot: 'theming'
  },
  {
    label: 'Components',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
    icon: 'icon-[heroicons--square-3-stack-3d]',
    slot: 'Components'
  }
]
</script>

<template>
  <s-accordion :items="items">
    <template #item="{ item }">
      <p class="italic text-gray-900 dark:text-white text-center">
        {{ item.description }}
      </p>
    </template>

    <template #getting-started>
      <div class="text-gray-900 dark:text-white text-center">
        <Logo class="w-auto h-8 mx-auto" />

        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Fully styled and customizable components for Vue.
        </p>
      </div>
    </template>

    <template #installation="{ description }">
      <div class="flex flex-col justify-center items-center gap-1 mb-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          Installation
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Install <code>stellar-ui</code> dependency to your project:
        </p>
        <p>
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col items-center">
        <code>$ npm install stellar-ui</code>
        <code>$ yarn add stellar-ui</code>
        <code>$ pnpm add stellar-ui</code>
      </div>
    </template>
  </s-accordion>
</template>

