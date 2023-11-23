<script setup>
import {ref} from 'vue'

const person = ref(null)
</script>
<template>
  <s-select-menu
      searchable
      searchable-placeholder="Search a person..."
      class="w-full lg:w-40"
      placeholder="Select a person"
      v-model="person"
      :options="['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']"
  />
</template>