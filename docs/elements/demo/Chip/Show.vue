<script setup>
const items = [{
  name: 'messages',
  icon: 'icon-[heroicons--chat-bubble-oval-left]',
  count: 3
}, {
  name: 'notifications',
  icon: 'icon-[heroicons--bell]',
  count: 0
}]
</script>

<template>
  <div class="flex gap-3">
    <SChip v-for="{ name, icon, count } in items" :key="name" :show="count > 0">
      <SButton :icon="icon" color="gray" />
    </SChip>
  </div>
</template>

