<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="dark:bg-slate-950 bg-slate-700">
      <nav class="container mx-auto flex justify-between p-4">
        <RouterLink to="/" class="text-white hover:text-gray-300">Home</RouterLink>
        <div class="flex gap-4">
          <RouterLink to="/login" class="text-white hover:text-gray-300">Login</RouterLink>
          <RouterLink to="/register" class="text-white hover:text-gray-300">Register</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <main class="mx-auto bg-slate-100 dark:bg-slate-900 min-h-screen">
    <div class="contain mb-2">
      <RouterView />
    </div>
  </main>

</template>

<style scoped>
  .contain {
    /* max-width: 1200px; */
    /* margin: 0 auto; */
    /* padding: 20px; */
  }
</style>