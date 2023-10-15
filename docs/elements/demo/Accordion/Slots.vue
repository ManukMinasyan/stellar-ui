<script setup>
const items = [
  {
    label: 'Getting Started',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
    icon: 'icon-[heroicons--information-circle]'
  },
  {
    label: 'Installation',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
    icon: 'icon-[heroicons--arrow-down-tray]'
  },
  {
    label: 'Theming',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
    icon: 'icon-[heroicons--eye-dropper]'
  },
  {
    label: 'Components',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.',
    icon: 'icon-[heroicons--square-3-stack-3d]'
  }
]
</script>

<template>
  <s-accordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <s-button color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700"
                :ui="{ rounded :'rounded-none', padding: { sm:'p-3' } }">
        <template #leading>
          <div class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
            <s-icon :name="item.icon" class="w-4 h-4 text-white dark:text-gray-900"/>
          </div>
        </template>

        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        <template #trailing>
          <s-icon
              name="icon-[heroicons--chevron-right-20-solid]"
              class="w-5 h-5 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
          />
        </template>
      </s-button>
    </template>
  </s-accordion>
</template>
