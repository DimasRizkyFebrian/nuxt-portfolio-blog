<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-800">
    <TheHeader />
    <main class="flex-grow container mx-auto p-4 md:p-8">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
