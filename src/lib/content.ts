import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostType = "blog" | "story" | "gallery";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  type: PostType;
  coverColor: string;
  coverImage?: string; // path in /public/images/ — optional
  author?: string;
  tags?: string[];
  content: string;
};

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
  const { data, content } = matter(raw);

  // Strip markdown for plain excerpt
  const plainExcerpt = content
    .replace(/#{1,6}\s+/g, "")
    .replace(/\*\*|__|\*|_|`/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim()
    .slice(0, 180);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString().slice(0, 10),
    excerpt: data.excerpt ?? plainExcerpt + (plainExcerpt.length >= 180 ? "…" : ""),
    type: (data.type as PostType) ?? "blog",
    coverColor: data.coverColor ?? "#0B6E4F",
    coverImage: data.coverImage,
    author: data.author,
    tags: data.tags ?? [],
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parsePost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByType(type: PostType): Post[] {
  return getAllPosts().filter((p) => p.type === type);
}

export function getPostBySlug(slug: string): Post | null {
  const filepath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  return parsePost(`${slug}.md`);
}

export function getRecentPosts(limit = 3): Post[] {
  return getAllPosts().slice(0, limit);
}
