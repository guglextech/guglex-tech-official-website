import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import SiteCta from '@/components/SiteCta';
import {
  estimateReadingMinutes,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from '../../../../lib/blog';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Article' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(post.content);
  const contentHtml = processedContent.toString();
  const readingMinutes = estimateReadingMinutes(post.content);
  const related = getRelatedPosts(post.slug, 3);

  return (
    <SiteShell>
      <article className="bg-background">
        <SiteContainer className="site-section" narrow>
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Blog
          </Link>

          <p className="text-muted-foreground mb-5 text-sm">
            {post.category}
            <span className="mx-1.5">·</span>
            {formatDate(post.date)}
            <span className="mx-1.5">·</span>
            {readingMinutes} min read
          </p>

          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-[2.75rem] md:leading-tight">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">{post.excerpt}</p>

          <div className="mt-12">
            <div
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              className="blog-content"
            />

            {post.tags.length > 0 ? (
              <p className="text-muted-foreground mt-12 border-t pt-8 text-sm">
                {post.tags.join('  ·  ')}
              </p>
            ) : null}

            {related.length > 0 ? (
              <aside className="mt-16">
                <p className="mb-4 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Related
                </p>
                <div className="overflow-hidden rounded-xl border bg-card">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="block border-b px-5 py-6 last:border-b-0 transition-colors hover:bg-muted/40 md:px-6"
                    >
                      <p className="text-muted-foreground text-sm">
                        {item.category}
                        <span className="mx-1.5">·</span>
                        {formatDate(item.date)}
                      </p>
                      <h2 className="mt-2 text-lg font-semibold tracking-tight">{item.title}</h2>
                    </Link>
                  ))}
                </div>
              </aside>
            ) : null}
          </div>
        </SiteContainer>
      </article>

      <SiteCta
        title="Need this built for your product?"
        description="We implement collection, USSD, and provider integrations — and stay for the operations after launch."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/developers', label: 'Developer docs' }}
      />
    </SiteShell>
  );
}
