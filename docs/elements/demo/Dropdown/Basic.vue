<script setup>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/2556185?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'icon-[heroicons--pencil-square-20-solid]',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'icon-[heroicons--document-duplicate-20-solid]',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Archive',
    icon: 'icon-[heroicons--archive-box-20-solid]'
  }, {
    label: 'Move',
    icon: 'icon-[heroicons--arrow-right-circle-20-solid]'
  }], [{
    label: 'Delete',
    icon: 'icon-[heroicons--trash-20-solid]',
    shortcuts: ['⌘', 'D']
  }]
]
</script>

<template>
  <s-dropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <s-button color="white" label="Options" trailing-icon="icon-[heroicons--chevron-down-20-solid]"/>
  </s-dropdown>
</template>
