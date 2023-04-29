<script setup>
import getPost from '@/composables/getPost'
import Loader from '@/components/Loader.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
const { post, error, load } = getPost(props.id)

load()
</script>

<template>
  <main class="py-8">
    <div class="container">
      <div v-if="error" class="nes-container is-error with-title">
        <p class="title">Error</p>
        <p>{{ error }}</p>
      </div>
      <div v-if="post === null && error === null">
        <Loader />
      </div>
      <div v-else class="post">
        <div class="mb-4">
          <h1>
            {{ post.title }}
          </h1>
        </div>
        <div class="my-4">
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.post {
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
