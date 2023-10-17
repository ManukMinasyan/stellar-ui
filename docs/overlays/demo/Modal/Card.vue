<script setup>
import {ref} from "vue";

const isOpen = ref(false)
</script>
<template>
  <div>
    <s-button label="Open" @click="isOpen = true" />
    <s-modal v-model="isOpen">
      <s-card :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <!-- Content -->
          <div class="p-5 border border-dashed">
            Header
          </div>
        </template>

        <!-- Content -->
        <div class="p-5 border border-dashed">
          Content
        </div>

        <template #footer>
          <div class="p-5 border border-dashed">
            Footer
          </div>
        </template>
      </s-card>
    </s-modal>
  </div>
</template>