<script setup>
import {ref} from "vue";

const value = ref(50)
</script>

<template>
  <s-range v-model="value" />
</template>
