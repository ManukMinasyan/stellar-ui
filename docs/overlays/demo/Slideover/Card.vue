<script setup lang="ts">
import {ref} from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div>
    <SButton label="Open" @click="isOpen = true"/>

    <SSlideover v-model="isOpen">
      <SCard class="flex flex-col flex-1"
             :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <Placeholder class="h-8"/>
        </template>

        <Placeholder class="h-full"/>

        <template #footer>
          <Placeholder class="h-8"/>
        </template>
      </SCard>
    </SSlideover>
  </div>
</template>

