<script setup lang="ts">
import { ref } from 'vue'
import { object, string, InferType } from 'yup'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required')
})

type Schema = InferType<typeof schema>

const state = ref({
  email: undefined,
  password: undefined
})

async function submit (event) {
  // Do something with event.data
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
