<script setup>
import {ref} from 'vue'

const value = ref('')
</script>

<template>
  <s-input v-model="value"/>
</template>