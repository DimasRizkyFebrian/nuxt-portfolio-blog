---
title: "Dari Lokal ke Global: Cara Deploy Proyek Nuxt Anda"
description: "Setelah selesai membangun aplikasi, langkah selanjutnya adalah membagikannya kepada dunia. Mari kita bahas berbagai strategi deployment Nuxt dan platform populer untuk melakukannya."
date: "2025-07-23"
image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
---

## Memilih Strategi Rendering Anda

Sebelum melakukan deployment, penting untuk memahami dua strategi rendering utama yang ditawarkan Nuxt:

1.  **Static Site Generation (SSG)**: Ini adalah proses yang kita lakukan dengan perintah `npm run generate`. Nuxt akan membangun setiap halaman aplikasi Anda menjadi file HTML, CSS, dan JavaScript statis pada saat _build time_. Hasilnya adalah sekumpulan file yang bisa Anda letakkan di server mana pun. Karena halamannya sudah jadi, SSG menghasilkan situs yang sangat cepat, aman, dan bagus untuk SEO. Ini adalah pilihan ideal untuk situs yang kontennya tidak sering berubah, seperti blog, portofolio, atau situs dokumentasi.

2.  **Server-Side Rendering (SSR)**: Ini adalah mode default saat Anda menjalankan `npm run build`. Dalam mode SSR, setiap kali pengguna meminta sebuah halaman, server Node.js akan me-render halaman tersebut secara _real-time_ dan mengirimkannya ke browser. Ini memungkinkan halaman yang sangat dinamis dan personal, di mana kontennya bisa berbeda untuk setiap pengguna atau setiap permintaan. SSR cocok untuk aplikasi e-commerce, media sosial, atau dashboard yang memerlukan data terbaru.

## Platform Deployment Modern

Dulu, deployment berarti menyewa server, mengkonfigurasi Nginx, dan mengelola semuanya sendiri. Kini, platform modern membuat proses ini menjadi sangat mudah, terutama untuk proyek Nuxt. Platform seperti **Vercel**, **Netlify**, **Cloudflare Pages**, dan **Render** menawarkan integrasi langsung dengan repositori Git Anda.

Prosesnya biasanya seperti ini:

1.  Anda menghubungkan akun GitHub Anda ke platform tersebut.
2.  Anda memilih repositori proyek Nuxt Anda.
3.  Platform akan secara otomatis mendeteksi bahwa ini adalah proyek Nuxt dan menyarankan pengaturan build yang benar (misalnya, perintah `npm run generate` untuk SSG).
4.  Setiap kali Anda melakukan `git push` ke branch utama Anda, platform akan secara otomatis menjalankan proses build dan men-deploy versi terbaru dari situs Anda ke seluruh dunia melalui Content Delivery Network (CDN) mereka.

Platform-platform ini seringkali memiliki paket gratis yang sangat murah hati untuk proyek pribadi dan hobi. Dengan beberapa klik, proyek Nuxt yang tadinya hanya ada di komputer lokal Anda kini bisa diakses oleh siapa pun di seluruh dunia dengan performa yang luar biasa.
