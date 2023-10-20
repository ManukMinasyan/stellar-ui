<script setup>

defineProps({
  classes: {
    default: 'flex'
  }
})

</script>
<template>
  <div
      class="p-4 bg-white dark:bg-gray-900 flex border rounded-md border-gray-200 dark:border-gray-700 relative not-prose"
      :class="classes">
    <slot></slot>
  </div>
</template>