<script setup>
import { onMounted, ref } from 'vue'

console.log('[setup]')

const caption = ref('Home View')
const pRef = ref(null)

//
onMounted(() => {
  console.log('[onMounted]')
  pRef.value.style = 'user-select: none;'
})

function handleClick(params) {
  pRef.value.classList.toggle('active')
}
</script>

<template>
  <main>
    <h1>{{ caption }}</h1>
    <p ref="pRef" @click="handleClick">Lorem, ipsum dolor.</p>
  </main>
</template>

<style lang="scss">
.active {
  color: #ff0000;
}
</style>
