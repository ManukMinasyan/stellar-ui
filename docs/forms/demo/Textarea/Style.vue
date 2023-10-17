<script setup>
import {ref} from 'vue'

const value = ref('')
</script>

<template>
  <s-textarea v-model="value" color="primary" variant="outline" />
</template>