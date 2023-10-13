<script setup>
import {ref} from 'vue';

const people = [{
  id: 'ManukMinasyan',
  label: 'ManukMinasyan',
  href: 'https://github.com/ManukMinasyan',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/2556185?v=4' }
},
  {
    id: 'Ilyapashayan20',
    label: 'Ilyapashayan',
    href: 'https://github.com/Ilyapashayan20',
    target: '_blank',
    avatar: { src: 'https://avatars.githubusercontent.com/u/77129709?v=4' }
  },
  {
    id: 'smarroufin',
    label: 'smarroufin',
    href: 'https://github.com/smarroufin',
    target: '_blank',
    avatar: { src: 'https://avatars.githubusercontent.com/u/7547335?v=4' }
  },
  {
    id: 'nobody',
    label: 'Nobody',
    icon: 'icon-[heroicons--user-circle]'
  }]

const selected = ref(people[0])
</script>

<template>
  <SSelectMenu v-model="selected" :options="people">
    <template #label>
      <SIcon v-if="selected.icon" :name="selected.icon" class="w-4 h-4" />
      <SAvatar v-else-if="selected.avatar" v-bind="selected.avatar" size="3xs" />

      {{ selected.label }}
    </template>
  </SSelectMenu>
</template>
