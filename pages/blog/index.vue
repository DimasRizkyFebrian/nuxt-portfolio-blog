<template>
  <div>
    <h1 class="text-4xl font-extrabold mb-8 border-b pb-4">Blog</h1>

    <div v-if="pending" class="text-center">Memuat artikel...</div>

    <div v-else-if="error" class="text-red-500">Gagal memuat artikel.</div>

    <div v-else-if="articles && articles.length" class="space-y-6">
      <NuxtLink
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
        class="block border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 bg-white"
      >
        <h2 class="text-2xl font-bold text-gray-900">{{ article.title }}</h2>
        <p class="text-gray-600 mt-2">{{ article.description }}</p>
      </NuxtLink>
    </div>

    <div v-else>
      <p>Belum ada artikel yang ditulis.</p>
    </div>
  </div>
</template>

<script setup>
// Gunakan useFetch untuk mengambil data dari API kita
const { data: articles, pending, error } = await useFetch("/api/articles");
</script>
