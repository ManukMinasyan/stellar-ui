<script setup>

defineProps({
  classes: {
    default: 'flex'
  }
})

</script>
<template>
  <div class="border p-2 rounded relative not-prose" :class="classes">
    <slot></slot>
  </div>
</template>