import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

export default function (id) {
  const post = ref(null)
  const error = ref(null)

  async function load(params) {
    try {
      const res = await projectFirestore.collection('posts').doc(id).get()

      if (!res.exists) {
        throw Error('That post does not exist')
      }
      post.value = { ...res.data(), id: res.id }
    } catch (e) {
      error.value = e.message
    }
  }
  return { post, error, load }
}
