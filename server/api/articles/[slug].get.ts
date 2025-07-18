import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default defineEventHandler((event) => {
  // Ambil 'slug' dari parameter URL
  const slug = getRouterParam(event, "slug");

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);

  // Cek apakah file ada
  if (!fs.existsSync(filePath)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Artikel tidak ditemukan",
    });
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  // Ambil front-matter DAN kontennya
  const { data, content } = matter(fileContents);

  // Ubah konten markdown menjadi HTML
  const htmlContent = marked(content);

  return {
    title: data.title,
    description: data.description,
    content: htmlContent, // Kirim konten dalam bentuk HTML
    date: data.date,
    image: data.image,
  };
});
