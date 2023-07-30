<script setup>
import {ref} from 'vue'

const selected = ref(false)
</script>

<template>
  <s-toggle v-model="selected"/>
</template>