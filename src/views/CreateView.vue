<script setup>
import { ref } from 'vue'

const title = ref('')
const body = ref('')
const tag = ref('')
const tags = ref([])

function handleKeydown(event) {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/, '') // removes all whitespace
    tags.value.push(tag.value)
  }
  tag.value = ''
}
</script>

<template>
  <main class="py-8">
    <div class="container">
      <div class="create">
        <h1>Create</h1>

        <form action="" @submit.prevent="handleSubmit">
          <div class="my-6 nes-field">
            <label for="title_field">Title: </label>
            <input v-model="title" type="text" id="title_field" class="nes-input" required />
          </div>
          <div class="my-6 nes-field">
            <label for="textarea_field">Content:</label>
            <textarea
              v-model="body"
              id="textarea_field"
              class="nes-textarea"
              rows="4"
              required
            ></textarea>
          </div>
          <div class="my-6 nes-field">
            <div class="-mx-1 -my-1 flex flex-wrap">
              <span
                v-for="(tag, index) in tags"
                :key="index"
                class="mx-1 my-1 nes-text text-color-10 text-xs"
                >#{{ tag }}</span
              >
            </div>
          </div>
          <div class="my-6 nes-field">
            <label for="tag_field">Tags (hit enter to add a tag):</label>
            <input
              v-model="tag"
              type="text"
              id="tag_field"
              class="nes-input"
              @keydown.enter.prevent="handleKeydown"
            />
          </div>
          <div class="my-6 nes-field">
            <button type="submit" class="nes-btn">Add Post</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.create {
  h1 {
    position: relative;
    display: inline-block;
    z-index: 2;
    color: $color-white;
  }

  h1::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-17;
    z-index: -1;
    transform: rotate(-3deg);
  }
}
</style>
