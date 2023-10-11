<script setup>
import {ref} from "vue";

const isOpen = ref(false)
</script>
<template>
  <div>
    <SButton label="Open" @click="isOpen = true" />
    <SModal v-model="isOpen">
      <!-- Content -->
      <div class="p-5 m-5 border border-dashed">
        Modal Content
      </div>
    </SModal>
  </div>
</template>