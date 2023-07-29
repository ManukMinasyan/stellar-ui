<script setup>
import {ref} from 'vue'

const value = ref('')
</script>

<template>
  <STextarea v-model="value" color="primary" variant="outline" />
</template>