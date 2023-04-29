<script setup></script>

<template>
  <div class="navbar py-6">
    <nav class="container">
      <ul class="-mx-2 flex items-center">
        <li class="mx-2 flex">
          <RouterLink
            :to="{ name: 'HomeView' }"
            class="hover:no-underline hover:text-color-17 transition"
            active-class="text-color-10 pointer-events-none"
            >Home</RouterLink
          >
        </li>
        <li class="mx-2 flex">
          <RouterLink
            :to="{ name: 'CreateView' }"
            class="hover:no-underline hover:text-color-17 transition"
            active-class="text-color-10 pointer-events-none"
            >Create</RouterLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
