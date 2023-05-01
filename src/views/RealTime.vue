<script setup>
import { ref } from 'vue'
import PostList from '@/components/PostList.vue'
import Loader from '@/components/Loader.vue'
import TagCloud from '@/components/TagCloud.vue'
import { projectFirestore, timestamp } from '../firebase/config'

const posts = ref([])
const error = ref(null)

projectFirestore
  .collection('posts')
  .orderBy('createAt', 'desc')
  .onSnapshot((snap) => {
    let docs = snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    posts.value = docs
  })
</script>

<template>
  <main>
    <div class="container">
      <div class="home">
        <div v-if="error" class="nes-container is-error with-title">
          <p class="title">Error</p>
          <p>{{ error }}</p>
        </div>
        <div v-else-if="posts.length === 0 && error === null">
          <Loader />
        </div>
        <div v-else class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-6">
          <div class="col-span-1 lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <h1 class="mb-6">Real-time data</h1>
            <TagCloud :posts="posts" />
          </div>
          <div class="col-span-1 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <PostList :posts="posts" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
