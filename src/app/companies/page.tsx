import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Handshake,
  Layers,
  Music2,
  Plug,
  ShieldCheck,
  ShoppingBag,
  Ticket,
  Users,
  Zap,
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
  title: 'Partners',
  description:
    'Companies and organizations Guglex Technologies partners with across payments, platforms, ecommerce, and digital services in Africa.',
};

type Partner = {
  name: string;
  category: string;
  icon: LucideIcon;
  image: string;
  summary: string;
  highlights: { label: string; icon: LucideIcon }[];
};

type PartnerGroup = {
  id: string;
  title: string;
  description: string;
  items: Partner[];
};

const stats = [
  { value: '6+', label: 'Active partnerships' },
  { value: 'Payments', label: 'Platforms and integrations' },
  { value: 'Africa', label: 'Built for production use' },
];

const partnerModels: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Product delivery',
    icon: Layers,
    description:
      'Platforms, storefronts, and member experiences — scoped clearly and built to stay up after launch.',
  },
  {
    title: 'Payment integrations',
    icon: Plug,
    description:
      'Hubtel, Paystack, and local rails with callbacks, retries, and reconciliation you can trust.',
  },
  {
    title: 'Long-term support',
    icon: ShieldCheck,
    description:
      'We operate our own products too, so partners get the same operational standard we hold ourselves to.',
  },
];

