---
title: "Manajemen State Sederhana di Nuxt dengan useState"
description: "Berbagi data antar komponen bisa menjadi rumit. Nuxt menawarkan solusi bawaan yang sederhana dan elegan untuk manajemen state global: useState."
date: "2025-07-21"
image: "https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=1925&auto=format&fit=crop"
---

## Apa Itu State Management?

Dalam aplikasi yang semakin kompleks, seringkali kita memiliki data yang perlu diakses oleh banyak komponen yang berbeda dan tidak memiliki hubungan parent-child secara langsung. Contohnya adalah status login pengguna, tema situs (terang/gelap), atau isi keranjang belanja. Menyebarkan data ini melalui props dari satu komponen ke komponen lain bisa menjadi sangat merepotkan dan tidak efisien. Inilah masalah yang coba dipecahkan oleh _state management_.

State management adalah sebuah pola di mana kita menyimpan "state" atau data aplikasi kita di satu lokasi terpusat (sering disebut _store_). Komponen mana pun yang membutuhkan data tersebut dapat "berlangganan" ke store, dan ketika data di store berubah, semua komponen yang berlangganan akan secara otomatis diperbarui. Ini membuat alur data menjadi lebih jelas dan mudah dikelola.

## useState: Solusi Bawaan Nuxt

Banyak framework JavaScript memiliki solusi state management pihak ketiga yang populer seperti Pinia, Vuex, atau Redux. Meskipun Anda tetap bisa menggunakannya di Nuxt, Nuxt sendiri menyediakan sebuah _composable_ bawaan yang sangat berguna untuk kasus-kasus sederhana: `useState`.

`useState` adalah cara untuk membuat state yang reaktif dan dapat dibagikan di seluruh aplikasi Anda (di sisi server maupun klien) tanpa perlu menginstal library tambahan. Cara kerjanya sangat mudah. Anda mendefinisikan sebuah state dengan kunci unik dan nilai awal:

`const counter = useState('counter', () => 0);`

Sekarang, `counter` adalah sebuah `ref` yang bisa Anda impor dan gunakan di komponen mana pun. Jika satu komponen mengubah nilainya (`counter.value++`), komponen lain yang juga menggunakan `useState('counter')` akan melihat perubahan tersebut dan secara otomatis me-render ulang tampilannya. `useState` sangat ideal untuk data sederhana seperti status otentikasi, tema UI, atau data pengguna yang tidak terlalu kompleks, menjadikannya alat yang sempurna untuk memulai state management di Nuxt.
