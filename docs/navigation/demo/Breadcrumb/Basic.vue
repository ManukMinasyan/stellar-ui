<script setup>
const links = [{
  label: 'Home',
  icon: 'icon-[heroicons--home]',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'icon-[heroicons--square-3-stack-3d]'
}, {
  label: 'Breadcrumb',
  icon: 'icon-[heroicons--link]'
}]
</script>

<template>
  <SBreadcrumb :links="links" />
</template>

