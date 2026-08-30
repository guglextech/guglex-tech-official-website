import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import SiteCta from '@/components/SiteCta';
import { estimateReadingMinutes, getAllPosts, getCategories } from '../../../lib/blog';
import BlogClient, { type BlogListPost } from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides for everyday payments — result checkers, airtime, data, and bills in Ghana, plus how to pay on *714*22#.',
};

export default function Blog() {
  const posts: BlogListPost[] = getAllPosts().map(({ content, ...post }) => ({
    ...post,
    readingMinutes: estimateReadingMinutes(content),
  }));
  const categories = getCategories().sort((a, b) => a.localeCompare(b));

  return (
    <SiteShell>
      <section className="bg-background">
        <SiteContainer className="site-section">
          <p className="mb-3 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Blog
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Guides for everyday payments
          </h1>
          <p className="text-muted-foreground mt-5 max-w-xl text-lg leading-relaxed">
            Result checkers, airtime, data, and bills in Ghana — plus how to pay on *714*22#.
          </p>

          <div className="mt-12 md:mt-16">
            <BlogClient posts={posts} categories={categories} />
          </div>
        </SiteContainer>
      </section>

      <SiteCta
        title="Building a payments product?"
        description="We design, ship, and operate collection systems — web, USSD, and the provider work in between."
        primary={{ href: '/contact', label: 'Talk to us' }}
        secondary={{ href: '/developers', label: 'Read the docs' }}
      />
    </SiteShell>
  );
}
