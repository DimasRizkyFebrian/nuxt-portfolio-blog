<template>
  <div v-if="pending">Memuat...</div>
  <div v-else-if="error" class="text-red-500">
    Gagal memuat artikel. Silakan coba lagi.
  </div>
  <article v-else-if="article" class="prose lg:prose-xl max-w-none">
    <h1>{{ article.title }}</h1>
    <p class="lead">{{ article.description }}</p>

    <div v-html="article.content"></div>
  </article>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

// Panggil API dinamis kita dengan slug yang sesuai
const {
  data: article,
  pending,
  error,
} = await useFetch(`/api/articles/${slug}`);

// Set SEO Tags untuk halaman detail
useHead({
  title: () => article.value?.title || "Artikel",
  meta: [
    {
      name: "description",
      content: () => article.value?.description || "Detail artikel",
    },
  ],
});
</script>

<style>
/* Menambahkan beberapa style dasar untuk kelas 'prose' dari Tailwind */
.prose h1 {
  @apply text-4xl lg:text-5xl font-extrabold mb-4;
}
.prose .lead {
  @apply text-xl text-gray-600 mb-8;
}
.prose p {
  @apply my-6;
}
.prose a {
  @apply text-blue-600 hover:underline;
}
</style>
