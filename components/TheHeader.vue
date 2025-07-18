<template>
  <header class="shadow-md relative z-20">
    <Menubar :model="items" class="border-none rounded-none py-3 px-4 md:px-8">
      <template #start>
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-gray-800 hover:opacity-80 mr-8"
        >
          My Portfolio
        </NuxtLink>
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          v-bind="props.action"
          class="flex items-center"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </NuxtLink>
        <a
          v-else
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
          class="flex items-center"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </header>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "Blog",
    icon: "pi pi-book",
    to: "/blog",
  },
  {
    label: "Proyek",
    icon: "pi pi-github",
    items: [
      {
        label: "Repositori GitHub",
        icon: "pi pi-external-link",
        url: "https://github.com/DimasRizkyFebrian",
        target: "_blank",
      },
    ],
  },
]);
</script>

<style>
.p-menubar-root-list {
  margin-left: auto !important;
}

.p-menubar .p-menuitem:last-child > .p-submenu-list {
  left: auto !important;
  right: 0 !important;
}
</style>
