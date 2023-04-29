<script setup>
import { onMounted, computed, ref, watch, watchEffect, handleError } from 'vue'

console.log('[setup]')

const caption = ref('Home View')
const search = ref('')
const names = ref(['mario', 'luigi', 'toad', 'yoshi', 'koopa', 'peach', 'bowser'])

const matchingNames = computed(() => {
  return names.value.filter((name) => name.includes(search.value))
})

const stopWatch = watch(search, () => {
  console.log('[watch function]')
})
const stopEffect = watchEffect(() => {
  console.log('[watchEffect]', search.value)
})

//
onMounted(() => {
  console.log('[onMounted]')
})
//
function handleStopWatching(params) {
  stopWatch()
  stopEffect()
}
</script>

<template>
  <main>
    <div class="container">
      <h1>{{ caption }}</h1>

      <div class="my-6">
        <div class="nes-field">
          <label for="name_field">name</label>
          <input v-model="search" type="text" id="name_field" class="nes-input" />
        </div>
      </div>
      <div class="my-6">
        <p v-for="(name, index) in matchingNames" :key="index">
          {{ name }}
        </p>
      </div>
      <div class="my-6">
        <button class="nes-btn is-warning" type="button" @click="handleStopWatching">
          Stop Watching
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.active {
  color: #ff0000;
}
</style>
