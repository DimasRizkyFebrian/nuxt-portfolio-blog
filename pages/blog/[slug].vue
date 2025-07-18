<template>
  <div v-if="pending">
    <p class="text-center">Memuat artikel...</p>
  </div>
  <div v-else-if="error" class="text-red-500 text-center">
    Gagal memuat artikel. Silakan coba lagi.
  </div>

  <article v-else-if="article" class="max-w-4xl mx-auto">
    <img
      v-if="article.image"
      :src="article.image"
      :alt="article.title"
      class="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
    />

    <div class="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        {{ article.title }}
      </h1>

      <p v-if="article.date" class="text-gray-500 mb-8">
        Dipublikasikan pada:
        {{
          new Date(article.date).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </p>

      <div v-html="article.content" class="prose lg:prose-xl max-w-none"></div>
    </div>
  </article>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const {
  data: article,
  pending,
  error,
} = await useFetch(`/api/articles/${slug}`);

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

<style lang="postcss">
/* Style untuk konten markdown tetap sama, tapi kita bisa tambah/ubah jika perlu */
.prose h2 {
  @apply text-3xl font-bold mt-12 mb-4 border-b pb-2;
}
.prose a {
  @apply text-blue-600 hover:underline;
}
/* Style untuk code block agar lebih menarik */
.prose pre {
  @apply bg-gray-800 text-white p-4 rounded-lg;
}
</style>
