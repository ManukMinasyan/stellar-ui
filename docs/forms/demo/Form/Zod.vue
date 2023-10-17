<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = ref({
  email: undefined,
  password: undefined
})

async function submit (event) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <s-form
      :schema="schema"
      :state="state"
      @submit="submit"
      class="space-y-4"
  >
    <s-form-group label="Email" name="email">
      <s-input v-model="state.email" />
    </s-form-group>

    <s-form-group label="Password" name="password">
      <s-input v-model="state.password" type="password" />
    </s-form-group>

    <s-button type="submit">
      Submit
    </s-button>
  </s-form>
</template>
