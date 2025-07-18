---
title: "Memahami Konsep Utama Nuxt: Dari Pages hingga Layouts"
description: "Menyelami lebih dalam tentang konsep-konsep inti yang membuat Nuxt begitu powerful, seperti struktur folder, file-based routing, dan komponen."
date: "2025-07-19"
image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop"
---

## Fondasi Ajaib di Balik Nuxt

Ketika pertama kali menggunakan Nuxt, salah satu hal yang paling mengesankan adalah bagaimana semuanya terasa "bekerja begitu saja". Anda membuat file di folder `pages`, dan tiba-tiba Anda memiliki halaman baru dengan URL yang sesuai. Ini bukan sihir, melainkan salah satu fitur inti Nuxt yang disebut **file-based routing**. Konsep ini secara drastis menyederhanakan cara developer web modern membangun aplikasi multi-halaman.

Struktur folder di Nuxt adalah konvensi yang sangat penting. Dengan mengikuti struktur yang sudah ditentukan, Nuxt dapat secara otomatis mengkonfigurasi banyak hal untuk Anda. Folder `pages/` adalah contoh yang paling jelas. Setiap file `.vue` di dalamnya menjadi sebuah rute. Jika Anda membuat `pages/about.vue`, maka rute `/about` otomatis tersedia. Bahkan rute dinamis pun menjadi mudah dengan membuat file seperti `pages/blog/[slug].vue`, di mana `[slug]` menjadi parameter yang bisa Anda tangkap.

## Komponen dan Layouts: Membangun dengan Blok LEGO

Selain `pages`, ada dua folder lain yang menjadi pilar utama: `components` dan `layouts`. Folder `components/` adalah rumah bagi semua blok bangunan UI Anda yang dapat digunakan kembali. Tombol, kartu artikel, header, footer—semua elemen yang muncul di lebih dari satu tempat sebaiknya dijadikan komponen. Keajaiban Nuxt adalah fitur _auto-import_. Anda tidak perlu menulis `import MyButton from '~/components/MyButton.vue'` di setiap file. Cukup gunakan `<MyButton />` di template Anda, dan Nuxt akan menanganinya secara otomatis.

Sementara itu, folder `layouts/` menyediakan "bungkus" atau template konsisten untuk halaman-halaman Anda. Bayangkan Anda ingin semua halaman memiliki header dan footer yang sama. Daripada menambahkannya di setiap file halaman, Anda cukup membuatnya sekali di `layouts/default.vue`. Tag `<slot />` ajaib di dalam file layout ini akan menjadi tempat di mana konten dari setiap halaman disisipkan. Anda bahkan bisa memiliki beberapa layout, misalnya satu untuk halaman utama dan satu lagi untuk halaman dashboard pengguna, dan memilihnya sesuai kebutuhan. Dengan memahami ketiga pilar ini—pages, components, dan layouts—Anda sudah memiliki fondasi yang sangat kuat untuk membangun aplikasi Nuxt yang kompleks dan terstruktur dengan baik.
