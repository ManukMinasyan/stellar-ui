<script setup lang="ts">
import { ref } from 'vue'

const state = ref({
  email: undefined,
  password: undefined
})

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function submit (event) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <s-form
      :validate="validate"
      :state="state"
      @submit="submit"
      class="space-y-4 w-60"
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
