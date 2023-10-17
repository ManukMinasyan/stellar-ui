<script setup>
import {ref} from "vue";

const isOpen = ref(false)
</script>
<template>
  <div>
    <s-button label="Open" @click="isOpen = true" />
    <s-modal v-model="isOpen">
      <!-- Content -->
      <div class="p-5 m-5 border border-dashed">
        Modal Content
      </div>
    </s-modal>
  </div>
</template>