import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CreditCard,
  Layers,
  Music2,
  Plug,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Ticket,
  Users,
} from 'lucide-react';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import SiteCta from '@/components/SiteCta';
import { SiteHeroVisual, SiteMedia } from '@/components/SiteMedia';
import { SiteIconCard, SiteItemCard, siteItemGridClass } from '@/components/SiteItemCard';
import { siteImages } from '@/lib/site-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Use cases',
  description:
    'Selected work in products, payments, ecommerce, and platforms built by Guglex Technologies for African markets.',
};

type CaseStudy = {
  name: string;
  category: string;
  icon: LucideIcon;
  image: string;
  summary: string;
  outcomes: { label: string; icon: LucideIcon }[];
  href?: string;
};

type CaseGroup = {
  id: string;
  title: string;
  description: string;
  items: CaseStudy[];
};

const stats = [
  { value: '8', label: 'Selected projects' },
  { value: 'Payments', label: 'Products and integrations' },
  { value: 'Africa', label: 'Built for production use' },
];

const groups: CaseGroup[] = [
  {
    id: 'products',
    title: 'Products',
    description: 'Platforms we built and operate in production.',
    items: [
      {
        name: 'Ewale',
        category: 'Consumer payments',
        icon: Smartphone,
        image: siteImages.work.ewale,
        summary:
          'A consumer platform for airtime, data, ECG prepaid, and WASSCE results — on the web and via USSD *714*22#.',
        outcomes: [
          { label: 'Multi-network airtime and data', icon: Smartphone },
          { label: 'ECG prepaid top-ups', icon: Layers },
          { label: 'WASSCE results purchases', icon: BookOpen },
          { label: 'Web and USSD access', icon: Plug },
        ],
        href: 'https://ewalepay.com',
      },
    ],
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    description: 'Storefronts and checkout built for local and card payments.',
    items: [
      {
        name: 'Jolee Bakery',
        category: 'Ecommerce and payments',
        icon: ShoppingBag,
        image: siteImages.work.jolee,
        summary:
          'A bakery storefront with Hubtel for mobile money and Stripe for cards — so customers can pay the way that works for them.',
        outcomes: [
          { label: 'Ecommerce storefront', icon: ShoppingBag },
          { label: 'Hubtel payment integration', icon: Plug },
          { label: 'Stripe card payments', icon: CreditCard },
          { label: 'Order and checkout flow', icon: Layers },
        ],
      },
    ],
  },
  {
    id: 'platforms',
    title: 'Platforms',
    description: 'Membership, entertainment, publishing, and digital services.',
    items: [
      {
        name: 'Victory Entertainment Empire',
        category: 'Entertainment',
        icon: Music2,
        image: siteImages.work.victory,
        summary:
          'A digital platform for events, promotions, and audience engagement — built for fans and organizers.',
        outcomes: [
          { label: 'Brand and event presence', icon: Music2 },
          { label: 'Audience-facing experience', icon: Users },
          { label: 'Content and promotions', icon: Layers },
          { label: 'Mobile-ready delivery', icon: Smartphone },
        ],
      },
      {
        name: 'Public Sector Workers Union',
        category: 'Membership',
        icon: Users,
        image: siteImages.work.pswu,
        summary:
          'A member-facing experience for programs, updates, and services — clear navigation and reliable public access.',
        outcomes: [
          { label: 'Union information hub', icon: Users },
          { label: 'Member-focused content', icon: BookOpen },
          { label: 'Clear service navigation', icon: Layers },
          { label: 'Reliable public access', icon: ShieldCheck },
        ],
      },
      {
        name: 'Wotiriye Lottery',
        category: 'Lottery and digital services',
        icon: Ticket,
        image: siteImages.work.lottery,
        summary:
          'A lottery experience designed for secure participation, clear draws, and trustworthy workflows for players and operators.',
        outcomes: [
          { label: 'Lottery participation flow', icon: Ticket },
          { label: 'Secure transaction handling', icon: ShieldCheck },
          { label: 'Clear draw experience', icon: Layers },
          { label: 'Operator-ready workflows', icon: Plug },
        ],
      },
      {
        name: 'DV Publication',
        category: 'Publishing',
        icon: BookOpen,
        image: siteImages.work.dv,
        summary:
          'A publishing platform helping content reach readers with a structured, professional presentation online.',
        outcomes: [
          { label: 'Publication presence', icon: BookOpen },
          { label: 'Content presentation', icon: Layers },
          { label: 'Reader-friendly layout', icon: Smartphone },
          { label: 'Scalable content structure', icon: Plug },
        ],
      },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Payment rails wired cleanly into production products.',
    items: [
      {
        name: 'Hubtel Integration',
        category: 'Payment integration',
        icon: Plug,
        image: siteImages.work.hubtelIntegration,
        summary:
          'End-to-end Hubtel integration for mobile money and card collection — callbacks, reconciliation, and production-ready error handling.',
        outcomes: [
          { label: 'Mobile money collection', icon: Smartphone },
          { label: 'Secure checkout flows', icon: ShieldCheck },
          { label: 'Webhook and status sync', icon: Plug },
          { label: 'Settlement-ready reporting', icon: Layers },
        ],
      },
      {
        name: 'Paystack Integration',
        category: 'Payment integration',
        icon: CreditCard,
        image: siteImages.work.paystack,
        summary:
          'Paystack integration for card and local payment methods — verified webhooks, retry-safe transactions, and a checkout that converts.',
        outcomes: [
          { label: 'Card and local payments', icon: CreditCard },
          { label: 'Verified webhook handling', icon: ShieldCheck },
          { label: 'Retry-safe transactions', icon: Plug },
          { label: 'Developer-friendly setup', icon: Layers },
        ],
      },
    ],
  },
];

const focusAreas: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Consumer payment products',
    icon: Smartphone,
    description:
      'Everyday services like airtime, utilities, and digital purchases — designed for speed and trust.',
  },
  {
    title: 'Gateway integrations',
    icon: Plug,
    description:
      'Hubtel, Paystack, and similar providers wired cleanly into your product with reliable callbacks.',
  },
  {
    title: 'Production readiness',
    icon: ShieldCheck,
    description:
      'Error handling, reconciliation, and monitoring so payments stay dependable after launch.',
  },
];

