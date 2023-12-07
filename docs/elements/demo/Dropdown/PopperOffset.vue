<script setup>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/77129709?v=4'
    }
  }]
]
</script>

<template>
  <SDropdown :items="items" :popper="{ offsetDistance: 0, placement: 'right-start' }">
    <SButton color="white" label="Options" trailing-icon="icon-[heroicons--chevron-down-20-solid]" />
  </SDropdown>
</template>

