<script setup lang="ts">
import * as v from 'valibot'
import {reactive} from "vue";

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

async function onSubmit (event) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<template>
  <SForm :schema="v.safeParser(schema)" :state="state" class="space-y-4" @submit="onSubmit">
    <SFormGroup label="Email" name="email">
      <SInput v-model="state.email" />
    </SFormGroup>

    <SFormGroup label="Password" name="password">
      <SInput v-model="state.password" type="password" />
    </SFormGroup>

    <SButton type="submit">
      Submit
    </SButton>
  </SForm>
</template>

