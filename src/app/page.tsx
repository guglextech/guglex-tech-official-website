import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import SiteCta from '@/components/SiteCta';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const capabilities = [
  {
    title: 'Product engineering',
    description:
      'Custom platforms and customer-facing products built for reliability and scale.',
  },
  {
    title: 'Payments infrastructure',
    description:
      'Mobile money, USSD, and gateway integrations designed for African markets.',
  },
  {
    title: 'Mobile experiences',
    description:
      'Apps and flows that feel fast and obvious — from first open to confirmed transaction.',
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
    detail: 'Consumer payments',
    description:
      'Airtime, data, ECG prepaid, and WASSCE results across major networks. Available on the web and via USSD *714*22#.',
    href: 'https://ewalepay.com',
  },
  {
    name: 'Gyepayments',
    detail: 'Business collections',
    description:
      'Payment collection for businesses — mobile money, bank transfer, and cards in one place.',
    href: 'https://gyepayments.guglextechnologies.com',
  },
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

export default function Home() {
  return (
    <SiteShell>
      <section className="border-b bg-card">
        <SiteContainer className="py-24 md:py-32">
          <h1 className="home-fade-up max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Software and payments for businesses across Africa.
          </h1>
          <p className="home-fade-up home-fade-up-delay-1 text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
            Guglex Technologies designs and ships payment systems, digital
            platforms, and products built for production use.
          </p>
          <div className="home-fade-up home-fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/contact" />}>
              Talk to us
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/product" />}>
              Explore product
            </Button>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b bg-card">
        <SiteContainer className="py-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-10">
            {integrations.map((brand) => (
              <li key={brand.name} className="flex h-7 items-center sm:h-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-full w-auto max-w-[6.5rem] object-contain opacity-50 grayscale transition-opacity hover:opacity-90 dark:invert"
                />
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <section className="site-section bg-background">
        <SiteContainer>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What we do</h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              End-to-end product delivery — from discovery through engineering,
              launch, and support.
            </p>
          </div>

          <div className="border-t">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-2 border-b py-7 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-1">
                  <span className="text-muted-foreground text-sm font-medium tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted-foreground max-w-xl leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="link" className="mt-6 px-0" render={<Link href="/services" />}>
            View services
            <ArrowRight />
          </Button>
        </SiteContainer>
      </section>

      <section className="site-section border-y bg-card">
        <SiteContainer>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our products</h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Platforms we build and operate ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {products.map((product) => (
              <a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer">
                <Card className="h-full transition-colors hover:bg-muted/40">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-muted-foreground text-sm">{product.detail}</p>
                        <CardTitle className="mt-1 text-xl">{product.name}</CardTitle>
                      </div>
                      <ArrowUpRight className="text-muted-foreground size-5" />
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
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
