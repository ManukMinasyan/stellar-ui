<script setup lang="ts">
import {reactive} from "vue";

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({path: 'email', message: 'Required'})
  if (!state.password) errors.push({path: 'password', message: 'Required'})
  return errors
}

async function onSubmit(event) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <SForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <SFormGroup label="Email" name="email">
      <SInput v-model="state.email"/>
    </SFormGroup>

    <SFormGroup label="Password" name="password">
      <SInput v-model="state.password" type="password"/>
    </SFormGroup>

    <SButton type="submit">
      Submit
    </SButton>
  </SForm>
</template>

