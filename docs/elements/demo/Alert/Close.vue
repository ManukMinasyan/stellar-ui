<script setup>
const close = () => {
  alert('The closed event is functioning perfectly!')
}
</script>
<template>
  <s-alert
      :close-button="{ icon: 'icon-[heroicons--x-mark-20-solid]', color: 'gray', variant: 'link', padded: false }"
      title="Heads up!"
      @close="close"
  />
</template>