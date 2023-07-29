<script setup>
import {ref} from 'vue';

const selected = ref(true)
</script>

<template>
  <SCheckbox v-model="selected" label="Label"/>
</template>