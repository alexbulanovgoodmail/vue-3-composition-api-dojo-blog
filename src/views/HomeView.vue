<script setup>
import { onMounted, ref } from 'vue'

console.log('[setup]')

const caption = ref('Home View')

//
onMounted(() => {
  console.log('[onMounted]')
})
</script>

<template>
  <main>
    <h1>{{ caption }}</h1>
  </main>
</template>
