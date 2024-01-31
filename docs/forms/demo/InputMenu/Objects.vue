<script setup lang="ts">
import {ref} from 'vue'

const people = [{
  id: 'benjamincanac',
  label: 'benjamincanac',
  href: 'https://github.com/benjamincanac',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/739984?v=4' }
}, {
  id: 'Atinux',
  label: 'Atinux',
  href: 'https://github.com/Atinux',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/904724?v=4' }
}, {
  id: 'smarroufin',
  label: 'smarroufin',
  href: 'https://github.com/smarroufin',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/7547335?v=4' }
}, {
  id: 'nobody',
  label: 'Nobody',
  icon: 'icon-[heroicons--user-circle]'
}]

const selected = ref(people[0])
</script>

<template>
  <SInputMenu v-model="selected" :options="people">
    <template #leading>
      <SIcon v-if="selected.icon" :name="(selected.icon as string)" class="w-4 h-4 mx-0.5" />
      <SAvatar v-else-if="selected.avatar" v-bind="selected.avatar" size="3xs" class="mx-0.5" />
    </template>
  </SInputMenu>
</template>

