<script setup lang="ts">
import {ref} from 'vue'

const q = ref('')
</script>

<template>
  <s-input v-model="q" name="q" placeholder="Search..." icon="icon-[heroicons--magnifying-glass-20-solid]" :ui="{ icon: { trailing: { pointer: '' } } }">
    <template #trailing>
      <s-button
          v-show="q !== ''"
          color="gray"
          variant="link"
          icon="icon-[heroicons--x-mark-20-solid]"
          :padded="false"
          @click="q = ''"
      />
    </template>
  </s-input>
</template>