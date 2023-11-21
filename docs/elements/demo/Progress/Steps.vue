<template>
  <s-progress
      :value="1"
      :max="['Waiting to start', 'Cloning...', 'Migrating...', 'Deployed!']"
  />
</template>