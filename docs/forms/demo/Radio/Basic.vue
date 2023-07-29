<script setup>
import {ref} from 'vue';

const methods = [{
  name: 'email',
  value: 'email',
  label: 'Email'
}, {
  name: 'sms',
  value: 'sms',
  label: 'Phone (SMS)'
}, {
  name: 'push',
  value: 'push',
  label: 'Push notification'
}]

const selected = ref('sms')
</script>

<template>
  <SRadio v-for="method of methods" :key="method.name" v-model="selected" v-bind="method"/>
</template>
