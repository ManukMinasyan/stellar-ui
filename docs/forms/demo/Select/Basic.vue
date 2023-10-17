<script setup>
import {ref} from 'vue'

const countries = ['United States', 'Canada', 'Mexico']

const country = ref(countries[0])
</script>

<template>
  <s-select v-model="country" :options="countries"/>
</template>