export default function UseCases() {
  const featured = groups.flatMap((group) => group.items).slice(0, 3);

  return (
    <SiteShell>
      <section className="relative border-b bg-card">
        <div className="site-section-grid pointer-events-none absolute inset-0" aria-hidden />
        <SiteContainer className="relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Badge variant="secondary" className="mb-6">
                Use cases
              </Badge>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Selected work in products and payments.
              </h1>
              <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                Real platforms and integrations we designed, built, and shipped
                for African markets — built to work in production.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" render={<a href="#case-studies" />}>
                  View case studies
                  <ArrowRight />
                </Button>
                <Button size="lg" variant="outline" render={<Link href="/contact" />}>
                  Talk to us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SiteHeroVisual
                image={{
                  src: siteImages.hero.useCases,
                  alt: 'Selected product and payment work by Guglex Technologies',
                }}
              >
                <Card className="shadow-md">
                  <CardHeader className="border-b py-4">
                    <p className="text-muted-foreground text-xs font-medium tracking-[0.16em] uppercase">
                      Featured
                    </p>
                    <CardTitle className="text-base">Recent work</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0 p-0">
                    {featured.map((study, index) => {
                      const Icon = study.icon;
                      const content = (
                        <>
                          <span className="bg-muted text-foreground flex size-9 shrink-0 items-center justify-center rounded-lg">
                            <Icon className="size-4" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-semibold">{study.name}</p>
                              <Badge variant="outline">{study.category}</Badge>
                            </div>
                            <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-relaxed">
                              {study.summary}
                            </p>
                          </div>
                          {study.href ? (
                            <ArrowUpRight className="text-muted-foreground mt-1 size-4 shrink-0" />
                          ) : null}
                        </>
                      );

                      if (study.href) {
                        return (
                          <a
                            key={study.name}
                            href={study.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-start gap-3 px-4 py-3.5 transition-colors hover:bg-muted/40 ${
                              index < featured.length - 1 ? 'border-b' : ''
                            }`}
                          >
                            {content}
                          </a>
                        );
                      }

                      return (
                        <div
                          key={study.name}
                          className={`flex items-start gap-3 px-4 py-3.5 ${
                            index < featured.length - 1 ? 'border-b' : ''
                          }`}
                        >
                          {content}
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </SiteHeroVisual>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-5 py-5">
                <p className="text-xl font-semibold tracking-tight">{stat.value}</p>
                <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      {groups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={groupIndex === 0 ? 'case-studies' : group.id}
          className={
            groupIndex % 2 === 0
              ? 'site-section scroll-mt-24 bg-background'
              : 'site-section scroll-mt-24 border-y bg-card'
          }
        >
          <SiteContainer>
            <div className="mb-8 max-w-2xl md:mb-10">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                {String(groupIndex + 1).padStart(2, '0')}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {group.title}
              </h2>
              <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                {group.description}
              </p>
            </div>

            <div className={siteItemGridClass(group.items.length)}>
              {group.items.map((study) => (
                <SiteItemCard
                  key={study.name}
                  image={{ src: study.image, alt: study.name }}
                  category={study.category}
                  title={study.name}
                  description={study.summary}
                  icon={study.icon}
                  highlights={study.outcomes}
                  href={study.href}
                  linkLabel="Visit product"
                />
              ))}
            </div>
          </SiteContainer>
        </section>
      ))}

      <section className="site-section border-t bg-background">
        <SiteContainer>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Focus
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Where we deliver the most value
            </h2>
            <p className="text-muted-foreground mt-3 text-base leading-relaxed">
              The work we take on most often — and where production experience
              matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {focusAreas.map((item, index) => (
              <SiteIconCard
                key={item.title}
                index={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className="bg-card"
              />
            ))}
          </div>
        </SiteContainer>
      </section>

      <SiteCta
        title="Need a payment product or integration?"
        description="Tell us what you're building. We'll help you scope the right approach for Hubtel, Paystack, or a custom payments flow."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/services', label: 'View services' }}
      />
    </SiteShell>
  );
}
