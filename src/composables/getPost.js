import { ref } from 'vue'

export default function (id) {
  const post = ref(null)
  const error = ref(null)

  async function load(params) {
    try {
      const data = await fetch(`http://localhost:3000/posts/${id}`)

      if (!data.ok) {
        throw Error('That post doesnot exist')
      }
      post.value = await data.json()
    } catch (e) {
      error.value = e.message
    }
  }
  return { post, error, load }
}
