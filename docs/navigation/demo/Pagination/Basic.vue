<script setup>
import {ref} from 'vue'

const page = ref(1)
const items = ref(Array(55))
</script>

<template>
  <s-pagination v-model="page" :page-count="5" :total="items.length"/>
</template>