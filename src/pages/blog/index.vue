<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route)
</script>

<template>
  <div>
    <h1>My Blog Home</h1>
    <h2>My name : {{ route.params }}</h2>
  </div>
</template>

<style scoped>

</style>
