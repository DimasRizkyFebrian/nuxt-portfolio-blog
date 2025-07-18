<template>
  <div>
    <h1 class="text-4xl font-extrabold mb-8 border-b pb-4">Blog</h1>
    <div v-if="articles && articles.length" class="space-y-6">
      <ArticleCard
        v-for="article in articles"
        :key="article._path"
        :article="article"
      />
    </div>
    <div v-else>
      <p>Belum ada artikel yang ditulis.</p>
    </div>
  </div>
</template>

<script setup>
const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/blog").sort({ _path: -1 }).find()
);
</script>
