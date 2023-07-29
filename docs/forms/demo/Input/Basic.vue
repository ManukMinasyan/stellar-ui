<script setup>
import {ref} from 'vue'

const value = ref('')
</script>

<template>
  <SInput v-model="value"/>
</template>