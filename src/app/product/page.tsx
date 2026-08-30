import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CreditCard,
  FileCheck,
  Hash,
  Layers,
  Smartphone,
  Store,
  Wallet,
  Zap,
} from 'lucide-react';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import SiteCta from '@/components/SiteCta';
import { SiteHeroVisual, SiteMedia } from '@/components/SiteMedia';
import { siteImages } from '@/lib/site-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Product',
  description:
    'Ewale and Gyepayments — consumer and business payment products built and operated by Guglex Technologies.',
};

const stats = [
  { value: '2', label: 'Products in production' },
  { value: '*714*22#', label: 'Ewale USSD in Ghana' },
  { value: 'Africa', label: 'Built for local rails' },
];

const products: {
  name: string;
  tag: string;
  icon: LucideIcon;
  image: string;
  summary: string;
  href: string;
  cta: string;
  points: { label: string; icon: LucideIcon }[];
}[] = [
  {
    name: 'Ewale',
    tag: 'Consumer payments',
    icon: Smartphone,
    image: siteImages.products.ewale,
    summary:
      'Everyday purchases for Ghana — airtime, data, ECG prepaid, and WASSCE results — on the web and via USSD *714*22#.',
    href: 'https://ewalepay.com',
    cta: 'Visit Ewale',
    points: [
      { label: 'Multi-network airtime and data', icon: Smartphone },
      { label: 'ECG prepaid tokens', icon: Zap },
      { label: 'WASSCE result checkers', icon: FileCheck },
      { label: 'Web and USSD *714*22#', icon: Hash },
    ],
  },
  {
    name: 'Gyepayments',
    tag: 'Business collections',
    icon: Wallet,
    image: siteImages.products.gyepayments,
    summary:
      'Payment collection for businesses — mobile money, bank transfer, and cards — built for real operational use.',
    href: 'https://gyepayments.guglextechnologies.com',
    cta: 'Visit Gyepayments',
    points: [
      { label: 'Mobile money collection', icon: Smartphone },
      { label: 'Bank transfer', icon: Building2 },
      { label: 'Card payments', icon: CreditCard },
      { label: 'Merchant-ready checkout', icon: Store },
    ],
  },
];

const foundations: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Local rails',
    icon: Layers,
    description:
      'Mobile money, USSD, and the providers our products already run on — MTN, Telecel, ECG, Hubtel, Paystack, and more.',
  },
  {
    title: 'Production traffic',
    icon: Activity,
    description:
      'Retries, webhooks, and reconciliation are not extras. They are how Ewale and Gyepayments stay dependable after go-live.',
  },
  {
    title: 'The same standard',
    icon: BadgeCheck,
    description:
      'Client payment work uses the same constraints we live with every day — not a separate, cleaner demo path.',
  },
];

export default function ProductPage() {
  return (
    <SiteShell>
      <section className="relative border-b bg-card">
        <div className="site-section-grid pointer-events-none absolute inset-0" aria-hidden />
        <SiteContainer className="relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Badge variant="secondary" className="mb-6">
                Products
              </Badge>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Products we build and operate.
              </h1>
              <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                Payment platforms designed for African markets — with the same
                engineering standard we bring to every client engagement.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" render={<a href="#products" />}>
                  Explore products
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
                  src: siteImages.hero.product,
                  alt: 'Payment products built and operated by Guglex',
                }}
              >
                <Card className="shadow-md">
                  <CardHeader className="border-b py-4">
                    <p className="text-muted-foreground text-xs font-medium tracking-[0.16em] uppercase">
                      In production
                    </p>
                    <CardTitle className="text-base">What we operate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0 p-0">
                    {products.map((product, index) => {
                      const Icon = product.icon;
                      return (
                        <a
                          key={product.name}
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-start gap-3 px-4 py-3.5 transition-colors hover:bg-muted/40 ${
                            index === 0 ? 'border-b' : ''
                          }`}
                        >
                          <span className="bg-muted text-foreground flex size-9 shrink-0 items-center justify-center rounded-lg">
                            <Icon className="size-4" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-semibold">{product.name}</p>
                              <Badge variant="outline">{product.tag}</Badge>
                            </div>
                            <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-relaxed">
                              {product.summary}
                            </p>
                          </div>
                          <ArrowUpRight className="text-muted-foreground mt-1 size-4 shrink-0" />
                        </a>
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

      <section id="products" className="site-section scroll-mt-24 bg-background">
        <SiteContainer>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Platforms
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Two products. Two sides of the same stack.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Ewale is how people pay for everyday services. Gyepayments is how
              businesses collect. We run both.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.name} className="h-full overflow-hidden">
                  <SiteMedia
                    src={product.image}
                    alt={product.name}
                    aspectRatio="16/9"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    rounded={false}
                    className="border-0 border-b shadow-none"
                  />
                  <CardHeader>
                    <span className="bg-muted text-foreground mb-3 flex size-10 items-center justify-center rounded-lg">
                      <Icon className="size-5" />
                    </span>
                    <Badge variant="secondary">{product.tag}</Badge>
                    <CardTitle className="mt-1 text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {product.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-4" />
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {product.points.map((point) => {
                        const PointIcon = point.icon;
                        return (
                          <li key={point.label} className="flex items-start gap-2.5">
                            <span className="bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md">
                              <PointIcon className="size-3.5" />
                            </span>
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {point.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <Button
                      className="mt-6"
                      render={
                        <a href={product.href} target="_blank" rel="noopener noreferrer" />
                      }
                    >
                      {product.cta}
                      <ArrowUpRight />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      <section className="site-section border-y bg-card">
        <SiteContainer>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Foundation
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Why we operate our own products
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              The same rails, retries, and support load we take on for clients
              are ones we already live with.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {foundations.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="h-full bg-background">
                  <CardHeader>
                    <span className="bg-muted text-foreground mb-2 flex size-10 items-center justify-center rounded-lg">
                      <Icon className="size-5" />
                    </span>
                    <p className="text-sm font-semibold text-brand-blue tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      <SiteCta
        title="Need a custom payment product?"
        description="We also design and ship platforms, integrations, and digital services for partners across industries."
        primary={{ href: '/contact', label: 'Talk to us' }}
        secondary={{ href: '/use-cases', label: 'See our work' }}
      />
    </SiteShell>
  );
}
