<script setup>
import {ref} from 'vue'

const value = ref('')
</script>

<template>
  <UTextarea v-model="value"/>
</template>