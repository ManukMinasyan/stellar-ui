<script setup>
import {ref} from 'vue'

const value = ref('')
</script>

<template>
  <UInput v-model="value"/>
</template>