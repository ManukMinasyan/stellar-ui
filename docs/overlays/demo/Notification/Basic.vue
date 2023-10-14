<script setup>
import {useToast} from "@/composables/useToast";

const toast = useToast()
</script>
<template>
  <s-button label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
</template>