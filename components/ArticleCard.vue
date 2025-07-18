<template>
  <NuxtLink
    :to="article._path"
    class="block border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 bg-white"
  >
    <h2 class="text-2xl font-bold text-gray-900">{{ article.title }}</h2>
    <p class="text-gray-600 mt-2">{{ article.description }}</p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
