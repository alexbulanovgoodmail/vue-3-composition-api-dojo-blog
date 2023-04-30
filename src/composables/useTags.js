import { ref } from 'vue'

export default function (posts) {
  const tags = ref([])
  const tagSet = new Set()

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag))
  })

  tags.value = [...tagSet]

  return { tags }
}
