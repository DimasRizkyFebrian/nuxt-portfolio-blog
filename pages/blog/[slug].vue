<template>
  <div v-if="pending">
    <p class="text-center py-10">Memuat artikel...</p>
  </div>
  <div v-else-if="error" class="text-red-500 text-center py-10">
    Gagal memuat artikel. Silakan coba lagi.
  </div>

  <article v-else-if="article" class="max-w-4xl mx-auto">
    <Breadcrumb :model="items" class="mb-8 bg-transparent p-0">
      <template #item="{ item }">
        <NuxtLink v-if="item.to" :to="item.to" class="flex items-center">
          <span v-if="item.icon" :class="item.icon" />
          <span v-if="item.label" class="ml-2">{{ item.label }}</span>
        </NuxtLink>
        <span v-else class="text-gray-500 flex items-center">
          <span v-if="item.icon" :class="item.icon" />
          <span v-if="item.label" class="ml-2">{{ item.label }}</span>
        </span>
      </template>
    </Breadcrumb>

    <Image
      v-if="article.image"
      :src="article.image"
      :alt="article.title"
      imageClass="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
      :preview="true"
    />

    <div class="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
      <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        {{ article.title }}
      </h1>

      <div v-if="article.date" class="mb-8">
        <Chip :label="formattedDate" icon="pi pi-calendar" />
      </div>

      <div v-html="article.content" class="prose lg:prose-xl max-w-none"></div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from "vue";

const route = useRoute();
const slug = route.params.slug;

const {
  data: article,
  pending,
  error,
} = await useFetch(`/api/articles/${slug}`);

// Membuat computed property untuk memformat tanggal
const formattedDate = computed(() => {
  if (!article.value?.date) return "";
  return new Date(article.value.date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

// Data untuk Breadcrumb (dibuat dinamis dengan computed)
const items = computed(() => {
  if (!article.value) return []; // Menghindari error saat data belum ada
  const articleTitle = article.value.title;
  return [
    { icon: "pi pi-home", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: articleTitle },
  ];
});

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
/* Style untuk konten markdown tidak berubah */
.prose h2 {
  @apply text-3xl font-bold mt-12 mb-4 border-b pb-2;
}
.prose a {
  @apply text-blue-600 hover:underline;
}
.prose pre {
  @apply bg-gray-800 text-white p-4 rounded-lg;
}
</style>
