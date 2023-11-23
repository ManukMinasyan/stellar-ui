<script setup>
import {ref} from "vue";

const person = ref('Arlene Mccoy')
</script>

<template>
  <s-select-menu
      v-model="person"
      selected-icon="icon-[heroicons--hand-thumb-up-solid]"
      class="w-full lg:w-40"
      placeholder="Select a person"
      :options="['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']"
  />
</template>