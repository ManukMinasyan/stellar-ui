<script setup>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
</script>

<template>
  <SDropdown :items="items" :popper="{ arrow: true }">
    <SButton color="white" label="Options" trailing-icon="icon-[heroicons--chevron-down-20-solid]" />
  </SDropdown>
</template>

