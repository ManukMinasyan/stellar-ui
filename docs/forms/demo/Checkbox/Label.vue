<script setup>
import {ref} from 'vue';

const selected = ref(true)
</script>

<template>
  <UCheckbox v-model="selected" label="Label"/>
</template>