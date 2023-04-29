<script setup>
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'
import Loader from '@/components/Loader.vue'

const { posts, error, load } = getPosts()

load()
</script>

<template>
  <main class="py-8">
    <div class="container">
      <h1 class="mb-4">Home View</h1>
      <div v-if="posts.length === 0 && error === null">
        <Loader />
      </div>
      <div v-if="error" class="nes-container is-error with-title">
        <p class="title">Error</p>
        <p>{{ error }}</p>
      </div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>
    </div>
  </main>
</template>
