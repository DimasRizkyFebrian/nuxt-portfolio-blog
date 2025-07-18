---
title: "Cara Nuxt Mengambil Data: useFetch dan Server Routes"
description: "Data adalah jantung dari aplikasi web. Mari kita pelajari bagaimana Nuxt menyediakan cara yang elegan dan kuat untuk mengambil data, baik dari API eksternal maupun API internal."
date: "2025-07-20"
image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
---

## useFetch: Sahabat Terbaik untuk API Eksternal

Di dunia web modern, aplikasi frontend jarang berdiri sendiri. Mereka perlu berkomunikasi dengan backend atau layanan pihak ketiga untuk mengambil data. Nuxt menyediakan sebuah _composable_ yang sangat kuat untuk tugas ini: `useFetch`. `useFetch` adalah pembungkus (wrapper) di sekitar `fetch` standar browser, tetapi dengan kekuatan super.

Salah satu keunggulan utamanya adalah ia berjalan di sisi server (saat render pertama) dan juga di sisi klien (saat navigasi). Ini berarti halaman Anda sudah memiliki data saat pertama kali dimuat, yang sangat bagus untuk SEO dan performa awal (initial load). `useFetch` juga secara otomatis mengelola state seperti `pending` (apakah data sedang dimuat?), `error` (apakah terjadi kesalahan?), dan `data` itu sendiri. Anda tidak perlu lagi menulis logika `isLoading` secara manual. Cukup panggil `const { data, pending, error } = await useFetch('https://api.example.com/posts');` dan Anda mendapatkan semua yang Anda butuhkan untuk membangun UI yang responsif.

## Server Routes: Membangun Backend Anda Sendiri di Dalam Nuxt

Bagaimana jika Anda tidak ingin bergantung pada API eksternal? Atau mungkin Anda perlu melakukan sesuatu yang tidak seharusnya dilakukan di sisi klien, seperti mengakses database atau menggunakan kunci API rahasia? Di sinilah **Server Routes** Nuxt bersinar. Dengan membuat file di dalam folder `server/api/`, Anda secara efektif membangun backend mini Anda sendiri, yang ditenagai oleh engine server super cepat bernama Nitro.

Seperti yang telah kita lakukan pada proyek blog ini, membuat `server/api/articles.get.ts` langsung memberi kita endpoint `/api/articles`. Di dalam file ini, Anda bisa menulis kode Node.js biasa, menggunakan modul `fs` untuk membaca file, atau bahkan terhubung ke database. Ini membuka kemungkinan tak terbatas. Anda bisa membuat API untuk otentikasi, memproses formulir, atau mengagregasi data dari berbagai sumber sebelum mengirimkannya ke frontend. Kombinasi `useFetch` di frontend untuk memanggil Server Routes di backend adalah pola yang sangat kuat dan umum dalam ekosistem Nuxt, memberikan Anda kontrol penuh atas seluruh tumpukan teknologi (full-stack) dalam satu basis kode.
