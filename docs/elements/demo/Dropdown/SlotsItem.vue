<script setup>
const items = [
  [{
    label: 'ilya@example.com',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'icon-[heroicons--cog-8-tooth]'
  }], [{
    label: 'Documentation',
    icon: 'icon-[heroicons--book-open]'
  }, {
    label: 'Changelog',
    icon: 'icon-[heroicons--megaphone]'
  }, {
    label: 'Status',
    icon: 'icon-[heroicons--signal]'
  }], [{
    label: 'Sign out',
    icon: 'icon-[heroicons--arrow-left-on-rectangle]'
  }]
]
</script>

<template>
  <SDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <SAvatar src="https://avatars.githubusercontent.com/u/77129709?v=4" />

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <SIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </SDropdown>
</template>

