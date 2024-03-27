<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <SButton label="Open" @click="isOpen = true" />

    <SSlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <Placeholder class="h-full" />
      </div>
    </SSlideover>
  </div>
</template>