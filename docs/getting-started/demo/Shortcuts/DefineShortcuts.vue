<template>
  <SModal v-model="isOpen" />
</template>

<script setup lang="ts">
const isOpen = ref(false)

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value
    }
  }
})
</script>