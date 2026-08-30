import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
}

function parsePost(slug: string, fileContents: string): BlogPost {
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    author: data.author || 'Guglex Technologies',
    category: data.category || 'General',
    tags: data.tags || [],
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return parsePost(slug, fs.readFileSync(path.join(postsDirectory, fileName), 'utf8'));
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return parsePost(slug, fs.readFileSync(fullPath, 'utf8'));
}

export function getCategories(): string[] {
  return [...new Set(getAllPosts().map((post) => post.category))];
}

export function estimateReadingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  const others = getAllPosts().filter((post) => post.slug !== slug);

  if (!current) {
    return others.slice(0, limit);
  }

  return others
    .map((post) => {
      let score = 0;
      if (post.category === current.category) score += 3;
      score += post.tags.filter((tag) => current.tags.includes(tag)).length;
      return { post, score };
    })
    .sort((a, b) => (b.score !== a.score ? b.score - a.score : a.post.date < b.post.date ? 1 : -1))
    .slice(0, limit)
    .map(({ post }) => post);
}
