import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

export default function (params) {
  const posts = ref([])
  const error = ref(null)

  async function load(params) {
    try {
      const res = await projectFirestore.collection('posts').get()

      posts.value = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
    } catch (e) {
      error.value = e.message
    }
  }
  return { posts, error, load }
}
