<script setup lang="ts">
import {ref} from 'vue';

const email = ref('')
</script>

<template>
  <s-form-group v-slot="{ error }" label="Email" :error="!email && 'You must enter an email'"
                help="This is a nice email!" error>
    <s-input v-model="email" type="email" placeholder="Enter email"
             :trailing-icon="error && 'icon-[heroicons--exclamation-triangle-20-solid]'"/>
  </s-form-group>
</template>