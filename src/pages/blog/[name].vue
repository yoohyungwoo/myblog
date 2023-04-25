<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { ITestItem } from '~/stores/test'

const route = useRoute()

console.log(route.params)

const info = ref<string>('')

info.value = <string>route.params.name

// const phoneBook = ref<IPhoneBooks>()
</script>

<template>
  <div>
    <h1>My Blog Home</h1>
    <h2>My name : {{ info }}</h2>
  </div>
</template>

<style scoped>

</style>
