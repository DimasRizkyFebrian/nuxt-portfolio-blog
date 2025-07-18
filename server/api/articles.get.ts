import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default defineEventHandler(() => {
  // Tentukan path ke folder konten Anda
  const contentDir = path.join(process.cwd(), "content/blog");

  // Baca semua nama file di dalam direktori
  const filenames = fs.readdirSync(contentDir);

  const articles = filenames.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Gunakan gray-matter untuk mem-parse front-matter
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      description: data.description,
    };
  });

  // Urutkan artikel, yang terbaru di atas
  return articles.reverse();
});
