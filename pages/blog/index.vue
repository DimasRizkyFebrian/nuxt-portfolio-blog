<template>
  <div>
    <Breadcrumb :model="items" class="mb-8">
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

    <h1 class="text-4xl font-extrabold mb-8 border-b pb-4">Semua Artikel</h1>

    <div v-if="pending" class="text-center py-10">Memuat artikel...</div>
    <div v-else-if="error" class="text-red-500 py-10">
      Gagal memuat artikel.
    </div>

    <div
      v-else-if="articles && articles.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <Card
        v-for="article in articles"
        :key="article.slug"
        class="flex flex-col"
      >
        <template #title>
          <NuxtLink
            :to="`/blog/${article.slug}`"
            class="hover:text-blue-600 transition-colors"
          >
            {{ article.title }}
          </NuxtLink>
        </template>
        <template #content>
          <p class="flex-grow">{{ article.description }}</p>
        </template>
        <template #footer>
          <NuxtLink :to="`/blog/${article.slug}`">
            <Button label="Baca Selengkapnya" icon="pi pi-book" text />
          </NuxtLink>
        </template>
      </Card>
    </div>

    <div v-else class="py-10">
      <p>Belum ada artikel yang ditulis.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { data: articles, pending, error } = await useFetch("/api/articles");

const items = ref([{ icon: "pi pi-home", to: "/" }, { label: "Blog" }]);

useHead({
  title: "Blog",
  meta: [
    { name: "description", content: "Kumpulan artikel dan tulisan saya." },
  ],
});
</script>
