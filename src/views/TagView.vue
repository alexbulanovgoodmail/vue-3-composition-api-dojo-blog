<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'
import Loader from '@/components/Loader.vue'

const route = useRoute()

const { posts, error, load } = getPosts()

load()

const postsWithTag = computed(() =>
  posts.value.filter((post) => post.tags.includes(route.params.slug))
)
</script>

<template>
  <main>
    <div class="container">
      <div class="tag">
        <div class="flex">
          <h1>Tag:</h1>
          <span class="ml-6 text-color-14">{{ route.params.slug }}</span>
        </div>
        <div v-if="postsWithTag.length === 0 && error === null">
          <Loader />
        </div>
        <div v-if="error" class="nes-container is-error with-title">
          <p class="title">Error</p>
          <p>{{ error }}</p>
        </div>
        <div v-if="postsWithTag.length">
          <PostList :posts="postsWithTag" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.tag {
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
    background-color: $color-14;
    z-index: -1;
    transform: rotate(-1deg);
  }
}
</style>
