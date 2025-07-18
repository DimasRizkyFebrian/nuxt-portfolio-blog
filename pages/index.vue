<template>
  <div>
    <div
      class="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-20"
    >
      <div class="md:w-1/2 text-center md:text-left">
        <h1
          class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
        >
          Halo, Saya Dimas Rizky Febrian
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Seorang Web Developer dengan passion untuk menciptakan aplikasi yang
          bersih, modern, dan fungsional menggunakan Nuxt. Selamat datang di
          ruang digital saya.
        </p>
        <NuxtLink
          to="/blog"
          class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Lihat Tulisan Saya
        </NuxtLink>
      </div>

      <div class="md:w-1/2 flex justify-center">
        <img
          src="/images/pexels-diva-30644958.webp"
          alt="Foto Profil Anda"
          class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
        />
      </div>
    </div>
    <div class="py-12 md:py-20 border-t">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        Tulisan Terbaru
      </h2>

      <div v-if="pending">Memuat artikel...</div>
      <div v-else-if="error">Gagal memuat artikel.</div>

      <div v-else-if="articles && articles.length" class="space-y-6">
        <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Ambil data artikel, sama seperti di halaman blog
const { data: allArticles, pending, error } = await useFetch("/api/articles");

// Buat computed property untuk mengambil 3 artikel teratas saja
const articles = computed(() => {
  if (allArticles.value) {
    return allArticles.value.slice(0, 3);
  }
  return [];
});

useHead({
  title: "Home - Portofolio",
  meta: [
    {
      name: "description",
      content:
        "Selamat datang di situs portofolio dan blog saya, dibuat dengan Nuxt.",
    },
  ],
});
</script>
