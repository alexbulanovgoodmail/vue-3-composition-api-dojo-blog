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
      // const data = await fetch('http://localhost:3000/posts/')
      // if (!data.ok) {
      //   throw Error('no data available')
      // }
      // posts.value = await data.json()
    } catch (e) {
      error.value = e.message
    }
  }
  return { posts, error, load }
}
