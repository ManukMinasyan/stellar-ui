<template>
  <s-alert title="Heads <i>up</i>!" icon="icon-[heroicons--command-line]">
    <template #title="{ title }">
      <span v-html="title" />
    </template>

    <template #description>
      You can add <b>components</b> to your app using the <u>cli</u>.
    </template>
  </s-alert>
</template>
