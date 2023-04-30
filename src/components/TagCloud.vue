<script setup>
import useTags from '../composables/useTags'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const { tags } = useTags(props.posts)
</script>

<template>
  <div class="tag-cloud">
    <h3 class="mb-4">Tags:</h3>
    <div class="-mx-2 -my-1 flex flex-wrap items-center">
      <RouterLink
        v-for="(tag, index) in tags"
        :to="{ name: 'TagView', params: { slug: tag } }"
        class="mx-2 my-1 flex text-sm text-color-00 transition hover:text-color-14 hover:no-underline"
        active-class="text-color-34 pointer-events-none"
        >#{{ tag }}</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss">
.tag-cloud {
  h3 {
    position: relative;
    display: inline-block;
    z-index: 2;
    color: $color-white;
  }

  h3::after {
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
