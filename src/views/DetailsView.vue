<script setup>
import { useRoute, useRouter } from 'vue-router'
import getPost from '@/composables/getPost'
import Loader from '@/components/Loader.vue'
import { projectFirestore } from '../firebase/config'

const route = useRoute()
const router = useRouter()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const { post, error, load } = getPost(route.params.id)

load()

async function handleDelete(params) {
  await projectFirestore.collection('posts').doc(route.params.id).delete()

  router.push({ name: 'HomeView' })
}
</script>

<template>
  <main>
    <div class="container">
      <div v-if="error" class="nes-container is-error with-title">
        <p class="title">Error</p>
        <p>{{ error }}</p>
      </div>
      <div v-if="post" class="post">
        <div class="mb-4">
          <h1>
            {{ post.title }}
          </h1>
        </div>
        <div class="my-4">
          <p>{{ post.body }}</p>
        </div>
        <div class="my-4">
          <button class="nes-btn is-error" type="button" @click="handleDelete">Delete Post</button>
        </div>
      </div>
      <div v-else>
        <Loader />
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
    position: absolute;
    top: 0;
    left: -16px;
    box-sizing: content-box;
    display: block;
    width: 100%;
    height: 100%;
    padding-right: 32px;
    background-color: $color-17;
    z-index: -1;
    transform: rotate(-1deg);
  }
}
</style>
