<template>
  <div>
    <div
      class="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-20"
    >
      <div class="md:w-2/3 text-center md:text-left">
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
        <NuxtLink to="/blog">
          <Button
            label="Lihat Tulisan Saya"
            icon="pi pi-arrow-right"
            iconPos="right"
            size="large"
          />
        </NuxtLink>
      </div>

      <div class="md:w-1/3 flex justify-center md:justify-end">
        <Avatar
          image="/images/pexels-diva-30644958.webp"
          class="w-64 h-64 md:w-80 md:h-80"
          shape="circle"
        />
      </div>
    </div>
    <div class="py-12 md:py-20 border-t">
      <Panel header="Tulisan Terbaru" :toggleable="true">
        <div v-if="pending">Memuat artikel...</div>
        <div v-else-if="error">Gagal memuat artikel.</div>

        <div
          v-else-if="articles && articles.length"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <Card v-for="article in articles" :key="article.slug">
            <template #title>
              <NuxtLink
                :to="`/blog/${article.slug}`"
                class="hover:text-blue-600 transition-colors"
              >
                {{ article.title }}
              </NuxtLink>
            </template>
            <template #content>
              <p>{{ article.description }}</p>
            </template>
            <template #footer>
              <NuxtLink :to="`/blog/${article.slug}`">
                <Button label="Baca Selengkapnya" icon="pi pi-book" text />
              </NuxtLink>
            </template>
          </Card>
        </div>

        <div v-else>
          <p>Belum ada artikel yang ditulis.</p>
        </div>
      </Panel>
    </div>
  </div>
</template>

<script setup>
const { data: allArticles, pending, error } = await useFetch("/api/articles");

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