const groups: PartnerGroup[] = [
  {
    id: 'platforms',
    title: 'Platforms & services',
    description: 'Membership, entertainment, publishing, and digital services.',
    items: [
      {
        name: 'Public Sector Workers Union',
        category: 'Membership',
        icon: Users,
        image: siteImages.work.pswu,
        summary:
          'Member-facing programs, updates, and services with clear navigation and reliable access.',
        highlights: [
          { label: 'Union information hub', icon: Users },
          { label: 'Member-focused content', icon: BookOpen },
          { label: 'Service navigation', icon: Layers },
          { label: 'Reliable public access', icon: ShieldCheck },
        ],
      },
      {
        name: 'Victory Entertainment Empire',
        category: 'Entertainment',
        icon: Music2,
        image: siteImages.work.victory,
        summary:
          'Events, promotions, and audience engagement — built for fans and organizers.',
        highlights: [
          { label: 'Brand and event presence', icon: Music2 },
          { label: 'Audience experience', icon: Users },
          { label: 'Content and promotions', icon: Layers },
          { label: 'Mobile-ready delivery', icon: Zap },
        ],
      },
      {
        name: 'DV Publication',
        category: 'Publishing',
        icon: BookOpen,
        image: siteImages.work.dv,
        summary:
          'Structured content presentation that helps publications reach readers online.',
        highlights: [
          { label: 'Publication presence', icon: BookOpen },
          { label: 'Content presentation', icon: Layers },
          { label: 'Reader-friendly layout', icon: Users },
          { label: 'Scalable structure', icon: ShieldCheck },
        ],
      },
      {
        name: 'Wotiriye Lottery',
        category: 'Digital services',
        icon: Ticket,
        image: siteImages.work.lottery,
        summary:
          'Secure participation, clear draws, and trustworthy workflows for players and operators.',
        highlights: [
          { label: 'Participation flow', icon: Ticket },
          { label: 'Secure transactions', icon: ShieldCheck },
          { label: 'Clear draw experience', icon: Layers },
          { label: 'Operator workflows', icon: Plug },
        ],
      },
    ],
  },
  {
    id: 'commerce',
    title: 'Commerce',
    description: 'Storefronts and checkout built for local and card payments.',
    items: [
      {
        name: 'Jolee Bakery',
        category: 'Ecommerce',
        icon: ShoppingBag,
        image: siteImages.work.jolee,
        summary:
          'Storefront with Hubtel for mobile money and Stripe for cards.',
        highlights: [
          { label: 'Ecommerce storefront', icon: ShoppingBag },
          { label: 'Hubtel integration', icon: Plug },
          { label: 'Stripe card payments', icon: Layers },
          { label: 'Order and checkout flow', icon: ShieldCheck },
        ],
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & integrations',
    description: 'Gateway partners and production collection flows.',
    items: [
      {
        name: 'Hubtel',
        category: 'Payment provider',
        icon: Plug,
        image: siteImages.work.hubtel,
        summary:
          'Mobile money and card collection with callbacks, reconciliation, and production error handling.',
        highlights: [
          { label: 'Mobile money collection', icon: Plug },
          { label: 'USSD service flows', icon: Layers },
          { label: 'Webhook and status sync', icon: ShieldCheck },
          { label: 'Settlement-ready reporting', icon: Zap },
        ],
      },
    ],
  },
];

export default function Companies() {
  const featured = groups.flatMap((group) => group.items).slice(0, 3);

  return (
    <SiteShell>
      <section className="relative border-b bg-card">
        <div className="site-section-grid pointer-events-none absolute inset-0" aria-hidden />
        <SiteContainer className="relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Badge variant="secondary" className="mb-6">
                Partners
              </Badge>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Companies we build with.
              </h1>
              <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                Selected partners across payments, publishing, membership, and
                digital services — relationships built on delivery that holds up
                in production.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" render={<a href="#partners" />}>
                  View partners
                  <ArrowRight />
                </Button>
                <Button size="lg" variant="outline" render={<Link href="/contact" />}>
                  Become a partner
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SiteHeroVisual
                image={{
                  src: siteImages.hero.partners,
                  alt: 'Partnership and collaboration at Guglex Technologies',
                }}
              >
                <Card size="sm" className="shadow-md">
                  <CardHeader className="gap-1 border-b py-3">
                    <p className="text-muted-foreground text-xs font-medium tracking-[0.16em] uppercase">
                      Featured
                    </p>
                    <CardTitle>Selected partners</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0 p-0">
                    {featured.map((partner, index) => {
                      const Icon = partner.icon;
                      return (
                        <div
                          key={partner.name}
                          className={`flex items-start gap-2.5 px-3 py-3 ${
                            index < featured.length - 1 ? 'border-b' : ''
                          }`}
                        >
                          <span className="bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-md">
                            <Icon className="size-3.5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <p className="text-sm font-semibold">{partner.name}</p>
                              <Badge variant="outline" className="text-xs">
                                {partner.category}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mt-0.5 line-clamp-2 text-xs leading-relaxed">
                              {partner.summary}
                            </p>
                          </div>
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
              <div key={stat.label} className="bg-card px-5 py-4">
                <p className="text-lg font-semibold tracking-tight">{stat.value}</p>
                <p className="text-muted-foreground mt-0.5 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="site-section border-b bg-background">
        <SiteContainer>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              How we partner
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Delivery, integrations, and support
            </h2>
            <p className="text-muted-foreground mt-3 text-base leading-relaxed">
              Partnerships are not one-off handoffs. We stay close until the work
              runs reliably in production.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {partnerModels.map((item, index) => (
              <SiteIconCard
                key={item.title}
                index={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </SiteContainer>
      </section>

      {groups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={groupIndex === 0 ? 'partners' : group.id}
          className={
            groupIndex % 2 === 0
              ? 'site-section scroll-mt-24 border-b bg-card'
              : 'site-section scroll-mt-24 bg-background'
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
              {group.items.map((partner) => (
                <SiteItemCard
                  key={partner.name}
                  image={{ src: partner.image, alt: partner.name }}
                  category={partner.category}
                  title={partner.name}
                  description={partner.summary}
                  icon={partner.icon}
                  highlights={partner.highlights}
                />
              ))}
            </div>
          </SiteContainer>
        </section>
      ))}

      <section className="site-section border-t bg-card">
        <SiteContainer>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SiteMedia
                src={siteImages.hero.partners}
                alt="Partnership discussion and planning"
                aspectRatio="16/10"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <span className="bg-muted text-foreground mb-3 flex size-8 items-center justify-center rounded-md">
                <Handshake className="size-4" />
              </span>
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                Work with us
              </p>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                A partner who ships and stays
              </h2>
              <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                Whether you need a platform built, payments integrated, or a
                product taken from brief to production — we scope honestly and
                deliver with the same standard we apply to Ewale and Gyepayments.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button render={<Link href="/contact" />}>
                  Start a conversation
                  <ArrowRight />
                </Button>
                <Button variant="outline" render={<Link href="/use-cases" />}>
                  See our work
                </Button>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteCta
        title="Looking for a delivery partner?"
        description="Tell us about your product, platform, or payment integration needs. We'll respond with a clear next step."
        primary={{ href: '/contact', label: 'Become a partner' }}
        secondary={{ href: '/services', label: 'View services' }}
      />
    </SiteShell>
  );
}
