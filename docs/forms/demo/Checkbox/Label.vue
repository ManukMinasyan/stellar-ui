<script setup>
import {ref} from 'vue';

const selected = ref(true)
</script>

<template>
  <s-checkbox v-model="selected" label="Label"/>
</template>