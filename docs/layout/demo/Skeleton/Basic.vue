<template>
  <div class="flex items-center space-x-4">
    <SSkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
    <div class="space-y-2">
      <SSkeleton class="h-4 w-[250px]" />
      <SSkeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>
