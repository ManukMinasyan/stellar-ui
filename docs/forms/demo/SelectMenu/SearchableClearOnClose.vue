<script setup lang="ts">
import {ref} from "vue";

const person = ref(null)
</script>
<template>
  <SSelectMenu
      v-model="person"
      clear-search-on-close
      class="w-full lg:w-48"
      placeholder="Select a person"
      searchable
      searchable-placeholder="Search a person..."
      :options="['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']"
  />
</template>