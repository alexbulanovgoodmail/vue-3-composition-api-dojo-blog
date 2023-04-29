<script setup>
import { ref } from 'vue'
import PostList from '@/components/PostList.vue'

const posts = ref([
  {
    id: 1,
    title: 'Welcome to the blog',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere ipsum numquam perferendis exercitationem! Provident quibusdam expedita harum minima ipsum sequi laboriosam consectetur vel eum omnis voluptate dolorum sint dolorem quaerat excepturi quae earum maxime, voluptas alias. Nihil quod doloribus repellat neque, quam necessitatibus labore animi dolorem porro iure, odit asperiores minus molestiae inventore ratione est expedita eveniet sunt facere nam mollitia illum corrupti ipsum vel? Reprehenderit cupiditate, quos recusandae dolorem velit quam eligendi hic iusto ab eius expedita blanditiis et est iure quae tenetur officia rem atque iste unde? Nulla quo ipsum deserunt numquam facere, cupiditate nihil eveniet odio illum ex beatae doloremque earum aperiam sed odit ea cum laudantium maxime ducimus, soluta voluptatibus atque deleniti. Corporis nisi sit vitae quisquam officiis numquam hic alias delectus tenetur! Laboriosam illo rerum qui praesentium dicta earum nemo ipsa alias ipsam odit accusamus fugiat inventore illum perferendis placeat, amet provident expedita facilis. Laborum iste dolore distinctio ab ullam, ratione quod consectetur repellendus adipisci? Distinctio illum assumenda ratione animi numquam molestiae corporis aliquam ab fugit amet accusantium, molestias aperiam omnis consequatur tempora repudiandae, hic praesentium aliquid tempore. Ratione nam tempora iste, reiciendis, cumque esse deleniti quod temporibus ipsam perspiciatis quidem optio, harum omnis?'
  },
  {
    id: 2,
    title: 'Top 5 CSS tips',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere ipsum numquam perferendis exercitationem! Provident quibusdam expedita harum minima ipsum sequi laboriosam consectetur vel eum omnis voluptate dolorum sint dolorem quaerat excepturi quae earum maxime, voluptas alias. Nihil quod doloribus repellat neque, quam necessitatibus labore animi dolorem porro iure, odit asperiores minus molestiae inventore ratione est expedita eveniet sunt facere nam mollitia illum corrupti ipsum vel? Reprehenderit cupiditate, quos recusandae dolorem velit quam eligendi hic iusto ab eius expedita blanditiis et est iure quae tenetur officia rem atque iste unde? Nulla quo ipsum deserunt numquam facere, cupiditate nihil eveniet odio illum ex beatae doloremque earum aperiam sed odit ea cum laudantium maxime ducimus, soluta voluptatibus atque deleniti. Corporis nisi sit vitae quisquam officiis numquam hic alias delectus tenetur! Laboriosam illo rerum qui praesentium dicta earum nemo ipsa alias ipsam odit accusamus fugiat inventore illum perferendis placeat, amet provident expedita facilis. Laborum iste dolore distinctio ab ullam, ratione quod consectetur repellendus adipisci? Distinctio illum assumenda ratione animi numquam molestiae corporis aliquam ab fugit amet accusantium, molestias aperiam omnis consequatur tempora repudiandae, hic praesentium aliquid tempore. Ratione nam tempora iste, reiciendis, cumque esse deleniti quod temporibus ipsam perspiciatis quidem optio, harum omnis?'
  }
])

const caption = ref('Home View')
</script>

<template>
  <main>
    <div class="container">
      <h1 class="mb-4">{{ caption }}</h1>
      <PostList :posts="posts" />
    </div>
  </main>
</template>
