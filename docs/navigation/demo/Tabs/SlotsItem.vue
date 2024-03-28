<script setup lang="ts">
import {reactive} from "vue";

const items = [{
  key: 'account',
  label: 'Account',
  description: 'Make changes to your account here. Click save when you\'re done.'
}, {
  key: 'password',
  label: 'Password',
  description: 'Change your password here. After saving, you\'ll be logged out.'
}]

const accountForm = reactive({ name: 'Ilya', username: 'ilyapashayan20' })
const passwordForm = reactive({ currentPassword: '', newPassword: '' })

function onSubmit (form) {
  console.log('Submitted form:', form)
}
</script>

<template>
  <STabs :items="items" class="w-full">
    <template #item="{ item }">
      <SCard @submit.prevent="() => onSubmit(item.key === 'account' ? accountForm : passwordForm)">
        <template #header>
          <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
        </template>

        <div v-if="item.key === 'account'" class="space-y-3">
          <SFormGroup label="Name" name="name">
            <SInput v-model="accountForm.name" />
          </SFormGroup>
          <SFormGroup label="Username" name="username">
            <SInput v-model="accountForm.username" />
          </SFormGroup>
        </div>
        <div v-else-if="item.key === 'password'" class="space-y-3">
          <SFormGroup label="Current Password" name="current" required>
            <SInput v-model="passwordForm.currentPassword" type="password" required />
          </SFormGroup>
          <SFormGroup label="New Password" name="new" required>
            <SInput v-model="passwordForm.newPassword" type="password" required />
          </SFormGroup>
        </div>

        <template #footer>
          <SButton type="submit" color="black">
            Save {{ item.key === 'account' ? 'account' : 'password' }}
          </SButton>
        </template>
      </SCard>
    </template>
  </STabs>
</template>