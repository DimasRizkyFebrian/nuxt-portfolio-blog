<template>
  <main>
    <ContentDoc v-slot="{ doc }" tag="article">
      <h1 class="text-4xl lg:text-5xl font-extrabold mb-4">{{ doc.title }}</h1>
      <p class="text-gray-500 mb-8">{{ doc.description }}</p>
      <div class="prose lg:prose-xl max-w-none">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>

<style>
/* Menambahkan style dasar untuk konten yang di-render dari markdown */
.prose h1,
.prose h2,
.prose h3 {
  font-weight: 700;
}
.prose a {
  color: #2563eb;
}
</style>
