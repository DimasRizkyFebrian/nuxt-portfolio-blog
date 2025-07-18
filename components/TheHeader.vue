<template>
  <header class="bg-gray-800 text-white shadow-md">
    <div class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold hover:opacity-80"
        >My Portfolio</NuxtLink
      >
      <nav class="space-x-6">
        <NuxtLink to="/" class="text-lg hover:text-gray-300">Home</NuxtLink>
        <NuxtLink to="/blog" class="text-lg hover:text-gray-300">Blog</NuxtLink>
      </nav>
    </div>
  </header>
</template>
