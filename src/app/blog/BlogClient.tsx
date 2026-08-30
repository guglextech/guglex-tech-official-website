'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { type BlogPost } from '../../../lib/blog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export type BlogListPost = Omit<BlogPost, 'content'> & {
  readingMinutes: number;
};

interface BlogClientProps {
  posts: BlogListPost[];
  categories: string[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (activeCategory && post.category !== activeCategory) return false;
      if (!isSearching) return true;
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [posts, query, isSearching, activeCategory]);

  const rangeLabel =
    filteredPosts.length === 0
      ? '0 of 0'
      : `1–${filteredPosts.length} of ${filteredPosts.length}`;

  return (
    <div>
      <div className="relative">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2" />
        <Input
          type="search"
          placeholder="Search articles"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-11 rounded-xl pl-10"
        />
        {searchQuery ? (
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            onClick={() => setSearchQuery('')}
            className="absolute top-1/2 right-2 -translate-y-1/2"
            aria-label="Clear search"
          >
            <X />
          </Button>
        ) : null}
      </div>

      {categories.length > 0 ? (
        <div className="mt-5 flex flex-wrap items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
              activeCategory === null
                ? 'bg-muted font-medium text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory((current) => (current === category ? null : category))
              }
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-muted font-medium text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <p className="text-muted-foreground mt-8 mb-3 text-sm">{rangeLabel}</p>

      {filteredPosts.length === 0 ? (
        <div className="rounded-xl border px-5 py-14 md:px-6">
          <p className="text-muted-foreground">No articles match those filters.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border bg-card">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border-b px-5 py-6 last:border-b-0 transition-colors hover:bg-muted/40 md:px-6 md:py-7"
            >
              <p className="text-muted-foreground text-sm">
                {post.category}
                <span className="mx-1.5">·</span>
                {formatDate(post.date)}
                <span className="mx-1.5">·</span>
                {post.readingMinutes} min read
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                {post.title}
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
