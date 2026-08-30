import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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

const stats = [
  { value: '2', label: 'Products in production' },
  { value: 'USSD', label: '*714*22# live in Ghana' },
  { value: 'Africa', label: 'Built for local rails' },
];

const integrations = [
  { name: 'MTN', src: '/brands/mtn.svg' },
  { name: 'Telecel', src: '/brands/telecel.svg' },
  { name: 'Ghana Water', src: '/brands/ghana-water.svg' },
  { name: 'ECG', src: '/brands/ecg.svg' },
  { name: 'GoTV', src: '/brands/gotv.svg' },
  { name: 'StarTimes', src: '/brands/startimes.svg' },
  { name: 'WAEC', src: '/brands/waec.svg' },
  { name: 'Hubtel', src: '/brands/hubtel.svg' },
  { name: 'Paystack', src: '/brands/paystack.svg' },
];

const capabilities = [
  {
    title: 'Product engineering',
    description:
      'Custom platforms and customer-facing products built for reliability, clarity, and scale.',
  },
  {
    title: 'Payments infrastructure',
    description:
      'Mobile money, USSD, and gateway integrations designed for African production traffic.',
  },
  {
    title: 'Mobile experiences',
    description:
      'Apps and flows that stay obvious from first open to confirmed transaction.',
  },
  {
    title: 'Delivery & operations',
    description:
      'Architecture, launch, and monitoring so systems stay dependable after go-live.',
  },
];

const products = [
  {
    name: 'Ewale',
    tag: 'Consumer payments',
    image: siteImages.products.ewale,
    description:
      'Airtime, data, ECG prepaid, and WASSCE results across major networks — on the web and via USSD *714*22#.',
    points: ['Multi-network airtime and data', 'ECG prepaid tokens', 'Result checkers', 'Web and USSD'],
    href: 'https://ewalepay.com',
  },
  {
    name: 'Gyepayments',
    tag: 'Business collections',
    image: siteImages.products.gyepayments,
    description:
      'Payment collection for businesses — mobile money, bank transfer, and cards in one place.',
    points: ['Mobile money', 'Bank transfer', 'Card payments', 'Merchant checkout'],
    href: 'https://gyepayments.guglextechnologies.com',
  },
];

const work = [
  {
    name: 'Ewale',
    category: 'Consumer payments',
    image: siteImages.work.ewale,
    summary: 'Everyday purchases for Ghana — airtime, utilities, and result checkers.',
  },
  {
    name: 'Hubtel integration',
    category: 'Payments',
    image: siteImages.work.hubtel,
    summary: 'Production collection with callbacks, retries, and reconciliation.',
  },
  {
    name: 'Jolee Bakery',
    category: 'Ecommerce',
    image: siteImages.work.jolee,
    summary: 'Storefront checkout with Hubtel and Stripe for local and card payments.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'Goals, channels, and the failure cases you are willing to live with.',
  },
  {
    step: '02',
    title: 'Build',
    description: 'Design and engineering in short cycles, including declines and timeouts.',
  },
  {
    step: '03',
    title: 'Launch',
    description: 'Production keys, monitoring, and support after the first real payment.',
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative border-b bg-card">
        <div className="site-section-grid pointer-events-none absolute inset-0" aria-hidden />
        <SiteContainer className="relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Badge variant="secondary" className="home-fade-up mb-6">
                Payments & product engineering
              </Badge>
              <h1 className="home-fade-up home-fade-up-delay-1 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Software and payments for businesses across Africa.
              </h1>
              <p className="home-fade-up home-fade-up-delay-2 text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                Guglex Technologies designs and ships payment systems, digital
                platforms, and products built for production use.
              </p>
              <div className="home-fade-up home-fade-up-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" render={<Link href="/contact" />}>
                  Talk to us
                  <ArrowRight />
                </Button>
                <Button size="lg" variant="outline" render={<Link href="/use-cases" />}>
                  See our work
                </Button>
              </div>
            </div>

            <div className="home-fade-up home-fade-up-delay-3 lg:col-span-5">
              <SiteHeroVisual
                image={{
                  src: siteImages.hero.home,
                  alt: 'Mobile payment experience built for African markets',
                }}
              >
                <Card className="shadow-md">
                  <CardHeader className="border-b py-4">
                    <p className="text-muted-foreground text-xs font-medium tracking-[0.16em] uppercase">
                      In production
                    </p>
                    <CardTitle className="text-base">Products we operate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0 p-0">
                    {products.map((product, index) => (
                      <a
                        key={product.name}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-start justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-muted/40 ${
                          index === 0 ? 'border-b' : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{product.name}</p>
                            <Badge variant="outline">{product.tag}</Badge>
                          </div>
                          <p className="text-muted-foreground mt-1 line-clamp-2 text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                        <ArrowUpRight className="text-muted-foreground mt-1 size-4 shrink-0" />
                      </a>
                    ))}
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

      <section className="border-b bg-background">
        <SiteContainer className="py-10 md:py-12">
          <p className="text-muted-foreground mb-6 text-xs font-medium tracking-[0.16em] uppercase">
            Networks and providers we integrate
          </p>
          <div className="site-logo-grid">
            {integrations.map((brand) => (
              <div key={brand.name} className="site-logo-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-7 w-auto max-w-[6.5rem] object-contain opacity-60 grayscale transition-opacity hover:opacity-100 dark:invert sm:h-8"
                />
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="site-section bg-background">
        <SiteContainer>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                Capabilities
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What we do</h2>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                End-to-end product delivery — from discovery through engineering, launch, and support.
              </p>
            </div>
            <Button variant="outline" render={<Link href="/services" />}>
              View services
              <ArrowRight />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <p className="text-sm font-semibold text-brand-blue tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="site-section border-y bg-card">
        <SiteContainer>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Products
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Platforms we build and operate
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              The same constraints we meet in client work — providers, retries, and reconciliation — are ones we live with every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {products.map((product) => (
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
                  <Badge variant="secondary">{product.tag}</Badge>
                  <CardTitle className="mt-1 text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {product.points.map((point) => (
                      <li key={point} className="text-muted-foreground flex items-start gap-2 text-sm">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="link"
                    className="mt-5 px-0"
                    render={<a href={product.href} target="_blank" rel="noopener noreferrer" />}
                  >
                    Visit {product.name}
                    <ArrowUpRight />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="site-section bg-background">
        <SiteContainer>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                Selected work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Projects that moved money and served users
              </h2>
            </div>
            <Button variant="outline" render={<Link href="/use-cases" />}>
              All use cases
              <ArrowRight />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {work.map((item) => (
              <Card key={item.name} className="h-full overflow-hidden">
                <SiteMedia
                  src={item.image}
                  alt={item.name}
                  aspectRatio="16/10"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  rounded={false}
                  className="border-0 border-b shadow-none"
                />
                <div className="px-5 py-6">
                  <p className="text-muted-foreground text-sm">{item.category}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.name}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{item.summary}</p>
                </div>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="site-section border-t bg-card">
        <SiteContainer>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Approach
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A clear path from brief to launch
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Simple stages, honest timelines, and delivery you can track.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {process.map((item) => (
              <Card key={item.step} className="h-full">
                <CardHeader>
                  <p className="text-sm font-semibold text-brand-blue">{item.step}</p>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>

      <SiteCta
        title="Let's build what's next."
        description="Tell us about your product, payment flow, or platform challenge. We'll respond with a clear next step."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/use-cases', label: 'See our work' }}
      />
    </SiteShell>
  );
}
